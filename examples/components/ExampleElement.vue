<script setup lang="ts">
import { Camera, Mesh, MeshBasicMaterial, MeshNormalMaterial, PCFSoftShadowMap, PerspectiveCamera, PlaneGeometry, Scene, WebGLRenderer } from 'three';
import { onMounted, Ref, ref } from 'vue';
import { OrbitControls } from '../utils/OrbitControls';
import { GeoJsonPreview } from "../../src";
import { parse, clip } from '../utils/parse';
import { Feature, FeatureCollection, Geometry, GeometryCollection, Properties } from '@turf/helpers';

const props = defineProps<{
  title: string,
  data: FeatureCollection<Geometry | Properties>,
  parseSize: number,
  clip?: [number, number],
  center?: [number, number],
}>()

const element: Ref<HTMLElement | null> = ref(null);

const preview = new GeoJsonPreview();
const scene = new Scene();

scene.add(
  new Mesh(
    new PlaneGeometry(25, 25, 25, 25),
    new MeshNormalMaterial({ wireframe: true })
  )
)

let camera: Camera;
let renderer: WebGLRenderer;
let controls: OrbitControls;

onMounted(() => {
  let features: Feature<Geometry | GeometryCollection, Properties>[] = [];
  if (!element.value) return;

  features = parse(JSON.parse(JSON.stringify(props.data.features)), {
    size: props.parseSize || 1,
    lon: props.center ? props.center[0] : 0,
    lat: props.center ? props.center[1] : 0,
  });

  if (props.clip) {
    features = clip(features, props.clip[0], props.clip[1]);
  }

  camera = new PerspectiveCamera(75, element.value.clientWidth / element.value.clientHeight, 0.1, 3000);
  camera.position.z = 20;
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

  const roadMaterial = new MeshBasicMaterial({ color: '#ddd' });
  const buildingMaterial = new MeshBasicMaterial({ color: '#888' });

  preview.setFeatures(features);
  preview.setLineStringMaterial(roadMaterial);
  preview.setPolygonMaterial(buildingMaterial);
  preview.buildEntities();

  scene.add(
    preview.getPolygonGroup(),
    preview.getLineStringGroup(),
  );
})

function render() {
  // controls.update();
  renderer.render(scene, camera);
  camera.updateMatrixWorld();
}
</script>

<template>
  <div class="wrapper">
    <p>{{ title }}</p>
    <div ref="element" id="element" />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 12px;
}

p { 
  font-size: 14px;
  margin: 12px 0;
}

div#element {
  width: 300px;
  height: 300px;
  border: 1px solid #242424;
  border-radius: 10px;
}
</style>
