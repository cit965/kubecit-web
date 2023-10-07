<template>
  <div class="course-menu">
    <div class="menu-container">
      <div class="menu-item" :class="{'is-active': currentIndex === 0}" @click="showSelectedList(0)">课程章节</div>
      <!-- <div class="menu-item" :class="{'is-active': currentIndex === 1}" @click="showSelectedList(1)">资料下载</div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const emit = defineEmits(['clickIndex'])
let currentIndex = ref(0)
const showSelectedList = (index) => {
  currentIndex.value = index
  emit('clickIndex', index)
}
</script>
<style scoped lang="scss">
.course-menu {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  .menu-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 100px;
    .menu-item {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: bold;
      line-height: 80px;
      margin-right: 70px;
      cursor: pointer;
      position: relative;
    }
    .is-active {
      color: #388fff;
      &::after {
        position: absolute;
        left: 10%;
        bottom: 20px;
        content: '';
        width: 80%;
        height: 6px;
        background: #388fff;
        border-radius: 3px;
      }
    }
  }
}
</style>
