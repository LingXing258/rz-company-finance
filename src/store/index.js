import { createStore } from 'vuex'
import { getCanExpireLocal, setCanExpireLocal } from '@/utils/keepState'
export default createStore({
  state: {
    user:getCanExpireLocal("user")
  },
  getters: {
  },
  mutations: {
    setUser(state ,payload) {
      state.user = payload
      setCanExpireLocal("user",payload,3)
    }
  },
  actions: {
  },
  modules: {
  },

  })
