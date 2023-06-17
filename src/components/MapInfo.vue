<template>
  <div>
    <div ref="map"></div>
    <div ref="coord_form"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ymaps from "ymaps";
const ymap = ref("map");
async function uploadMap() {
  await ymaps
    .load()
    .then((maps) => {
      ymap.value = new maps.Map("your-map-container", {
        center: [-8.369326, 115.166023],
        zoom: 7,
      });
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));
}
onMounted(() => {}), uploadMap();
</script>
