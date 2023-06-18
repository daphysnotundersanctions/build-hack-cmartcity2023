<template>
  <UiHeader />
  <main>
    <slot />
  </main>
</template>
<script setup>
import UiHeader from "../components/ui-kit/UiHeader.vue";
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
</style>
