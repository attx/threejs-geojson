<script setup lang="ts">
import { Properties } from 'csstype';
import { FeatureCollection, Geometry } from 'geojson';
import GeoJsonExample from "./assets/geojson.json";
import ExampleElement from './components/ExampleElement.vue'

const features = GeoJsonExample as FeatureCollection<Geometry, Properties>;

const example = `
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
`.trim()
</script>

<template>
  <div class="row">
    <div class="col-xs-12 text-center mb-32">
      <h1>threejs-geojson</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <ExampleElement :data="features" />
    </div>
    <div class="col-xs-12 col-md-6">
      <pre>{{ example }}</pre>
    </div>
  </div>
</template>
