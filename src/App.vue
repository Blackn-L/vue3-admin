<template>
  <div class="layout">
    <el-container class="container">
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
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sider from "@/components/Sider.vue";
import Footer from "@/components/Footer.vue";
name: "App";
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