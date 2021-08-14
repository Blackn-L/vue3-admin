<template>
  <!-- 侧边栏 -->
  <el-aside class="aside">
    <div class="head">
      <span>Vue3 Admin</span>
    </div>
    <div class="line"></div>
    <el-menu
      background-color="#222832"
      text-color="#fff"
      :router="true"
      :default-openeds="defaultOpen"
      :default-active="currentPath"
    >
      <el-submenu index="1">
        <template #title>
          <span>Dashboard</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">
            <i class="el-icon-odometer" />首页
          </el-menu-item>
          <el-menu-item index="/add">
            <i class="el-icon-plus" />添加商品
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <span>首页配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/swiper">
            <i class="el-icon-picture" />轮播图配置
          </el-menu-item>
          <el-menu-item index="/hot">
            <i class="el-icon-star-on" />热销商品配置
          </el-menu-item>
          <el-menu-item index="/new">
            <i class="el-icon-sell" />新品上线配置
          </el-menu-item>
          <el-menu-item index="/recommend">
            <i class="el-icon-thumb" />为你推荐配置
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <span>模块管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/category"
            ><i class="el-icon-menu" />分类管理</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { toRefs, reactive, toRef } from "vue";
export default {
  name: "Sider",
  props: {
    currentPath: String,
  },
  setup(props) {
    const { currentPath } = toRefs(props);
    const state = reactive({
      defaultOpen: ["1", "2", "3"],
    });
    return {
      ...toRefs(state),
      currentPath,
    };
  },
};
</script>

<style scoped>
.aside {
  min-height: 100vh;
  width: 200px !important;
  background-color: #222832;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head span {
  color: #ffffff;
  font-size: 20px;
}

.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
<style >
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>