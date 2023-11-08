<template>
  <div class="review-container">
    <el-table :data="sourceData" stripe>
      <el-table-column prop="createAt" label="申请日期" width="400" />
      <el-table-column prop="name" label="姓名" width="400" />
      <el-table-column label="审核状态" >
        <template #default="scope">
          <div v-if="scope.row.isPassed === 1">已审核通过</div>
          <div  v-if="scope.row.isPassed === 2">审核不通过</div>
          <div v-if="scope.row.isPassed === 3">
            <el-button link type="primary" size="small" @click="handlePassed(scope.row)">通过</el-button>
            <el-button link type="primary" size="small" @click="handleNoPassed(scope.row)">不通过</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <Pagination :page-count="pageCount" @page-number="clickPageNumber"></Pagination>
  </div>
</template>
<script setup>
import Pagination from '@/components/common/Pagination.vue'
let pageCount = ref(1) // 分页数据
const sourceData = ref(null)
import { teacherApplyList, teacherReview } from '@/utils/api/teacher.js'
// 1、查询讲师申请列表
const queryList = (pageNum) => {
  const data = {
    pageSize: 10,
    pageNum: pageNum
  }
  teacherApplyList(data).then(res => {
    pageCount.value = Math.ceil(res.count/10)
    res.data.forEach(item => {
      item.createAt = convertTime(item.createAt)
    })
    sourceData.value = res.data
  })
}
const clickPageNumber = (p) => {
  if (p) {
    queryList(p)
  }
}
// 2、审核通过
const handlePassed = (item) => {
  const data = {
    isPassed: '2',
    message: '审核通过'
  }
  teacherReview(item.id, data).then(res => {
    console.log(res)
  })
}
// 3、审核不通过
const handleNoPassed = (item) => {
  teacherReview(item.id).then(res => {
    console.log(res)
  })
}
// 时间转换
const convertTime = (timeStr) => {
  let cerateDate = new Date(timeStr).getTime()
  const date = new Date(cerateDate)
  console.log(date)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')

  const beijingTimeStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`
  return beijingTimeStr
}
onMounted(() => {
  queryList(1)
})

</script>
<style scoped lang="scss">
.review-container {
  padding-top: 70px;
  width: 1200px;
  margin: 0 auto;
}
</style>