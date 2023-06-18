<template>
  <MapInfo />
</template>

<script setup>
import MapInfo from "../components/MapInfo.vue";
import { getAllInfo } from "../API/index";

async function getInfoByQL() {
  await getAllInfo().then((r) => console.log(r));
}
getInfoByQL();
</script>

<style lang=""></style>
