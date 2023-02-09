<template>
  <GridRow :data="data" />
</template>

<script>
import GridRow from '../UI/GridRow.vue'
export default {
  name: 'Design',
  components: {
    GridRow,
  },
  data() {
    return {
      data: [
        { key: 1, url: 1 },
        { key: 2, url: 2 },
        { key: 3, url: 3 },
        { key: 4, url: 4 },
        { key: 5, url: 5 },
        { key: 6, url: 6 },
        { key: 7, url: 7 },
        { key: 9, url: 9 },
        { key: 10, url: 10 },
        // { key: 11, url: 11 },
        { key: 12, url: 12 },
        { key: 13, url: 13 },
        { key: 14, url: 14 },
        { key: 15, url: 15 },
        { key: 16, url: 16 },
        { key: 17, url: 17 },
        { key: 18, url: 18 },
        { key: 19, url: 19 },
        { key: 21, url: 21 },
        { key: 22, url: 22 },
        { key: 23, url: 23 },
        { key: 24, url: 24 },
        { key: 25, url: 25 },
        { key: 26, url: 26 },
        { key: 27, url: 27 },
        { key: 28, url: 28 },
        { key: 29, url: 29 },
        // { key: 30, url: 30 },
        // { key: 31, url: 31 },
        { key: 32, url: 32 },
        { key: 33, url: 33 },
        { key: 34, url: 34 },
        { key: 35, url: 35 },
        { key: 36, url: 36 },
        { key: 37, url: 37 },
        { key: 38, url: 38 },
        { key: 39, url: 39 },
        { key: 40, url: 40 },
        { key: 41, url: 41 },
        { key: 42, url: 42 },
        { key: 43, url: 43 },
        { key: 44, url: 44 },
        { key: 45, url: 45 },
        { key: 46, url: 46 },
        { key: 47, url: 47 },
        { key: 48, url: 48 },
        { key: 49, url: 49 },
        { key: 50, url: 50 },
      ],
    }
  },
  methods: {
    keyGen() {
      for (let i = 0; i < 51; i++) {
        i = i + 1
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
