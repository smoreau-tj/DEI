<template>
  <main>
    <div class="header">
      <img :src="content.image" alt="" />
      <div class="content">
        <p class="intro">{{ content.content }}</p>
        <p>{{ content.intro }}</p>
        <h3>{{ content.learnMore.title }}</h3>
        <ul>
          <li v-for="(item, index) in content.learnMore.info" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
        <h3>{{ content.celebrate.title }}</h3>
        <ul>
          <li v-for="(item, index) in content.celebrate.info" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </li>
        </ul>

        <h3>{{ content.celebrate.title }}</h3>
        <ul>
          <li v-for="(item, index) in content.celebrate.info" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import data from '@/assets/data/aapi'
export default {
  data() {
    return {
      content: data.aapi,
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;

  h1 {
    margin: 0 auto;
    padding: 0 1rem;
  }
  h3 {
    border-bottom: 1px solid red;
    text-align: center;
  }
}
.header {
  //border: 1px solid green;
  position: relative;
  //height: 60vh;
  @media screen and (min-width: 768px) {
    color: black;
    //display: flex;
    overflow: hidden;
  }
}
.intro {
  color: #ac0a07;
  padding: 1rem 0;
  line-height: 2;
  font-weight: bold;
}
.content {
  color: #fff;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 45%;
    left: 60%;
    width: 35%;
    color: unset;
    transform: translateY(-40%);
    border: 5px solid #edc67e;
    background-color: #fff;
  }
}
</style>
