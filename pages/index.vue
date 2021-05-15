<template>
  <div class="container">
    <div>
      <h1>adjustment <span class="red-underline">needed</span></h1>
      <div v-show="!isLoggedIn" id="googleButton"></div>
    </div>
    <div class="updates">
      <h3>in progress</h3>
      <NuxtLink to="/aapi">AAPI Month</NuxtLink>
    </div>
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
body {
  background-color: #000;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #fff;
    line-height: 1.5em;
  }
  .red-underline {
    border-bottom-width: thick;
    border-bottom: 2px solid red;
    padding-bottom: 2px;
  }
}
</style>
