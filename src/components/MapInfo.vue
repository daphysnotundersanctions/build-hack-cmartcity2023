<template>
  <YandexMap @click="onClick" :coordinates="coordinates">
    <YandexClusterer :options="{ preset: 'islands#invertedRedClusterIcons' }">
      <template v-for="(cord, id) in coordsListToCountMedium" :key="id">
        <YandexMarker :coordinates="cord" :marker-id="123">
          <template #component>
            <CustomBalloon v-model="name" />
          </template>
        </YandexMarker>
      </template>
    </YandexClusterer>
  </YandexMap>
  <button @click="deleteClusterInfo">deleCluster</button>
</template>

<script setup>
import { ref, reactive } from "vue";
import { getPopulationInfo } from "../API/geo";
import {
  yandexMap,
  yandexMarker,
  yandexClusterer,
  customBalloon,
} from "vue-yandex-maps";

const coordinates = ref([55.45, 37.36]);

const coordsListToCountMedium = ref([]);
const mediumFirstFigureCoord = ref(0);
const mediumSecondFigureCoord = ref(0);
const mediumThirdFigureCoord = ref(0);

const dataToSend = reactive({
  xlon: "",
  ylat: "",
  size: "",
  asfeature: "",
  aswgs: "",
});

// 1
function returnMediumFirstValue() {
  let first;
  let second;
  first =
    (coordsListToCountMedium.value[0][0] +
      coordsListToCountMedium.value[1][0]) /
    2;
  second =
    (coordsListToCountMedium.value[0][1] +
      coordsListToCountMedium.value[1][1]) /
    2;
  mediumFirstFigureCoord.value = [first, second];
  console.log(first, second);
}

// 2
function returnMediumSecondValue() {
  let first;
  let second;
  first =
    (coordsListToCountMedium.value[1][0] +
      coordsListToCountMedium.value[2][0]) /
    2;
  second =
    (coordsListToCountMedium.value[1][1] +
      coordsListToCountMedium.value[2][1]) /
    2;
  mediumSecondFigureCoord.value = [first, second];
  console.log(first, second);
}

// 3
function returnMediumThirdValue() {
  let first;
  let second;
  first =
    (coordsListToCountMedium.value[1][0] +
      coordsListToCountMedium.value[2][0]) /
    2;
  second =
    (coordsListToCountMedium.value[1][1] +
      coordsListToCountMedium.value[2][1]) /
    2;
  mediumThirdFigureCoord.value = [first, second];
  console.log(first, second);
}

const name = ref("312");

const deleteClusterInfo = () => {
  if (coordsListToCountMedium.value.length > 1) {
    returnMediumFirstValue();
  }
  if (coordsListToCountMedium.value.length > 2) {
    returnMediumSecondValue();
  }
  if (coordsListToCountMedium.value.length > 3) {
    returnMediumThirdValue();
  }
  // coordsListToCountMedium.value = [];
};

function getInfoByCords() {
  getPopulationInfo(dataToSend).then((response) => {});
}

const onClick = (e) =>
  coordsListToCountMedium.value.length < 4 &&
  coordsListToCountMedium.value.push(e.get("coords"));
</script>

<style>
.yandex-container {
  height: 400px;
}
</style>
