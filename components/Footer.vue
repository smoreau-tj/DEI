<template>
  <footer>
    <p>{{ content }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      content: `Copyright © ${new Date().getFullYear()} Tommy John all rights reserved`,
    }
  },
}
</script>
<style lang="scss" scoped>
p {
  padding: 2rem;
}
</style>
