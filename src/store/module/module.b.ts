import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name      : 'moduleB'
})
export default class ModuleB extends VuexModule {
  
  data: string = 'moduleB'

  @Mutation
  setData(data: string) {
    this.data = data
  }

  @Action
  editData(data: string) {
    this.context.commit('setData', data)
  }

  get name (): string {
    return this.data
  }

}