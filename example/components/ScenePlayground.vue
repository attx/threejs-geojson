<script setup lang="ts">
import { Feature } from '@turf/turf'
import { NCard, NSlider, NSpace } from 'naive-ui'
import { MeshLambertMaterial, Mesh, PlaneGeometry, MeshBasicMaterial, Group } from 'three'
import { onMounted, Ref, ref, watch } from 'vue'
import { GeoJsonPreview } from '../../src'
import { BasicScene } from '../utils/BasicScene'
import GeoJsonExample from "../assets/geojson.json"

const scene = new BasicScene()
const preview = new GeoJsonPreview()
const previewGroup = new Group()
const previewElement: Ref<HTMLElement | null> = ref(null)

const roadMaterial = new MeshLambertMaterial({ color: 'white', emissive: '#000' })
const buildingMaterial = new MeshLambertMaterial({ color: 'lightgreen', emissive: '#000' })

const options = ref({
  polygonHeight: 1,
  lineStringWidth: 0.25,
  lineStringHeight: 0.1,
  lineStringSteps: 16,
})

watch(options.value, buildMap)

onMounted(() => {
  if (!previewElement.value) return

  scene.setup(previewElement.value)
  scene.add(previewGroup)
  buildMap()
})

function buildMap() {
  const { lineStringGeometries, polygonGeometries } = preview.build(GeoJsonExample.features as Feature[], options.value)

  const roads = lineStringGeometries.map((feature) => new Mesh(feature, roadMaterial))
  const buildings = polygonGeometries.map((feature) => new Mesh(feature, buildingMaterial))
  const gridPlane = new Mesh(
    new PlaneGeometry(20, 20, 20, 20),
    new MeshBasicMaterial({ wireframe: true, opacity: 0.3, transparent: true })
  )

  previewGroup.clear();
  previewGroup.add(...roads, ...buildings, gridPlane)
}
</script>

<template>
  <div class="playground">
    <div class="preview" ref="previewElement" />

    <NSpace vertical class="controls">
      <NCard title="Playground">
        <NSpace vertical>
          <div>
            <p>Building Height</p> 
            <NSlider
              v-model:value="options.polygonHeight"
              :step="0.01"
              :min="0.01"
              :max="1"
              :tooltip="false"
            />
          </div>

          <div>
            <p>Road Height</p>
            <NSlider
              v-model:value="options.lineStringHeight"
              :step="0.01"
              :min="0.01"
              :max="1"
              :tooltip="false"
            />
          </div>

          <div>
            <p>Road Width</p>
            <NSlider
              v-model:value="options.lineStringWidth"
              :step="0.01"
              :min="0.01"
              :max="1"
              :tooltip="false"
            />
          </div>

          <div>
            <p>Road Steps</p>
            <NSlider
              v-model:value="options.lineStringSteps"
              :step="1"
              :min="1"
              :max="128"
              :tooltip="false"
            />
          </div>
        </NSpace>
      </NCard>
    </NSpace>
  </div>
</template>

<style lang="scss" scoped>
.playground {
  position: relative;
  background: #0c0c0f;
  
  .controls {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 280px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  .preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0c0c0f;
  }
}
</style>