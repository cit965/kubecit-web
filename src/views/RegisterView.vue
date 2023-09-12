<template>
  <div class="container">
    <div class="content">
      <div class="box">
        <img src="@/assets/img/citlogo.jpeg" alt="" />
      </div>
      <div class="box">
        <h2 class="box_title">账号注册</h2>
        <div class="form_box">
          <el-form
            label-position="right"
            ref="ruleFormRef"
            label-width="100px"
            :model="registerForm"
            style="width: 350px"
            :rules="rules"
            require-asterisk-position="right"
          >
            <!-- <el-form-item label="手机号" prop="phone">
              <el-input clearable placeholder="请输入手机号" type="phone" v-model="registerForm.phone" />
            </el-form-item>
            <div class="code_box">
              <el-form-item label="验证码" prop="code">
                <el-input clearable placeholder="请输入验证码" v-model="registerForm.code" />
              </el-form-item>
              <el-button class="btn btn-primary sendcaptcha" type="primary" @click="postCode">{{ isShowSendCode ? '发送验证码'
                :
                countDown + '秒后重新发送' }}</el-button>
            </div> -->

            <el-form-item label="用户名" prop="username">
              <el-input
                clearable
                placeholder="请输入用户名"
                v-model="registerForm.username"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                clearable
                show-password
                placeholder="请输入密码"
                type="password"
                v-model="registerForm.password"
              />
            </el-form-item>
            <el-form-item label="确认密码" prop="rePassword">
              <el-input
                clearable
                show-password
                placeholder="请再次输入密码"
                type="password"
                v-model="registerForm.rePassword"
              />
            </el-form-item>
          </el-form>
          <el-checkbox v-model="registerForm.cheacked">
            注册即同意《CIT用户服务协议》《CIT隐私政策》。</el-checkbox
          >
        </div>
        <div class="footer">
          <el-button
            class="btn btn-primary reg-btn"
            type="primary"
            size="large"
            @click="submitForm(ruleFormRef)"
            >立即注册</el-button
          >
        </div>
        <div class="tips">
          <label
            style="color: #409eff; margin-right: 10px"
            @click="$router.push('/')"
            >返回首页</label
          >
          已有账号，<label
            style="color: #409eff"
            @click="$router.push('/login')"
            >马上去登录</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { usersRegister } from '@/utils/api/api.js'
import { Encrypt } from '@/utils/encrypt/aes'
import { useRouter } from 'vue-router'

const router = useRouter()
const ruleFormRef = ref()

//倒计时
let countDown = ref(60)
//是否显示发送验证码按钮
let isShowSendCode = ref(true)
//表单信息
const registerForm = reactive({
  phone: '',
  username: '',
  code: '',
  password: '',
  rePassword: '',
  cheacked: false,
})
//校验规则
const rules = reactive({
  phone: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: ['change', 'blur'],
    },
    {
      pattern: /^(\+86)?[1][3,5,8,9][0-9]{9}$/,
      message: '请输入正确的手机号',
      trigger: ['change', 'blur'],
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: ['change', 'blur'],
    },
  ],
  username: [
    {
      required: true,
      min: 6,
      max: 20,
      message: '用户名长度为6~20位',
      trigger: ['change', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      pattern: /^(?=.*\d)(?=.*[A-Za-z]).{8,16}$/,
      message: '密码必须包含字母数字特殊符号8~16位',
      trigger: ['change', 'blur'],
    },
  ],
  rePassword: [
    {
      required: true,
      message: '请确认密码',
      trigger: ['change', 'blur'],
    },
  ],
})

//发送验证码
const postCode = () => {
  if (!registerForm.phone) {
    return
  }
  //正则校验手机号是否符合条件
  if (!/^(\+86)?[1][3,5,8,9][0-9]{9}$/.test(registerForm.phone)) {
    ElMessage({
      message: '请输入正确的手机号',
      type: 'warning',
    })
    return
  }
  isShowSendCode.value = false
  //倒计时开始
  let timer = setInterval(() => {
    countDown.value--
    if (countDown.value <= 0) {
      clearInterval(timer)
      countDown.value = 60
      isShowSendCode.value = true
    }
  }, 1000)
}

//注册api
const register = async () => {
  try {
    const res = await usersRegister(registerForm)
    console.log(res)
    if (res.meta.success) {
      ElMessage({
        message: '注册成功',
        type: 'success',
      })
      router.push('/login')
    } else {
      ElMessage({
        message: '注册失败请重新注册',
        type: 'warning',
      })
    }
  } catch (error) {}
}

//提交表单
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      //判断表单是否勾选
      if (!registerForm.cheacked) {
        ElMessage({
          message: '请勾选用户协议',
          type: 'warning',
        })
        return
      }
      if (registerForm.password !== registerForm.rePassword) {
        ElMessage({
          message: '两次密码不一致',
          type: 'warning',
        })
        return
      }

      register()
      // ElMessage({
      //   message: '注册成功',
      //   type: 'success',
      // })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 960px;
  height: 100vh;
  background-color: #fff;

  .content {
    display: flex;
    align-items: center;
    width: 950px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #777;
    border-radius: 8px;

    .box {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .box_title {
        margin-top: 20px;
      }

      .form_box {
        margin-top: 50px;

        .code_form {
          display: flex;
          flex-wrap: nowrap;
        }

        .code_box {
          display: flex;

          .el-button {
            border-radius: 20px;
            margin-left: 4px;
          }
        }
      }
    }

    .box:first-child {
      background-color: blue;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .box:nth-child(2) {
      .footer {
        margin-top: 20px;

        .reg-btn {
          width: 200px;
          border-radius: 20px;
        }
      }

      .tips {
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>
