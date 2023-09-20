<template>
  <header @mouseleave="isShow = false">
    <div
      class="header-content"
      :class="{ 'header-content-fixed': scrollTop > 0 }"
    >
      <div class="header-content-inner">
        <div class="left">
          <h1 class="content-logo">
            <img src="@/assets/img/citlogo.jpeg" />
          </h1>
          <div class="content-nav">
            <div class="nav-list">
              <div
                v-for="item in tabs"
                @click="tabClick(item.router)"
                class="nav-item"
                :class="{ 'is-active': currentTabRouter === item.router }"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="search-buy-login right">
          <div class="content-search">
            <input type="" placeholder="请输入要搜索的课程" />
            <el-icon color="#808080" :size="22" class="content-search-icon">
              <search style="width: 24px; height: 24px" />
            </el-icon>
          </div>
          <div class="content-login">
            <router-link to="/login" v-if="!isLogin"> 登录 </router-link>
            <router-link to="/register" v-if="!isLogin"> 注册 </router-link>
            <div v-else>
              <div @mouseenter="isShow = true">
                <img
                  class="avator"
                  :src="userInfo.avatar"
                  alt=""
                  v-if="userInfo.avatar"
                />
                <img
                  v-else
                  class="avator"
                  @click="tabClick('vip')"
                  src="@/assets/img/Avat62.png"
                />
              </div>
            </div>
          </div>

          <div class="user-info" v-if="isShow">
            <div class="user-info-top">
              <div class="u-i-t-top">
                <img
                  class="avator"
                  :src="userInfo.avatar"
                  alt=""
                  v-if="userInfo.avatar"
                />
                <img class="avator" src="@/assets/img/Avat62.png" v-else />
                <div class="avator-info">
                  <p>{{ userInfo.username }}</p>
                </div>
                <div class="vip" v-if="vipInfo">
                  <div class="vipImg">
                    <img
                      src="https://www.xuexiluxian.cn/resources/images/index/info-member.png"
                      :class="vipEndtime < 0 ? 'gray' : ''"
                    />
                  </div>
                  <div class="vipName">{{ vipInfo.vipName }}</div>
                  <div class="endTime" v-if="vipInfo.isExpired === 0">
                    {{ endTimeVip }}天到期
                  </div>
                  <div class="endTime" v-else>
                    已过期{{ Math.abs(endTimeVip) }}天
                  </div>
                </div>
              </div>

              <div class="u-i-i-bottom">
                <div>
                  <router-link to="/">
                    <div class="info-item">
                      <img src="@/assets/img/course.png" />
                      <p>我的课程</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <div class="info-item">
                      <img src="../../assets/img/order.png" />
                      <p>我的试炼</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <div class="info-item">
                      <img src="../../assets/img/setting.png" />
                      <p>个人设置</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <div class="info-item">
                      <img src="../../assets/img/setting.png" />
                      <p>我的钱包</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="vip">
                    <div class="info-item">
                      <img src="../../assets/img/setting.png" />
                      <p>会员中心</p>
                    </div>
                  </router-link>
                </div>
                <div>
                  <router-link to="/">
                    <div class="info-item">
                      <img src="../../assets/img/setting.png" />
                      <p>我的帖子</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="user-info-bottom">
                <div class="logout" @click="logout">退出登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'
import { getInfo } from '@/utils/api/api.js'

//用户信息
let userInfo = ref({})
// 滚动距离高度
let scrollTop = ref(0)
let currentTabRouter = ref('home')
let router = useRouter()
let vipInfo = ref(true)
//显示用户更多数据
let isShow = ref(false)
let tabs = [
  { name: '首页', router: 'home' },
  { name: '课程', router: 'course' },
  { name: '试炼', router: 'challenge' },
  { name: '交流', router: 'communicate' },
]
//pinia
const userStore = useUserStore()

const logout = () => {
  userStore.clearToken()
  router.push({ name: 'login' })
}

// tab 跳转页面
const tabClick = (name) => {
  router.push({
    name: name,
  })
  currentTabRouter.value = name
}

const handleScroll = () => {
  const calcScrollTop =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  scrollTop.value = Number(calcScrollTop)
  console.log(calcScrollTop, 'scrollTop') // 输出滚动条高度
}

//用户是否是登录状态
let isLogin = ref(false)

onMounted(() => {
  console.log('mounted', userStore.token)
  const token = userStore.token
  if (token) {
    isLogin.value = true
  }
  getInfo().then((res) => {
    userInfo.value = res
  })
  console.log(userInfo)

  let scrollAreaRef = null // 定义变量用于存储 DOM 元素

  // 获取 DOM 元素
  scrollAreaRef = document.querySelector('[ref="scrollArea"]')

  // 监听滚动事件
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // 移除滚动事件监听
  window.removeEventListener('scroll', handleScroll)
})
// 监听路由变化
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    // console.log('toPath', toPath)
    // tab要切换到course
    if (toPath.indexOf('/course') !== -1) {
      currentTabRouter.value = 'course'
    }
  },
  { immediate: true, deep: true }
)
</script>

<style scoped lang="scss">
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
}

.header-content {
  width: 100vw;
  background: #fff;
}

.header-content-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 1200px;
  max-width: 1140px;
  width: 1140px;
  height: 100px;
  color: gray;
  font-size: 16px;
  margin: 0 auto;

}

.header-content-fixed {
  position: fixed;
  top: 0;
  z-index: 900;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  background: #fff;
}

.header-padding {
  height: 100px;
  width: 100vw;
}

.nav-item.is-active {
  &::after {
    position: absolute;
    left: 20%;
    bottom: 0;
    content: '';
    width: 60%;
    height: 4px;
    background: #388fff;
  }
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}

.nav-item {
  width: 100px;
  height: 100px;
  position: relative;
  line-height: 100px;
  text-align: center;
  display: block;
  cursor: pointer;

  &.is-active {
    color: #388fff !important;
    font-weight: 700;
  }
}

.content-logo {
  width: 55px;
  height: 55px;
  margin: 10px 30px 10px 0;
  cursor: pointer;
}
.content-logo img {
  height: 100%;
}

.content-nav {
  width: 300px;
  height: 100%;
}
.content-nav .nav-list {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.search-buy-login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // min-width: 600px;
}

.content-search {
  display: flex;
  align-items: center;
  width: 200px;
  height: 35px;
  border-radius: 8px;
  background: #f0f2f4;
  margin-right: 50px;
  position: relative;
}
.content-search input {
  position: relative;
  padding: 0 40px 0 10px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  color: #333333;
  background: #f0f2f4;
  font-size: 14px;
  outline: none;
}

.content-search-icon {
  position: absolute;
  right: 10px;
  top: 6px;
}

.content-login a {
  font-size: 16px;
  color: #808080;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.content-shopping {
  line-height: 10px;
  margin-right: 20px;
}

.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}

.user-info {
  width: 200px;
  height: 194px;
  background-color: #fff;
  border: 1px solid rgba(248, 250, 252, 1);
  box-shadow: 0px 5px 15px 3px #888888;
  position: absolute;
  top: 75px;
  right: 80px;
  z-index: 999;
  display: block;
  border-radius: 10px;
}

.user-info-top {
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(248, 250, 252, 1);
  flex-direction: column;
}

.u-i-t-top {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
}
.u-i-t-top img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
}
.avator-info {
  width: 120px;
  height: 60px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}

/*有会员了之后高度微调*/
.avator-info p {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.u-i-i-bottom {
  display: flex;
  height: 100px;
  width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.u-i-i-bottom a {
  text-decoration: none;
}
.info-item {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.info-item img {
  width: 14px;
  height: 16px;
}

.user-info-bottom {
  position: relative;
  width: 100%;
  height: 30px;
}
.logout {
  line-height: 30px;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
  cursor: pointer;
}

/*vip开始*/
.vip {
  display: flex;
  flex-direction: row;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 30px;
  margin-left: -105px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 30px;
}
.vipImg {
  width: 15px;
  height: 15px;
  margin-right: 12px;
}
.vipImg img {
  width: 100% !important;
  height: 100% !important;
}
.vipName {
  color: #93999f;
}
.endTime {
  padding-left: 2px;
  color: #ff0000;
  position: absolute;
  top: 45px;
  left: 73px;
  font-size: 12px;
}
</style>
