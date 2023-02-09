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
      <b-tabs pills card>
        <b-tab title="Web" active
          ><b-card-text class="d-flex justify-content-center"
            ><Web /></b-card-text
        ></b-tab>
        <b-tab title="Graphic Design"
          ><b-card-text class="d-flex justify-content-center"
            ><Design /></b-card-text
        ></b-tab>
        <b-tab title="Support"
          ><b-card-text class="d-flex justify-content-center"
            ><Networking /></b-card-text
        ></b-tab>
        <b-tab title="Data"
          ><b-card-text class="d-flex justify-content-center"
            ><Dash /></b-card-text
        ></b-tab>
      </b-tabs>
    </div>
    <!-- <div class="port2">
      <div ref="web">
        <Web />
      </div>
      <div ref="dash">
        <Dash />
      </div>
      <div ref="networking">
        <Networking />
      </div>
    </div> -->
  </div>
</template>

<script>
import Dash from '../Portfolio/Dash'
import Web from '../Portfolio/Web'
import Networking from '../Portfolio/Networking'
import Design from './Design.vue'
export default {
  name: 'Portfolio',
  components: {
    Dash,
    Web,
    Networking,
    Design,
  },
  methods: {
    // showData(refName) {
    //   const element = this.$refs[refName]
    //   const top = element.offsetTop
    //   window.scrollTo(0, top)
    // },
    // showWeb(refName) {
    //   const element = this.$refs[refName]
    //   const top = element.offsetTop
    //   window.scrollTo(0, top)
    // },
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
