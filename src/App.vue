<template>
  <div class="layout">
    <el-container class="container" v-if="state.showMenu">
      <!-- 侧边栏 -->
      <Sider />
      <!-- 内容区 -->
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>

    <!-- 登录等界面不需要显示侧边栏、头尾等 -->
    <el-container class="container" v-else>
      <router-view />
    </el-container>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sider from "@/components/Sider.vue";
import Footer from "@/components/Footer.vue";

import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

// 不需要菜单等的路径数组
const noMenu = ["/login"];
const router = useRouter();
const state = reactive({
  showMenu: true, // 是否需要显示菜单
});
console.log(router);
// 监听路由的变化
router.beforeEach((to) => {
  state.showMenu = !noMenu.includes(to.path);
});
// vue
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style scoped>
body {
  margin: 0;
  border: 0;
}
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}

.container {
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}

.main {
  height: cacl(100vh - 100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
body {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>