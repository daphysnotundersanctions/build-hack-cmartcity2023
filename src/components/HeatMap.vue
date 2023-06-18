<template>
  <div>
    <div id="map" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import ymaps from "ymaps";

export default {
  mounted() {
    const apiKey = "8204acea-1467-4fff-8a46-548a6f8758a6";
    const heatMapScript = document.createElement("script");
    heatMapScript.src =
      "https://yastatic.net/s3/mapsapi-jslibs/heatmap/0.0.1/heatmap.min.js";

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.onload = () => {
      ymaps.load(["Heatmap"], (ymaps) => {
        const map = new ymaps.Map("map", {
          center: [55.751574, 37.573856],
          zoom: 10,
        });

        const heatmapData = [
          // Данные для тепловой карты
        ];

        const heatmap = new ymaps.Heatmap(heatmapData, {
          radius: 15,
          opacity: 0.8,
        });

        map.geoObjects.add(heatmap);
      });
    };

    document.head.appendChild(script);
  },
};
</script>
