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
  color: rgb(255, 255, 255);
  border-bottom: 1px solid red;
  border-bottom-width: thick;
  padding-bottom: 3px;
  width: 120px;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
p {
  line-height: 2.5;
  margin: 1.5rem;
  color: $white;
}
</style>
