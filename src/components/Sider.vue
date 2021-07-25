<template>
  <!-- 侧边栏 -->
  <el-aside class="aside">
    <div class="head">
      <span>Vue3 Admin</span>
    </div>
    <div class="line"></div>
    <el-menu background-color="#222832" text-color="#fff" router>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/"
            ><i class="el-icon-data-line" />首页</el-menu-item
          >
          <el-menu-item index="/add"
            ><i class="el-icon-data-line" />添加商品</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Sider",
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