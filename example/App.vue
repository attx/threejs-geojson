<script setup lang="ts">
import { NConfigProvider, darkTheme, type GlobalThemeOverrides } from 'naive-ui'
import ScenePlayground from "./components/ScenePlayground.vue"

const themeOverrides: GlobalThemeOverrides = {
  Card: {
    borderRadius: 'none',
    paddingMedium: '12px',
  }
}
</script>

<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides">
    <ScenePlayground />
  </NConfigProvider>
</template>
