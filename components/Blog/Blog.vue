<template>
  <div class="pt-5 pb-3">
    <h3 class="d-flex justify-content-center pb-2"><u>BLOGS</u></h3>
    <Tabs :data="blogs" />
  </div>
</template>

<script>
import Tabs from '../UI/Tabs.vue'
export default {
  name: 'Blog',
  components: {
    Tabs,
  },
  data: () => {
    return {
      blogs: [
        {
          key: 1,
          title: 'Technical Blog',
          content:
            'This is a technical blog where I write articles on technology',
          url: 'https://blog.gideonkirimanjaro.com/',
        },
        {
          key: 2,
          title: 'Lifestyle Blog',
          content:
            'This is a lifestyle blog where I write articles on health, fitness, nutrition and lifestyle',
          url: 'https://kirimanjaroliving.wordpress.com/',
        },
      ],
    }
  },
}
</script>

<style scoped>
* {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
body {
  background-color: #ffffff;
}
</style>
