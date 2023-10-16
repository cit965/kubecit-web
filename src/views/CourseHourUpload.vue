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
      </div>
      <div class="couer-box">
        <el-form
          ref="ruleFormRef"
          :model="lessonForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="课时名称" prop="name">
            <el-input v-model="lessonForm.name" />
          </el-form-item>
          <el-form-item label="课时来源" prop="source">
            <el-input v-model="lessonForm.source" />
          </el-form-item>
          <el-form-item label="课时文件地址" prop="storagePath">
            <el-input v-model="lessonForm.storagePath" />
          </el-form-item>
          <el-form-item label="课件地址" prop="courseware">
            <el-input v-model="lessonForm.courseware" />
          </el-form-item>
          <el-form-item label="章节选择" prop="chapterId">
            <el-select-v2
              v-model="lessonForm.chapterId"
              placeholder="请选择章节"
              :options="options"
              clearable
            />
            <el-button
              type="primary"
              style="margin-left: 20px"
              @click="createChatper"
            >
              创建章节
            </el-button>
          </el-form-item>
          <el-form-item label="是否付费" prop="isFreePreview">
            <el-switch
              v-model="lessonForm.isFreePreview"
              active-value="TRUE"
              inactive-value="FALSE"
            />
          </el-form-item>
          <el-form-item label="课时类型" prop="type">
            <el-radio-group v-model="lessonForm.type">
              <el-radio label="VIDEO" name="VIDEO"> 视频 </el-radio>
              <el-radio label="AUDIO" name="AUDIO"> 音频 </el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="Activity form" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item> -->
          <el-form-item>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              确定
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <AddChapterDialog
      ref="AddChapterDialogRef"
      @add-chapter-from="addChapter"
    />
  </div>
</template>

<script setup>
import { cloneDeep } from 'lodash';
import AddChapterDialog from './AddChapterDialog.vue';
const router = useRouter();
const route = useRoute();
const AddChapterDialogRef = ref();

const nowRoute = ref({
  path: '',
  name: '',
});
nowRoute.value.path = route.path;
nowRoute.value.name = route.meta.title;
const formSize = ref('default');
const ruleFormRef = ref();
//小节表单
const lessonForm = reactive({
  name: '',
  type: '',
  storagePath: '',
  source: '',
  courseware: '',
  isFreePreview: '',
  chapterId: '',
});

const rules = reactive({
  name: [{ required: true, message: '请输入课时名称', trigger: 'blur' }],
  type: [
    {
      required: true,
      message: '请选择课时类型',
      trigger: 'blur',
    },
  ],
  storagePath: [
    {
      required: true,
      message: '请输入课时地址',
      trigger: 'blur',
    },
  ],
  source: [
    {
      required: false,
      message: '请输入课时来源',
      trigger: 'blur',
    },
  ],
  courseware: [
    {
      required: true,
      message: '请输入课件地址',
      trigger: 'blur',
    },
  ],
  isFreePreview: [
    {
      required: true,
      message: '请选择是否付费',
      trigger: 'blur',
    },
  ],
  chapterId: [
    {
      required: true,
      message: '请选择章节',
      trigger: 'blur',
    },
  ],
  storagePath: [
    { required: true, message: '请输入课时文件地址', trigger: 'blur' },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', lessonForm);
    } else {
      console.log('error submit!', fields);
    }
  });
  router.push('/course/CourseUploadDetail');
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

//创建章节
const createChatper = (row) => {
  AddChapterDialogRef.value.open(cloneDeep(row));
};
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
    .couer-box {
      padding-bottom: 20px;
    }
  }
}
</style>
