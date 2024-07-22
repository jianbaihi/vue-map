<template>
<button id="reset" @click="reset">重置地图</button>
</template>

<script setup>
import {onMounted,getCurrentInstance} from 'vue'
const {proxy} = getCurrentInstance()

const reset =()=>{
    const map = proxy.$map
    console.log(map)
    map.getView().animate({
    center: [114.33, 30.56],
    zoom: 12,
    duration: 1500
  });
}
</script>

<style scoped>
#reset{
    width: 100px;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 60px;
    z-index: 100;
    background-color: #c155f8;
    border: none;
    border-radius: 10px;
    color: #fff;
}
#reset:hover{
    background-color: #a740e6;
}
</style>