<template>
  <div class="vw40 h240 pl20 bbox">
    <div class="bcbg wfull bdr8 hfull p20 bbox flxR">
      <div class="flxC aiC hfull">
        <div class="psr w180 h80 flxC aiC">
          <img :src="teacherInfo.avatar" class="w80 h80 bdr40" />
          <div class="bdr12 bcfootBlue tcwhite psa btm0 fs12 p3">{{ teacherInfo.level }}</div>
        </div>
        <div class="mt10 fwb">{{ teacherInfo.name }}</div>
        <div class="mt10"> {{ teacherInfo.title }}</div>
      </div>
      <div class="flxC ml20 fl1">
        <div class="fwb">讲师简介</div>
        <div class="tcgray mt10 fs12">{{ teacherInfo.brief }}</div>
        <div class="mt20 fwb">讲师成就</div>
        <div class="flxR wfull jcSB mt10">
          <div class="flxC fs12">
            <div class="tcgray" >学生数</div>
            <div ><span class="fs20 fwb">{{ teacherInfo.achievement.students }}</span>位 </div>
          </div>
          <div class="flxC fs12">
            <div class="tcgray" >好评数</div>
            <div ><span class="fs20 fwb">{{ teacherInfo.achievement.praises }}</span>份 </div>
          </div>
          <div class="flxC fs12">
            <div class="tcgray" >粉丝数</div>
            <div ><span class="fs20 fwb">{{ teacherInfo.achievement.fans }}</span>位 </div>
          </div>
          <div class="flxC fs12">
            <div class="tcgray" >授课时长</div>
            <div ><span class="fs20 fwb">{{ teacherInfo.achievement.classHours }}</span>天 </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    teacherInfo: Object
  })

</script>

<style lang='scss' scoped>

</style>