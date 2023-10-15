<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新增章节"
      close-on-click-modal
      @close="handleClose"
      center
    >
      <el-form
        ref="addChapterFromRef"
        label-width="120px"
        :model="addChapterFrom"
        :rules="rules"
      >
        <el-form-item label="章节名称" prop="name">
          <el-input v-model="addChapterFrom.name" />
        </el-form-item>
        <el-form-item label="章节介绍" prop="description">
          <el-input v-model="addChapterFrom.description" />
        </el-form-item>
        <el-form-item label="章节类型" prop="hasFreePreview">
          <el-select
            v-model="addChapterFrom.hasFreePreview"
            clearable
            placeholder="请选择章节类型"
          >
            <el-option
              v-for="item in hasFreeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addSubmit(addChapterFromRef)">
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
const addChapterFromRef = ref();
const emits = defineEmits(['addChapterFrom']);

const addChapterFrom = ref({
  name: '',
  description: '',
  hasFreePreview: '',
  courseId: '',
});

//校验规则
const rules = reactive({
  name: [
    {
      required: true,
      message: '章节名称不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  description: [
    {
      required: true,
      message: '章节介绍不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  hasFreePreview: [
    {
      required: true,
      message: '章节类型',
      trigger: ['blur', 'change'],
    },
  ],
});

//章节付费状态
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
// let formData = new FormData() as any

//点击确认按钮
const addSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emits('addChapterFrom', addChapterFrom.value);
      addChapterFrom.value = {
        name: '',
        description: '',
        hasFreePreview: '',
        courseId: '',
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
    addChapterFromRef.value.resetFields();
    addChapterFromRef.value.clearValidate();
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
