<template>
  <Nav class="navigation">
    <ul>
      <li>
        <NuxtLink to="/">
          <img
            class="logo"
            src="@/assets/svg/tj-logo_horizontal.svg"
            alt="TommyJohn Logo"
        /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/mission">Mission</NuxtLink>
      </li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </Nav>
</template>

<script>
export default {
  data() {
    return {
      sample: 'This is a sample',
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 150px;
  margin: 0;
  padding: 0;
  //padding-top: 1.5rem;
}

Nav {
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
