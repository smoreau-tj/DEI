<template>
  <main>
    <div class="header">
      <h1>AAPI</h1>
    </div>
  </main>
</template>

<script>
import data from '@/assets/data/council'
export default {
  data() {
    return {
      content: data.aapi,
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;

  h1 {
    margin: 0 auto;
    padding: 0 1rem;
  }
}
</style>
