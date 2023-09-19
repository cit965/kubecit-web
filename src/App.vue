<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Foot.vue'
</script>

<template>
  <div ref="scrollArea">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
