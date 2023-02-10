<template>
  <div id="network" class="container">
    <h3 class="d-flex justify-content-center text-warning font-weight-bold">
      <u>Networking & Support</u>
    </h3>
    <div
      v-for="(image, i) in netData"
      :key="i"
      class="container d-md-flex py-4"
    >
      <div id="imgDiv" class="">
        <img
          class="mt-2"
          :src="require(`@/static/images/${image.name}`)"
          alt=""
        />
      </div>
      <div class="mt-md-5">
        <a id="header-link" class="px-md-5 text-warning" target="_blank">
          {{ image.header }}
        </a>
        <p id="description" class="px-md-5 text-light">
          {{ image.description }}.
        </p>
        <div class="px-md-5">
          <nuxt-link target="_blank" to="/support">
            <b-button variant="success">View it here</b-button></nuxt-link
          >
        </div>
        <hr
          style="width: 100%; text-align: left; margin-right: 0 height:2px;border;color:gray;background-color:yellow"
        />
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <NuxtLink target="_blank" to="/support">
        <b-button variant="success" class="mb-2">Show more</b-button></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Networking',
  components: {},
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
* {
  font-family: montserrat;
}
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
