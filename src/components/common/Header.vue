<template>
  <header>
    <div class="header-content">
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
            {{item.name}}
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
          <router-link to="/login" v-if="!isLogin"> 登录 / </router-link>
          <router-link to="/register" v-if="!isLogin"> 注册 </router-link>
          <div v-else>
            <img
              class="avator"
              :src="userInfo.avatar"
              alt=""
              v-if="userInfo.avatar"
            />
            <img v-else class="avator" src="@/assets/img/Avat62.png" />
          </div>

          <div v-if="isLogin">
            <button @click="logout">退出登录</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'

//用户信息
let userInfo = ref({})
let currentTabRouter = ref("home")
let router = useRouter()
let tabs = [{name:"首页",router:"home"},{name:"课程",router:"course"},{name:"试炼",router:"challenge"},{name:"交流",router:"communicate"}]
//pinia
const userStore = useUserStore()

const logout = () => {
  userStore.clearToken()
  router.push({ name: 'login' })
}


// tab 跳转页面
const tabClick = (name)=>{
  router.push({
    name: name,
  })
  currentTabRouter.value = name
}



//用户是否是登录状态
let isLogin = ref(false)

onMounted(() => {
  console.log('mounted', userStore.token)
  const token = userStore.token
  if (token) {
    isLogin.value = true
  }
})
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
  right: -10px;
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
</style>
