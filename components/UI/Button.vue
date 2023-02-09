<template>
  <div>
    <button type="button" class="btn btn-outline-warning m-2">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped></style>
