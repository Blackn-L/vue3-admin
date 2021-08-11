<template>
  <el-card class="index-container">
    <el-table
      :load="loading"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column prop="configName" label="商品名称"> </el-table-column>
      <el-table-column label="跳转链接">
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{
            scope.row.redirectUrl
          }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="configRank" label="排序值" width="120">
      </el-table-column>
      <el-table-column prop="goodsId" label="商品编号" width="200">
      </el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <a
            style="cursor: pointer; margin-right: 10px"
            @click="handleEdit(scope.row.configId)"
            >修改</a
          >
          <el-popconfirm
            title="确定删除吗？"
            confirmButtonText="确定"
            cancelButtonText="取消"
            @confirm="handleDeleteOne(scope.row.configId)"
          >
            <template #reference>
              <a style="cursor: pointer">删除</a>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
  /></el-card>
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