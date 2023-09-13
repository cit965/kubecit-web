<template>
  <header>
    <div class="header-content">
      <h1 class="content-logo">
        <img src="@/assets/img/citlogo.jpeg" />
      </h1>
      <div class="content-nav">
        <ul>
          <li @click="tabHome">首页</li>
          <li @click="tabCourse">课程</li>
          <li>会员</li>
        </ul>
      </div>
      <div class="search-buy-login">
        <div class="content-search">
          <input type="" placeholder="请输入要搜索的课程" />
          <el-icon color="#808080" :size="22">
            <search style="width: 22px; height: 22px" />
          </el-icon>
        </div>
        <div class="content-shopping">
          <el-icon color="#808080" :size="24"
            ><shopping-cart style="width: 24px; height: 24px"
          /></el-icon>
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
import { getInfo } from '@/utils/api/api.js'

//用户信息
let userInfo = ref({})
let router = useRouter()
//pinia
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const logout = () => {
  userStore.clearToken()
  router.push({ name: 'login' })
}

//点击跳转
const tabHome = () => {
  router.push({
    name: 'home',
  })
}

const tabCourse = () => {
  router.push({
    name: 'course',
  })
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

<style scoped>
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
}
.header-content {
  display: flex;
  justify-content: space-around;
  width: 1200px;
}
.content-logo {
  width: 160px;
  height: 55px;
  margin: 10px 0;
  cursor: pointer;
}
.content-logo img {
  height: 100%;
}
.content-nav {
  width: 300px;
  height: 75px;
  float: left;
}
.content-nav ul {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.content-nav ul li {
  width: 80px;
  height: 100%;
  position: relative;
  line-height: 100px;
  text-align: center;
  display: block;
  color: #808080;
}
.search-buy-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
}
.content-search {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 350px;
  height: 35px;
  border-radius: 8px;
  background: #f0f2f4;
}
.content-search input {
  padding: 0 10px;
  width: 430px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  color: #808080;
  background: #f0f2f4;
  font-size: 16px;
  outline: none;
}
.content-login a {
  font-size: 18px;
  color: #808080;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}
</style>
