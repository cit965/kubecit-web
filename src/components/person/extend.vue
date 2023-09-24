<template>
  <div id="extend">
    <div class="numMoney">
      <div class="box" v-for="(item, index) in PayValue" :key="index">
        <p class="num">￥{{ item.times }}</p>
        <p class="text">{{ item.msg }}</p>
      </div>
    </div>
    <div class="Message">
      <p class="title">推广奖励</p>
      <div class="msg">
        <div class="content" v-for="(items, indexs) in Msg" :key="indexs">
          <div class="label">{{ items }}</div>
          <div class="val">{{ val[indexs] }}</div>
        </div>

        <div class="withdraw">
          <el-input v-model="input1" type="number" placeholder="最低提现申请 / 50元起">
            <template #prepend>提现金额 </template>
            <template #append>
              <div class="RMB">提现RMB</div>
              <div class="yue">提现到余额</div>
            </template>
          </el-input>
        </div>
        <ul>
          <li>推广说明：</li>
          <li>如需提现请联系网站管理员，发送您的账号信息和收款码进行人工提现</li>
          <li>如果用户是通过您的推广链接购买的资源或者开通会员，则按照推广佣金比列奖励到您的佣金中</li>
          <li>如果用户是通过您的链接新注册的用户，推荐人是您，该用户购买资都会给你佣金</li>
          <li>如果用户是你的下级，用户使用其他推荐人链接购买，以上下级关系为准，优先给注册推荐人而不是推荐链接</li>
          <li>推广奖励金额保留一位小数点四舍五入。0.1之类的奖励金额不计算</li>
          <li>前台无法查看推广订单详情，如需查看详情可联系管理员截图查看详细记录和时间</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'

const PayValue = [
  { times: 0.0, msg: '累计佣金' },
  { times: 0.0, msg: '已提现' },
  { times: 0.0, msg: '提现中' },
  { times: 0, msg: '可提现' },
]

const Msg = ['提现账号', '推广总数', '推广链接', '推广佣金提成', '作者佣金提成', '累计佣金', '已提现', '提现中', '可提现']
const val = ['xxx', 0, 'https://www.xxxxx.com?aff=xxxx', 0, 20, 0.0, 0.0, 0.0, 0]
const is_active = ref(0)
const OtherPay = ref()
const SumNumber = ref({
  number: 0,
})
</script>
<style scoped lang="scss">
#extend {
  min-height: 764px;
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
    height: 784px;
    background: #fff;
    margin: 32px 0 30px 20px;
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
      //   padding: 20px 20px;
      & .content:nth-child(9) {
        border: none;
      }
      .content {
        height: 49px;
        display: flex;
        border-bottom: 1px solid #dee2e6;
        .label {
          width: 302px;
          height: 49px;
        }
        .val {
          width: 749px;
          height: 49px;
        }
        .label,
        .val {
          padding: 12px;
          font-size: 15px;
          color: #323a46;
        }
      }

      .withdraw {
        width: 1003px;
        height: 62x;
        padding: 24px 24px 0 24px;
        :deep(.el-input) {
          color: #6c757d;
          height: 38px;
          .el-input-group__append,
          .el-input-group__prepend {
            // padding
            text-align: center;
            color: #6c757d;
            background: #fff;
          }
          .el-input-group__append {
            width: 220px;
            height: 38px;
            padding: 0;
            display: flex;
            align-items: center;
          }
          .RMB {
            width: 94px;
            border-right: 1px solid #dcdfe6;
          }
          .yue {
            height: 38px;
            width: 128px;
          }

          .RMB,
          .yue {
            cursor: pointer;
            color: #6c757d;
            padding: 0;
            height: 38px;
            line-height: 38px;
          }
          .yue:hover {
            background: #616a71;
            color: #fff;
          }
          .RMB:hover {
            background: #616a71;
            color: #fff;
          }
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
