<template>
  <div class="container">
    <h1>Events: {{ getSlug }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = await params.slug
    return slug
  },
  computed: {
    getSlug() {
      return this.slug
    },
  },
}
</script>

<style lang="scss" scoped></style>
