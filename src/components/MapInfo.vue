<template>
  <div>
    <div ref="map" />
    <div ref="coord_form"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ymaps from "ymaps";
const ymap = ref("map");
async function uploadMap() {
  const map = ymaps
    .load()
    .then((maps) => {
      new maps.Map(ymap, {
        center: [-8.369326, 115.166023],
        zoom: 7,
      });
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));
}
uploadMap();
</script>
