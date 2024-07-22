<template>

</template>

<script setup>
import {getCurrentInstance, onMounted} from 'vue'
const {proxy} = getCurrentInstance()

onMounted(() => {
    const map = proxy.$map
    let url = 'https://geo.datav.aliyun.com/areas_v3/bound/420106.json'
    const source = new ol.source.Vector({
        url,
        format: new ol.format.GeoJSON()
    })

    const layer = new ol.layer.Vector({
        source,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(99, 119, 144,0.6)',
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 3
            })
        })
    })
    map.addLayer(layer)
})
</script>

<style lang="scss" scoped>

</style>