<template>
  <div :class="prefixCls" id="loginRegister" class="user-layout-wrapper">
    <div class="login-container">
      <div class="background" :class="[isLogin ? 'login' : 'register']">
        <div id="recover-tips" class="tips-container" v-if="!isLogin && isRecover">
          <div class="steps-wrapper">
            <div class="number" :class="[isActive == 1 ? 'active-number' : 'inactive-number']">1</div>
            <div class="text" :class="[isActive == 1 ? 'active-text' : 'inactive-text']">
              <div class="title">重设密码</div>
              <div class="message">设置新密码并输入手机验证码</div>
            </div>
          </div>
          <div class="steps-wrapper" style="margin-top: 50px">
            <div class="number" :class="[isActive == 2 ? 'active-number' : 'inactive-number']">2</div>
            <div class="text" :class="[isActive == 2 ? 'active-text' : 'inactive-text']">
              <div class="title">重设密码成功</div>
              <div class="message">重新登录</div>
            </div>
          </div>
        </div>

        <div id="register-tips" class="tips-container" v-if="!isLogin && !isRecover">
          <div class="steps-wrapper">
            <div class="number" :class="[isActive == 1 ? 'active-number' : 'inactive-number']">1</div>
            <div class="text" :class="[isActive == 1 ? 'active-text' : 'inactive-text']">
              <div class="title">注册账号</div>
              <div class="message">绑定手机号注册账号</div>
            </div>
          </div>
          <div class="steps-wrapper" style="margin-top: 50px" v-if="false">
            <div class="number" :class="[isActive == 2 ? 'active-number' : 'inactive-number']">2</div>
            <div class="text" :class="[isActive == 2 ? 'active-text' : 'inactive-text']">
              <div class="title">完善个人信息</div>
              <div class="message">输入个人信息</div>
            </div>
          </div>
          <div class="steps-wrapper" style="margin-top: 50px">
            <div class="number" :class="[isActive == 3 ? 'active-number' : 'inactive-number']">2</div>
            <div class="text" :class="[isActive == 3 ? 'active-text' : 'inactive-text']">
              <div class="title">注册成功</div>
              <div class="message">重新登录</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div
          class="go-back"
          @click="goBack()"
          v-if="(!isLogin && isActive == 1) || (viewType === 'register' && isActive == 2)"
        >
          <SvgIcon name="arrow-left" />
        </div>
        <LoginFormVue />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useUserStore } from '/@/store/modules/user';
  import LoginFormVue from './LoginForm.vue';
  import { SvgIcon } from '/@/components/Icon';

  const { prefixCls } = useDesign('login');
  const useStore = useUserStore();
  const isLogin = computed(() => useRoute().name == 'Login');
  const isActive = computed(() => useStore.getStep);
  const isRecover = computed(() => useStore.getType === 'recover');
  const viewType = computed(() => useStore.getType);

  async function goBack() {
    await useStore.setStep({ step: 0, type: 'login' });
    useRouter().push('user/login');
  }
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-login';

#loginRegister.user-layout-wrapper {
  height: 100%;

  :deep(.ant-btn) {
    &:not(.ant-btn-primary):not(.ant-btn-dashed):not(.ant-btn-danger):not(.ant-btn-link) {
      color: #3a3f47;
      border-color: rgba(153, 165, 180, 0.5);
    }

    &.ant-btn:hover {
      &:not(.ant-btn-primary):not(.ant-btn-dashed):not(.ant-btn-danger):not(.ant-btn-link) {
        border-color: @primary-color;
      }
    }

    &.ant-btn:focus {
      &:not(.ant-btn-primary):not(.ant-btn-dashed):not(.ant-btn-danger):not(.ant-btn-link) {
        border-color: @primary-color;
      }
    }
  }

  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

    .login {
      width: 42%;
      height: 100%;
      background: url(/@/assets/images/Login/background_login.png) no-repeat 50%;
      background-size: 100%;
    }

    .register {
      width: 42%;
      height: 100%;
      background: url(/@/assets/images/Login/background_register.png) no-repeat center;
      background-size: 100% 100%;
    }

    .background {
      display: flex;
      justify-content: center;
      align-items: center;

      .tips-container {
        width: 400px;

        .steps-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-start;

          .number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            // background: #fff;
            font-size: 20px;
            color: #3a3f47;
            font-weight: 600;
            text-align: center;
            line-height: 30px;
            margin-top: 3px;
          }

          .active-text {
            color: #fff;
          }

          .active-number {
            background: #fff;
          }

          .inactive-number {
            background: #fff;
            opacity: 0.2;
          }

          .inactive-text {
            color: #596371;
          }

          .text {
            margin-left: 20px;

            .title {
              font-size: 24px;
              font-weight: 600;
            }

            .message {
              font-size: 20px;
              font-weight: 400;
              margin-top: 15px;
            }
          }
        }
      }
    }

    .content {
      width: calc(100% - 42%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .go-back {
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 32px;
        position: absolute;
        left: 9%;
        top: 5.5%;
        cursor: pointer;
        z-index: 100;
      }
    }
  }
}
</style>
