<template>
  <!-- <Header></Header> -->
  <div class="course-detail">
    <DetailHeader :course-data="courseData"></DetailHeader>
    <Menu @clickIndex="shiftMenu"></Menu>
    <div class="course-content" v-if="currentIndex === 0">
      <DetailCart></DetailCart>
      <ChapterView :chapter-list="chapterList"></ChapterView>
    </div>
    <div class="course-content" v-else>
      <DownloadList :file-list="downloadList"></DownloadList>
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
import { courseDetail } from '@/utils/api/course.js'
let chapterList = ref([])
let downloadList = ref([])
let currentIndex = ref(0)
const route = useRoute()
let courseData = ref({})

const initList = () => {
  for (let index = 0; index < 2; index++) {
    const element = {
      title: '章节标题',
      des: '章节描述',
      course: [
        { title: '课程标题', type: '视频' },
        { title: '课程标题', type: '视频' },
        { title: '课程标题', type: '视频' },
        { title: '课程标题', type: '视频' },
        { title: '课程标题', type: '视频' },
      ],
    }
    chapterList.value.push(element)
  }
  for (let index = 0; index < 12; index++) {
    const element = {
      title: '下载标题',
      url: 'https://www.baidu.com',
    }
    downloadList.value.push(element)
  }
}
const shiftMenu = (args) => {
  currentIndex.value = args
}
// 获取课程详细
const courseInfo = (courseId) => {
  courseDetail(courseId).then(res=>{
    courseData = res.data
	})
}
onMounted(() => {
  initList()
  const courseId = route.query.id
  if (courseId) {
    courseInfo(courseId)
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
  }
}
</style>
