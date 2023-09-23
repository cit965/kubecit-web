<template>
  <div id="ChangePsw">
    <div class="Message">
      <p>修改密码</p>
      <div class="msg">
        <div class="input">
          <div class="label">旧密码</div>
          <el-input></el-input>
        </div>
        <div class="input">
          <div class="label">新密码</div>
          <el-input v-model="input2" placeholder=""> </el-input>
        </div>
        <div class="input">
          <div class="label">确认新密码</div>
          <el-input v-model="input2" placeholder="">
            <template #append>确认修改密码</template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'
</script>
<style scoped lang="scss">
#ChangePsw {
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
          width: 102px;
          background: #fff;
          color: #6c757d;
          border-color: #6c757d;
          font-size: 13px;
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
  }
}
</style>
