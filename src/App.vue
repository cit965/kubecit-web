<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/user'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Foot.vue'
import { provide } from 'vue';

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
provide('baseTool', { router, route, userStore })
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