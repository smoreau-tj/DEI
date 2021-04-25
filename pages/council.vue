<template>
  <div>
    <h1>Council</h1>
    <div class="council">
      <div v-for="member in members" :key="member.firstName" class="member">
        <img
          :src="member.image"
          :alt="`${member.firstName} ${member.lastName}`"
        />
        <h3>{{ member.firstName }} {{ member.lastName }}</h3>
        <i class="fas fa-user"></i>
        <a :href="`mailto:${member.email}`">Email</a>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/assets/data/council'
export default {
  data() {
    return {
      members: data.members,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY)
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid $brand-red;
  border-bottom-width: thick;
  padding-bottom: 3px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
.council {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
  }
}
.member {
  width: 100%;
  max-width: calc(100% - 1rem);
  margin: 0.5rem;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    max-width: calc(256px - 1rem);
  }
  h3 {
    color: $brand-red;
    margin: 0.5rem;
  }
  img {
    width: 100%;
    filter: saturate(0) blur(0px);
    transition-timing-function: linear;
    transition: filter 3s;

    &:hover {
      filter: saturate(60%) blur(0px);
    }
  }
}
</style>
