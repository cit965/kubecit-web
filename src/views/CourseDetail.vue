<template>
  <!-- <Header></Header> -->
  <div class="course-detail">
    <DetailHeader :course-data="courseData"></DetailHeader>
    <Menu @clickIndex="shiftMenu"></Menu>
    <div class="course-content" v-if="currentIndex === 0">
      <DetailCart :course-data="courseData" @buy-instance="buyInstance"></DetailCart>
      <ChapterView v-if="chapterList" :chapterList="chapterList" @startLearn="startLearn"></ChapterView>
    </div>
    <!-- <div class="course-content" v-else>
      <DownloadList v-if="courseData.downloadList" :file-list="downloadList"></DownloadList>
    </div> -->
  </div>
</template>

<script setup>
import DetailHeader from '@/components/courseDetail/detailHeader.vue'
import Menu from '@/components/courseDetail/detailMenu.vue'
import DetailCart from '@/components/courseDetail/detailCart.vue'
import ChapterView from '@/components/courseDetail/chapterList.vue'
// import DownloadList from '@/components/courseDetail/downloadList.vue'
const { userStore, router, route } = inject('baseTool')
import { courseDetail, courseChapters } from '@/utils/api/course.js'
let chapterList = ref(null)
// let downloadList = ref([])
let currentIndex = ref(0)
let courseData = ref({})
let isLogin = ref(false)

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
    console.log('课程章节信息:', res)
    if (res && res.data && Array.isArray(res.data)) {
      chapterList.value = res.data
    }
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
const startLearn = (lessonId, storagePath, source)=> {
  const token = userStore.token
  if (token) {
    isLogin.value = true
  }
  // 如果用户未登录，需要登录
  if (isLogin.value) {
    router.push({
      path: '/course/play',
      query: {
        lessonId: lessonId,
        videoUrl: storagePath,
        source: source
      }
    })
  } else {
    // 去登录
    router.push('/login')
  }
}
// onMounted(() => {
//   const token = userStore.token
//   if (token) {
//     isLogin.value = true
//   }
//   const courseId = route.query.id
//   if (courseId) {
//     courseInfo(courseId)
//     queryChapters(courseId)
//   }
// })

// 利用路由监听，当路由发生变化时，重新获取课程信息，(mounted只会执行一次 多次搜索无效)
watch(() => route.query.id, (val) => {
  if (val) {
    courseInfo(val)
    queryChapters(val)
  }
},{
  immediate: true
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
