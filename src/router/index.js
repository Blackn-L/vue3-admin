import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/views/Index.vue";
import AddGood from "@/views/AddGood.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: "/",
      component: Index,
    },
    {
      path: "/add",
      name: "add",
      component: AddGood,
    },
  ],
});

export default router;
