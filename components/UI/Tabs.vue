<template>
  <div class="px-2">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab
          v-for="item in data"
          :key="item.key"
          :title="item.title"
          :active="item.key === 1"
          ><b-card-text class="d-flex justify-content-center">
            <div v-if="item.content">
              <p>{{ item.content }}</p>
              <div class="d-flex justify-content-center">
                <b-button variant="outline-primary" class="mx-2">
                  <a target="_blank" :href="item.url"> Visit blog</a></b-button
                >
              </div>
            </div>
            <div v-else-if="item.component">
              <div v-if="item.component === 'Web'"><Web /></div>
              <div v-else-if="item.component === 'Design'"><Design /></div>
              <div v-else-if="item.component === 'Networking'">
                <Networking />
              </div>
              <div v-else-if="item.component === 'Dash'"><Dash /></div>
            </div> </b-card-text
        ></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import Web from '../Portfolio/Web.vue'
import Design from '../Portfolio/Design.vue'
import Networking from '../Portfolio/Networking.vue'
import Dash from '../Portfolio/Dash.vue'
export default {
  name: 'Tabs',
  components: {
    Web,
    Design,
    Networking,
    Dash,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style scoped>
p {
  font-size: 1.2rem;
  color: black !important;
}
a {
  text-decoration: none;
  color: blue;
}
.nav-tabs {
  background-color: #f1f1f1;
}

.nav-tabs .nav-link {
  font-size: 18px;
  color: #333;
}

.nav-tabs .nav-link.active {
  background-color: #333 !important;
  color: #fff !important;
}
button:hover a {
  text-decoration: none;
  color: white;
}
</style>
