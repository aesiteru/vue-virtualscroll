<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class Home extends Vue {
  get layout () {
    return (this.$route.meta.layout || 'default') + '-layout'
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
}
</style>