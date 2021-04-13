<template>
  <div class="">
    <h1>Mission</h1>
    <p>{{ content.mission }}</p>
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

<style lang="scss" scoped></style>
