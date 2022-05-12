import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

const routes = [
  { path: "/", component: () => import("./views/Search.vue") },
  { path: "/profile/:slug", component: () => import("./views/Profile.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
