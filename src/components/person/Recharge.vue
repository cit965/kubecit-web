<template>
  <div id="Recharge">
    <div class="Message">
      <p class="title">余额充值中心 <span class="use">使用卡密充值</span><span class="pay">去购买卡密</span></p>
      <div class="msg">
        <div class="MoneyBox">
          <div class="box">
            <div class="content">
              <p class="num">0 元</p>
              <p class="text">当前余额</p>
            </div>
            <div class="icon"></div>
          </div>

          <div class="box">
            <div class="content">
              <p>0 元</p>
              <p>累计消费</p>
            </div>
            <div class="icon"></div>
          </div>
          <div class="box">
            <div class="content">
              <p>0.00</p>
              <p>累计佣金</p>
            </div>
            <div class="icon"></div>
          </div>
        </div>
        <p class="Payfor">充值项目（充值比例：1元=1元）</p>
        <div class="numMoney">
          <div class="box" @click="is_active = index" :class="index == is_active ? 'is_active' : ''" v-for="(item, index) in PayValue" :key="index">
            <p class="num">{{ item }}元</p>
            <p class="text">￥{{ item }}</p>
            <div class="svg" v-if="index == is_active">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path
                  fill="currentColor"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 金额输入框 -->
        <div class="OtherPay">
          <p>充值其他数量</p>
          <div class="input">
            <el-input v-model="OtherPay" type="number" placeholder="输入整数"> </el-input>
          </div>
        </div>
        <!-- 结算 -->
        <div class="payNumber">
          <p>
            支付金额: <span>￥{{ SumNumber.number }}</span>
          </p>
          <div class="submmit">在线支付</div>
        </div>
        <div class="line">
          <hr />
        </div>

        <ul>
          <li>充值说明：</li>
          <li>充值最低额度为10元</li>
          <li>充值汇率为1元=1元</li>
          <li>人民币和元不能互相转换</li>
          <li>余额永久有效，无时间限制</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'

const PayValue = [50, 100, 500, 1000]
const is_active = ref(0)
const OtherPay = ref()
const SumNumber = ref({
  number: 0,
})
</script>
<style scoped lang="scss">
#Recharge {
  .Message {
    width: 1053px;
    height: 727px;
    background: #fff;
    margin: 0 0 24px 20px;
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
      .use,
      .pay {
        font-weight: 400;
        justify-content: center;
        display: block;
        font-size: 14px;
        border-radius: 3px;
        display: flex;
        align-items: center;
      }
      .use {
        margin: 0 5px 0 auto;
        width: 102px;
        height: 31px;
        color: #ff5b5b;
        border: 1px solid;
        border-color: #ff5b5b;
      }
      .pay {
        width: 81px;
        height: 31px;
        color: #536de6;
        border: 1px solid #536de6;
      }
    }

    .msg {
      padding: 20px 0px 0 20px;
      // 金额状态
      .MoneyBox {
        height: 98px;
        // height: 50px;
        display: flex;
        & .box:nth-child(2) {
          background: #536de6;
        }

        &.box:nth-child(3) {
          background: #ff5b5b;
        }
        .box {
          display: flex;
          width: 322px;
          height: 98px;
          padding: 20px 24px;
          background: #f9c851;
          margin-right: 20px;
          border-radius: 10px;
          .content {
            color: #fff;
            .num {
              font-size: 18px;
              height: 22px;
              margin-bottom: 4px;
            }
            .text {
              height: 24px;
              font-size: 14px;
            }
          }
          .icon {
            margin-left: auto;
            width: 48px;
            height: 48px;
            border-radius: 24px 24px;
            background: skyblue;
          }
        }
      }
      //   标题
      .Payfor {
        margin: 34px 0 10px 0;
        font-size: 15px;
        height: 24px;
      }
      //   重置金额
      .numMoney {
        height: 68px;
        display: flex;

        .box {
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          //   justify-content: center;
          align-items: center;
          width: 238px;
          height: 68px;
          padding: 8px 8px;

          background-color: rgb(216 216 216 / 10%);
          margin-right: 20px;
          border: 2px solid rgb(216 216 216 / 10%);
          border-radius: 10px;

          .num {
            font-size: 18px;
            height: 22px;
            margin-bottom: 4px;
            color: #f9c851;
          }
          .text {
            color: #6c757d !important;
            height: 24px;
            font-size: 14px;
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
        .box:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .is_active {
          border: 2px solid #f9c851;
          background: unset;
        }
      }
      //   金额输入框
      .OtherPay {
        margin-top: 24px;
        padding: 8px 24px;
        width: 1011px;
        height: 104px;
        background: rgb(125 125 125 / 5%);
        border-radius: 5px;
        p {
          height: 24px;
          font-size: 15px;
          margin-bottom: 10px;
          font-weight: 400;
          color: #6c757d !important;
        }
        .input {
          .el-input {
            width: 963px;
            height: 38px;
          }
        }
      }
      //   结算
      .payNumber {
        margin: 24px 0 0 0;
        height: 38px;
        display: flex;
        align-items: center;
        padding-right: 20px;

        p {
          font-size: 15px;
          color: #34495e;
          span {
            color: #ff5b5b !important ;
          }
        }
        .submmit {
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px 5px;
          font-size: 16px;
          width: 90px;
          height: 38px;
          background: #323a46;
          color: #fff;
        }
      }
      //   分割线
      .line {
        margin: 16px 0;
        padding-right: 20px;
        hr {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 0;
          border-top: 2px dashed #e2e2e2;
          background-color: transparent;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
          height: 0;
          overflow: visible;
          width: 100%;
          // padding-right: 20px;
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
