<template>
  <div id="Dwonload">
    <div class="numMoney">
      <div class="box" v-for="(item, index) in PayValue" :key="index">
        <p class="num">{{ item.times }}</p>
        <p class="text">{{ item.msg }}</p>
      </div>
    </div>
    <div class="Message">
      <p class="title">下载记录</p>
      <div class="msg">
        <div class="empty">
          <img src="https://www.koudaizy.com/wp-content/themes/koudaizy/assets/img/empty-state-no-data.svg" alt="" />
          <p>暂无记录</p>
        </div>

        <ul>
          <li>下载规则说明：</li>
          <li>您今日最多可下载5个免费的资源（包含免费资源和会员免费资源）</li>
          <li>永久会员享有所有会员权限，可以下载包年/包月会员免费资源</li>
          <li>包年会员享有包月会员所有权限，可以下载包月会员免费资源</li>
          <li>包月会员仅可以下载包月会员免费的资源</li>
          <li>全站单独购买的资源，不计算下载次数</li>
          <li>当日已经下载过的资源，重复点击不计算下载次数</li>
          <li>下载次数限制只针对本站免费资源，会员免费资源计次</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'

const PayValue = [
  { times: 5, msg: '今日可下载' },
  { times: 5, msg: '今日已下载' },
  { times: 5, msg: '剩余下载次数' },
  { times: '不限速', msg: '下载速度' },
]
const is_active = ref(0)
const OtherPay = ref()
const SumNumber = ref({
  number: 0,
})
</script>
<style scoped lang="scss">
#Dwonload {
  .numMoney {
    margin-left: 20px;
    height: 106px;
    display: flex;

    .box {
      &:nth-child(2) {
        background: #35b8e0;
      }
      &:nth-child(3) {
        background: #ff5b5b;
      }
      &:nth-child(4) {
        background: #10c469;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 247px;
      height: 106px;
      padding: 24px 24px;
      background-color: #536de6;
      margin-right: 20px;
      border-radius: 10px;

      .num {
        height: 34px;
        line-height: 34px;
        font-size: 28px;

        margin-bottom: 4px;
        color: #fff;
      }
      .text {
        font-size: 15px;
        height: 21px;
        line-height: 21px;
        color: #fff;
      }
      .svg {
        position: absolute;
        left: 8px;
        top: 8px;
        margin-left: auto;
        width: 22px;
        height: 22px;
        border-radius: 24px 24px;
        color: #f9c851;
      }
    }
  }
  .Message {
    width: 1051px;
    height: 441px;
    background: #fff;
    margin: 32px 0 24px 20px;
    border-radius: 10px;

    p.title {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #34495e;
      font-weight: 700;
      padding: 0 24px;
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid rgba(231, 234, 243, 0.7);
    }

    .msg {
      padding: 20px 20px;

      .empty {
        height: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 56px;
          height: 56px;
          margin-bottom: 16px;
        }
        p {
          font-weight: 400;
          font-size: 15px;
          color: #34495e;
        }
      }
      //   注释
      ul {
        margin: 30px 8px;
        padding-left: 30px;
        li {
          height: 24px;
          font-size: 12px;
          color: #6c757d !important;
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
