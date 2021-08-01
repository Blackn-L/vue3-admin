<template>
  <div class="header">
    <div class="left">{{ name }}</div>
    <div class="right">
      <el-popover
        placement="bottom"
        :width="320"
        trigger="click"
        popper-class="popper-user-box"
      >
        <template #reference>
          <div class="author">
            <i class="icon el-icon-s-custom" />
            {{ (userInfo && userInfo.nickName) || "" }}
            <i class="el-icon-caret-bottom" />
          </div>
        </template>
        <div class="nickname">
          <p>登录名：{{ (userInfo && userInfo.loginUserName) || "" }}</p>
          <p>昵称：{{ (userInfo && userInfo.nickName) || "" }}</p>
          <el-tag size="small" effect="dark" class="logout" @click="logout"
            >退出</el-tag
          >
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { pathMap, localRemove } from "@/utils/index";
import axios from "@/utils/axios";
export default {
  name: "Header",
  setup() {
    // 获取路由实例
    const router = useRouter();

    const state = reactive({
      name: "Dashboard",
      userInfo: null,
    });

    // 监听路由变化方法 afterEach
    router.afterEach((to) => {
      const { id } = to.query;
      // 设置 title 的名字，根据当前路径判断
      state.name = pathMap[to.name];
    });

    onMounted(() => {
      // 获取当前路径
      const pathName = window.location.href.split("/")[1] || "";
      // 如果是登录界面，则不获取个人信息
      if (!pathName.includes("login")) {
        getUserInfo();
      }
    });

    // 获取用户信息
    const getUserInfo = async () => {
      const userInfo = await axios.get("/adminUser/profile");
      state.userInfo = userInfo;
    };

    // 退出登录
    const logout = () => {
      axios.delete("/logout").then(() => {
        // 退出后，清理本地 token，跳转登录页
        localRemove("token");
        router.push({ path: "/login" });
      });
    };

    return {
      ...toRefs(state),
      logout,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e9e9e9;
}
.right > div > .icon {
  font-size: 18px;
  margin-right: 6px;
}
.author {
  margin-left: 10px;
  cursor: pointer;
}
</style>
<style>
.popper-user-box {
  background: url("https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png")
    50% 50% no-repeat !important;
  background-size: cover !important;
  border-radius: 0 !important;
}
.popper-user-box .nickname {
  position: relative;
  color: #ffffff;
}
.popper-user-box .nickname .logout {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>