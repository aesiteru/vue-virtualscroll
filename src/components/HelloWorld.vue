<template>
  <div class="hello">
    {{ message }}, {{ moduleBname }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class HelloWorld extends Vue {

  @Prop() private name!: string

  get message(): string {
    return 'Hello!!, ' + this.name
  }

  @Getter('moduleB/name') readonly moduleBname!: string

}
</script>

<style lang="scss" scoped>
.hello {
  font-size: 1.6rem;
}
</style>