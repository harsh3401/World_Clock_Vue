import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Selector from "../views/Selector.vue";
import NotFound from "../views/NotFound.vue";
import Time from "../views/Time.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/select",
    name: "SelectCity",
    component: Selector,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/time",
    name: "Time",
    component: Time,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
