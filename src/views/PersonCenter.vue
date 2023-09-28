<template>
  <div id="PersonCenter">
    <!-- Header 头部 退出 -->
    <div class="Header">
      <div class="content">
        <div class="person">
          <div class="img"></div>
          <div class="detail">
            <div class="name">新用户 <span>普通</span></div>

            <div class="acount">268038625@qq.com</div>
          </div>
        </div>
        <div class="Quit">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
            <path
              fill="currentColor"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
          </svg>
          <div class="text">退出登录</div>
        </div>
      </div>
    </div>
    <!-- 中间数据 -->
    <div class="Content">
      <!-- 导航栏 -->
      <div class="nav">
        <!-- 钱包 -->
        <div class="wallet">
          <h6>元钱包</h6>
          <div class="money">
            <div class="current">
              <div class="num">
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
                <!-- <svg class="repeat" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="#f9c054"
                    d="m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"></path>
                  <path
                    fill="#f9c054"
                    d="m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"></path>
                  <path
                    fill="#f9c054"
                    d="M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"></path>
                </svg> -->
                <span>0</span>
              </div>
              <div class="text">当前余额</div>
            </div>
            <div class="sum">
              <div class="num">
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
                <div>0</div>
              </div>
              <div class="text">累计消费</div>
            </div>
          </div>
          <el-tooltip class="box-item" effect="dark" content="每日签到奖励:0.3元" placement="bottom">
            <div class="Clockin">
              <div class="check">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="#fff"
                    d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"></path>
                </svg>
              </div>
              <div class="text">每日签到</div>
            </div>
          </el-tooltip>
        </div>
        <div class="Allmsg">
          <!-- 会员中心 -->
          <div class="center">
            <p>会员中心</p>
            <ul>
              <li :class="index == defaultView ? 'is_active' : ''" v-for="(item, index) in navValue" :key="index" @click="ChangeView(index)">
                <svg v-if="index == 0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
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
                <svg v-if="index == 1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"></path>
                  <path
                    fill="currentColor"
                    d="M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"></path>
                </svg>
                <svg
                  v-if="index == 2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 1024 1024"
                  xml:space="preserve"
                  data-v-ea893728="">
                  <path
                    d="M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zM807 640c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zM688 833c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z"
                    fill="currentColor"></path>
                </svg>
                <svg v-if="index == 3" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"></path>
                </svg>
                <svg v-if="index == 4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"></path>
                </svg>
                <svg v-if="index == 5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"></path>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- 账号信息 -->
          <div class="count">
            <p>账号信息</p>
            <ul>
              <li :class="index + 6 == defaultView ? 'is_active' : ''" v-for="(item, index) in navValue2" :key="index" @click="ChangeView(index + 6)">
                <svg v-if="index == 0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path>
                </svg>
                <svg v-if="index == 1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path>
                </svg>
                <svg v-if="index == 2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                  <path
                    fill="currentColor"
                    d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"></path>
                </svg>
                {{ item }} <span v-if="index == 2">请设置密码</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 相应内容 -->
      <!-- 默认个人基本信息 -->
      <div class="Message" v-if="defaultView == 6">
        <p>个人基本资料</p>
        <div class="headerImg"></div>
        <div class="msg">
          <div class="input">
            <div class="label">账号ID</div>
            <el-input v-model="msg.ID"></el-input>
          </div>
          <div class="input">
            <div class="label">昵称</div>
            <el-input v-model="msg.name"></el-input>
          </div>
          <div class="input">
            <div class="label">联系QQ</div>
            <el-input v-model="msg.qq"></el-input>
          </div>
          <div class="input">
            <div class="label">电话</div>
            <el-input v-model="msg.phone"></el-input>
          </div>
          <div class="input">
            <div class="label">介绍</div>
            <el-input v-model="msg.detail" :autosize="{ minRows: 4, maxRows: 4 }" type="textarea" placeholder="请输入个人介绍：" />
          </div>
        </div>
        <div class="footer">
          <div class="submit">保存个人信息</div>
        </div>
      </div>
      <!-- 组件信息 -->
      <keep-alive>
        <component :is="viewArr[defaultView]" />
      </keep-alive>
    </div>
  </div>
</template>
<script setup>
import AccountBinding from '../components/person/AccountBinding.vue'
import ChangePsw from '../components/person/ChangePsw.vue'
import Recharge from '../components/person/Recharge.vue'
import VipView from '../components/person/VipView.vue'
import PurchaseRecord from '../components/person/PurchaseRecord.vue'
import Download from '../components/person/Download.vue'
import Collect from '../components/person/Collect.vue'
import extend from '../components/person/extend.vue'
const msg = ref({
  count: '', //账号
  name: '', //昵称
  qq: '', //QQ
  phone: '', //
  detail: '', //介绍
})

const navValue = ['我的余额', '我的会员', '购买记录', '下载记录', '我的收藏', '推广中心']
const navValue2 = ['基本信息', '账号绑定', '密码设置']
const defaultView = ref(6)
const viewArr = [Recharge, VipView, PurchaseRecord, Download, Collect, extend, '', AccountBinding, ChangePsw]
// 切换组件
const ChangeView = (val) => {
  defaultView.value = val
  console.log('val :>> ', val)
}
</script>
<style scoped lang="scss">
#PersonCenter {
  width: 100%;
  background: #eaf0f1;
  .Header {
    width: 100%;
    height: 104px;
    background-image: linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);
    display: flex;
    // text-align: center;
    // align-items: center;
    justify-content: center;
    .content {
      display: flex;
      align-items: center;
      width: 1410px;
      height: 100%;
      //   padding-left: 251px;
    }
    .person {
      display: flex;
      //   头像
      .img {
        margin-right: 8px;
        width: 56px;
        height: 56px;
        border-radius: 28px 28px;
        background: blue;
      }
      .detail {
        .name {
          margin-bottom: 4px;
          height: 25px;
          font-size: 20px;
          color: #fff;
          span {
            font-size: 15px;
            height: 25px;
            width: 42px;
            display: inline-block;
            // color: #35b8e0;
            color: black;
            background-color: rgba(53, 184, 224, 0.18);
          }
        }
        .acount {
          font-size: 15px;
          color: #fff;
        }
      }
    }

    .Quit {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      width: 93px;
      height: 31px;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }

  .Content {
    min-height: 764px;
    margin: 32px 0 0px 251px;
    display: flex;
    background: #eaf0f1;
    .nav {
      width: 358px;
      height: 732px;

      padding: 0 10px;
      .wallet {
        margin-bottom: 24px;
        width: 336px;
        height: 165px;
        padding: 20px;
        background: #fff;
        border-radius: 5px 5px;
        h6 {
          text-align: left;
          height: 15px;
          width: 100%;
          font-size: 12px;
          color: #6c757d !important;
          margin-bottom: 15px;
        }
        .money {
          display: flex;

          .current,
          .sum {
            width: 158px;
            height: 48px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            svg {
              width: 16px;
              height: 16px;
            }
            .num {
              display: flex;
              align-items: center;
            }
            .repeat {
              margin-left: -10px;
              background: #f9c054;
              vertical-align: super;
              opacity: 0.5;
            }
          }
          .text {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 100%;
            font-size: 15px;
            color: #34495e;
          }
        }
        .Clockin {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 296px;
          height: 31px;
          margin-top: 16px;
          border-radius: 5px 5px;
          background: #35b8e0;
          box-shadow: 0 0 0 rgba(53, 184, 224, 0.5);
          .check {
            width: 14px;
            height: 14px;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              width: 12px;
              height: 12px;
              //   margin-top: -20px;
            }
          }
          .text {
            margin-left: 5px;
            color: #fff;
            font-size: 13px;
          }
        }
        .Clockin:hover {
          cursor: pointer;
          background: #1a9dc6;
        }
      }

      .Allmsg {
        padding: 20px;
        width: 336px;
        height: 491px;
        background: #fff;
        border-radius: 5px 5px;
        p {
          text-align: left;
          height: 15px;
          width: 100%;
          font-size: 12px;
          color: #6c757d !important;
          margin-bottom: 15px;
        }
        li {
          svg {
            width: 14px;
            height: 15px;
            margin-right: 8px;
          }
          padding: 8px 16px;
          width: 290px;
          height: 40px;
        }
        .is_active {
          cursor: pointer;
          color: #2474f9;
          svg {
            color: #2474f9;
          }
        }
        li:hover {
          cursor: pointer;
          color: #2474f9;
          svg {
            color: #2474f9;
          }
        }
      }
      .center,
      .count {
        ul {
          list-style: none;
          & li:nth-child(4) {
            svg {
              transform: rotate(3.142rad);
            }
          }
        }
      }

      // 账号信息
      .count {
        margin-top: 24px;
        & li:nth-child(3) {
          display: flex;
          align-items: center;

          span {
            display: inline-block;
            width: 69px;
            height: 18px;
            background: rgba(255, 91, 91, 0.18);
            color: #ff5b5b;
            font-size: 12px;
            margin-left: auto;
            text-align: center;
            border-radius: 5px 5px;
          }
        }
      }
    }
    .Message {
      width: 1053px;
      height: 569px;
      background: #fff;
      margin-left: 20px;
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
      .headerImg {
        margin: 20px 0 15px 24px;
        width: 50px;
        height: 50px;
        border-radius: 25px 25px;
        background: #6c757d;
      }
      .msg {
        display: flex;
        flex-wrap: wrap;
        padding-left: 20px;

        .label {
          color: #1a1a1a;
          font-size: 15px;
          margin-bottom: 5px;
        }
        .input {
          margin: 0 20px 16px 0;
          .el-input {
            width: 496px;
            height: 38px;
          }
          .el-textarea {
            width: 1011px;
            height: 110px;
            margin-bottom: 36px;
          }
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
  }
}
</style>
