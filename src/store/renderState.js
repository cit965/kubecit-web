import { defineStore } from 'pinia'

export const useRenderState = defineStore({
  id: 'renderState',
  state: () => ({
    currentTabRouter: 'home'
  })
})