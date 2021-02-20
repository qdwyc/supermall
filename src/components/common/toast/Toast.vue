<template>
  <div class="toast">
    <div v-show="show">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {};
  },
}
</script>

<style scoped>
.toast {
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>