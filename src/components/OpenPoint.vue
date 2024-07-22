<template>
<!-- <canvas></canvas> -->
</template>

<script setup>
import setAnimateStyle from './ol_plugins/setAnimateStyle'
import {getCurrentInstance,onMounted} from 'vue'
const {proxy} = getCurrentInstance()

onMounted(()=>{
    const map = proxy.$map
    let style = setAnimateStyle({map})
    // console.log(style)
    const point = new ol.Feature({
        geometry:new ol.geom.Point([114.33,30.56]),
       
    })
    point.setStyle(style)
    const source = new ol.source.Vector({
        features:[point]
    })
    const layer = new ol.layer.Vector({
        source,
       
    })
    map.addLayer(layer)
})
</script>

<style scoped>

</style>