<template>
  <div class="layout">
    <el-container class="container" v-if="state.showMenu">
      <!-- 侧边栏 -->
      <Sider :current-path="state.currentPath" />
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
import { localGet, pathMap } from "@/utils";

// 不需要菜单等的路径数组
const noMenu = ["/login"];
const router = useRouter();
const state = reactive({
  showMenu: true, // 是否需要显示菜单
  currentPath: "/", // 当前侧边栏高亮
});
// 监听路由的变化
router.beforeEach((to, from, next) => {
  state.showMenu = !noMenu.includes(to.path);
  if (to.path === "/login") {
    // 如果是去登录页面，正常跳转
    next();
  } else {
    console.log("token", localGet("token"));
    // 其他页面判断是否有 token
    if (!localGet("token")) {
      next({ path: "/login" });
      // 不显示菜单，如果不在这设置，在跳转到 login 时，菜单会显示
      state.showMenu = false
    } else {
      next();
    }
  }
  // 设置当前高亮侧边栏
  state.currentPath = to.path;
  document.title = pathMap[to.name];
  console.log("state", state);
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