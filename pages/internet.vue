<template>
  <div id="web" class="mt-3">
    <h3 class="d-flex justify-content-center mt-3 text-dark font-weight-bold">
      <u>WEB</u>
    </h3>

    <b-container>
      <div
        v-for="(image, i) in images"
        :key="i"
        class="d-md-flex justify-content-around py-4"
      >
        <div class="mt-md-5">
          <a id="header-link" class="px-md-5 text-success" target="_blank">
            {{ image.header }}
          </a>
          <h4 class="px-md-5 text-dark">{{ image.description }}</h4>
          <div class="px-md-5">
            <a target="_blank" :href="image.url">
              <b-button variant="success">View it here</b-button></a
            >
            <a target="_blank" href="https://github.com/Gideon-kirimanjaro"
              ><b-button variant="success">My Github</b-button></a
            >
          </div>
        </div>
        <div class="ml-xsm-5">
          <img
            class="mt-2"
            width="330"
            height="330"
            :src="require(`~/assets/${image.name}.jpg`)"
            alt=""
          />
          <hr
            style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
          />
        </div>
      </div>
    </b-container>
    <Contact />
  </div>
</template>
<script>
import Contact from '../components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Web',
  components: { Contact },
  data: () => {
    return {}
  },
  computed: {
    images() {
      const liftedData = this.$store.state.web.images
      // const filteredData = liftedData.slice(0, 3)
      return liftedData
    },
  },
}
</script>
<style scoped>
* {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
}
#web {
  background-color: #fee715ff;
}

#header-link {
  color: rgb(116, 168, 11);
  font-size: 23px;
  font-weight: bolder;
}
</style>
