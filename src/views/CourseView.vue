<template>
  <!-- <Header></Header> -->
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
              v-for="(item, index) in courseIndustry"
              :key="index"
              :class="{active: item.categoryName == currentFirstCategory}"
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
              :class="{active: item.categoryName == currentSecCategory}"
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
              :class="{active: item.level == currentLevel}"
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
          <li class="item split">|</li>
          <li class="item">最多购买</li>
          <li class="item split">|</li>
          <li class="item-price">
            <span>价格</span>
            <span class="arrow">
              <i class="el-icon-caret-top"></i>
              <i class="el-icon-caret-bottom"></i>
            </span>
          </li>
        </ul>
        <div class="right">
          <div class="right-item">
            <el-radio-group>
              <el-radio label="1">免费课程</el-radio>
              <el-radio label="2">会员课程</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="container-body">
        <div class="newCourseContent">
          <div class="courseUl">
            <div class='courseItem' v-for="(courseItem, index) in courseList" :key="index" @click="toDetailPage">
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
        </div>
      </div>
    </div>
    <Pagination :page-count="pageCount"></Pagination>
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Foot from '@/components/common/Foot.vue'
import Pagination from '@/components/common/Pagination.vue'
import { onMounted } from 'vue'
import { searchCourse } from '@/utils/api/api.js'
import { queryCategoryList } from '@/utils/api/course.js'
let courseIndustry = ref([]) // 课程方向
let courseCategory = ref([]) // 所有课程分类
let currentSecCategory = ref('') // 当前选中的课程二级分类
let currentFirstCategory = ref('') // 当前选中的课程一级分类
let currentLevel = ref('') // 当前选中的课程一级分类
let courseLevel = ref([{ level: '初级' }, { level: '中级' }, { level: '高级' }]) // 课程难度
const levelMap = ref({1:'初级', 2:'中级', 3:'高级'})
let courseList = ref([]) // 筛选出的课程列表
let pageCount = ref(10) // 分页数据
let router = useRouter()
// 查询课程列表
const queryCourseList = () => {
  searchCourse({
		pageNum: 1,
    pageSize: 12
	}).then(res=>{
		courseList.value = res.list
    pageCount.value = Math.ceil(res.list.length/12)
	})
}
// 获取课程分类
const categoryList = (params) => {
  queryCategoryList({
    level: params.level,
    parentId: params.parentId ? params.parentId : 0
	}).then(res=>{
    if (params.level === 1) {
      courseIndustry.value = res.categories
    } else {
      courseCategory.value = res.categories
    }
	})
}
// 跳转课程详情
const toDetailPage = () => {
  router.push({
    name: 'courseDetail',
  })
}
// 切换一级分类
const selectFirstCategory = (item) => {
  currentFirstCategory.value = item.categoryName
  const params = {
    level: 2,
    parentId: item.parentId ? item.parentId : 0
  }
  categoryList(params)
  queryCourseList()
}
// 切换二级分类
const selectCategory = (item) => {
  currentSecCategory.value = item.categoryName
  console.log(currentSecCategory)
  const params = {
    level: item.level ? item.level : 1,
    parentId: item.parentId ? item.parentId : 0
  }
  queryCourseList(params)
}
// 切换难易程度
const selectLevel = (item) => {
  currentLevel.value = item.level
}
// 全部一级分类
const allFirstCategory = () => {
  currentFirstCategory.value = ''
  currentSecCategory.value = ''
  currentLevel.value = ''
  console.log('全部一级分类')
}
// 全部二级级分类
const allSecCategory = () => {
  currentSecCategory.value = ''
  currentLevel.value = ''
  console.log('全部二级分类')
}
// 全部难易程度
const allLevel = () => {
  currentLevel.value = ''
  console.log('全部难易程度')
}
onMounted(() => {
  // 获取一级分类，二级分类的数据
  const params = [{level: 1 },{level: 2 }]
  params.forEach (item => {
    categoryList(item)
  })
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
.right {
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  color: #515759;
  padding: 0;
  margin: 0;
}

.right .right-item {
  margin-left: 10px;
}

.right .right-items {
  margin-right: 0px;
}

.arrow {
  position: relative;
}

.arrow i:first-child {
  position: absolute;
  top: -1px;
}

.arrow i:last-child {
  position: absolute;
  top: 7px;
}

.check {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.up {
  position: absolute;
  top: 5px;
  left: 2px;
}

.down {
  position: absolute;
  top: 15px;
  left: 2px;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.newCourseContent {
  width: 1200px;
  margin: 30px auto 0px auto;
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
