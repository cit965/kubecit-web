<template>
  <div class="tcplayer-container">
    <video
      id="my-player"
      class="video-js video"
      controls
      preload="auto"
    >
      <source :src="url"/>
    </video>
  </div>
</template>
<script setup>
// 引入video.js相关的js和css
import videojs from 'video.js'
import "video.js/dist/video-js.min.css"
const props = defineProps(['url'])
let player = reactive(null)
onMounted(() => {
  // 添加初始化宽和高，否则加载播放器的时候会闪一下
  let options = { width: '100%', height: '100%' }
  player = videojs('my-player', options, function() {
    videojs.log('播放器准备好了!')
  })
})
</script>
<style scoped lang="scss">
.tcplayer-container {
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>

