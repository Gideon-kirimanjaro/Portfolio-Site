<template>
  <div id="support-div" class="mt-3">
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
            width="300"
            height="300"
            :src="require(`@/static/images/${image.name}`)"
            alt=""
          />
        </div>
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5 text-warning" target="_blank">
            {{ image.header }}
          </a>
          <h4 class="px-md-5 text-light">{{ image.description }}.</h4>
          <!-- <div class="px-5">
            <a target="_blank" :href="image.url">
              <b-button variant="info">View it here</b-button></a
            >
          </div> -->
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
    </b-container>
    <!-- <h4 class="d-flex justify-content-center text-danger">
      More Uploads coming soon!
    </h4> -->

    <Slider></Slider>
    <Contact />
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../components/Portfolio/Slider'
import Contact from '../components/Contact/Contact'
export default {
  name: 'Support',
  components: {
    Slider,
    Contact,
  },
  data: () => {
    return {
      items: [
        {
          text: 'Home',
          to: { name: 'index' },
        },
      ],
    }
  },
  computed: {
    netData() {
      return this.$store.state.networking.netData
    },
  },
}
</script>

<style scoped>
#support-div {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
  background-color: blueviolet;
}
h4 {
  font-family: montserrat;
  src: url('@/static/fonts/Wotfard-Regular.ttf');
}
#header-link {
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
</style>
