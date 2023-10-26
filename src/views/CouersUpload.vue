<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <h1>我的课程管理</h1>
        <el-button type="primary" :icon="Upload" @click="openAddCoursesDialog">
          创建课程
        </el-button>
      </div>
      <div class="couer-box">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <template #addIcon> 21313 </template>
          <el-tab-pane label="全部" name="first"></el-tab-pane>
          <el-tab-pane label="更新中" name="second"></el-tab-pane>
          <el-tab-pane label="已完结" name="third"></el-tab-pane>
          <div class="course-list">
            <ul>
              <li class="list-item">
                <div class="item-content">
                  <img
                    src="https://raw.githubusercontent.com/mouuii/picture/master/9ca7e372ef712cd03fd65313a221124743d37b6d.jpeg"
                    alt=""
                  />
                  <div class="couer-info">
                    <p>java</p>
                    <span class="info-text">已完结 | 共36课时</span>
                    <span class="info-text">创建时间：</span>
                    <div class="check-info">
                      <el-tag class="mx-1 check-box" type="danger" size="small"
                        >驳回</el-tag
                      >
                      <el-tag class="mx-1" size="small" type="danger"
                        >查看原因</el-tag
                      >
                    </div>
                  </div>
                </div>
                <div class="action-box">
                  <el-button type="primary" @click="goDetail"
                    >查看详情</el-button
                  >
                  <el-button type="primary" :icon="Upload" @click="goUploadHour"
                    >课时上传</el-button
                  >
                  <el-button type="primary" @click="openEdit(1)"
                    >编辑</el-button
                  >
                  <el-button type="danger" @click="deleteCourse"
                    >删除</el-button
                  >
                </div>
              </li>
              <li class="list-item">
                <div class="item-content">
                  <img
                    src="https://raw.githubusercontent.com/mouuii/picture/master/9ca7e372ef712cd03fd65313a221124743d37b6d.jpeg"
                    alt=""
                  />
                  <div class="couer-info">
                    <p>java</p>
                    <span class="info-text">已完结 | 共36课时</span>
                    <span class="info-text">创建时间：</span>
                    <div class="check-info">
                      <el-tag class="mx-1 check-box" type="danger" size="small"
                        >驳回</el-tag
                      >
                      <el-tag class="mx-1" size="small" type="danger"
                        >查看原因</el-tag
                      >
                    </div>
                  </div>
                </div>
                <div class="action-box">
                  <el-button type="primary">查看课程</el-button>
                  <el-button type="primary" :icon="Upload">课时上传</el-button>
                  <el-button type="primary">编辑</el-button>
                  <el-button type="danger">删除</el-button>
                </div>
              </li>
            </ul>
          </div>
        </el-tabs>
      </div>
    </div>
    <AddCoursesDialog ref="AddCoursesDialogRef" @add-course-from="addCourses" />
    <EditCoursesDialog
      ref="EditCoursesDialogRef"
      @edit-courses-from="editCourses"
    />
  </div>
</template>

<script setup>
import { cloneDeep } from 'lodash';
import { Upload } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import AddCoursesDialog from './AddCoursesDialog.vue';
import EditCoursesDialog from './EditCoursesDialog.vue';
import { searchCourse } from '@/utils/api/course.js'
const { userStore, router } = inject('baseTool')
const activeName = ref('first');
const AddCoursesDialogRef = ref();
const EditCoursesDialogRef = ref();
const handleClick = (tab, event) => {
  console.log(tab, event);
};

//跳转查看详情
const goDetail = () => {
  router.push({
    name: 'CourseUploadDetail',
  });
};
//跳转上传课时
const goUploadHour = () => {
  router.push({
    name: 'CourseHourUpload',
  });
};

//删除课程
const deleteCourse = () => {
  ElMessageBox.confirm('此操作将永久删除该课程, 是否继续?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除已取消！',
      });
    });
};

//编辑课程
const openEdit = (row) => {
  console.log('update', row);

  EditCoursesDialogRef.value.open(cloneDeep(row));
};

//新增课程
const openAddCoursesDialog = () => {
  AddCoursesDialogRef.value.open();
};
// 新增课程信息
const addCourses = (courseInfo) => {
  console.log('新增内容', courseInfo)
  cerateCourse(courseInfo).then(res=>{
    debugger
	})
}
// 查询课程信息
const queryCourseList = () => {
  let courseP = {
    pageNum: 1,
    pageSize: 20,
    teacherId: userStore.userInfo.userId
  }
  
  searchCourse(courseP).then(res=>{
		courseList.value = res.list
    pageCount.value = Math.ceil(res.total/12)
	})
}
queryCourseList()
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  // background-color: #f5f6f7;
  padding: 20px 0;
  .content {
    width: 1200px;
    height: 100%;
    background-color: #fff;
    margin: auto;
    border-radius: 10px;
    padding: 0 20px;
    //四边都有灰色阴影
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #d7dce0;
      .item-content {
        display: flex;
        img {
          width: 200px;
          height: 100px;
          margin-right: 15px;
        }
        .couer-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            font-size: 16px;
            font-weight: 700;
          }
          .info-text {
            font-size: 14px;
            color: #a8a9ad;
          }
          // .count-info {
          //   font-size: 14px;
          //   color: #a8a9ad;
          //   margin-right: 10px;
          // }
          // .count-info:last-child {
          //   margin-right: 0;
          // }
          .check-info {
            display: flex;
            align-items: center;

            .check-box {
              margin-right: 10px;
            }
          }
        }
      }
    }
    .list-item:last-child {
      border-bottom: none;
    }
  }
}
</style>
