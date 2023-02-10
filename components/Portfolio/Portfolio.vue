<template>
  <div class="portfolio">
    <h2 class="d-flex justify-content-center">
      <u> PORTFOLIO </u>
    </h2>
    <div class="d-flex justify-content-center p-3">
      <img height="200" width="200" src="@/static/images/man.png" alt="" />
    </div>
    <h4
      class="d-flex justify-content-center text-success mt-2 mb-4 px-5 font-weight-bold"
    >
      A glimpse of the projects I've been working on.
    </h4>
    <div>
      <Tabs :data="projects" />
    </div>
    <Slider />
  </div>
</template>

<script>
import Tabs from '../UI/Tabs.vue'
import Slider from './Slider.vue'
export default {
  name: 'Portfolio',
  components: {
    Tabs,
    Slider,
  },
  data() {
    return {
      projects: [
        {
          key: 1,
          title: 'Web Development',
          component: 'Web',
        },
        {
          key: 2,
          title: 'Graphic Design',
          component: 'Design',
        },
        {
          key: 3,
          title: 'Networking & Support',
          component: 'Networking',
        },
        {
          key: 4,
          title: 'Data',
          component: 'Dash',
        },
      ],
    }
  },
}
</script>

<style scoped>
* {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Medium.ttf');
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
.portfolio {
  background-color: #ffffff;
  padding-top: 20px;
}
.port2 {
  margin-left: 20px;
}
</style>
