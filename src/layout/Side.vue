<template>
  <div class="layout__side">
    <aside>
      Side
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.layout__side {
  display: grid;
  height: 100vh;
  grid-template-columns: 0.15fr 0.8fr;
  grid-template-rows: 1fr;

  aside {
    background-color: #333;
    color: #fff;
  }
}
</style>