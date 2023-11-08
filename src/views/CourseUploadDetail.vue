<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/course/uploadCourse' }"
            >我的课程管理</el-breadcrumb-item
          >
          <el-breadcrumb-item
            ><a :href="nowRoute.path">{{
              nowRoute.name
            }}</a></el-breadcrumb-item
          >
        </el-breadcrumb>
        <el-button type="primary" :icon="Upload" @click="goUpload">
          创建课时
        </el-button>
      </div>
      <div class="couer-box">
        <div>
          <div class="list-item">
            <div class="item-content">
              <img
                src="https://raw.githubusercontent.com/mouuii/picture/master/9ca7e372ef712cd03fd65313a221124743d37b6d.jpeg"
                alt=""
              />
              <div class="couer-info">
                <p>java</p>
                <span class="info-text">已完结 | 共36课时</span>
                <span class="info-text">创建时间：</span>
              </div>
            </div>
            <!-- <div class="action-box">
              <el-button type="primary" :icon="Upload">课时上传</el-button>
              <el-button type="primary">编辑</el-button>
              <el-button type="danger">删除</el-button>
            </div> -->
          </div>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="第一章" name="1" class="collapse-item">
            <div class="chapter-item">
              <span>java基础入门</span>
              <div class="item-action">
                <el-button type="primary" @click="edit(1)">编辑</el-button>
                <el-button type="danger" @click="deleteLessons(1)"
                  >删除</el-button
                >
              </div>
            </div>
            <div class="chapter-item">
              <span>java基础入门</span>
              <div class="item-action">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <EditLessonDialog ref="EditLessonDialogRef" />
  </div>
</template>

<script setup>
import { cloneDeep } from 'lodash';
import { Upload } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import EditLessonDialog from './EditLessonDialog.vue';
const router = useRouter();
const route = useRoute();
const activeNames = ref(['1']);
const EditLessonDialogRef = ref();
const nowRoute = ref({
  path: '',
  name: '',
});
nowRoute.value.path = route.path;
nowRoute.value.name = route.meta.title;
const goUpload = () => {
  router.push({
    path: '/course/CourseHourUpload',
  });
};

//编辑
const edit = (row) => {
  EditLessonDialogRef.value.open(cloneDeep(row));
};

//删除
const deleteLessons = (id) => {
  console.log('id', id);
  ElMessageBox.confirm('此操作将永久删除该课程, 是否继续?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      // deleteCe(id);
      console.log('删除');
      ElMessage({
        type: 'success',
        message: '删除成功',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除已取消',
      });
    });
};
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
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
    .couer-box {
      padding-bottom: 15px;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
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
        }
      }
    }
    .list-item:last-child {
      border-bottom: none;
    }
    .chapter-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      color: #333;
      padding: 5px 0;
      border-bottom: 1px solid #ebeef5;
      margin-bottom: 5px;
    }
    .chapter-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    :deep(.el-collapse-item__header) {
      font-size: 16px !important;
    }
    :deep(.el-collapse-item__content) {
      padding-bottom: 0;
    }
  }
}
</style>
