<template>
  <main>
    <div class="header">
      <img :src="content.image" alt="" />
      <div class="content">
        <div class="content_header">
          <p class="intro">{{ content.content }}</p>
          <p>{{ content.intro }}</p>
        </div>
        <div class="content_body sections">
          <div
            v-for="(section, index) in content.sections"
            :key="index"
            class="section-body"
          >
            <h3>{{ section.title }}</h3>
            <ul class="section-list">
              <li
                v-for="(item, itemIndex) in section.section"
                :key="itemIndex"
                class="section-list_item"
              >
                <a :href="item.url" target="_blank">{{ item.title }}</a>
                <p>{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import data from '@/assets/data/pride'
export default {
  data() {
    return {
      content: data.pride,
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
    height: 100%;
    overflow-y: auto;

    a {
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #ac0a07;
      }
    }

    ul {
      padding: 1rem 0;
    }
  }
}
</style>
