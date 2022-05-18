<template>
  <div class="login-wrapper">
    <div class="content-wrapper">
      <div class="logo">
        <SvgIcon name="75Logo" size="100" />
      </div>
      <div class="title"><span class="t1">NBA</span> <span class="t2">75</span></div>

      <Form
        ref="formRef"
        :name="formName"
        :model="passwordLogin ? loginForm : captchaForm"
        :rules="getFormRules"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 24 }"
        class="loginForm"
      >
        <Alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px" :message="tips" />

        <div class="password-form enter-y mt-10" v-show="passwordLogin">
          <div class="form-item-wrapper">
            <a-input-group compact size="large">
              <div class="form-label"><Icon icon="octicon:device-mobile-24" /> 手机号</div>
              <FormItem name="mobile">
                <a-input v-model:value="loginForm.mobile" placeholder="请输入手机号" />
              </FormItem>
            </a-input-group>
          </div>
          <div class="form-item-wrapper" style="margin-top: 30px">
            <a-input-group compact size="large">
              <div class="form-label"><Icon icon="bytesize:lock" /> 密码</div>
              <FormItem name="password" class="w-4/5">
                <a-input-password class="h-10" v-model:value="loginForm.password" placeholder="8-16位数字和字母组合" @keyup.enter="handleLogin" />
              </FormItem>
            </a-input-group>
          </div>
          <a-button type="link" class="forgot-password">忘记密码?</a-button>
        </div>

        <div class="captcha-form mt-15 enter-y" v-show="captchaLogin">
          <div class="form-item-wrapper">
            <a-input-group compact size="large">
              <div class="form-label"><Icon icon="octicon:device-mobile-24" /> 手机号</div>
              <FormItem name="phone">
                <a-input v-model:value="captchaForm.mobile" placeholder="请输入手机号" />
              </FormItem>
            </a-input-group>
          </div>
          <div class="form-item-wrapper mt-5">
            <a-input-group compact size="large">
              <div class="form-label">
                <SvgIcon name="shield" class="mr-1" /> 验证码
              </div>
              <FormItem name="captcha">
                <a-input v-model:value="captchaForm.captcha" placeholder="请输入验证码" @keyup.enter="handleLogin">
                  <template #suffix>
                    <a-button
                      type="link"
                      :disabled="state.smsSendBtn"
                      v-text="(!state.smsSendBtn && '获取验证码') || state.time + ' s'"
                      @click.stop.prevent="getCaptcha"
                    />
                  </template>
                </a-input>
              </FormItem>
            </a-input-group>
          </div>
        </div>

        <a-button type="primary" class="login-btn" @click="handleLogin" :loading="state.loading">登录</a-button>
        <a-button class="register-btn">注册</a-button>
      </Form>

      <Divider class="divider enter-y">或者</Divider>

      <div class="others">其他方式登录</div>

      <Row class="button-group" type="flex" justify="start">
        <Col :span="7" v-if="false">
          <!-- <a-button><icon-font type="icon-wechat" />微信登录</a-button> -->
        </Col>
        <Col :span="7">
          <a-button @click="changeLoginType">
            <SvgIcon class="mr-1" :name="`${passwordLogin ? 'safety_fill' : 'lock'}`" />
            {{ passwordLogin ? '验证码' : '密码' }}登录
          </a-button>
        </Col>
        <Col :span="7" v-if="false">
          <!-- <a-button><icon-font type="icon-email" />邮箱登录</a-button> -->
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref, reactive, computed } from 'vue';
import { Form, Row, Divider, Alert, Col } from 'ant-design-vue';
import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';
import { useMessage } from '/@/hooks/web/useMessage';
import { useUserStore } from '/@/store/modules/user';
import { useDesign } from '/@/hooks/web/useDesign';
import { Icon } from '/@/components/Icon';
import { SvgIcon } from '/@/components/Icon';
import { encryptByMd5 } from '/@/utils/cipher';

const { getLoginState, setLoginState } = useLoginState();
const { getFormRules } = useFormRules();
const { notification, createErrorModal, createMessage } = useMessage();
const { prefixCls } = useDesign('login');
const userStore = useUserStore();

const FormItem = Form.Item;
const isLoginError = ref(false);
const tips = ref('');
const passwordLogin = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);
const captchaLogin = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE);
const formName = passwordLogin ? 'loginForm' : 'captchaForm';

const formRef = ref();
const loginForm = reactive({
  mobile: localStorage.getItem('mobile') || '',
  password: '',
});
const captchaForm = reactive({
  mobile: localStorage.getItem('mobile') || '',
  password: '',
  captcha: '',
});

const state = reactive({
  time: 60,
  loading: false,
  smsSendBtn: false,
});

const { validForm } = useFormValid(formRef);

function changeLoginType() {
  passwordLogin.value ? setLoginState(LoginStateEnum.MOBILE) : setLoginState(LoginStateEnum.LOGIN)
}

async function handleLogin() {
  const data = await validForm();
  if (!data) return;
  try {
    state.loading = true;
    const userInfo = await userStore.login({
      password: data.password,
      mobile: data.mobile,
      mode: 'none', //不要默认的错误提示
    });
    if (userInfo) {
      localStorage.setItem('mobile', data.mobile)
      notification.success({
        message: '登录成功',
        description: `欢迎回来: ${userInfo.realName}`,
        duration: 3,
      });
    }
  } catch (error) {
    createErrorModal({
      title: '错误提示',
      content: (error as unknown as Error).message || '网络异常',
      getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
    });
  } finally {
    state.loading = false;
  }
}

function getCaptcha(e) {
  e.preventDefault()
  const phonePattern = /^1[356789]\d{9}$/

  if (phonePattern.test(captchaForm.mobile)) {
    state.smsSendBtn = true
    isLoginError.value = false

      const interval = window.setInterval(() => {
        if (state.time-- <= 0) {
          state.time = 60
          state.smsSendBtn = false
          window.clearInterval(interval)
        }
      }, 1000)

      const hide = createMessage.loading('验证码发送中..', 0)
      // getSmsCaptcha(captchaForm.phone).then(res => {
      //   setTimeout(hide, 500)
      //   this.$notification['success']({
      //     message: '提示',
      //     description: '验证码获取成功',
      //     duration: 3
      //   })
      // }).catch(err => {
      //   setTimeout(hide, 1)
      //   clearInterval(interval)
      //   state.time = 60
      //   state.smsSendBtn = false
      //   this.requestFailed(err)
      // })
  } else {
    // this.requestFailed({ tips: '请输入手机号' })
  }
}
</script>

<style lang="less" scoped>
.login-wrapper {
  .content-wrapper {
    width: 550px;

    .logo {
      width: 163px;
      height: 84px;

      img {
        width: 100%;
      }
    }

    .title {
      margin-top: 10px;
      font-size: 30px;
      font-weight: 600;
      color: #3a3f47;

      .t1 {
        color: #0b6db4;
      }
      .t2 {
        color: @primary-color
      }
    }

    .loginForm {
      width: 100%;
      // margin-top: 60px;
      .form-item-wrapper {
        width: 100%;
        height: 40px;

        .form-label {
          width: 110px;
          height: 40px;
          font-size: 16px;
          font-weight: 400;
          padding-left: 20px;
          line-height: 40px;
          border: 1px solid rgba(153, 165, 180, 0.5);

          .icon-font-form {
            margin-right: 5px;
          }
        }

        .ant-form-item {
          width: 440px;
          height: 40px;
          border-right-width: 0;

          .ant-input-affix-wrapper {
            padding: 2.8px 11px;
          }
        }

        :deep(.ant-input) {
          width: 440px;
          border-radius: 0 4px 4px 0;
        }
      }

      .forgot-password {
        float: right;
        padding: 0;
      }

      .login-btn {
        width: 100%;
        height: 40px;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 600;
      }

      .register-btn {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        font-size: 16px;
        font-weight: 400;
      }
    }

    .divider {
      font-size: 14px;
      font-weight: 400;
      color: #99a5b4;
      margin-top: 30px;
    }

    :deep(.ant-divider-with-text-center::before, .ant-divider-with-text-center::after) {
      top: 0%;
    }

    :deep(.ant-divider-inner-text) {
      padding: 0 15px;
    }

    .others {
      font-size: 14px;
      font-weight: 400;
      color: #99a5b4;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .button-group {
      width: 100%;
      margin-top: 30px;

      :deep(.ant-col) {
        margin-right: 33px;
      }

      :deep(.ant-col:last-child) {
        margin-right: 0;
      }

      :deep(.ant-btn) {
        width: 100%;
        height: 40px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
