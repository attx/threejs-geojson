<script setup lang="ts">
import { AmbientLight, DirectionalLight, Mesh, MeshBasicMaterial, MeshLambertMaterial, PCFSoftShadowMap, PerspectiveCamera, PlaneGeometry, Scene, WebGLRenderer } from 'three';
import { onMounted, Ref, ref } from 'vue';
import { OrbitControls } from '../utils/OrbitControls';
import { GeoJsonPreview } from "../../src";
import { Feature, FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/helpers';

const props = defineProps<{
  data: FeatureCollection<Geometry | Properties>,
}>()

const element: Ref<HTMLElement | null> = ref(null);
const scene = new Scene();

scene.add(
  new Mesh(
    new PlaneGeometry(20, 20, 20, 20),
    new MeshBasicMaterial({ wireframe: true, opacity: 0.3, transparent: true })
  )
)

let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let controls: OrbitControls;

onMounted(() => {
  let features: Feature<Geometry | GeometryCollection, Properties>[] = [];
  features = JSON.parse(JSON.stringify(props.data.features));
  if (!element.value) return;

  camera = new PerspectiveCamera(75, element.value.clientWidth / element.value.clientHeight, 0.1, 3000);
  camera.position.z = 15;
  camera.position.y = -15;
  scene.add(camera);

  renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(element.value.clientWidth, element.value.clientHeight);
  renderer.setClearColor("#ececec", 0);
  renderer.setAnimationLoop(render);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  renderer.setPixelRatio(2);
  element.value.appendChild(renderer.domElement);
  renderer.domElement.removeAttribute("data-engine")
  
  controls = new OrbitControls(camera, element.value);
  controls.enableZoom = true;

  const ambientLight = new AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(0xffffff, 0.3);
  directionalLight.position.x = 50;
  directionalLight.position.y = 30;
  directionalLight.position.z = 50;
  // directionalLight.position.normalize();

  directionalLight.castShadow = true;
  
  directionalLight.shadow.mapSize.width = 512;
  directionalLight.shadow.mapSize.height = 512;
  
  directionalLight.shadow.camera.near = 0.1;
  directionalLight.shadow.camera.far = 1000;

  directionalLight.shadow.camera.top = 200;
  directionalLight.shadow.camera.right = 200;
  directionalLight.shadow.camera.bottom = -200;
  directionalLight.shadow.camera.left = -200;
  scene.add(directionalLight);

  window.addEventListener('resize', () => {
    if (element.value) onWindowResize(camera, renderer, element.value);
  }, false);

  const roadMaterial = new MeshLambertMaterial({ color: 'lightgreen', emissive: '#000' });
  const buildingMaterial = new MeshLambertMaterial({ color: 'lightblue', emissive: '#000' });

  const preview = new GeoJsonPreview();
  const { lineStringGeometries, polygonGeometries } = preview.build(features, {
    polygonHeight: 1,
    lineStringWidth: 0.25,
    lineStringHeight: 0.1,
    lineStringSteps: 96,
  });

  const roads = lineStringGeometries.map((feature) => new Mesh(feature, roadMaterial));
  const buildings = polygonGeometries.map((feature) => new Mesh(feature, buildingMaterial));

  scene.add(...roads, ...buildings);
})

function onWindowResize(camera: PerspectiveCamera, renderer: WebGLRenderer, element: HTMLElement) {
  renderer.setSize(element.clientWidth, element.clientHeight);

  camera.aspect = element.clientWidth / element.clientHeight;
  camera.updateProjectionMatrix();
}

function render() {
  renderer.render(scene, camera);
  camera.updateMatrixWorld();
}
</script>

<template>
  <div ref="element" id="element" />
</template>

<style scoped>
div#element {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
