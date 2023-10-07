<template>
  <div class="play-container">
    <div class="head-zone">
      <img class="back" src="@/assets/img/back.png" @click="back" alt=""/>
      <div class="head">视频名称</div>
    </div>
    <div class="player">
      <div class="player-left">
        <!-- <Player class="video-container" :url="videoUrl"></Player> -->
        <NormalPlayer class="video-container" :url="videoUrl"></NormalPlayer>
        <!-- <div class="finished" id="finished-current">
          <p class="studynow">恭喜您学完该小节</p>
          <p class="nextCourse">下一小节：<span id="next-chapter"></span></p>
          <el-button type="button" class="btn btn-danger over-btn" onclick="relearn()">重学一遍</el-button>
          <el-button type="button" class="btn btn-primary over-btn" onclick="nextMeasure()">下一小节</el-button>
        </div>
        <div class="finished" id="finished-all">
          <p class="studynow">恭喜您学完本课程全部内容</p>
          <el-button type="button" class="btn btn-primary over-btn" onclick="javascript:window.location.href='/';">返回首页</el-button>
          <el-button type="button" class="btn btn-primary over-btn" onclick="returnToCourse()">返回课程</el-button>
        </div> -->
      </div>
      <div class="player-right">
        
      </div>
    </div>
    
  </div>
</template>
<script setup>
import { courseVideoInfo } from '@/utils/api/course.js'
// import Player from '@/components/player/TCPlayer.vue'
import NormalPlayer from '@/components/player/NormalPlayer.vue'
const { route, router } = inject('baseTool')
let courseInfo = ref({})
// let videoUrl = ref('https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/62656d94387702300542496289/v.f100240.m3u8')

let videoUrl = ref('http://vjs.zencdn.net/v/oceans.mp4')

// 查询课程的URL
const queryCourseVideoInfo = (lessonId) => {
  const params = {
    lessonId: lessonId
  }
  courseVideoInfo(params).then(res=>{
    courseInfo.value = res
	})
}
const back = () => {
  router.back()
}
onMounted(() => {
  const lessonId = route.query.lessonId
  console.log('课程id', lessonId)
  if (lessonId) {
    queryCourseVideoInfo(lessonId)
  }
})
</script>
<style lang="scss" scoped>
.play-container {
  .head-zone {
    display: flex;
    padding: 0 20px;
    height: 80px;
    line-height: 80px;
    background: #fff;
    align-items: center;
    .back {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }
  }
  .head {
    font-size: 20px;
    font-weight: bold;
    color: #25282A;
  }
  .player {
    min-width: 1300px;
    background: #25282A;
    padding: 20px;
    height: 700px;
    overflow: hidden;
    display: flex;
    .player-left {
      min-width: 800px;
      width: calc(100% - 435px - 20px);
      height: 660px;
      background: #000;
      position: relative;
      overflow: hidden;
      .video-container {
        width: 100%;
        height: 100%;
      }
    }
    .player-right {
      color: #ffffff;
      width: 435px;
      height: 100%;
      position: relative;
    }
  }
}
</style>