<template>
  <div class="course-cart">
    <div class="course-title">{{ courseData.name }}</div>
    <div class="cart-container">
      <div class="common-btn buy" @click="buyInstance">立即购买</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  courseData: {
    type: Object
  }
})
const emit = defineEmits(['buy-instance'])
const buyInstance = () => {
  emit('buy-instance', props.courseData)
}
</script>
<style scoped lang="scss">
.course-cart {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
  .course-title {
    padding: 20px;
    color: #474747;
    line-height: 35px;
  }
  .cart-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 0 20px 20px;
    .common-btn {
      width: 120px;
      height: 40px;
      line-height: 40px;
      padding: 0px;
      border: 0px;
      outline: none;
      color: #fff;
      border-radius: 23px;
      cursor: pointer;
      margin-right: 10px;
      text-align: center;
    }
    .buy {
      background-color: #dc3545;
    }
    .add {
      background-color: #6c757d;
    }
  }
}
</style>
