<script setup lang="ts">
import { Properties } from 'csstype';
import { FeatureCollection, Geometry } from 'geojson';
import GeoJsonExample from "./assets/geojson.json";
import ExampleElement from './components/ExampleElement.vue'

const features = GeoJsonExample as FeatureCollection<Geometry, Properties>;
</script>

<template>
  <div class="row">
    <div class="col">
      <ExampleElement
        title="size 20, parse"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :parse-size="20"
      />
      <ExampleElement
        title="size 10, parse"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :parse-size="10"
      />
      <ExampleElement
        title="size 40, parse"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :parse-size="40"
      />
    </div>

    <div class="col">
      <ExampleElement
        title="size 20, clip [20, 20]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[20, 20]"
        :parse-size="20"
      />
      <ExampleElement
        title="size 40, clip [20, 20]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[20, 20]"
        :parse-size="40"
      />
      <ExampleElement
        title="size 15, clip [20, 20]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[20, 20]"
        :parse-size="15"
      />
    </div>

    <div class="col">
      <ExampleElement
        title="size 20, clip [100, 15]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[100, 15]"
        :parse-size="20"
      />
      <ExampleElement
        title="size 40, clip [100, 15]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[100, 15]"
        :parse-size="40"
      />
      <ExampleElement
        title="size 40, clip [100, 15]"
        :data="features"
        :center="[9.965747794929271, 53.574560899999994]"
        :clip="[100, 10]"
        :parse-size="15"
      />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.col {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
