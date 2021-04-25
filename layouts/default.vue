<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
  created() {},
  methods: {
    test() {
      this.$store.dispatch('auth/counterUp')
    },
  },
}
</script>
<style></style>
