<template>
  <div id="Vip">
    <div class="Message">
      <p class="title">
        <svg
          data-v-b75d8ecd=""
          class="svgs"
          viewBox="0 0 1152 1024"
          xmlns="http://www.w3.org/2000/svg"
          style="display: inline-block; vertical-align: middle">
          <path
            data-v-b75d8ecd=""
            d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
            style="fill: black"></path>
        </svg>
        开通VIP会员，尊享VIP优惠特权
      </p>
      <div class="msg">
        <div class="numMoney">
          <div class="box" @click="is_active = index" :class="index == is_active ? 'is_active' : ''" v-for="(item, index) in PayValue" :key="index">
            <p class="titles">
              <svg
                v-if="index == 0"
                data-v-b75d8ecd=""
                class="svgs"
                viewBox="0 0 1152 1024"
                xmlns="http://www.w3.org/2000/svg"
                style="display: inline-block; vertical-align: middle">
                <path
                  data-v-b75d8ecd=""
                  d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
                  style="fill: #81d742"></path>
              </svg>
              <svg
                v-if="index == 1"
                data-v-b75d8ecd=""
                class="svgs"
                viewBox="0 0 1152 1024"
                xmlns="http://www.w3.org/2000/svg"
                style="display: inline-block; vertical-align: middle">
                <path
                  data-v-b75d8ecd=""
                  d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
                  style="fill: #1e73be"></path>
              </svg>
              <svg
                v-if="index == 2"
                data-v-b75d8ecd=""
                class="svgs"
                viewBox="0 0 1152 1024"
                xmlns="http://www.w3.org/2000/svg"
                style="display: inline-block; vertical-align: middle">
                <path
                  data-v-b75d8ecd=""
                  d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
                  style="fill: #8224e3"></path>
              </svg>
              <svg
                v-if="index == 3"
                data-v-b75d8ecd=""
                class="svgs"
                viewBox="0 0 1152 1024"
                xmlns="http://www.w3.org/2000/svg"
                style="display: inline-block; vertical-align: middle">
                <path
                  data-v-b75d8ecd=""
                  d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
                  style="fill: #ff6a6d"></path>
              </svg>

              {{ item.default[0] }}
            </p>
            <p class="money">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path
                  fill="currentColor"
                  d="m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"></path>
                <path
                  fill="currentColor"
                  d="m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"></path>
                <path
                  fill="currentColor"
                  d="M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"></path>
              </svg>
              {{ index != 2 ? item.default[1] : '798(' }}
              <span v-if="index == 2">5988</span>{{ index == 2 ? ')元' : '' }}
            </p>
            <p class="time">
              会员时长: <span :class="index == 2 ? 'redLight' : ''">{{ item.default[2] }}</span
              >{{ index == 0 || index == 3 ? '天' : index == 1 ? '年' : '' }}
            </p>

            <p class="free">
              每日可免费下载<span>{{ item.default[3] }}</span
              >个资源
            </p>
            <p class="light">{{ item.default[4] }}</p>
            <p class="search" v-if="index != 3">
              <span v-if="index == 2">{{ item.light[0] }}</span
              >提供<span v-if="index != 2">{{ item.light[0] }}</span
              >免费资源代找服务
            </p>
            <p class="search" v-if="index == 3">按会员折扣价提供资源代找服务</p>
            <p class="return" v-if="index != 3">
              推荐朋友使用享受<span>{{ item.light[1] }}</span
              >返利
            </p>
            <p class="return" v-if="index == 3">
              <span>{{ item.light[1] }}</span
              >升级永久会员，可全额抵扣
            </p>
            <div class="svg" v-if="index == is_active">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path
                  fill="currentColor"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 个人信息 -->
        <div class="userMsg">
          <div class="headerImg"></div>
          <div class="detail">
            <div class="name">
              XXX
              <span>普通</span>
            </div>
            <div class="date">到期时间：2023-xx-xx</div>
          </div>

          <div class="viptype">
            <svg
              data-v-b75d8ecd=""
              class="svgs"
              viewBox="0 0 1152 1024"
              xmlns="http://www.w3.org/2000/svg"
              style="display: inline-block; vertical-align: middle">
              <path
                data-v-b75d8ecd=""
                d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"
                style="fill: black"></path>
            </svg>
            <div class="title">{{ PayValue[is_active].default[0] }}</div>
            <div class="Money">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path
                  fill="#631c00"
                  d="m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"></path>
                <path
                  fill="#631c00"
                  d="m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"></path>
                <path
                  fill="#631c00"
                  d="M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"></path>
              </svg>
              {{ is_active != 2 ? SumNumber.sumValue[is_active] : '798 (' }}
              <span v-if="is_active == 2">5988</span>
              {{ is_active == 2 ? ')元' : '' }}
            </div>
          </div>
          <div class="submit">立即开通</div>
        </div>

        <ul>
          <h6>🎯 开通本站会员说明：</h6>
          <li>本站会员账号为虚拟数字资源，开通后，不支持退款。不放心可以先单独购买课程体验，或者开通体验会员，满意再升级。</li>
          <li>会员和永久会员，皆可以免费下载本站所有开放资源。会员到期后无法再下载资源，永久会员不受时间限制，会员升级请联系站长。</li>
          <li>
            不要使用爬虫软件大量抓取本站数据，否则可能会触发防火墙规则，被限制登录。不欢迎倒卖课程的人，本站课程仅提供给你个人自己学习研究使用。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'

const PayValue = [
  {
    default: ['包年会员', '398元', '365', '10', '全站所有资源免费下载', '提供1次免费资源代找服务', '推荐朋友使用享受20%返利'],
    light: ['1次', '20%'],
  },
  {
    default: ['2年会员(优惠)', '598元', '2', '10', '全站所有资源免费下载', '提供1次免费资源代找服务', '推荐朋友使用享受20%返利'],
    light: ['12次', '20%'],
  },
  {
    default: ['永久会员(限时特惠)', '798元', '永久', '20', '可下载全站资源及版权下架的资源', '提供1次免费资源代找服务', '推荐朋友使用享受20%返利'],
    light: ['不限次', '30%'],
  },
  {
    default: ['体验会员', '88.8元', '3', '10', '全站所有资源免费下载', '按会员折扣价提供资源代找服务', '推荐朋友使用享受20%返利'],
    light: ['1次', '7天内'],
  },
]

const is_active = ref(0)
const OtherPay = ref()
const SumNumber = ref({
  number: 0,
  sumValue: ['398元', '589元', '', '88.8元'],
})
</script>
<style scoped lang="scss">
#Vip {
  .Message {
    width: 1056px;
    height: 870px;
    background: #fff;
    margin: 0 0 30px 20px;
    border-radius: 10px;

    p.title {
      svg {
        margin-right: 10px;
        width: 17px;
        height: 17px;
      }
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
      //   重置金额
      .numMoney {
        padding: 24px 0px 0 24px;
        display: flex;

        flex-wrap: wrap;

        .box {
          margin-bottom: 24px;
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          //   justify-content: center;
          align-items: center;
          width: 321px;
          height: 233px;
          padding: 8px 8px;

          background-color: rgb(216 216 216 / 10%);
          margin-right: 20px;
          border: 2px solid rgb(216 216 216 / 10%);
          border-radius: 10px;
          .titles {
            padding: 10px 10px;
            height: 49px;
            font-size: 24px;
            font-weight: 500;
            color: #81d742;
            .svgs {
              width: 27px;
              height: 24px;
              margin-right: 8px;
            }
          }
          .redLight {
            color: #ff5b5b;
          }
          .money {
            display: flex;
            font-weight: 600;
            align-items: center;
            font-size: 16px;
            height: 40px;
            padding: 8px 0;
            color: #81d742;
            svg {
              width: 16px;
              height: 16px;
              color: #81d742;
              margin-right: 5px;
            }
            span {
              color: grey;
              text-decoration: line-through;
            }
          }
          .time,
          .light,
          .search,
          .return,
          .free {
            margin-bottom: 8px;
            color: #6c757d;
            height: 17px;
            font-size: 12px;
            span {
              margin-left: 4px;
              font-weight: bold;
            }
          }
          .free span {
            margin-left: 0;
            font-weight: 400;
            color: #ff5b5b;
          }
          .light {
            color: #ff5b5b;
          }
          .search span {
            font-weight: 400;
            margin-left: 0;
            color: #ff5b5b;
          }
          .return span {
            font-weight: 400;
            margin-left: 0;
            color: #ff5b5b;
          }

          .svg {
            position: absolute;
            right: 8px;
            top: 8px;
            margin-left: auto;
            width: 22px;
            height: 22px;
            border-radius: 24px 24px;
            color: #697fe6;
          }
        }
        & :nth-child(2) {
          .titles,
          .money {
            color: #1e73be;
            svg {
              color: #1e73be;
            }
          }
        }
        & :nth-child(3) {
          .titles,
          .money {
            color: #8224e3;
            svg {
              color: #8224e3;
            }
          }
        }
        & :nth-child(4) {
          .titles,
          .money {
            color: #ff6a6d;
            svg {
              color: #ff6a6d;
            }
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

      .userMsg {
        padding: 24px 24px;
        margin: 24px 0 0 0;
        border-top: 1px solid rgba(231, 234, 243, 0.7);
        width: 1051px;
        height: 81px;
        display: flex;
        align-items: center;
        .headerImg {
          width: 40px;
          height: 40px;
          border-radius: 20px 20px;
          background: skyblue;
        }
        .detail {
          margin-left: 8px;

          width: 388px;
          display: felx;
          align-items: center;
          .name {
            height: 18px;
            margin-bottom: 4px;
            font-size: 15px;
            color: #6c757d;
            span {
              display: inline-block;
              width: 33px;
              height: 18px;
              font-size: 12px;
              color: #35b8e0;
              background: rgba(53, 184, 224, 0.18);
              border-radius: 5px 5px;
              text-align: center;
              line-height: 18px;
            }
          }
          .date {
            height: 12px;
            font-size: 12px;
            color: #6c757d;
          }
        }
        .viptype {
          font-weight: bolder;
          width: 465px;
          display: flex;
          align-items: center;
          svg {
            margin-right: 8px;
            width: 17px;
            height: 15px;
          }
          .title {
            font-size: 15px;
            color: #34495e;
          }
          .Money {
            display: flex;
            margin-left: 4px;
            align-items: center;
            justify-content: center;
            // width: 62px;
            height: 19px;
            font-size: 12px;
            color: #631c00;
            background: #dde8f5;
            border-radius: 5px 5px;
            font-weight: 700;
            svg {
              width: 12px;
              height: 12px;
            }
            span {
              color: grey;
              text-decoration: line-through;
            }
          }
        }
        .submit {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 38px;
          border-radius: 5px 5px;
          background: #34495e;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
        }
      }

      //   注释
      ul {
        margin: 30px 8px;
        padding-left: 30px;
        h6 {
          font-weight: 400;
          font-size: 16px;
          height: 20px;
          margin-bottom: 15px;
        }
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
