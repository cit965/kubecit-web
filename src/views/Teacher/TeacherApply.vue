<template>
  <div class="screen-container">
    <div class="teacher-apply">
      <div class="apply-container">
        <div class="apply-left">
          <div class="head">欢迎加入讲师团</div>
          <el-form :model="teacherInfo" ref="teacherForm" :rules="rules" label-width="70px" label-position="left" class="rule-form">
            <el-form-item label="姓名" prop="name">
              <el-input v-model.trim="teacherInfo.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="等级" prop="level">
              <el-select v-model="teacherInfo.level" placeholder="请选择您的级别">
                <el-option
                  v-for="item in levelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="技能" prop="skills">
              <el-input v-model.trim="teacherInfo.skills" :rows="4" type="textarea" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="履历" prop="curriculumVitae">
              <el-input v-model="teacherInfo.curriculumVitae" :rows="4" type="textarea"  placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="作品" prop="works">
              <el-input v-model="teacherInfo.works" :rows="4" type="textarea"  placeholder="请输入"></el-input>
            </el-form-item>
            <!-- <el-form-item label="头像" prop="avator">
              <el-input v-model.trim="teacherInfo.avator" placeholder="请输入"></el-input>
            </el-form-item> -->
            <el-form-item label="详细介绍" prop="detail">
              <el-input v-model.trim="teacherInfo.detail" :rows="8" type="textarea"  placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
          <div class="btn-container">
            <el-button type="primary" @click="commitApply(form)">提交资料</el-button>
          </div>
        </div>
        <div class="apply-right">
          <h2 class="teacher-head">为什么要成为讲师？</h2>
          <p>如果你对本课程领域擅长、能按照自己或者本求课的描述分享你的知识给互联网用户，就来应聘吧。</p>
          <p>你的课程会在我们的网站及我们的合作渠道中展示和推广，你就是未来的行业大牛。</p>
          <p>我们还会为你支付课程报酬，让你得到应有的回报</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { applyBeTeacher } from '@/utils/api/teacher.js'
import { getInfo } from '@/utils/api/api.js'
import { ElMessage } from 'element-plus'
const teacherInfo = ref({
  name: '',
  level: '',
  skills: '',
  works: '',
  curriculumVitae: '',
  avator: '',
  detail: ''
})
const levelOptions = [{'value': 'TEACHER_ENTRY', 'label': '入门级'},
  {'value': 'TEACHER_PRIMARY', 'label': '初级'},
  {'value': 'TEACHER_INTERMEDIATE', 'label': '中级'},
  {'value': 'TEACHER_SENIOR', 'label': '高级'},
  {'value': 'TEACHER_MASTER', 'label': '大师级'}
]
const teacherForm = ref()
//校验规则
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入您的姓名',
      trigger: ['blur', 'change'],
    },
  ],
  skills: [
    {
      required: true,
      message: '请输入您的技能',
      trigger: ['blur', 'change'],
    },
  ],
  level: [
    {
      required: true,
      message: '请选择您的级别',
      trigger: ['blur', 'change'],
    },
  ],
  works: [
    {
      required: true,
      message: '请输入您的作品',
      trigger: ['blur', 'change'],
    },
  ],
  curriculumVitae: [
    {
      required: true,
      message: '请输入您的履历',
      trigger: ['blur', 'change'],
    },
  ],
  detail: [
    {
      required: true,
      message: '请输入详细描述',
      trigger: ['blur', 'change'],
    },
  ]
})
getInfo().then((res) => {
  console.log('用户信息', res)
})
// 1、申请成为讲师
const commitApply = () => {
  teacherForm.value.validate(valid => {
    if (valid) {
      console.log('校验通过')

      applyBeTeacher(teacherInfo.value).then(res => {
        console.log(res)
        if (res && res.message.indexOf('申请已提交') !== -1) {
          ElMessage({
            type: 'success',
            message: res.message
          })
          router.push({
            name: 'PersonCenter'
          })
        }
      })
    }
  })
}

</script>
<style scoped lang="scss">
.screen-container {
  background-color: #f2f4f5;
  padding: 20px;
}
.teacher-apply {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .apply-container {
    display: flex;
    .apply-left {
      width: 798px;
      padding: 40px;
      .head {
        font-size: 20px;
        line-height: 40px;
        padding: 0 0 25px;
      }
      .rule-form {
        
        :deep(.el-input) {
          width: 320px;
        }
      }
      .btn-container {
        text-align: center;
      }
    }
    .apply-right {
      width: 300px;
      height: 400px;
      margin: 40px 0 0 40px;
      padding: 20px;
      background-color:  #f2f4f5;
      h2 {
        color: #333;
        margin-bottom: 20px;
      }
      p {
        color: #969b9e;
        font-size: 12px;
        line-height: 24px;
        padding: 2px 0 12px;
      }
    }
  }
  
}
</style>