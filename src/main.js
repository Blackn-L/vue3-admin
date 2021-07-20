import { createApp } from "vue";
import {
  ElButton,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
} from "element-plus";
import router from "@/router";
import App from "./App.vue";

import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
const plugins = [
  ElButton,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
];
plugins.forEach((e) => app.use(e));
app.use(router).mount("#app");
