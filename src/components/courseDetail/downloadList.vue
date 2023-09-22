<template>
  <div class="download-container">
    <div v-for="(fItem, fIndex) in fileList" :key="fIndex" class="download-item">
      <img alt=""/>
      <div class="file-name">{{ fItem.title }}</div>
      <a class="download-file" :href="fItem.url" target="_blank">下载资料</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['fileList'])
</script>
<style scoped lang="scss">
.download-container {
  width: 1200px;
  margin: 20px auto;
  min-height: 500px;
  .download-item {
    display: flex;
    position: relative;
    align-items: center;
    margin: 10px auto !important;
    padding: 8px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
    line-height: 40px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      margin-left: 10px;
    }
    .file-name {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }
    .download-file {
      text-decoration: none;
      position: absolute;
      right: 5px;
      top: 13px;
      float: right;
      width: 80px;
      height: 30px;
      line-height: 30px;
      border: 0px;
      outline: none;
      color: #fff;
      background: #388fff;
      border-radius: 12px;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
