<template>
  <div class="p-3">
    <div class="d-flex justify-content-center">
      <div>
        <div class="d-flex">
          <img height="100" width="100" src="@/static/images/ai.png" alt="" />

          <div>
            <h2>
              <u> Skills & Tools</u>
              <h3>My toolbox and things I can do</h3>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="image of images" :key="image.key" class="col">
        <img :src="require(`@/static/images/${image.name}`)" alt="" />
        <H5 class="px-2">{{ image.title }}</H5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data: () => {
    return {
      images: [
        {
          key: Math.random(),
          name: 'html.png',
          title: 'HTML5',
        },
        {
          key: Math.random(),
          name: 'css.png',
          title: 'CSS3',
        },
        {
          key: Math.random(),
          name: 'js.png',
          title: 'JavaScript',
        },
        {
          key: Math.random(),
          name: 'python.png',
          title: 'Python',
        },
        {
          key: Math.random(),
          name: 'vue.png',
          title: 'Vue',
        },
        {
          key: Math.random(),
          name: 'nuxt.png',
          title: 'Nuxt',
        },
        {
          key: Math.random(),
          name: 'react.png',
          title: 'React',
        },
        {
          key: Math.random(),
          name: 'power.png',
          title: 'Power Bi',
        },
        {
          key: Math.random(),
          name: 'api.png',
          title: 'restful API',
        },
        {
          key: Math.random(),
          name: 'firebase.png',
          title: 'Firebase',
        },
        {
          key: Math.random(),
          name: 'git.png',
          title: 'GIT',
        },
        {
          key: Math.random(),
          name: 'github.png',
          title: 'GITHUB',
        },
        {
          key: Math.random(),
          name: 'vs.png',
          title: 'VS Code',
        },
        {
          key: Math.random(),
          name: 'numpy.png',
          title: 'Numpy',
        },
        {
          key: Math.random(),
          name: 'excel.png',
          title: 'Excel',
        },
        {
          key: Math.random(),
          name: 'sharepoint.png',
          title: 'Sharepoint',
        },
        {
          key: Math.random(),
          name: 'illustrator.png',
          title: 'Adobe Illustrator',
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
}
h3 {
  color: blueviolet;
  font-weight: bolder;
}
</style>
