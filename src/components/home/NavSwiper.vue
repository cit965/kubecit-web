<template>
  <div class="navSwiper">
    <div class="content">
      <div class="navigation">
        <ul>
          <li
            v-for="(item) in getFirstList"
            :key="item.id"
            :class="{
              'is-hover':
                item.id === category && category === subCategoryParams.category,
            }"
          >
            <router-link
              to=""
              @mouseleave="mouseOut"
              @mouseenter="mouseHover(item.id)"
            >
              {{ item.categoryName }}
              <el-icon color="#ffffff" :size="16"><arrow-right /></el-icon>
            </router-link>
            <div
              class="category-detail"
              v-show="isFirst"
              @mouseleave="mouseOutNavContent"
              @mouseenter="detailMouseHover(item.id)"
            >
              <div class="detail-main">
                <div class="detail-desc">基础知识</div>
                <div class="detail-list">
                  <div class="list-know">知识点：</div>
                  <div class="list-ul">
                    <router-link
                      to="course"
                      v-for="subItem in subCategoryList"
                      :key="subItem.id"
                      class="list-item"
                      >{{ subItem.categoryName }}</router-link
                    >
                  </div>
                </div>
                <div class="detail-class">
                  <div
                    @click="router.push({ name: 'course' })"
                    class="course-card"
                    v-for="item in searchCourseList"
                    :key="item.id"
                  >
                    <div class="course-image">
                      <img :src="item.cover" />
                    </div>
                    <div class="right">
                      <div class="courseName">{{ item.courseName }}</div>
                      <div class="courseDegree">
                        {{ courseTypeFn(item.level) }} · 100 人购买
                      </div>
                      <div class="buy">
                        <div class="buy-free">
                          <div class="coursePrice">
                            <div class="courseMemberbg">
                              <span class="courseMember">会员专享</span>
                            </div>
                            <div class="price">¥{{ item.price }}</div>
                          </div>
                          <div class="cart">
                            <div class="cart-image">
                              <img src="@/assets/img/free.png" />
                            </div>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sliders">
        <el-carousel :interval="5000" arrow="always" height="460px">
          <el-carousel-item v-for="item in slidersList" :key="item.id" @click="router.push({ name: 'course' })" style="cursor: pointer;">
            <img :src="item.imageLink" :title="item.title" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="course-type">
      <div class="course-type-item">
        <router-link to="/">
          <div class="course-type-item-icon">
            <img src="@/assets/img/golang.png" />
          </div>
          <div class="course-type-item-text">
            <div class="course-type-item-title">初级课程</div>
            <div class="course-type-item-desc">入门快、岗位多</div>
          </div>
        </router-link>
      </div>
      <div class="course-type-item">
        <router-link to="/">
          <div class="course-type-item-icon">
            <img src="@/assets/img/vue3.png" />
          </div>
          <div class="course-type-item-text">
            <div class="course-type-item-title">中级课程</div>
            <div class="course-type-item-desc">进阶与实战</div>
          </div>
        </router-link>
      </div>
      <div class="course-type-item">
        <router-link to="/">
          <div class="course-type-item-icon">
            <img src="@/assets/img/ai.png" />
          </div>
          <div class="course-type-item-text">
            <div class="course-type-item-title">高级课程</div>
            <div class="course-type-item-desc">轻松掌握核心技能</div>
          </div>
        </router-link>
      </div>
      <div class="course-type-item">
        <router-link to="/">
          <div class="course-type-item-icon">
            <img src="@/assets/img/k8s.png" />
          </div>
          <div class="course-type-item-text">
            <div class="course-type-item-title">项目实战</div>
            <div class="course-type-item-desc">手把手实践</div>
          </div>
        </router-link>
      </div>
      <div class="course-type-item">
        <router-link to="/">
          <div class="course-type-item-icon">
            <img src="@/assets/img/devops.png" />
          </div>
          <div class="course-type-item-text">
            <div class="course-type-item-title">前端算法</div>
            <div class="course-type-item-desc">笑傲前端技能</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { courseType } from '@/utils/mixins/courseType.js'
import {
  ListFristCategories,
  searchCourse,
  getSliders,
  ListSubCategories,
} from '@/utils/api/api.js'
let { courseTypeFn } = courseType()


let router = useRouter()
let getFirstList = ref([])
onMounted(() => {
  ListFristCategories().then((res) => {
    getFirstList.value = res.categories
  })

  //获取轮播图
  getSliders().then((res) => {
    slidersList.value = res.data
  })
})

let subCategoryList = ref([])
//轮播图数据
let slidersList = ref([])
//获取课程标签
let tagsList = ref([])
//查询课程
let searchCourseList = ref([])
//移入判断
let isFirst = ref(false)
//获取课子类参数
let subCategoryParams = {
  category: 0,
}
const category = ref(-1)
// 上一次分类
let oldCategory = -1

const mouseHover = (id) => {
  isFirst.value = true
  subCategoryParams.category = id
  category.value = id
  SubCategoriesFn(subCategoryParams)
  getsearchCourse(subCategoryParams)
}

// 分类具体内容移入
const detailMouseHover = (id) => {
  isFirst.value = true
  category.value = oldCategory
}

const SubCategoriesFn = (params) => {
  ListSubCategories(params).then(res=>{
  	subCategoryList.value = res.categories;
  })
}

const getsearchCourse = (params) => {
  searchCourse(params).then((res) => {
    searchCourseList.value = res.list
  })
}

//鼠标移出分类 nav
const mouseOut = () => {
  isFirst.value = false
  oldCategory = category.value
  category.value = -1
}

// 鼠标移出分类内容区域
const mouseOutNavContent = () => {
  category.value = -1;
  isFirst.value = false;
}

</script>

<style scoped>
.navSwiper {
  padding-top: 1px;
  width: 100%;
  height: 640px;
  background: url('../../assets/img/transitionbg.png') no-repeat;
}
.content {
  position: relative;
  display: flex;
  width: 1200px;
  height: 460px;
  margin: 35px auto 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
}
.navigation {
  width: 240px;
  height: 460px;
  background: #2b283d;
}
.navigation ul {
  margin: 20px 0;
}
.navigation ul li {
  height: 45px;
  list-style: none;
}
.navigation ul li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 5px;
  color: #ffffff;
  height: 45px;
  /* line-height: 40px; */
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
/* .navigation ul li:hover {
  background: linear-gradient(90deg, rgb(63, 229, 255), transparent);
} */

.navigation ul li.is-hover {
  background: linear-gradient(90deg, rgb(63, 229, 255), transparent);
}

.sliders {
  width: 1060px;
  height: 460px;
}
.sliders img {
  width: 100%;
  height: 100%;
}
.category-detail {
  position: absolute;
  top: 0;
  left: 220px;
  background: rgba(255, 255, 255);
  z-index: 65535;
  min-width: 800px;
  height: 460px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
}
.detail-main {
  cursor: pointer;
  height: 100%;
  position: relative;
}
.detail-desc {
  padding-top: 20px;
  padding-left: 20px;
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  opacity: 1;
}
.detail-list {
  width: 100%;
  display: flex;
  margin-top: 10px;
  padding-left: 20px;
  color: #333333;
  font-weight: 400;
  font-size: 14px;
}
.list-know {
  width: 70px;
  height: 30px;
  line-height: 30px;
}
.list-ul {
  width: calc(100% - 70px);
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  line-height: 30px !important;
  padding: 0 10px !important;
  color: #333333 !important;
  font-size: 14px !important;
  font-weight: unset !important;
  height: auto !important;
}
.list-item:hover {
  background: unset !important;
  color: #00ffff;
}

.detail-class {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 270px;
  padding: 20px 20px;
  background-color: #f3f5f6;
  box-sizing: border-box;
}

.course-card {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  width: 370px;
  height: 110px;
  box-sizing: border-box;
}

.course-image {
  width: 100%;
  height: 90px;
  cursor: pointer;
}

.course-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  padding: 5px;
  box-sizing: border-box;
}

.courseName {
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  color: #333333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.courseDegree {
  font-size: 12px;
  color: #808080;
}

.coursePrice {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.coursePriceZero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricePri {
  font-size: 12px;
}

.price {
  margin-left: 5px;
  color: red;
}

.courseMember {
  color: #ffffff;
  padding: 2px;
  box-sizing: border-box;
  background: red;
  border-radius: 6px;
}

.coursePricePri {
  font-size: 12px;
}

.buy {
  width: 200px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.buy-free {
  display: flex;
  align-items: center;
}

.buy-free img {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.buy .learn {
  color: #3586ff;
  font-size: 12px;
}

.buy .cart {
  display: flex;
  margin-right: 5px;
  font-size: 12px;
}

.buy .addcart {
  margin-left: 2px;
  color: #ff3d17;
  font-size: 12px;
  cursor: pointer;
}

.course-type {
  display: flex;
  width: calc(1200px);
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 10px 25px 10px #d2d2d2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.course-type-item {
  width: 260px;
  height: 100px;
  flex: 1;
}
.course-type-item a {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
.course-type-item-icon {
  font-size: 35px;
  border-radius: 50%;
  margin: 25px 10px 25px 0;
  width: 50px;
  height: 50px;
  background: #55ee8b;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
}
.course-type-item-icon img {
  width: 100%;
  height: 100%;
}
.course-type-item-text {
  margin: 25px 0;
}
.course-type-item-title {
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
}
.course-type-item-desc {
  color: #808080;
  font-size: 14px;
}
</style>
