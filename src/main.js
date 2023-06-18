import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import YmapPlugin from "vue-yandex-maps";
import router from "./router/index";
import unoverlay from "unoverlay-vue";

const settings = {
  apiKey: "8204acea-1467-4fff-8a46-548a6f8758a6",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
};

createApp(App)
  .use(router)
  .use(unoverlay)
  .use(YmapPlugin, settings)
  .mount("#app");
