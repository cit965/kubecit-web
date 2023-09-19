<template>
  <div class="course-header">
    <div class="course-container">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/course' }">课程</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>免费课</el-breadcrumb-item> -->
        <el-breadcrumb-item>{{courseData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="course-title">{{courseData.name}}</div>
      <div class="course-profile">
        <div class="course-teacher">
          <el-avatar :size="60" @error="errorHandler">
            <img :src="courseData.cover" alt=""/>
          </el-avatar>
          <div class="avatar-right">
            <div class="name">张老师</div>
            <div class="level">金牌讲师</div>
          </div>
        </div>
        <div class="course-tag">
          <div>难度</div>
          <div class="tag">{{levelMap[courseData.level]}}</div>
          <div class="dot">·</div>
          <div>时长</div>
          <div class="tag">{{courseData.duration || 6.00}}</div>
          <div class="dot">·</div>
          <div>学习人数</div>
          <div class="tag">{{courseData.people}}</div>
          <div class="dot">·</div>
          <div>综合评分</div>
          <div class="tag">{{ courseData.score || 99 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { onMounted, ref, defineProps } from 'vue'
const levelMap = ref({1:'初级', 2:'中级', 3:'高级'})
const errorHandler = () => true
const props = defineProps({
  courseData: {
    type: Object,
    default(rawProps) {
      return { }
    }
  }
})
</script>
<style scoped lang="scss">
.course-header {
  width: 100%;
  height: 200px;
  background: url('https://www.xuexiluxian.cn/resources/images/courseInfobg1920.png');
}
.course-container {
  margin: 0 auto;
  width: 1200px;
  height: 200px;
  color: #ffffff;
  padding-top: 20px;
}
:deep(.el-breadcrumb__inner) {
  color: #fff !important; 
}
:deep(.el-breadcrumb__separator) {
  color: #fff;
}
.course-header .course-title {
  margin: 30px 0 10px 0px;
  font-size: 24px;
}
.course-header .course-profile {
  display: flex;
}
.course-teacher {
  display: flex;
}
.avatar-right {
  margin: 8px 0 0 8px;
  font-size: 14px;
  line-height: 21px;
}
.course-tag {
  display: flex;
  align-items: center;
  margin-left: 100px;
  font-size: 14px;
}
.course-tag {
  .tag {
    margin: 0 10px;
  }
  .dot {
    margin-right: 10px;
  }
}
</style>
