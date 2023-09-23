<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Foot.vue'
</script>

<template>
  <div ref="scrollArea" class="fullh">
    <Header></Header>
    <div class="pageRouter">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .fullh {
    min-height: 100vh;
  }

  
</style>