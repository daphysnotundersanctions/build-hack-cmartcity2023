import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DPage from "../pages/DPage.vue";
import Heat from "../pages/Heat.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/3dpage",
    component: DPage,
  },
  {
    path: "/heat",
    component: Heat,
  },
  //   {
  //     path: "/:locale",
  //     children: [
  //       {
  //         path: "",
  //         component: Home,
  //       },
  //     ],
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
