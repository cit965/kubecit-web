<template>
  <!-- <Header></Header> -->
  <div class="course-detail">
    <DetailHeader :course-data="courseData"></DetailHeader>
    <Menu @clickIndex="shiftMenu"></Menu>
    <div class="course-content" v-if="currentIndex === 0">
      <DetailCart :course-data="courseData" @buy-instance="buyInstance"></DetailCart>
      <ChapterView v-if="chapterList.length > 0" :chapterList="chapterList" @startLearn="startLearn"></ChapterView>
    </div>
    <div class="course-content" v-else>
      <DownloadList v-if="courseData.downloadList" :file-list="downloadList"></DownloadList>
    </div>
  </div>
</template>

<script setup>
import DetailHeader from '@/components/courseDetail/detailHeader.vue'
import Menu from '@/components/courseDetail/detailMenu.vue'
import DetailCart from '@/components/courseDetail/detailCart.vue'
import ChapterView from '@/components/courseDetail/chapterList.vue'
import DownloadList from '@/components/courseDetail/downloadList.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { courseDetail, courseChapters } from '@/utils/api/course.js'
let chapterList = ref([])
let downloadList = ref([])
let currentIndex = ref(0)
const route = useRoute()
const router = useRouter()
let courseData = ref({})

const shiftMenu = (args) => {
  currentIndex.value = args
}
// 获取课程详细
const courseInfo = (courseId) => {
  courseDetail(courseId).then(res=>{
    courseData.value = res.data
	})
}
// 获取课程章节
const queryChapters = (courseId) => {
  courseChapters(courseId).then(res => {
    chapterList.value = res.data
  })
  .catch(error => {
    console.log(error)
  })
}

// 立即购买
const buyInstance = () => {
  router.push({
    path: '/order',
    query: {
      courseImg: courseData.value.cover,
      courseId: courseData.value.id,
      courseName: courseData.value.name,
      price: courseData.value.price,
      salePrice: courseData.value.salePrice || courseData.value.price
    }
  })
}
const startLearn = (lessonId)=> {
  // 如果用户未登录，需要登录
  console.log('开始学习', lessonId)
}
onMounted(() => {
  const courseId = route.query.id
  if (courseId) {
    courseInfo(courseId)
    queryChapters(courseId)
  }
})
</script>

<style scoped lang="scss">
.course-detail {
  width: 100%;
  background: #f8fafc;
  .course-content {
    padding: 40px 0;
    border: none;
    min-height: 500px;
  }
}
</style>
