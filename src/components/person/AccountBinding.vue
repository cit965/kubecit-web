<template>
  <div id="AccountBind">
    <div class="Message">
      <p>账号邮箱绑定</p>
      <div class="msg">
        <div class="input">
          <div class="label">当前绑定邮箱</div>
          <el-input></el-input>
        </div>
        <div class="input">
          <div class="label">绑定新邮箱</div>
          <el-input v-model="input2" placeholder="输入新邮箱账号">
            <template #append>发送验证码</template>
          </el-input>
        </div>
        <div class="input">
          <div class="label">邮箱验证码</div>
          <el-input v-model="input2" placeholder="请输入邮箱验证码">
            <template #append>绑定新邮箱</template>
          </el-input>
        </div>
      </div>
      <div class="ThirdParty"></div>
    </div>
    <!-- <div class="Message2">
      <p class="title">第三方登录绑定</p>
      <div class="msg">
        <div class="title">绑定第三方登录您可以快速登录账号</div>

        <div class="input">
          <div class="label">
            <div class="img"></div>
          </div>
          <div class="From">
            <p>QQ</p>
            <p>未绑定</p>
          </div>
          <div class="submit">
            <div class="img"></div>
            绑定QQ
          </div>
        </div>
        <div class="input">
          <div class="label">
            <div class="img"></div>
          </div>
          <div class="From">
            <p>微信</p>
            <p>微信昵称｜xxx</p>
          </div>
          <div class="submit">
            <div class="img"></div>
            绑定QQ
          </div>
        </div>
        <div class="input">
          <div class="label">
            <div class="img"></div>
          </div>
          <div class="From">
            <p>微博</p>
            <p>未绑定</p>
          </div>
          <div class="submit">
            <div class="img"></div>
            绑定微博
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'
</script>
<style scoped lang="scss">
#AccountBind {
  .Message {
    width: 1053px;
    height: 256px;
    background: #fff;
    margin: 0 0 24px 20px;
    border-radius: 10px;

    p {
      font-size: 15px;
      color: #34495e;
      font-weight: 700;
      padding-left: 24px;
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid rgba(231, 234, 243, 0.7);
    }

    .msg {
      padding: 20px 0 0 20px;
      .input {
        height: 38px;
        margin: 0 0px 16px 0;
        display: flex;
        align-items: center;
        .label {
          display: flex;
          align-items: center;
          width: 258px;
          height: 38px;
          color: #1a1a1a;
          font-size: 15px;
          margin: 0 10px 16px 0px;
        }
        .el-input {
          width: 666px;
          height: 38px !important;
        }
        :deep(.el-input-group__append) {
          background: #fff;
          color: #6c757d;
          border-color: #6c757d;
          font-size: 14px;
        }
        .el-textarea {
          width: 1011px;
          height: 110px;
          margin-bottom: 36px;
        }
      }
    }
    .msg .input:nth-child(3) {
      :deep(.el-input-group__append) {
        background-color: #536de6;
        border-color: #536de6;
        color: #fff;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: end;
      height: 87px;
      border-top: 1px solid rgba(231, 234, 243, 0.7);

      .submit {
        cursor: pointer;
        margin-right: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 122px;
        height: 38px;
        color: #fff;
        font-size: 16px;
        background: #323a46;
        box-shadow: 0 0 0 rgba(50, 58, 70, 0.5);
        border-radius: 5px 5px;
      }
    }
  }
  .Message2 {
    width: 1053px;
    height: 334px;
    background: #fff;
    margin-left: 20px;
    border-radius: 10px;

    p.title {
      font-size: 15px;
      color: #34495e;
      font-weight: 700;
      padding-left: 24px;
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid rgba(231, 234, 243, 0.7);
    }

    .msg {
      display: flex;
      flex-direction: column;
      padding: 20px 0 0 20px;
      .title {
        color: #34495e;
        font-size: 15px;
        height: 24px;
        margin-bottom: 10px;
      }

      .input {
        padding: 12px 20px;
        height: 69px;
        width: 1010px;
        // margin: 0 0px px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        .label {
          display: flex;
          align-items: center;

          .img {
            width: 25px;
            height: 25px;
            color: #1a1a1a;
            background: skyblue;
          }
        }
        .From {
          width: 819px;
          // align-items: center;
          text-align: left !important;
          margin: 0 0 0 23px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          p {
            color: #34495e;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .From p:nth-child(2) {
          font-size: 12px;
        }

        .submit {
          border: 1px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 93px;
          height: 31px;
          font-size: 14px;
          .img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
            background: skyblue;
          }
        }
      }
    }
    .msg :nth-child(2) {
      .submit {
        // margin-left: 8px;
        // width: 86px !important;
      }
    }
    .msg :nth-child(4) {
      border-bottom: 0;
    }
  }
}
</style>
