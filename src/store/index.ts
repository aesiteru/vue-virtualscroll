import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import moduleB from './module/module.b'

Vue.use(Vuex)

export interface RootState {
  data: string
}

const store: StoreOptions<RootState> = {
  state: {
    data: 'root'
  },
  getters: {

  },
  modules: {
    moduleB
  },
  mutations: {

  },
  actions: {

  }
}

export default new Vuex.Store(store)

