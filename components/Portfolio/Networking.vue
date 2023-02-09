<template>
  <div id="network" class="mt-3">
    <h3
      class="d-flex justify-content-center mt-3 text-warning font-weight-bold"
    >
      <u>Networking & Support</u>
    </h3>

    <b-container>
      <div
        v-for="(image, i) in netData"
        :key="i"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="pl-sm-5">
          <img
            class="mt-2"
            width="320"
            height="330"
            :src="require(`@/static/images/${image.name}`)"
            alt=""
          />
        </div>
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5 text-warning" target="_blank">
            {{ image.header }}
          </a>
          <h4 id="description" class="px-md-5 text-light">
            {{ image.description }}.
          </h4>
          <div class="px-5">
            <nuxt-link target="_blank" to="/support">
              <b-button variant="success">View it here</b-button></nuxt-link
            >
          </div>
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
    </b-container>
    <!-- <h4 class="d-flex justify-content-center text-danger">
      More Uploads coming soon!
    </h4> -->
    <div class="d-flex justify-content-center">
      <NuxtLink target="_blank" to="/support">
        <b-button variant="success">Show more</b-button></NuxtLink
      >
    </div>
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from '../Portfolio/Slider'
export default {
  name: 'Networking',
  components: {
    Slider,
  },
  data: () => {
    return {}
  },
  computed: {
    netData() {
      const data = this.$store.state.networking.netData
      const sortedData = data.slice(0, 3)
      return sortedData
    },
  },
}
</script>

<style scoped>
#network {
  font-family: montserrat;

  background-color: blueviolet;
}

#header-link {
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
#description {
  font-family: montserrat;
  font-size: 1.2rem;
}
@font-face {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
}
</style>
