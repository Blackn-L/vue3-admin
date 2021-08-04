<template>
  <el-card class="index-container"></el-card>
</template>

<script>
import { onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "IndexConfig",
  setup() {
    const router = useRouter();
    // 监听路由变化
    const unWatch = router.beforeEach((to) => {
      console.log(to.name);
    });
    // 销毁时候卸载路由守卫，防止多个路由守卫运行
    onUnmounted(() => {
      unWatch();
    });
  },
};
</script>

<style>
</style>