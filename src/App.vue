<template>
  <div>
    <CityModel />
    <VideoToModel />
    <MapInfo />
  </div>
</template>

<script setup>
import CityModel from "./components/CityModel.vue";
import VideoToModel from "./components/VideoToModel.vue";
import MapInfo from "./components/MapInfo.vue";
import { getAllInfo } from "../src/API/index";
import { onMounted } from "vue";

async function getInfoByQL() {
  await getAllInfo().then((r) => console.log(r));
}
getInfoByQL();
</script>

<style lang=""></style>
