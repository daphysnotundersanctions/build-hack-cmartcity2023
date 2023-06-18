<template>
  <YandexMap @click="onClick" :coordinates="coordinates">
    <YandexClusterer :options="{ preset: 'islands#invertedRedClusterIcons' }">
      <template v-for="(cord, id) in coordsListToCountMedium" :key="id">
        <YandexMarker :coordinates="cord" :marker-id="123">
          <template #component>
            <UiBallon :modelValue="cord[0]" v-model="name" />
          </template>
        </YandexMarker>
      </template>
    </YandexClusterer>
  </YandexMap>
  <div class="map_buttons">
    <UiButton :bgColor="'black'" @click="getInfoByCords"
      >Расчитать количество население в радиусе</UiButton
    >
    <UiButton :bgColor="'greenBorder'" @click="deleteClusterInfo"
      >Удалить все элементы с карты</UiButton
    >
  </div>

  <overlay
    :opened="opened"
    animate="zoom-in"
    :visible="visible"
    @closed="opened = visible = false"
  >
    <span
      >Количество людей в живущих на этой площаде :
      {{ localPeoplePopulation }}</span
    >
  </overlay>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useOverlayMeta } from "unoverlay-vue";
import { getPopulationInfo } from "../API/geo";
import Overlay from "vuejs-overlay";
import { yandexMap, yandexMarker, yandexClusterer } from "vue-yandex-maps";
import UiBallon from "./ui-kit/UiBallon.vue";
import UiButton from "./ui-kit/UiButton.vue";

const coordinates = ref([55.75, 37.61]);

const coordsListToCountMedium = ref([]);
const mediumFirstFigureCoord = ref(0);
const mediumSecondFigureCoord = ref(0);
const mediumThirdFigureCoord = ref(0);

const opened = ref(false);
const visible = ref(false);

const dataToSend = reactive({
  xlon: "",
  ylat: "",
  size: "1000",
  asfeature: "true",
  aswgs: "true",
});

const localPeoplePopulation = ref(null);

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

const deleteClusterInfo = () => {
  coordsListToCountMedium.value = [];
};

function giveAllMedium(arr, n) {
  if (n == 1) return arr[n - 1];
  return ((n - 1) * giveAllMedium(arr, n - 1) + arr[n - 1]) / n;
}

// if (coordsListToCountMedium.value.length > 1) {
//     returnMediumFirstValue();
//   }
//   if (coordsListToCountMedium.value.length > 2) {
//     returnMediumSecondValue();
//   }
//   if (coordsListToCountMedium.value.length > 3) {
//     returnMediumThirdValue();
//   }
//   if (coordsListToCountMedium.value.length === 4) {
//     returnMediumThirdValue();
//   }

function getInfoByCords() {
  // console.log(
  //   giveAllMedium(
  //     coordsListToCountMedium.value,
  //     coordsListToCountMedium.value.length
  //   )
  // );
  dataToSend.xlon = coordsListToCountMedium.value[0][0];
  dataToSend.ylat = coordsListToCountMedium.value[0][1];

  if (coordsListToCountMedium.value.length > 2) {
    getPopulationInfo(dataToSend).then((response) => {
      opened.value = visible.value = true;
      localPeoplePopulation.value = response.data.results.properties.pop;
      alert(
        "Количество людей в живущих на этой площаде : " +
          response.data.results.properties.pop
      );
    });
  } else {
    alert("Вы не выделили область для расчёта населения");
  }
}

const onClick = (e) =>
  coordsListToCountMedium.value.length < 4 &&
  coordsListToCountMedium.value.push(e.get("coords"));
</script>

<style lang="scss">
.yandex-container {
  height: 400px;
}
.map_buttons {
  display: flex;
}
</style>
