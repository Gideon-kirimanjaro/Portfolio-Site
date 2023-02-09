<template>
  <div>
    <meta
      name="viewport"
      content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=0;"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <Navbar />
    <h3>{{ testName }}</h3>
    <vue-whatsapp-widget
      phone-number="+254707000574"
      text-reply="Available"
      company-name="Gideon Kirimanjaro"
    />
    <button @click="moveUp">Scroll up</button>
  </div>
</template>

<script>
import VueWhatsappWidget from 'vue-whatsapp-widget'
import 'bootstrap/dist/css/bootstrap.min.css'
import { mapState } from 'vuex'
// import Companies from '../components/Portfolio/Companies'
export default {
  components: {
    VueWhatsappWidget,
  },
  computed: mapState(['testName']),
  methods: {
    moveUp() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  border: 0;
}
button {
  background-color: blueviolet;
  border-radius: 10%;
  color: white;
  font-size: 20px;
}
</style>
