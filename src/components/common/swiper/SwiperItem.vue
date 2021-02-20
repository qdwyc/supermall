<template>
  <div class="revslide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style scoped>
.revslide {
  width: 100%;
  flex-shrink: 0;
}

.revslide img {
  width: 100%;
}
</style>
