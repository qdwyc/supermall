<template>
  <div
    class="check-button"
    :class="{check: isChecked}"
  >
    <img
      src="~assets/img/cart/tick.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {};
  }
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid rgb(255, 147, 165);
}
.check {
  border-color: rgb(255, 147, 165);
  background-color: rgb(255, 147, 165);
}
</style>