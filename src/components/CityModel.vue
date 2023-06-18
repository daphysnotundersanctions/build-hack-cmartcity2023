<template>
  <div style="margin-top: 50px">
    <div class="cityModel">
      <canvas ref="bjsCanvas" width="500" height="500" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/Scene.js";

const bjsCanvas = ref(null);

onMounted(async () => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>
<style lang="scss">
.cityModel {
  max-width: fit-content;
  margin: 0 auto;
}
</style>
