<template>
  <div class="bg wfull pageRouter flxC aiC">
    <div class="fs40 mt20 fwb">招聘讲师</div>
    <div class="bgbb vw90 p20 bbox flxC aiC mt20 bdr20 shadow1">
      <div class="tcgray2 fs20 grow-text br3 wfull ovh">
        If (codeing && shareing === <span class="tcred">❤</span>) join_us()
      </div>
      <div class="mt20 flxC aiC jcC showInfo">
        <div class="tcbg fs20">如果您热爱编程，乐于分享，请加入我们！</div>
      </div>
    </div>
    <div class="wfull flxC aiC mt20 p20 bbox">
      <div class="fs30 fwb tcred1 vw90">付出终有回报</div>
      <div class="tcgray vw90 mt10">已有1000+讲师加入慕课网讲师团，而且收获颇丰~</div>
      <div class="psr vw80 h240 ovh mt20">
        <div class="psa wfull flxR transLeft" :class="'left'+cardmove">
          <div v-for="(item,index) in teacherList" :key="item.id">
            <TeacherCard :teacher-info="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="wfull flxC aiC mt20 p20 bbox">
      <div class="fs30 fwb tcred1 vw90">你不是一个人在奋斗</div>
      <div class="tcgray vw90 mt10">我们的内容教研团队会协助你完成课程设计，并且提供科学的教学方法和技巧让你如虎添翼，
高效输出优质课程，斩获一大波粉丝</div>
      <div class="bcwarning w200 bdr50 p10 fw40 tcwhite csp taC mt40 mb20" @click="contactus">加入我们</div>
    </div>
  </div>
</template>

<script setup>
  import TeacherCard from '../components/recruitTeacher/TeacherCard.vue';
  import { getRecommendedLecturer } from '../utils/api/api';

  const router = inject('baseTool')
  
	const teacherList = ref([
    // {
    //   id:1, name: 'Tom',
    //   avatar: "https://img2.sycdn.imooc.com/54584e2c00010a2c02200220-160-160.jpg",
    //   level: '精英讲师',
    //   title: 'web服务工程师',
    //   brief: '十年研发及团队管理经验，对程序员面临的各种问题深有体会；精通Python、Java、Node.js、JavaScript等语言，对Web的基础研发、高并发处理与分布式有非常深入的理解。课程讲解深入浅出，极为擅长培养学生的编程思维。',
    //   achievement: {
    //     students: 1000,
    //     fans: 500,
    //     classHours: 2523,
    //     praises: 12000
    //   }
    // }
  ])
  async function getRecommendedTeachers() {
    teacherList.value = (await getRecommendedLecturer()).recommendedLecturers
  }
  getRecommendedTeachers()
  const cardmove = ref(0)
  setInterval(()=>{
    if (cardmove.value == 2) cardmove.value = 0
    else cardmove.value ++
  }, 4000)
	function contactus() {
    router.push({name: 'contactUs'})
  }
  onMounted(() => {
    // console.log(document.body.scrollTop)
    // document.body.scrollTop = 0
    // console.log(document.body.scrollTop)
  })
</script>

<style lang='scss' scoped>
.grow-text {
  width: 41ch;
  animation: grow 5s steps(41), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  font-family: monospace;
}

@keyframes grow {
  from {width: 0;}
}

@keyframes blink {
  50% {border-color: transparent;}
}
.bg {
  background-image: linear-gradient(to bottom, white, #3483ff);
}
.bgbb {
  background-image: url('@/assets/img/black-board.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

@keyframes delayShow {
  from {opacity: 0;}
  to {opacity: 1;}
}
.showInfo {
  animation: delayShow 1s ease 5s forwards;
  opacity: 0;
}

.shadow1 {
  box-shadow: 0 0 10px #000000;
}

.bglight {
  backdrop-filter: brightness(0.9);
}

.transLeft {
  transition: left 0.5s;
}
.left0 {
  left: 0;
}
.left1 {
  left: -50%;
}
.left2 {
  left: -100%;
}
.left3 {
  left: -2460px;
}
</style>