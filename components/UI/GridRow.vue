<template>
  <div id="top" class="container-lg px-3">
    <div class="row">
      <div>
        <b-modal
          id="modal-1"
          ref="modal"
          :title="`Portfolio Image ${selectedItem.url}`"
        >
          <div class="modalDiv">
            <img
              :src="require(`~/assets/design/${selectedItem.url}.jpg`)"
              class="p-1"
            />
          </div>
        </b-modal>
      </div>
      <div v-for="item of data" id="main" :key="item" class="col">
        <img
          v-b-modal.modal-1
          :src="require(`~/assets/design/${item.url}.jpg`)"
          class="p-1"
          @click="openModal(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridRow',
  // eslint-disable-next-line vue/require-prop-types
  props: ['data'],
  data() {
    return {
      selectedItem: { url: 1 },
    }
  },
  methods: {
    openModal(item) {
      this.selectedItem = { ...item }
    },
  },
}
</script>

<style scoped>
* {
  font-family: montserrat;
}
#main {
  background-color: brown;
}
#top {
  height: 500px;
  overflow: scroll;
}
img {
  width: 250px;
  height: 350px;
  object-fit: contain;
}

@font-face {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Regular.ttf');
}
</style>
