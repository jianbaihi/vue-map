<template>
  <div id="toggle">
    <img
      @click="toggleGaode"
      src="http://gis.x-zd.net/open-map/assets/vector.5cb7d6a8.png"
    />
    <img
      @click="toggleImage"
      src="http://gis.x-zd.net/open-map/assets/image.73771b41.png"
    />
  </div>
</template>

<script setup>
import { gaode_image, gaode_vector } from './ol_plugins/layers.js'

// 切换图层按钮
const toggleGaode = () => {
  gaode_vector.set('zIndex', 1)
  gaode_image.set('zIndex', -1)
}
const toggleImage = () => {
  gaode_vector.set('zIndex', -1)
  gaode_image.set('zIndex', 1)
}
</script>

<style scoped>
#toggle {
  position: fixed;
  bottom: 20px;
  z-index: 1000;
  right: 20px;
}
#toggle img {
  width: 150px;
  height: 150px;
  border: 1px solid #333;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
}
#toggle img:hover {
  cursor: pointer;
  border-color: #ff2d51;
  border-width: 2px;
}
</style>
