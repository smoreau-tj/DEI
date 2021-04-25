<template>
  <nav class="navigation">
    <div class="nav-left">
      <div class="logo">
        <NuxtLink to="/">
          <img class="logo" src="@/assets/svg/tj-logo.svg" alt="TommyJohn Logo"
        /></NuxtLink>
      </div>
      <ul>
        <li v-if="isLoggedIn">
          <NuxtLink to="/mission">Mission</NuxtLink>
        </li>
        <li v-if="isLoggedIn">
          <NuxtLink to="/council">Council</NuxtLink>
        </li>
        <li v-if="isLoggedIn">
          <NuxtLink to="/resources">Resources</NuxtLink>
        </li>
        <li v-if="isLoggedIn"><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
    <template v-if="isLoggedIn">
      <div class="login-info">
        <p>Hello {{ user.fullName }}</p>
        <img :src="user.profileUrl" :alt="user.fullName" class="avatar" />
      </div>
    </template>
    <div v-show="!isLoggedIn" id="googleButton"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sample: 'This is a sample',
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 200px;
  // max-width: 150px;
  padding: 2px 5px;
  filter: saturate(0);
  //filter: brightness(0.5);
  // background-color: #fff;
  //background-blend-mode: screen multiply;
  //padding-top: 1.5rem;
  margin: 0 auto;
}
nav {
  //background-color: #fff;
  color: #fff;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
}
.nav-left {
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    a {
      color: #fff;
    }
  }
}
.login-info {
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 5px;
    & > * {
      margin: 5px;
    }
  }
}
nav {
  a {
    text-decoration: none;
    color: $dark-grey;
    transition: color 0.2s ease;
    &:hover {
      color: $brand-red;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    vertical-align: middle;
    text-align: center;
    border-bottom: none;
    line-height: 60px;
    font-size: 1.4em;
    margin: 0.2rem;

    @media screen and (min-width: 600px) {
      display: inline-block;
      margin-right: 8px;
      line-height: 1;
    }
  }
}
</style>
