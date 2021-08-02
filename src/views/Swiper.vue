<template>
  <el-card class="swiper-container">
    <el-table
      :loading="loading"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55" /> 
      <el-table-column label="轮播图" width="200">
        <template #default="scope">
          <img
            style="width: 150px; height: 150px"
            :src="scope?.row?.carouselUrl"
            alt="轮播图"
          />
        </template>
      </el-table-column>
      <el-table-column label="跳转链接">
        <template #default="scope">
          <a target="_blank" :href="scope?.row?.redirectUrl">{{
            scope?.row?.redirectUrl
          }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="carouselRank" label="排序值" width="120">
      </el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import axios from "@/utils/axios";
export default {
  name: "Swiper",
  setup() {
    const state = reactive({
      loading: false,
      tableData: [],
      currentPage: 1,
      pageSize: 10,
    });

    onMounted(() => {
      getCarousels();
    });

    // 获取轮播图列表
    const getCarousels = () => {
      state.loading = true;
      const params = {
        pageNumber: state.currentPage,
        pageSize: state.pageSize,
      };
      axios
        .get("/carousels", { params })
        .then((res) => {
          console.log(res);
          state.tableData = res.list;
          state.loading = false;
        })
        .catch((e) => console.log(e));
    };
    return { ...toRefs(state) };
  },
};
</script>

<style>
</style>