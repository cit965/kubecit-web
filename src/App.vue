<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/user'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Foot.vue'
import { ElMessage } from 'element-plus';

const router = useRouter()
window['$router'] = router
const route = useRoute()
const userStore = useUserStore()
provide('baseTool', { router, route, userStore })

window['$message'] = {
  success: (message) => {
    ElMessage({message, type: 'success'})
  },
  warning: (message) => {
    ElMessage({message, type: 'warning'})
  },
  info: (message) => {
    ElMessage(message)
  },
  error: (message) => {
    ElMessage({message, type: 'error'})
  }
}
</script>

<template>
  <div ref="scrollArea" class="fullh">
    <Header class="st"></Header>
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
  .st {
    z-index: 100;
    position: sticky; top:0;
  }
  
</style>