<template>
  <div id="app">
    <OpenMap></OpenMap>
    <OpenControls></OpenControls>
    <OpenReset></OpenReset>
    <OpenToggle></OpenToggle>
    <OpenPolygon></OpenPolygon>
    <OpenPoint></OpenPoint>
    
  </div>
</template>

<script setup>
  import OpenMap from './components/OpenMap.vue'
  import OpenControls from './components/OpenControls.vue'
  import OpenReset from './components/OpenReset.vue'
  import OpenToggle from './components/OpenToggle.vue'
  import OpenPoint from './components/OpenPoint.vue'
  import OpenPolygon from './components/OpenPolygon.vue'
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>