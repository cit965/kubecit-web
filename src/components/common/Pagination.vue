<template>
  <div class="pagination">
    <div class="first-page" v-if="pageCount > 1" @click="clickFirstPage">首页</div>
    <el-pagination
      background
      layout="prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      :default-page-size="12"
      :page-count="pageCount"
      v-model:current-page="currentPage"
      @current-change="clickSomePage"/>
    <div class="last-page" v-if="pageCount > 1" @click="clickLastPage">尾页</div>
  </div>
</template>

<script setup>
const props = defineProps(['pageCount'])
const emit = defineEmits(['page-number'])
let currentPage = ref(1)
const clickSomePage = (pageNumber) => {
  emit('page-number', pageNumber)
  currentPage.value = pageNumber
}
const clickFirstPage = () => {
  if (currentPage.value === 1) return
  emit('page-number', 1)
  currentPage.value = 1
}
const clickLastPage = () => {
  if (currentPage.value === props.pageCount) return
  emit('page-number', props.pageCount)
  currentPage.value = props.pageCount
}
</script>

<style scoped>
.pagination {
  display: flex;
  width: 1200px;
  margin: 30px auto 70px;
  justify-content: center;
  align-items: center;
}
.pagination .first-page, .last-page {
  height: 30px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  color: #303133;
  width: 60px;
  cursor: pointer;
}
.pagination .first-page:hover, .last-page:hover {
  color: #337dff;
}
</style>
