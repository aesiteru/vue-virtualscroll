<template>
  <div class="layout__default">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class Home extends Vue {
}
</script>
<style lang="scss">
.layout__default {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
</style>