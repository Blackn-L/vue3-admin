<template>
  <div class="header">
    <div class="left">{{ name }}</div>
    <div class="right">Right</div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { pathMap } from "@/utils/index";
export default {
  name: "Header",
  setup() {
    // 获取路由实例
    const router = useRouter();

    const state = reactive({
      name: "首页",
    });

    // 监听路由变化方法 afterEach
    router.afterEach((to) => {
      const { id } = to.query;
      // 设置 title 的名字，根据
      state.name = pathMap[to.name];
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e9e9e9;
}
</style>