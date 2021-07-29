<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <img
          class="logo"
          src="https://s.weituibao.com/1582958061265/mlogo.png"
        />
        <div class="name">
          <div class="title">Vue3 Admin</div>
          <div class="tips">Vue3 后台管理系统</div>
        </div>
      </div>
      <el-form
        label-position="top"
        :rules="rules"
        :model="ruleForm"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model.trim="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="text"
            v-model.trim="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <div style="color: #333">
            登录表示您已同意
            <a>《服务条款》</a>
          </div> -->
          <el-button style="width: 100%" type="primary" @click="submitForm"
            >立即登录</el-button
          >
          <el-checkbox v-model="checked" @change="!checkbox"
            >下次自动登录</el-checkbox
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";
import md5 from "js-md5";
import { reactive, toRefs, ref, toRef } from "vue";
import { localSet } from "@/utils";
export default {
  name: "Login",
  setup() {
    // el-form 组件接收一个 ref 属性，Vue 3.0 需要这样声明
    const loginForm = ref(null);
    const state = reactive({
      ruleForm: {
        username: "",
        password: "",
      },
      checked: false,
      // 表单验证判断
      rules: {
        username: [
          { required: "true", message: "账户不能为空", trigger: "blur" },
        ],
        password: [
          { required: "true", message: "密码不能为空", trigger: "blur" },
        ],
      },
    });

    // 表单提交
    const submitForm = async () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          // /adminUser/login 登录接口路径
          axios
            .post("/adminUser/login", {
              userName: state.ruleForm.username || "",
              password: md5(state.ruleForm.password),
              // 密码用 md5 加密
            })
            .then((res) => {
              // 返回一个 token，在请求别的接口时要带上，管理员权限
              // 存到 localStorage 里面。
              localSet("token", res);
              // 登录成功跳转，用 router.push 跳转的话，页面不会刷新，无法执行 localGet('token')
              window.location.href = "/";
            })
            .catch((e) => console.log(e));
        } else {
          return false;
        }
      });
    };

    // 重置
    const resetForm = () => {
      // loginForm 能拿到 el-form 的重制方法
      loginForm.value.resetFields();
    };

    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      resetForm,
    };
  },
};
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
}
.login-container {
  width: 420px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}

.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}

.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 24px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
  text-align: center;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
.login-form ::v-deep .el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form ::v-deep .el-form-item {
  margin-bottom: 10;
}
</style>