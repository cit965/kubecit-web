<template>
  <div class="outerplayer-container">
    <iframe v-if="highQualityUrl" class="video" :src="highQualityUrl" frameborder="no" scrolling="no"></iframe>
    <div v-else>视频暂时无法播放，可能是链接不正确</div>
  </div>
</template>
<script setup>
const props = defineProps(['url'])
let highQualityUrl = ref('')
onMounted(() => {
  highQualityUrl.value = props.url + '&autoplay=0&highQuality=1'
})
</script>
<style scoped lang="scss">
.outerplayer-container {
  position: relative;
  .video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

