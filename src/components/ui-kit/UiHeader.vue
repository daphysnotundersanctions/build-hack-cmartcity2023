<template>
  <header class="ui-header">
    <h1 class="ui-header__title">City Bi</h1>

    <div class="ui-header__list">
      <h3 @click="$router.push('/3dpage')">3Д модель города</h3>
      <h4>/</h4>
      <h3 @click="$router.push('/')">Аналитика</h3>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.ui-header {
  background-color: $color-green;
  padding: 10px 10px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  &__list {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}
h3 {
  cursor: pointer;
  color: white;
}
</style>
