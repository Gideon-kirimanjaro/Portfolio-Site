<template>
  <div class="pt-5">
    <h2 class="d-flex justify-content-center">
      <u> BLOG </u>
    </h2>
    <div class="d-flex justify-content-center p-3">
      <img height="200" width="270" src="@/static/images/lying.png" alt="" />
    </div>
    <h4
      class="d-flex justify-content-center text-success mt-2 mb-4 px-5 font-weight-bold"
    >
      A blog about the web, statistics, computer science and the world at large.
      The blog has more than 800 subscribers .
    </h4>
    <div v-for="item in blog" :key="item.key" class="p-2 mx-5">
      <h3 class="font-weight-bold">{{ item.title }}</h3>
      <h5 class="mt-2 font-italic">{{ item.date }}</h5>
      <h5 class="mt-3">{{ item.body }}</h5>

      <b-button variant="warning"
        ><a class="text-dark" target="_blank" :href="item.link"
          >Read More</a
        ></b-button
      >
    </div>
    <b-button class="mx-5 px-4 mt-3 mb-3" variant="success"
      ><a
        class="text-light"
        target="_blank"
        href="https://kirimanjarodev.wordpress.com/blog-2/"
        >Show all blogs</a
      ></b-button
    >
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data: () => {
    return {
      blog: [
        {
          title: 'Clock? No, its Tik Tok, pt 1.',
          date: 'october 11 2020',
          body: 'Tik Tok, many of us have heard of this app. Well, the company behind the app called ByteDance is doing pretty well due to the fact that as of October 2020, it has 2 billion downloads. With its simplistic,user-friendly features, Tik Tok has garnered a huge audience and alsotaking the lead on being...',
          link: 'https://kirimanjarodev.wordpress.com/2020/10/11/clock-no-its-tik-tok-pt-1/',
        },
        {
          title: 'Physics in Football',
          date: 'September 20, 2020',
          body: 'We have heard of the name Physics many times in our lives, some people also studied it as a subject in school. Well, at that time there was no significant fun in it, it looked like a bunch of formulas all stacked in a book to torment us. Some adored it, some hated it. It …',
          link: 'https://kirimanjarodev.wordpress.com/2020/09/20/physics-in-football/',
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
