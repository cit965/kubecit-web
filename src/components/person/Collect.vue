<template>
  <div id="Collect">
    <div class="Message">
      <p class="title">我的收藏</p>
      <div class="msg">
        <img src="https://www.koudaizy.com/wp-content/themes/koudaizy/assets/img/empty-state-no-data.svg" alt="" />
        <p>抱歉，暂无符合条件的内容</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'

const is_active = ref(0)
const OtherPay = ref()
</script>
<style scoped lang="scss">
#Collect {
  .Message {
    width: 1053px;
    height: 374px;
    background: #fff;
    margin: 0 0 24px 20px;
    border-radius: 10px;

    p.title {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #34495e;
      font-weight: 700;
      padding: 0 24px;
      height: 52px;
      line-height: 52px;
      border-bottom: 1px solid rgba(231, 234, 243, 0.7);
    }
  }

  .msg {
    height: 321px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 56px;
      height: 56px;
      margin-bottom: 16px;
    }
    p {
      font-size: 15px;
      color: #34495e;
    }
  }
}
</style>
