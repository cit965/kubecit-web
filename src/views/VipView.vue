<script>
import Header from '@/components/common/Header.vue';
import Foot from '@/components/common/Foot.vue';
import { defineComponent, ref } from 'vue';
</script>

<template>
  <div class="Vip">
    <!-- 头部介绍 -->
    <div class="introduce">
      <h1>赞助VIP会员，全站资源免费下载！</h1>
      <h5>全站清爽无广告 | 随时随地高速下载 | 资源永久免费更新</h5>
    </div>
    <!-- 中间vip介绍 -->
    <div class="Vip_Detail">
      <!-- 体验会员 -->
      <div class="box">
        <div class="Experience">
          <div class="svg">
            <svg class="svgs" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                style="fill: #f78da7"
                d="M71.37 704.133c-51.715 51.707-77.269 181.055-70.219 318.688 138.23 7.117 267.222-18.703 318.73-70.211 80.578-80.559 85.754-187.973 12.621-261.098-73.129-73.117-180.562-67.941-261.132 12.621zM234.636 872.195c-17.172 17.168-60.168 25.773-106.238 23.398-2.348-45.871 6.168-88.984 23.406-106.219 26.855-26.852 62.66-28.578 87.035-4.207 24.375 24.375 22.652 60.176-4.203 87.027zM1010.326 38.594c-2.352-10.926-13.977-22.531-24.902-24.867-64.191-13.727-114.496-13.727-164.586-13.727-206.437 0-330.238 110.406-422.656 256h-208.406c-32.594 0-71.199 23.848-85.777 52.996l-98.844 197.598c-2.917 6.275-4.741 13.593-5.028 21.303l-0.003 0.103c0.009 26.509 21.499 47.995 48.007 48l207.907 0c0.004-0 0.009-0 0.014-0 106.041 0 192.005 85.96 192.013 191.999l0 0.001v208c0.009 26.509 21.499 47.995 48.007 48l0.001 0c7.814-0.298 15.13-2.121 21.76-5.178l-0.354 0.146 197.496-98.813c29.121-14.57 52.949-53.129 52.949-85.687v-208.875c145.176-92.625 256.039-216.813 256.039-422.188 0.187-50.301 0.187-100.602-13.637-164.812zM716.276 544.664c-50.664 32.324-15.012 13.48-198.633 104.418-29.484-63.448-79.351-113.287-141.040-141.991l-1.78-0.744c90.746-183.367 71.793-147.5 104.426-198.906 94.078-148.207 196.234-211.441 341.589-211.441 35.297 0 67.082 0 102.746 4.496 4.609 36.527 4.488 68.937 4.363 102.91-0 144.539-63.305 246.598-211.672 341.258zM736.112 208c-44.178 0.007-79.988 35.821-79.988 80 0 44.183 35.817 80 80 80s80-35.817 80-80v0c-0.022-44.178-35.833-79.984-80.010-80l-0.001-0z"></path>
            </svg>
          </div>

          <!-- 名字 -->
          <h3 class="name">体验会员</h3>
          <!-- 价格 -->
          <div class="price">
            <div class="unit">¥</div>
            <div class="num">88.8</div>
            <div class="day">/3天</div>
          </div>
          <!-- 详情 -->
          <div class="detail_all">
            <!-- 非高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.experience.default" :key="index">
              <div class="msg_svg">
                <svg
                  class="default_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 16c-273.934 0-496 222.066-496 496s222.066 496 496 496 496-222.066 496-496-222.066-496-496-496zM512 112c221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400-221.064 0-400-178.902-400-400 0-221.064 178.902-400 400-400zM792.408 372.534l-45.072-45.436c-9.334-9.41-24.53-9.472-33.94-0.136l-282.704 280.432-119.584-120.554c-9.334-9.41-24.53-9.472-33.94-0.138l-45.438 45.072c-9.41 9.334-9.472 24.53-0.136 33.942l181.562 183.032c9.334 9.41 24.53 9.472 33.94 0.136l345.178-342.408c9.408-9.336 9.468-24.532 0.134-33.942z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }}
                <br /><span>{{ index == 1 ? VipDetail.experience.special[0] : index == 2 ? VipDetail.experience.special[1] : '' }}</span>
              </div>
            </div>
            <!-- 高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.experience.light" :key="index">
              <div class="msg_svg">
                <svg
                  class="light_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1008 512c0 273.934-222.066 496-496 496s-496-222.066-496-496 222.066-496 496-496 496 222.066 496 496zM454.628 774.628l368-368c12.496-12.496 12.496-32.758 0-45.254l-45.254-45.254c-12.496-12.498-32.758-12.498-45.256 0l-300.118 300.116-140.118-140.118c-12.496-12.496-32.758-12.496-45.256 0l-45.254 45.254c-12.496 12.496-12.496 32.758 0 45.254l208 208c12.498 12.498 32.758 12.498 45.256 0.002z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }}<br /><span>{{ VipDetail.experience.special[2] }}</span>
              </div>
            </div>
          </div>

          <!-- 立即开通 -->
          <div class="PayFor">立即开通</div>
        </div>
      </div>
      <!-- 包年会员 -->
      <div class="box">
        <div class="AllYear">
          <div class="svg">
            <svg class="svgs" style="display: inline-block; vertical-align: middle" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                style="fill: #00d084"
                d="M927.4 0h-702.8c-8.4 0-16.2 4.4-20.6 11.6l-200.6 325.6c-5.4 8.8-4.4 20.2 2.4 28l552 650.4c9.6 11.2 26.8 11.2 36.4 0l552-650.4c6.8-7.8 7.6-19.2 2.4-28l-200.6-325.6c-4.4-7.2-12.2-11.6-20.6-11.6zM900.2 72l148.6 248h-166l-113.6-248h131zM690 72l113.6 248h-455.4l113.8-248h228zM251.8 72h131l-113.6 248h-166l148.6-248zM122.4 384h146l163.6 384-309.6-384zM346.4 384h459l-229.4 527.6-229.6-527.6zM720 768l163.6-384h146l-309.6 384z"></path>
            </svg>
          </div>

          <!-- 名字 -->
          <div class="name">包年会员</div>
          <!-- 价格 -->
          <div class="price">
            <div class="unit">¥</div>
            <div class="num">398</div>
            <div class="day">/年</div>
          </div>
          <!-- 详情 -->
          <div class="detail_all">
            <!-- 非高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.AllYear.default" :key="index">
              <div class="msg_svg">
                <svg
                  class="default_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 16c-273.934 0-496 222.066-496 496s222.066 496 496 496 496-222.066 496-496-222.066-496-496-496zM512 112c221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400-221.064 0-400-178.902-400-400 0-221.064 178.902-400 400-400zM792.408 372.534l-45.072-45.436c-9.334-9.41-24.53-9.472-33.94-0.136l-282.704 280.432-119.584-120.554c-9.334-9.41-24.53-9.472-33.94-0.138l-45.438 45.072c-9.41 9.334-9.472 24.53-0.136 33.942l181.562 183.032c9.334 9.41 24.53 9.472 33.94 0.136l345.178-342.408c9.408-9.336 9.468-24.532 0.134-33.942z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }} <br /><span>{{
                  index == 1
                    ? VipDetail.AllYear.special[0]
                    : index == 2
                    ? VipDetail.AllYear.special[1]
                    : index == 3
                    ? VipDetail.AllYear.special[2]
                    : ''
                }}</span>
              </div>
            </div>
            <!-- 高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.AllYear.light" :key="index">
              <div class="msg_svg">
                <svg
                  class="light_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1008 512c0 273.934-222.066 496-496 496s-496-222.066-496-496 222.066-496 496-496 496 222.066 496 496zM454.628 774.628l368-368c12.496-12.496 12.496-32.758 0-45.254l-45.254-45.254c-12.496-12.498-32.758-12.498-45.256 0l-300.118 300.116-140.118-140.118c-12.496-12.496-32.758-12.496-45.256 0l-45.254 45.254c-12.496 12.496-12.496 32.758 0 45.254l208 208c12.498 12.498 32.758 12.498 45.256 0.002z"></path>
                </svg>
              </div>
              <div class="msg_content">{{ item }}</div>
            </div>
          </div>

          <!-- 立即开通 -->
          <div class="PayFor">立即开通</div>
        </div>
      </div>
      <!-- 永久会员 -->

      <div class="box Forevers">
        <!-- <div class="Header">限时特惠</div> -->
        <div class="Forever">
          <!--  -->
          <div class="Header">限时特惠</div>
          <div class="svg">
            <svg class="svgs" style="display: inline-block; vertical-align: middle" viewBox="0 0 1280 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                style="fill: #9b51e0"
                d="M1072 960h-864c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h864c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM1168 320c-61.8 0-112 50.2-112 112 0 15.2 3 29.6 8.6 42.8l-112.6 67.6c-10.4 6.2-21.6 9.2-32.8 9.2-22.2 0-43.8-11.6-55.6-32.2l-148.8-260.4c22.6-20.6 37.2-50 37.2-83 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 33 14.6 62.4 37.2 82.8l-148.8 260.4c-11.8 20.8-33.4 32.2-55.6 32.2-11.2 0-22.6-3-32.8-9.2l-112.6-67.6c5.4-13.2 8.6-27.6 8.6-42.8 0-61.8-50.2-112-112-112s-112 50.4-112 112.2 50.2 112 112 112c4 0 7.8-0.8 11.6-1.2l132.4 353.2h768l132.4-353.2c3.8 0.4 7.6 1.2 11.6 1.2 61.8 0 112-50.2 112-112s-50.2-112-112-112zM640 128c26.4 0 48 21.6 48 48s-21.6 48-48 48-48-21.6-48-48 21.6-48 48-48zM112 480c-26.4 0-48-21.6-48-48s21.6-48 48-48 48 21.6 48 48-21.6 48-48 48zM979.6 832h-679.2l-112-298.8 106.8 64c20 12 42.6 18.2 65.8 18.2 45.8 0 88.4-24.8 111.2-64.6l151.2-264.6c5.6 0.8 11 1.6 16.8 1.6s11.2-0.8 16.8-1.6l151 264.8c22.8 39.8 65.4 64.4 111.2 64.4 23.2 0 45.8-6.4 65.8-18.2l106.8-64-112.2 298.8zM1168 480c-26.4 0-48-21.6-48-48s21.6-48 48-48 48 21.6 48 48-21.6 48-48 48z"></path>
            </svg>
          </div>

          <!-- 名字 -->
          <div class="name">永久会员</div>
          <!-- 价格 -->
          <div class="price">
            <div class="unit">¥</div>
            <div class="num">798</div>
            <div class="day">/终身</div>
          </div>
          <!-- 详情 -->
          <div class="detail_all">
            <!-- 非高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.Forever.default" :key="index">
              <div class="msg_svg">
                <svg
                  class="default_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 16c-273.934 0-496 222.066-496 496s222.066 496 496 496 496-222.066 496-496-222.066-496-496-496zM512 112c221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400-221.064 0-400-178.902-400-400 0-221.064 178.902-400 400-400zM792.408 372.534l-45.072-45.436c-9.334-9.41-24.53-9.472-33.94-0.136l-282.704 280.432-119.584-120.554c-9.334-9.41-24.53-9.472-33.94-0.138l-45.438 45.072c-9.41 9.334-9.472 24.53-0.136 33.942l181.562 183.032c9.334 9.41 24.53 9.472 33.94 0.136l345.178-342.408c9.408-9.336 9.468-24.532 0.134-33.942z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }} <br />
                <span
                  >{{
                    index == 1
                      ? VipDetail.Forever.special[0]
                      : index == 2
                      ? VipDetail.Forever.special[2]
                      : index == 3
                      ? VipDetail.Forever.special[2]
                      : ''
                  }}
                </span>
                <span>{{ index == 1 ? VipDetail.Forever.special[1] : '' }}</span>
              </div>
            </div>
            <!-- 高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.Forever.light" :key="index">
              <div class="msg_svg">
                <svg
                  class="light_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1008 512c0 273.934-222.066 496-496 496s-496-222.066-496-496 222.066-496 496-496 496 222.066 496 496zM454.628 774.628l368-368c12.496-12.496 12.496-32.758 0-45.254l-45.254-45.254c-12.496-12.498-32.758-12.498-45.256 0l-300.118 300.116-140.118-140.118c-12.496-12.496-32.758-12.496-45.256 0l-45.254 45.254c-12.496 12.496-12.496 32.758 0 45.254l208 208c12.498 12.498 32.758 12.498 45.256 0.002z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }}<br />
                <span>{{ index == 0 ? VipDetail.Forever.special[3] : index == 1 ? VipDetail.Forever.special[4] : '' }} </span>
              </div>
            </div>
          </div>

          <!-- 立即开通 -->
          <div class="PayFor">立即开通</div>
        </div>
      </div>
      <!-- 2年会员 -->
      <div class="box">
        <div class="TwoYear">
          <div class="svg">
            <svg class="svgs" style="display: inline-block; vertical-align: middle" viewBox="0 0 896 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                style="fill: #2184f9"
                d="M647.12 102.4c-41.6 38.6-79.16 79.18-112.44 119.94-54.52-75.1-122.12-151.28-198.68-222.34-196.52 182.34-336 419.92-336 563.2 0 254.5 200.58 460.8 448 460.8s448-206.3 448-460.8c0-106.54-103.96-326.28-248.88-460.8zM608.18 783.7c-43.32 30.32-96.74 48.3-154.46 48.3-144.3 0-261.72-95.48-261.72-250.5 0-77.22 48.62-145.26 145.58-261.5 13.86 15.96 197.66 250.68 197.66 250.68l117.26-133.76c8.28 13.7 15.82 27.1 22.54 39.94 54.7 104.38 31.62 237.94-66.86 306.84z"></path>
            </svg>
          </div>

          <!-- 名字 -->
          <div class="name">2年会员(优惠)</div>
          <!-- 价格 -->
          <div class="price">
            <div class="unit">¥</div>
            <div class="num">598</div>
            <div class="day">/2年</div>
          </div>
          <!-- 详情 -->
          <div class="detail_all">
            <!-- 非高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.TwoYear.default" :key="index">
              <div class="msg_svg">
                <svg
                  class="default_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 16c-273.934 0-496 222.066-496 496s222.066 496 496 496 496-222.066 496-496-222.066-496-496-496zM512 112c221.064 0 400 178.902 400 400 0 221.064-178.902 400-400 400-221.064 0-400-178.902-400-400 0-221.064 178.902-400 400-400zM792.408 372.534l-45.072-45.436c-9.334-9.41-24.53-9.472-33.94-0.136l-282.704 280.432-119.584-120.554c-9.334-9.41-24.53-9.472-33.94-0.138l-45.438 45.072c-9.41 9.334-9.472 24.53-0.136 33.942l181.562 183.032c9.334 9.41 24.53 9.472 33.94 0.136l345.178-342.408c9.408-9.336 9.468-24.532 0.134-33.942z"></path>
                </svg>
              </div>
              <div class="msg_content">
                {{ item }}<br />
                <span
                  >{{
                    index == 1
                      ? VipDetail.TwoYear.special[0]
                      : index == 2
                      ? VipDetail.TwoYear.special[1]
                      : index == 3
                      ? VipDetail.TwoYear.special[2]
                      : index == 4
                      ? VipDetail.TwoYear.special[3]
                      : ''
                  }}
                </span>
              </div>
            </div>
            <!-- 高亮行数据 -->
            <div class="detail_msg" v-for="(item, index) in VipDetail.TwoYear.light" :key="index">
              <div class="msg_svg">
                <svg
                  class="light_svg"
                  style="display: inline-block; vertical-align: middle"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1008 512c0 273.934-222.066 496-496 496s-496-222.066-496-496 222.066-496 496-496 496 222.066 496 496zM454.628 774.628l368-368c12.496-12.496 12.496-32.758 0-45.254l-45.254-45.254c-12.496-12.498-32.758-12.498-45.256 0l-300.118 300.116-140.118-140.118c-12.496-12.496-32.758-12.496-45.256 0l-45.254 45.254c-12.496 12.496-12.496 32.758 0 45.254l208 208c12.498 12.498 32.758 12.498 45.256 0.002z"></path>
                </svg>
              </div>
              <div class="msg_content">{{ item }}</div>
            </div>
          </div>

          <!-- 立即开通 -->
          <div class="PayFor">立即开通</div>
        </div>
      </div>
    </div>

    <!-- 折叠面板 -->
    <div class="Collapse">
      <h2>常见问题</h2>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="支持的课程平台有哪些？" name="1">
            <div>
              本站目前支持的课程平台有20+，以Udemy，Coursera等大型平台为主。
              <br />
              所有课程，均配备中英文双字幕。
            </div>
            <div>详情可查看：xxxxx</div>
          </el-collapse-item>
          <el-collapse-item title="是否支持国内课程平台，和中文课程下载？" name="2">
            <div>本站只支持国外课程平台和网站，暂不提供国内课程平台和中文课程下载。</div>
            <div>请注意，国外平台中的中文课程，也是不支持的。</div>
          </el-collapse-item>
          <el-collapse-item title="支持的课程平台和课程数量会继续增加吗？" name="3">
            <div>本站支持的课程平台以及课程数量都在不断增加中。</div>
          </el-collapse-item>
          <el-collapse-item title="购买过的课程，可以免费更新吗？" name="4">
            <div>本站所有课程支持免费更新，具体规则如下：</div>
            <div>
              <ul>
                <li>单独付费购买的课程或者其他资源，可以永久免费更新，无时间限制</li>
                <li>购买会员的用户，在会员到期后，下载的内容将无法继续获得更新</li>
                <li>购买永久会员的用户，可以终生永久免费更新，没有时间限制</li>
              </ul>
            </div>
          </el-collapse-item>
          <el-collapse-item title="开通会员后，网站中的其他内容也可以免费下载吗？" name="5">
            <div>
              本站是综合资源网站，除了课程之外，还有常用软件，模板素材等内容。
              <br />
              开通会员账号之后，网站中的所有内容均可免费下载。
            </div>
          </el-collapse-item>
          <el-collapse-item title="会员开通之后可以退款吗？" name="6">
            <div>
              由于商品的特殊性，本站不支持退款，所以在开通会员之前，请确认你的需求。<br />

              如果不放心，可以先单独购买课程，或者开通体验会员体验，满意再升级其他会员套餐。<br />

              体验会员，7天内升级永久会员，可以全额抵扣，升级其他会员套餐不支持抵扣。
            </div>
          </el-collapse-item>
          <el-collapse-item title="这个网站已经运行多长时间了，会不会有安全问题？" name="7">
            <div>
              本站从2020年开始运行，截至目前已经有3年多时间，诚信经营，会员过万。
              <br />
              本站在国内外均有服务器，所有数据均有3级容灾备份，安全问题不用担心。
            </div>
          </el-collapse-item>
          <el-collapse-item title="遇到问题怎样解决？" name="8">
            <div>
              遇到问题首先可以先到网站的 问答社区 -> 常见问题 寻找答案，绝大部分问题在这里都有解决方案。<br />
              如果还是不能解决，可以加站长微信：xxxx，备注来源，通过后请直接说明遇到的问题。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <!-- 注意事项 -->
    <div class="warning">
      <div class="Content">
        <div class="img">
          <svg x="0px" y="0px" viewBox="0 0 486.463 486.463">
            <g>
              <g>
                <path
                  d="M243.225,333.382c-13.6,0-25,11.4-25,25s11.4,25,25,25c13.1,0,25-11.4,24.4-24.4 C268.225,344.682,256.925,333.382,243.225,333.382z"></path>
                <path
                  d="M474.625,421.982c15.7-27.1,15.8-59.4,0.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4,16.3-74.9,43.4 l-156.8,271.5c-15.6,27.3-15.5,59.8,0.3,86.9c15.6,26.8,43.5,42.9,74.7,42.9h312.8 C430.725,465.582,458.825,449.282,474.625,421.982z M440.625,402.382c-8.7,15-24.1,23.9-41.3,23.9h-312.8 c-17,0-32.3-8.7-40.8-23.4c-8.6-14.9-8.7-32.7-0.1-47.7l156.8-271.4c8.5-14.9,23.7-23.7,40.9-23.7c17.1,0,32.4,8.9,40.9,23.8 l156.7,271.4C449.325,369.882,449.225,387.482,440.625,402.382z"></path>
                <path
                  d="M237.025,157.882c-11.9,3.4-19.3,14.2-19.3,27.3c0.6,7.9,1.1,15.9,1.7,23.8c1.7,30.1,3.4,59.6,5.1,89.7 c0.6,10.2,8.5,17.6,18.7,17.6c10.2,0,18.2-7.9,18.7-18.2c0-6.2,0-11.9,0.6-18.2c1.1-19.3,2.3-38.6,3.4-57.9 c0.6-12.5,1.7-25,2.3-37.5c0-4.5-0.6-8.5-2.3-12.5C260.825,160.782,248.925,155.082,237.025,157.882z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="text">
          <p>请注意：</p>
          <p>本站从未授权过任何代理商，也没有分站。www.xxxx.com 是唯一官网。</p>
        </div>
      </div>
    </div>

    <!-- JoinIN -->
    <div class="JoinIn">
      <p>加入会员，全站资源免费下载</p>
      <p>尽情享受，在知识的海洋中自由遨游</p>
      <div class="Join">立即加入</div>
    </div>
  </div>
</template>
<script setup>
// 会员详情
const VipDetail = {
  experience: {
    default: ['会员时长: 3天', '每日可免费下载', '课程代找服务'],
    light: ['7天内升级永久会员'],
    special: ['任意10套课程', '享受会员折扣', '可全额折扣'],
  },
  AllYear: {
    default: ['会员时长: 1年', '每日可免费下载', '全站所有资源', '提供12次'],
    light: ['推荐奖励：20%'],
    special: ['10个资源', '免费下载', '免费资源代找服务'],
  },
  Forever: {
    default: ['会员时长：永久', '每日可免费下载', '全站所有资源'],
    light: ['不限次享受', '可下载所有', '享受30%推荐奖励'],
    special: ['20个', '资源', '免费下载', '免费资源代找服务', '版权受限的资源'],
  },
  TwoYear: {
    default: ['会员时长：2年', '每日可免费下载', '全站所有资源', '提供24次'],
    light: ['推荐奖励：20%'],
    special: ['10个资源', '免费下载', '免费资源代找服务', '版权受限的资源'],
  },
};
// 展开
const activeNames = ref([]);
</script>
<style scoped lang="scss">
.Vip {
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #edf2f3;
  // vip标题
  .introduce {
    padding: 80px;
    width: 1852px;
    height: 250px;
    text-align: center;
    color: #34495e;
    background: linear-gradient(238.72deg, #ebff00 0%, #7700d5 100%), linear-gradient(64.82deg, #ad00ff 0%, #ff0000 100%),
      linear-gradient(65.03deg, #00ffff 0%, #ff0000 99.79%), radial-gradient(67.08% 100% at 50% 0%, #ff00c7 0%, #1400ff 100%),
      radial-gradient(100% 140% at 100% 0%, #5ed500 0%, #2200aa 100%);
    background-blend-mode: color-dodge, difference, lighten, color-dodge, normal;
    border-radius: 10px 10px;
    h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    h5 {
      font-weight: 700;
      font-size: 20px;
    }
  }
  //   vip种类介绍
  .Vip_Detail {
    margin-top: 80px;
    width: 1024px;
    height: 739px;
    display: flex;
    .box {
      padding-top: 10px;
      width: 263px;
      height: 100%;
      // background: #00ffff;
      // border: 1px solid black;
      display: flex;
      align-items: center;
      //限时特惠
      .Header {
        width: 238px;
        height: 32px;
        background-color: #000;
        font-weight: 400;
        font-size: 12px;
        color: #fefefe;
      }
      //  体验会员
      .Experience,
      .AllYear,
      .Forever,
      .TwoYear {
        width: 263px;
        height: 555px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        .svgs {
          width: 40px;
          height: 40px;
        }
        .name {
          margin-top: 24px;
        }

        // 价格
        .price {
          margin-top: 25px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: row;
          column-gap: 5px;
          .unit {
            font-size: 20px;
            font-weight: 700 !important;
            color: #a1a1aa;
          }
          .num {
            font-size: 40px;
            line-height: 35px;
            font-weight: 600 !important;
            color: #34495e;
          }
          .day {
            font-size: 20px;
            font-weight: 700 !important;
            color: #a1a1aa;
          }
        }
        // 详情
        .detail_all {
          margin-top: 36px;
          width: 183px;
          height: 198px;
        }
        .detail_all .detail_msg {
          display: flex;
          margin-top: 10px;
          align-items: center;
          .msg_svg .default_svg {
            width: 18px;
            height: 18px;
            fill: #2184f9 !important;
          }
          .msg_svg .light_svg {
            width: 18px;
            height: 18px;
            fill: #2184f9 !important;
          }
          .msg_content {
            font-weight: 400;
            margin-left: 15px;
          }
        }

        // 按钮
        .PayFor {
          margin-top: 48px;
          width: 183px;
          height: 56px;
          background-color: var(--wp--preset--color--pale-pink, #f78da7);
          line-height: 56px;

          text-align: center;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }
      }

      .Experience,
      .AllYear,
      .Forever,
      .TwoYear {
        padding: 36px 40px;
        // 按钮
      }
      .AllYear {
        width: 263px;
        height: 588px;
        .detail_all {
          height: 232px;
        }
        .PayFor {
          background-color: var(--wp--preset--color--pale-pink, #00d084);
        }
      }
      .Forever {
        padding-top: 0;
        box-shadow: 0 5px 20px 10px #a6acb059;
        width: 238px;
        height: 679px;
        .Header {
          margin-bottom: 36px;
        }
        .detail_all {
          height: 316px;
        }
        .PayFor {
          background-color: var(--wp--preset--color--pale-pink, #9b51e0);
        }
      }
      .TwoYear {
        width: 263px;
        height: 589px;
        .detail_all {
          height: 232px;
        }
        .PayFor {
          background-color: var(--wp--preset--color--pale-pink, #0693e3);
        }
      }
    }
    .Forevers {
      display: flex;
      // background: #edf2f3;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      padding: 50px 0;
      z-index: 10;
      .Header {
        text-align: center;
        line-height: 32px;
      }
    }
  }

  // 手风琴
  .Collapse {
    margin: bottom 25px;
    width: 1200px;
    // height: 735px;
    padding: 15px 40px;
    h2 {
      font-size: 32px;
      color: #34495e;
    }

    .demo-collapse .el-collapse .el-collapse-item {
      :deep(.el-collapse-item__header) {
        &:hover {
          background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
        }

        height: 53px;
        font-size: 16px;
        padding: 15px 40px 15px 15px;
        color: #34495e;
        // margin-bottom: 10px;
      }
      :deep(.el-collapse-item__wrap) {
        padding: 0px 0px 0 15px;
        .el-collapse-item__content {
          display: flex;
          flex-direction: column;
          margin: 15px;
          justify-content: center;
          font-size: 16px;
          color: #34495e;
          ul {
            padding-left: 30px;
          }
        }
      }
    }
    :deep(.is-active) {
      .el-collapse-item__header {
        background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
      }
    }
  }

  // 注意事项
  .warning {
    width: 1120px;
    height: 108px;
    padding: 20px 20px;
    background-color: #fff3cd;
    border-left: 5px solid #ffeeba;
    .Content {
      display: flex;
      color: #856404;
      background-color: #fff3cd;

      .img {
        width: 28px;
        height: 28px;
        svg {
          fill: #f7a000;
        }
      }
      .text {
        margin-left: 15px;
        p {
          height: 24px;
        }
      }

      .text p:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }

  .JoinIn {
    margin: 80px 0 70px 0;

    width: 1230px;
    height: 286px;
    padding: 50px 20px;
    background-color: #7635f3;
    border-radius: 15px 15px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      color: #fff;
    }
    & p:nth-child(1) {
      height: 24px;
      margin-bottom: 30px;
      font-size: 15px;
    }
    & p:nth-child(2) {
      height: 50px;
      font-size: 40px;
      margin-bottom: 30px;
    }
    .Join {
      width: 128px;
      height: 52px;
      background: #00d084;
      color: #fff;
      text-align: center;
      line-height: 52px;
      font-size: 19px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
}

/* */
</style>
