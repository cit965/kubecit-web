<template>
  <div class="coursemain">
    <div class="course-main">
      <section class="search-container">
        <div class="search-item">
          <div class="title-name">课程方向：</div>
          <div class="all-items">
            <el-tag
              class="category-poniter"
              effect="plain"
              type="info"
              @click="allFirstCategory()"
            >全部</el-tag>
            <el-tag
              class="category-poniter-item"
              effect="plain"
              type="info"
              v-for="(item, index) in courseDirection"
              :key="index"
              :class="{active: item.id == currentDirectionId}"
              @click="selectFirstCategory(item)"
            >{{ item.categoryName || ''}} 
            </el-tag>
          </div>
        </div>
        <div class="search-item">
          <div class="title-name">课程分类：</div>
          <div class="all-items">
            <el-tag
              class="category-poniter"
              effect="plain"
              type="info"
              @click="allSecCategory()"
            >全部</el-tag>
            <el-tag
              class="category-poniter-item"
              effect="plain"
              type="info"
              v-for="(item, index) in courseCategory"
              :key="index"
              :class="{active: item.id == currentCategoryId}"
              @click="selectCategory(item)"
            >{{ item.categoryName }}
            </el-tag>
          </div>
        </div>
        <div class="search-item">
          <div class="title-name">课程难度：</div>
          <div class="all-items">
            <el-tag
              class="category-poniter"
              effect="plain"
              type="info"
              @click="allLevel()"
            >全部</el-tag>
            <el-tag
              class="category-poniter-item"
              effect="plain"
              type="info"
              v-for="(item, index) in courseLevel"
              :key="index"
              :class="{active: item.id == currentLevelId}"
              @click="selectLevel(item)"
            >{{ item.level }}
            </el-tag>
          </div>
        </div>
      </section>
    </div>
    <div class="main-container">
      <div class="container-top">
        <ul class="all">
          <li class="item">综合</li>
          <li class="item split">|</li>
          <li class="item">最新课程</li>
        </ul>
      </div>
      <div class="container-body">
        <div class="newCourseContent">
          <div class="courseUl" v-if="courseList.length > 0">
            <div class='courseItem' v-for="(courseItem, index) in courseList" :key="index" @click="toDetailPage(courseItem)">
              <div class='courseInfo'>
              <div class='courseBg'>
                <img :src="courseItem.cover" alt="">
              </div>
              <div class="courseName">{{ courseItem.name }}</div>
                <div class="courseDegree">{{ levelMap[courseItem.level] }}</div>
                <div class="coursePricePri">
                  <div class="pricePri">¥ {{ courseItem.price }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="no-course-info">
            暂无课程信息
          </div>
        </div>
      </div>
    </div>
    <Pagination :page-count="pageCount" @page-number="clickPageNumber"></Pagination>
  </div>
</template>

<script setup>
import Pagination from '@/components/common/Pagination.vue'
import { onMounted, ref } from 'vue'
import { searchCourse } from '@/utils/api/api.js'
import { queryCategoryList } from '@/utils/api/course.js'
let courseDirection = ref([]) // 课程方向
let courseCategory = ref([]) // 所有课程分类
let currentDirectionId = ref(0) // 当前选中方向的id
let currentCategoryId = ref(0) // 当前选中分类的id
let currentLevelId = ref(0) // 当前选中难度的id
let courseLevel = ref([{ level: '初级', id: 1 }, { level: '中级', id: 2 }, { level: '高级', id:3 }]) // 课程难度
const levelMap = ref({1:'初级', 2:'中级', 3:'高级'})
let courseList = ref([]) // 筛选出的课程列表
let pageCount = ref(10) // 分页数据
let router = useRouter()
// 查询课程列表
const queryCourseList = (pageNumParam) => {
  let courseP = {
    pageNum: pageNumParam || 1,
    pageSize: 12
  }
  if (currentDirectionId.value !== 0) {
    courseP.firstCategory = currentDirectionId.value
  }
  if (currentCategoryId.value !== 0) {
    courseP.secondCategory = currentCategoryId.value
  }
  if (currentLevelId.value !== 0) {
    courseP.level = currentLevelId.value
  }
  searchCourse(courseP).then(res=>{
		courseList.value = res.list
    pageCount.value = Math.ceil(res.total/12)
	})
}
// 获取课程分类
const categoryList = () => {
  queryCategoryList().then(res=>{
    const categories = res.categories
    // 课程方向
    courseDirection.value = categories
    // 课程分类
    courseCategory.value = []
    categories.forEach(item => {
      courseCategory.value = courseCategory.value.concat(item.children)
    })
	})
}
// 跳转课程详情
const toDetailPage = (item) => {
  router.push({
    path: '/course/detail',
    query: {
      id: item.id
    }
  })
}
// 切换一级分类
const selectFirstCategory = (item) => {
  // 当前选中的背景变色
  currentDirectionId.value = item.id
  currentCategoryId.value = 0
  // 过滤出相应的课程分类
  let tempCate = courseDirection.value
  courseCategory.value = []
  tempCate.forEach(temp => {
    if (temp.id === item.id) {
      courseCategory.value = courseCategory.value.concat(temp.children)
    }
  })
  // 查询课程列表
  queryCourseList()
}
// 切换二级分类
const selectCategory = (item) => {
  currentCategoryId.value = item.id
  // 查询课程列表
  queryCourseList()
}
// 切换难易程度
const selectLevel = (item) => {
  currentLevelId.value = item.id
  queryCourseList()
}
// 全部一级分类
const allFirstCategory = () => {
  currentDirectionId.value = 0
  currentCategoryId.value = 0
  // 课程分类
  let tempCate = courseDirection.value
  courseCategory.value = []
  tempCate.forEach(item => {
    courseCategory.value = courseCategory.value.concat(item.children)
  })
  queryCourseList()
}
// 全部二级级分类
const allSecCategory = () => {
  currentCategoryId.value = 0
  queryCourseList()
}
// 全部难易程度
const allLevel = () => {
  currentLevelId.value = 0
  queryCourseList()
}
// 切换分页
const clickPageNumber = (p) => {
  if (p) {
    queryCourseList(p)
  }
}
onMounted(() => {
  categoryList()
  queryCourseList()
})
</script>

<style scoped>
.course-main {
  padding: 30px 0;
  background: #f3f5f9;
}
.search-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}
.search-item {
  display: flex;
  transition: all 0.5s;
}
.search-item .title-name {
  width: 100px;
  font-size: 14px;
  height: 45px;
  line-height: 45px;
  color: #333333;
  font-weight: 700;
}
/* .search-item .title-name:after {
  content: '.';
  width: 100%;
  display: inline-block;
  overflow: hidden;
  height: 0;
} */

.search-item .all-items {
  width: calc(100% - 100px);
  min-height: 25px;
  display: flex;
  flex-wrap: wrap;
}
.title .all-list {
  width: 40px;
  height: 25px;
  line-height: 25px;
  border-radius: 4px;
  padding: 0 10px;
  align-items: center;
  text-align: center;
}

.title .all {
  opacity: 1;
  color: #2c80ff;
}

.title .item {
  height: 25px;
  line-height: 25px;
  margin: 0 15px;
  font-size: 16px;
  font-weight: 400;
  opacity: 1;
}

.title .item .active {
  color: #2c80ff;
}

.category-poniter {
  height: 25px;
  line-height: 25px;
  margin: 10px 5px;
  padding: 0 10px;
  cursor: pointer;
  border: none;
  background: rgba(44, 128, 255, 0.1);
  color: #2c80ff;
  font-size: 14px;
}
.category-poniter-item {
  height: 25px;
  line-height: 25px;
  margin: 10px 5px;
  padding: 0 10px;
  cursor: pointer;
  border: none;
  background: none;
  color: #515759;
  font-size: 14px;
}
.all-items .active {
  background: rgba(44, 128, 255, 0.1);
  color: #2c80ff;
}

.main-container {
  width: 1200px;
  margin: 0 auto;
}

.container-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-body {
  max-height: 920px;
}
.all {
  display: flex;
  padding: 20px 0 0 0;
  font-size: 14px;
  color: #515759;
  margin: 0;
}

.all .item {
  cursor: pointer;
}
.all .split {
  margin: 0 20px;
}

.newCourseContent {
  width: 1200px;
  margin: 30px auto 0px auto;
  min-height: 300px;
}
.newCourseContent .no-course-info {
  text-align: center;
  line-height: 40px;
  color: #999999;
  font-size: 14px;
  padding-top: 110px;
}
.newCourseContent .courseUl {
  display: flex;
  flex-wrap: wrap;
}

.courseItem {
  width: 285px;
  height: 280px;
  margin: 0 20px 20px 0;
  transition: margin-top 0.2s;
}
.courseItem:hover {
  margin-top: -10px;
  cursor: pointer;
}
.courseItem:nth-child(4n + 0) {
  margin-right: 0 !important;
}
.courseInfo {
  position: relative;
  width: 100%;
  height: 270px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgb(27 39 94 / 40%);
  opacity: 1;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
  text-decoration: none;
}
.courseBg {
  position: relative;
  width: 100%;
  height: 160px;
}
.courseBg img {
  width: 100%;
  height: 100%;
}
.courseName {
  margin: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  display: -webkit-box;
  overflow: hidden;
}
.courseDegree {
  margin-left: 10px;
  font-size: 12px;
  color: #808080;
}
.coursePrice {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  font-size: 14px;
  margin-top: 15px;
  padding: 0 5px;
}
.coursePricePri {
  width: 75px;
  font-size: 14px;
  margin-top: 18px;
  padding: 0 13px;
  color: rgba(255, 114, 127, 1);
  font-weight: 700;
}
.coursePriceZero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75px;
  font-size: 14px;
  margin-top: 15px;
  padding: 0 10px;
  color: rgba(53, 134, 255, 1);
}
.courseMemberbg {
  position: relative;
  width: 80px;
  height: 20px;
  color: #ffffff;
  background: linear-gradient(90deg, #ff928e 0%, #fe7062 99%);
  border-radius: 24px 0px 24px 0px;
}
.courseMember {
  position: absolute;
  line-height: 20px;
  left: 13px;
  font-weight: 700;
}
.price {
  line-height: 25px;
  left: 100px;
  color: #ff727f;
  font-weight: 700;
}

li {
  list-style-type: none;
}
</style>
