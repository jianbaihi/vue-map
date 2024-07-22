<template>
  <div>
    <div id="mouse-position"></div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'
import { gaode_image, gaode_vector } from './ol_plugins/layers.js'
const { proxy } = getCurrentInstance()

onMounted(() => {
  const map = proxy.$map
  /* 1.导航控件 */
  const navControl = new ol.control.ZoomToExtent({
    extent: [100, 30, 140, 30],
  })
  map.addControl(navControl)

  /* 2.zoomslider控件 */
  /* 实例化zoomslider */
  const zoomslider = new ol.control.ZoomSlider()
  map.addControl(zoomslider)

  /* 3.鼠标位置控件 */
  const mousePositionControl = new ol.control.MousePosition({
    /* 坐标格式 */
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    /* 坐标信息显示样式类名,默认是'ol-mouse-position' */
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp',
  })
  map.addControl(mousePositionControl)

  /* 4.鹰眼控件 */
  const overviewMapControl = new ol.control.OverviewMap({
    /* 鹰眼控件样式  */
    className: 'ol-overviewmap ol-custom-overviewmap',
    layers: [gaode_image, gaode_vector],
    /* 鹰眼控件展开时功能按钮上的标识(网页的JS的字符编码) */
    collapseLabel: '\u00BB',
    /* 鹰眼控件折叠时功能按钮上的标识(网页的JS的字符编码) */
    label: '\u00AB',
    /* 初始为展开显示方式 */
    collapsed: false,
    view: new ol.View({
      projection: 'EPSG:4326',
      minZoom: 8,
      maxZoom: 18,
    }),
  })
  map.addControl(overviewMapControl)

  /* 5.全屏控件 */
  const fullScreen = new ol.control.FullScreen();
  map.addControl(fullScreen);
})
</script>

<style>
#mouse-position {
  position: fixed;
  bottom: 20px;
  z-index: 100;
  left: 50%;
  transform: translate(-50%);
  width: 200px;
  height: 40px;
  background-color: rgba(101, 46, 128, 0.5);
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
}

.ol-zoomslider {
  top: 7.5em !important;
  background-color: #653e8080;
}

.ol-zoomslider:hover {
  background-color: #653e8070;
}
</style>
