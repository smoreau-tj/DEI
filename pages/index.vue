<template>
  <div class="container">
    <div>
      <h1>Adjustment <span class="red-underline">needed</span></h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body {
  background-color: #000;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #fff;
    line-height: 1.5em;
  }
  .red-underline {
    text-transform: uppercase;
    border-bottom: 1px solid red;
    padding-bottom: 2px;
  }
}
</style>
