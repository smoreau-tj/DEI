<template>
  <div class="content">
    <h1>Mission</h1>
    <p v-html="content.mission"></p>
  </div>
</template>

<script>
import mission from '@/assets/data/content.json'
export default {
  data() {
    return {
      content: mission,
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
p {
  line-height: 1.5;
  margin: 1.5rem;
}
</style>
