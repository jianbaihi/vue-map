<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { app } from '../main.js'
import { gaode_image, gaode_vector } from './ol_plugins/layers.js'
onMounted(() => {
  //3、设置瓦片图层 在ol_plugins->layers.js中定义
  /* 4、实例化地图 */
  const map = new ol.Map({
    /* el */
    target: 'map',
    /* data */
    layers: [gaode_image,gaode_vector],
    view: new ol.View({
      /* 设置中心点 */
      center: [114.33, 30.56],
      /* 设置放大级别 */
      zoom: 12,
      /* 设置坐标的参考系 */
      projection: 'EPSG:4326',
    }),
  })
  app.config.globalProperties.$map = map
})
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
