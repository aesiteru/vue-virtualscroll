<template>
  <div class="home">
    <hello-world name="Test Property" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name      : 'Home',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue')
  }
})
export default class Home extends Vue {

}
</script>