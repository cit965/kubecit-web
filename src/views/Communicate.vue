<template>
  <div class="communicate-container">
    <div class="communicate-title">交流模块<el-icon class="el-icon--upload"><promotion /></el-icon></div>
    <ElInput type="textarea" class="communicate-textarea" rows="6" v-model="currentText" placeholder="请输入你的问题"/>
    <el-upload
      class="communicate-upload"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-change="handleUploadChange"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">可添加图片等文件、将文件拖到此处，或 <em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </template>
    </el-upload>
    <ElButton type="primary" class="communicate-button">提交</ElButton>
  </div>
</template>
<script setup>
//element-ui
import { Avatar, Lock, Iphone } from '@element-plus/icons-vue'
import { ElInput, ElButton } from 'element-plus'
import { UploadFilled, Promotion } from '@element-plus/icons-vue'
let currentText = ref('');

const handleUploadChange = (...args) => {
  console.log(args, 'fffff');
}
</script>
<style scoped lang="scss">
.communicate-title {
  padding: 20px 0;
  font-size: 18px;
}
.communicate-container {
  max-width: 1140px;
  width: 1140px;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
}

.communicate-textarea {
  width: 50%;
  display: block;
}

.communicate-button {
  margin: 20px 0;
}

.communicate-upload {
  padding: 20px 0;
  width: 50%;
}
</style>
