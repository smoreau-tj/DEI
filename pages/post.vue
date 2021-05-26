<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    },
  },
}
</script>

<style lang="scss">
  
</style>
