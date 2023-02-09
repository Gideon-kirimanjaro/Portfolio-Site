<template>
  <div class="container mt-3 border border-warning">
    <h3 class="d-flex justify-content-center mt-3 text-dark font-weight-bold">
      <u>WEB</u>
    </h3>
    <b-container>
      <div
        v-for="(image, i) in images"
        :key="i"
        class="d-md-flex justify-content-around"
      >
        <div class="mt-md-5">
          <a id="header-link" class="text-success px-md-5" target="_blank">
            {{ image.header }}
          </a>
          <h4 id="description" class="px-md-5 text-dark">
            {{ image.description }}
          </h4>
          <div class="px-md-5">
            <a target="_blank" :href="image.url">
              <b-button variant="danger">View it here</b-button></a
            >
            <a target="_blank" href="https://github.com/Gideon-kirimanjaro"
              ><b-button variant="success">My Github</b-button></a
            >
          </div>
        </div>
        <div class="ml-xsm-5">
          <img
            class="mt-2"
            width="350"
            height="330"
            :src="require(`~/assets/${image.name}.jpg`)"
            alt=""
          />
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center mb-2">
        <NuxtLink target="_blank" to="/internet">
          <b-button variant="success">Show more</b-button></NuxtLink
        >
      </div>
    </b-container>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Web',
  data: () => {
    return {}
  },
  computed: {
    images() {
      const liftedData = this.$store.state.web.images
      const filteredData = liftedData.slice(0, 3)
      return filteredData
    },
  },
  mounted() {},

  methods: {},
}
</script>

<style scoped>
body {
  font-family: montserrat;
  background-color: #fee715ff;
}

#header-link {
  font-family: montserrat;
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
#description {
  font-family: montserrat;
  font-size: 1.3rem;
}
@font-face {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
}
</style>
