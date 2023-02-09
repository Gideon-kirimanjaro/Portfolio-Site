<template>
  <div class="mt-4">
    <h4 class="d-flex justify-content-center text-light font-weight-bold mb-3">
      <u>Companies that have trusted my skills</u>
    </h4>
    <infinite-slide-bar>
      <div class="items">
        <div v-for="image in images" :key="image.key">
          <div class="f-left pd-t-8px mg-r-10px bg-light">
            <img
              class="p-1"
              width="270"
              height="250"
              :src="require(`~/static/images/${image.name}`)"
            />
          </div>
        </div>
      </div>
    </infinite-slide-bar>
  </div>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'
export default {
  name: 'Slider',
  components: {
    InfiniteSlideBar,
  },
  data: () => {
    return {
      images: [
        { key: Math.random(), name: 'BAT.jpg' },
        { key: Math.random(), name: 'KPLC.png' },
        { key: Math.random(), name: 'KTDA.png' },
        { key: Math.random(), name: 'MOE.png' },
        { key: Math.random(), name: 'ODPP.jpg' },
        { key: Math.random(), name: 'STAN.jpg' },
        { key: Math.random(), name: 'MOI.png' },
        { key: Math.random(), name: 'KIRIM.jpg' },
        { key: Math.random(), name: 'NAI.gif' },
        { key: Math.random(), name: 'UON.jpg' },
        { key: Math.random(), name: 'MSU.png' },
        { key: Math.random(), name: 'UX.png' },
        { key: Math.random(), name: 'CAK.png' },
        { key: Math.random(), name: 'NIS.jpg' },
      ],
    }
  },
}
</script>

<style scoped>
.items {
  display: flex;
  justify-content: space-around;
}
h4 {
  font-family: wotfard;
  src: url('@/static/fonts/Wotfard-Regular.ttf');
}
</style>
