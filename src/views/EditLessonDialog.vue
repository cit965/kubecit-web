<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="编辑课时"
      close-on-click-modal
      @close="handleClose"
      center
    >
      <el-form
        ref="editLessonFromRef"
        label-width="120px"
        :model="lessonForm"
        :rules="rules"
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
            :options="hasFreeList"
            clearable
          />
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
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addSubmit(editLessonFromRef)">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';
import { nextTick, reactive, ref } from 'vue';

const dialogVisible = ref(false);
const editLessonFromRef = ref();
const emits = defineEmits(['editLessonFrom']);

//小节表单
const lessonForm = ref({
  name: '',
  type: '',
  storagePath: '',
  source: '',
  courseware: '',
  isFreePreview: '',
  chapterId: '',
});

//校验规则
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
});

//课时付费状态
const hasFreeList = [
  {
    value: 'FreePreview_UNKNOWN',
    label: '公开课',
  },
  {
    value: 'TRUE',
    label: '免费',
  },
  {
    value: 'FALSE',
    label: '收费',
  },
];

const token = ref({
  Authorization: '',
});

//点击确认按钮
const addSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emits('editLessonFrom', lessonForm.value);
      lessonForm.value = {
        name: '',
        type: '',
        storagePath: '',
        source: '',
        courseware: '',
        isFreePreview: '',
        chapterId: '',
      };
      dialogVisible.value = false;
    } else {
      return false;
    }
  });
};

const open = () => {
  token.value.Authorization = localStorage.getItem('token') as any;
  dialogVisible.value = true;
};

//关闭
const handleClose = () => {
  nextTick(() => {
    editLessonFromRef.value.resetFields();
    editLessonFromRef.value.clearValidate();
  });
};
defineExpose({
  open,
});
</script>
<style scoped lang="scss">
:deep(.el-dialog) {
  width: 550px;
}
:deep(.el-input) {
  width: 350px !important;
  margin-right: 0 !important;
}
</style>
