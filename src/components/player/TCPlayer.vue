<template>
  <div class="tcplayer-container">
    <video id="cit-player-container" class="video" preload="auto" playsinline webkit-playsinline></video>
  </div>
</template>
<script setup>
import TCPlayer from 'tcplayer.js'
import 'tcplayer.js/dist/tcplayer.min.css'
import { onMounted, reactive } from 'vue'
const props = defineProps(['url'])
let player = reactive(null)
const UrlPlayer = (url) => {
  TCPlayer('cit-player-container', {
    sources: [
      { src: url }
    ],
    licenseUrl: 'https://license.vod2.myqcloud.com/license/v2/1318517483_1/v_cube.license',
    poster: ''
  })
  // UrlPlayer.src('https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/62656d94387702300542496289/v.f100240.m3u8') // url 播放地址
}
// // 通过appID播放
// const AppPlayer = TCPlayer('cit-player-container', { // cit-player-container 为播放器容器 ID，必须与 html 中一致
//     fileID: '3701925921299637010', // 请传入需要播放的视频 fileID（必须）
//     appID: '1500005696', // 请传入点播账号的 appID（必须）
//     //私有加密播放需填写 psign， psign 即播放器签名，签名介绍和生成方式参见链接：https://cloud.tencent.com/document/product/266/42436
//     psign:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTUwMDAwNTY5NiwiZmlsZUlkIjoiMzcwMTkyNTkyMTI5OTYzNzAxMCIsImN1cnJlbnRUaW1lU3RhbXAiOjE2MjY4NjAxNzYsImV4cGlyZVRpbWVTdGFtcCI6MjYyNjg1OTE3OSwicGNmZyI6InByaXZhdGUiLCJ1cmxBY2Nlc3NJbmZvIjp7InQiOiI5YzkyYjBhYiJ9LCJkcm1MaWNlbnNlSW5mbyI6eyJleHBpcmVUaW1lU3RhbXAiOjI2MjY4NTkxNzksInN0cmljdE1vZGUiOjJ9fQ.Bo5K5ThInc4n8AlzIZQ-CP9a49M2mEr9-zQLH9ocQgI',
//     licenseUrl: 'https://license-url'
// })
onMounted(() => {
  // 初始化播放器
  console.log('视频地址是:', props.url)
  // UrlPlayer(props.url)
  player = TCPlayer('cit-player-container', {
    licenseUrl: 'https://license.vod2.myqcloud.com/license/v2/1318517483_1/v_cube.license'
  })
  player.src(props.url)
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