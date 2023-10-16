<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新增课程"
      close-on-click-modal
      @close="handleClose"
      center
    >
      <el-form
        ref="addCourseFromRef"
        label-width="120px"
        :model="addCourseFrom"
        :rules="rules"
      >
        <el-form-item label="课程名称" prop="name">
          <el-input v-model="addCourseFrom.name" />
        </el-form-item>
        <el-form-item label="课程介绍" prop="detail">
          <el-input v-model="addCourseFrom.detail" />
        </el-form-item>
        <el-form-item label="课程封面" prop="cover">
          <el-input v-model="addCourseFrom.cover" />
        </el-form-item>
        <el-form-item label="课程价格" prop="price">
          <el-input v-model="addCourseFrom.price" />
        </el-form-item>
        <el-form-item label="课程标签" prop="tags">
          <el-select
            v-model="addCourseFrom.tags"
            clearable
            multiple
            :multiple-limit="1"
            placeholder="请选择课程标签"
          >
            <el-option
              v-for="item in courseTagList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="课程等级" prop="level">
          <el-select
            v-model="addCourseFrom.level"
            clearable
            placeholder="请选择课程等级"
          >
            <el-option
              v-for="item in courseLevelList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="课程分类" prop="categoryId">
          <el-select
            v-model="addCourseFrom.categoryId"
            clearable
            placeholder="请选择课程分类"
          >
            <el-option-group
              v-for="group in CoursesCateList"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.children"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-option-group>
            <!-- <el-option
              v-for="item in CoursesCateList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            /> -->
          </el-select>
        </el-form-item>

        <!-- <el-form-item label="课程图片">
          <el-upload
            ref="imgRef"
            :headers="token"
            name="course_img"
            list-type="picture-card"
            multiple
            :limit="1"
            :auto-upload="false"
            :on-change="handleChange"
            :before-upload="beforeBannersUpload"
          >
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item> -->
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addSubmit(addCourseFromRef)">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { cloneDeep } from 'lodash';
import { nextTick, reactive, ref } from 'vue';
import { queryCategoryList } from '@/utils/api/course.js';

const dialogVisible = ref(false);
const addCourseFromRef = ref();
const CoursesCateList = ref();
const emits = defineEmits(['addCourseFrom']);

const addCourseFrom = ref({
  level: '',
  name: '',
  detail: '',
  cover: '',
  price: '',
  tags: [],
  categoryId: '',
});

//校验规则
const rules = reactive({
  name: [
    {
      required: true,
      message: '课程名称不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  detail: [
    {
      required: true,
      message: '课程介绍不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  price: [
    {
      required: true,
      message: '课程价格不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  categoryId: [
    {
      required: true,
      message: '课程分类不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  cover: [
    {
      required: true,
      message: '课程封面不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  level: [
    {
      required: true,
      message: '课程等级不能为空',
      trigger: ['blur', 'change'],
    },
  ],
  tags: [
    {
      required: true,
      message: '课程标签不能为空',
      trigger: ['blur', 'change'],
    },
  ],
});

//课程标签
const courseTagList = [
  {
    value: 'NOT_REVIEWED',
    label: '未审核',
  },
  {
    value: 'REVIEWED',
    label: '已审核',
  },
  {
    value: 'SHELVED',
    label: '已上架',
  },
  {
    value: 'OFF_SHELVED',
    label: '已下架',
  },
];

//课程等级
const courseLevelList = [
  {
    value: 'LEVEL_UNKNOWN',
    label: '未知',
  },
  {
    value: 'BEGINNER',
    label: '入门',
  },
  {
    value: 'ELEMENTARY',
    label: '初级',
  },
  {
    value: 'INTERMEDIATE',
    label: '中级',
  },
  {
    value: 'ADVANCED',
    label: '高级',
  },
  {
    value: 'MASTER',
    label: '大师',
  },
];

const token = ref({
  Authorization: '',
});

//获取列表
const getCoursesCateList = async () => {
  const { categories } = await queryCategoryList();
  CoursesCateList.value = categories.map((item) => {
    return {
      label: item.categoryName,
      children: item.children.map((item2) => {
        return {
          label: item2.categoryName,
          value: item2.id,
        };
      }),
    };
  });
};

//点击确认按钮
const addSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // submitUpload()
      // //把新增信息传给父组件发请求
      // emits('addCourseFrom', formData)
      emits('addCourseFrom', addCourseFrom.value);

      addCourseFrom.value = {
        level: '',
        name: '',
        detail: '',
        cover: '',
        price: '',
        tags: [],
        categoryId: '',
      };
      dialogVisible.value = false;
    } else {
      return false;
    }
  });
};

const open = () => {
  token.value.Authorization = localStorage.getItem('token');
  getCoursesCateList();
  dialogVisible.value = true;
};

//关闭
const handleClose = () => {
  nextTick(() => {
    addCourseFromRef.value.resetFields();
    addCourseFromRef.value.clearValidate();
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
