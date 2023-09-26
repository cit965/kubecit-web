import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo: {},
    }
  },
  actions: {
    //设置token
    setToken(token) {
      this.token = token
    },
    //清除token
    clearToken() {
      this.token = ''
      //清除用户信息
      this.userInfo = {}
    },
    setUserInfo (userInfo) {
      for (const key in userInfo) {
        this.userInfo[key] = userInfo[key]
      }
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'cit965_user',
        storage: localStorage,
        //paths: ['token']
      },
    ],
  },
})
