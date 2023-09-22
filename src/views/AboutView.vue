<script setup>
import Header from '@/components/common/Header.vue'
import Foot from '@/components/common/Foot.vue'
import { defineComponent, ref } from 'vue'
let tabs = [
  {
    tab_name: '公司概况',
    tab_key: 'company_situation',
  },
  {
    tab_name: '发展历程',
    tab_key: 'development',
  },
  ,
  {
    tab_name: '团队成员',
    tab_key: 'members',
  },
];
const tabKey = ref('company_situation')
</script>

<template>
  <div class="Vip">
    <!-- 头部介绍 -->
    <div class="container px-4">
      <div class="common-center-container">
        <div class="index-module--aboutUs">
          <a class="index-module">公司介绍</a>
          <!-- <a class="index-module" v-for="item in tabs">{{
            item.tab_name
          }}</a> -->
        </div>
      </div>
    </div>
    <div>
      <div class="container px-4">
        <div class="index-module--whoAreWe--imKed">
          <div class="common-center-container">
            <h2>我们是谁</h2>
            <p class="pt-5">
              wlb965 成立于 2015
              年，是一家企业级开源分布式数据库厂商，提供包括开源分布式数据库产品、解决方案与咨询、技术支持与培训认证服务，致力于为全球行业用户提供稳定高效、安全可靠、开放兼容的新型数据服务平台，解放企业生产力，加速企业数字化转型升级。在帮助企业释放增长空间的同时，也提供了一份具有高度可参考性的开源建设实践样本。
              由 wlb965 创立的分布式关系型数据库
              TiDB，为企业关键业务打造，具备「分布式强一致事务、在线弹性水平扩展、故障自恢复的高可用、跨数据中心多活」等企业级核心特性，帮助企业最大化发挥数据价值，充分释放企业增长空间。
            </p>
            <div
              class="index-module--keyNumber--4xZ4D is-flex is-flex-wrap-wrap"
            >
              <div
                class="column is-half is-full-mobile has-text-centered px-4 py-0"
              >
                <p class="index-module--value--ovF-L">33000 *</p>
                <p class="index-module--description--F8RZ3">
                  wlb965 项目在 GitHub 上已总计获得超过 33000 颗星
                </p>
              </div>
              <div
                class="column is-half is-full-mobile has-text-centered px-4 py-0"
              >
                <p class="index-module--value--ovF-L">9</p>
                <p class="index-module--description--F8RZ3">
                  9 个全球分支机构分布于中国、美国、新加坡、日本
                </p>
              </div>
              <div
                class="column is-half is-full-mobile has-text-centered px-4 py-0"
              >
                <p class="index-module--value--ovF-L">20 +</p>
                <p class="index-module--description--F8RZ3">
                  服务的客户超过 20 个国家
                </p>
              </div>
              <div
                class="column is-half is-full-mobile has-text-centered px-4 py-0"
              >
                <p class="index-module--value--ovF-L">3000 +</p>
                <p class="index-module--description--F8RZ3">
                  超过 3000 家企业用于线上生产环境
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-4">
        <div class="index-module--socialResponsibilities--NYVNZ">
          <div class="common-center-container">
            <h2>我们的社会责任</h2>
            <div class="index-module--responsibility--CtULx">
              <h4>相信开放的力量</h4>
              <p>
                从公司成立之初就将“开源”作为核心战略来推进，坚信开源是当今基础软件领域取得世界范围内成功的最佳路径。开源项目包括
                TiDB、TiKV、Chaos Mesh 等，截至 2020 年底，公司在 CNCF
                全球贡献榜中连续两年保持第六位，在中国企业中贡献排名高居第一。
              </p>
            </div>
            <div class="index-module--responsibility--CtULx">
              <h4>人才培养与科技创新</h4>
              <p>
                wlb965 相关技术理论已进入 University of
                Wisconsin-Madison（威斯康辛麦迪逊）、Purdue University
                （普渡大学）的课纲，在国内也已经与华中科技大学、中国科学技术大学、清华大学等高校开展合作，深入探索数据库内核，并通过
                wlb965 Education
                建立了完整的技术生态，从内核研发、部署运维、应用开发等多个角度，助推数据库人才培养和科技创新。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="index-module--ourTeam--IsZjh">
        <div class="container px-4">
          <div class="common-center-container">
            <h2>我们的团队</h2>
            <p class="index-module--description--noHqh">
              wlb965 和 wlb965
              已经超出了我们当年的想象，我们日积月累的沉淀创造了无尽的价值，wlb965
              在挑战中已成长为了服务的客户超过 20
              个国家的企业级开源分布式数据库厂商。富有好奇心和创造力的 wlb965ers
              用泪水和汗水体现着我和我们的价值。我们的产品分布式关系型数据库
              TiDB，也为服务的众多企业的关键业务打造提供了核心价值，帮助企业最大化发挥数据价值，充分释放了企业增长空间。
            </p>
          </div>
        </div>
      </div>
      <div class="index-module--ourUser--L9Y22" style="padding-top: 3.75rem">
        <div class="container px-4">
          <div class="common-center-container">
            <h2 style="padding-bottom: 1.75rem">我们的用户</h2>
            <img
              alt="关于我们-公司概况-我们的用户"
              src="@/assets/img/logo_wall.png"
            />
          </div>
        </div>
      </div>
      <div class="index-module--contactUsMore--8Jskc">
        <div class="container px-4">
          <div class="common-center-container">
            <div
              class="index-module--listContent--kAm0A"
              data-role="list-content"
            >
              <div class="index-module--listLoop--W1gQW" data-role="list-loop">
                <div class="index-module--inner--3XmiS">
                  <img
                    src="@/assets/img/recruit.svg"
                    class="index-module--icon--P9ig-"
                  />
                  <h3>招贤纳士</h3>
                  <p>加入 wlb965，用科技改变世界</p>
                  <div class="index-module--btnContent--832CE">
                    <a class="button is-primary" href="/join-us">了解更多</a>
                  </div>
                </div>
              </div>
              <div class="index-module--listLoop--W1gQW" data-role="list-loop">
                <div class="index-module--inner--3XmiS">
                  <img
                    src="@/assets/img/email.svg"
                    class="index-module--icon--P9ig-"
                  />
                  <h3>联系我们</h3>
                  <p>
                    对 wlb965
                    产品、技术支持、合作等有任何问题，请通过这些渠道跟我们联系
                  </p>
                  <div class="index-module--btnContent--832CE">
                    <a class="button is-primary" href="/contact">了解更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.index-module--aboutUs {
  border-bottom: 1px solid rgba(44, 44, 44, 0.15);
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.common-center-container {
  margin: 0 auto;
  max-width: 59rem;
}

.index-module--aboutUs a {
  color: #2c2c2c;
  line-height: 3.75rem;
  position: relative;
  margin-right: 3rem;
}

.pt-5 {
  padding-top: 1.5rem !important;
}

h2 {
  font-size: 1.75rem;
  line-height: 1.75;
}

.index-module--whoAreWe--imKed {
  color: #2c2c2c;
  padding-top: 5rem;
}
.index-module--keyNumber--4xZ4D {
  background: #f7f8f9;
  border-radius: 0.625rem;
  margin-top: 1.5rem;
  padding: 3.75rem 6rem 0;
}

.column.is-half,
.column.is-half-tablet {
  flex: none;
  width: 50%;
}

.has-text-centered {
  text-align: center !important;
}
.px-4 {
  padding-right: 1rem !important;
}
.pl-4,
.px-4 {
  padding-left: 1rem !important;
}
.py-0 {
  padding-bottom: 0 !important;
  padding-top: 0 !important;
}

.is-flex {
  display: flex !important;
}
.is-flex-wrap-wrap {
  flex-wrap: wrap !important;
}

.index-module--keyNumber--4xZ4D .index-module--value--ovF-L {
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(277.4deg, #3d3fea, #00aeef);
  display: inline-block;
  font-size: 2.25rem;
  font-weight: 700;
}

.index-module--whoAreWe--imKed p {
  color: rgba(44, 44, 44, 0.8);
  font-size: 1rem;
  font-weight: 400;
  white-space: pre-line;
}

.index-module--keyNumber--4xZ4D .index-module--description--F8RZ3 {
  color: #2c2c2c;
  padding-bottom: 3.75rem;
  padding-top: 1rem;
}
.index-module--whoAreWe--imKed p {
  color: rgba(44, 44, 44, 0.8);
  font-size: 1rem;
  font-weight: 400;
  white-space: pre-line;
}

.index-module--valueAndMission--xp9ig
  .index-module--backgroundContainer---zEhT {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.625rem;
  color: #fff;
  margin-top: 1.5rem;
  padding: 3.375rem;
  text-align: center;
  width: 100%;
}

.index-module--socialResponsibilities--NYVNZ
  .index-module--responsibility--CtULx {
  padding-top: 1.5rem;
}

.index-module--socialResponsibilities--NYVNZ {
  color: #2c2c2c;
  padding-top: 3.75rem;
}

.index-module--socialResponsibilities--NYVNZ
  .index-module--responsibility--CtULx
  h4 {
  font-size: 1.25rem;
  font-weight: 400;
}

.index-module--socialResponsibilities--NYVNZ
  .index-module--responsibility--CtULx
  h4:before {
  background: #3d3fea;
  content: '';
  float: left;
  height: 1.25rem;
  margin: 0.4375rem 1rem 0.4375rem 0;
  width: 0.25rem;
}

.index-module--socialResponsibilities--NYVNZ
  .index-module--responsibility--CtULx
  p {
  color: rgba(44, 44, 44, 0.8);
  font-size: 1rem;
  font-weight: 400;
  padding-top: 1rem;
}

.index-module--ourTeam--IsZjh {
  color: #2c2c2c;
  margin-top: 2.5rem;
}

.index-module--ourTeam--IsZjh .index-module--description--noHqh {
  margin-top: 1.5rem;
  opacity: 0.8;
}

.index-module--ourTeam--IsZjh .index-module--listShow--x7N7C {
  margin-top: 1.5rem;
}

.index-module--listLoop--W1gQW {
  flex: 1 1;
  margin-top: 2rem;
  max-width: 50%;
  padding: 0 1rem;
}

.index-module--ourTeam--IsZjh
  .index-module--inner--rPmz1
  .index-module--header--xMzD7
  .index-module--listTitle--otWVV {
  align-items: center;
  background: rgba(0, 4, 49, 0.6);
  border-radius: 0.625rem 0.625rem 0 0;
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
}

img {
  height: auto;
  max-width: 100%;
}

.index-module--listLoop--W1gQW {
  flex: 1 1;
  margin-top: 2rem rem;
  max-width: 50%;
  padding: 0 1rem;
}

.index-module--listContent--kAm0A
  [data-role='list-loop'].index-module--listLoop--W1gQW,
.index-module--listLoop--W1gQW {
  max-width: 50%;
  min-width: 50%;
}

.index-module--listContent--kAm0A {
  display: flex;
}

.index-module--listLoop--W1gQW {
  margin-top: 1rem;
  padding: 0 0.5rem;
}
.index-module--listLoop--W1gQW {
  flex: 1 1;
  margin-top: 2rem;
  max-width: 50%;
  // padding: 0 1rem;
}

.index-module--inner--3XmiS .index-module--icon--P9ig- {
  height: 64px;
  margin: 0 auto;
  text-align: center;
  width: 64px;
}

.index-module--inner--3XmiS {
  background: #fff;
  border-radius: 0.625rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 1.5rem 2rem;
  text-align: center;
}

.index-module--inner--3XmiS h3 {
  margin: 1.5rem 0 1rem;
}

.index-module--contactUsMore--8Jskc {
  // background: #f7f8f9;
  color: #2c2c2c;
  padding: 1.5rem 0;
}

.index-module--inner--3XmiS p {
  flex: 1 1;
  opacity: 0.6;
  overflow: hidden;
}

.index-module--inner--3XmiS .index-module--btnContent--832CE {
  margin-top: 1.5rem;
}

.button.is-primary {
  color: #fff;
}

.button.is-primary {
  background-color: #3d3fea;
  border-color: transparent;
}
.index-module--inner--3XmiS a {
  min-width: 7rem;
}
.button {
  border-radius: 0.375rem;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s;
}
.button {
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
}

a {
  color: inherit;
  text-decoration: none;
}

/* */
</style>
