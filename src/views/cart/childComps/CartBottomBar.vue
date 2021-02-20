<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="jisuan">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  data () {
    return {
    };
  },
  computed: {
    totalPrice () {
      return this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick () {
      if (this.isSelectAll) { //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else { //部分或全部不选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 70px;
  font-size: 14px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 30px;
  font-size: 14px;
  margin-top: 1px;
  flex: 1;
}
.jisuan {
  width: 90px;
  background-color: rgb(252, 120, 142);
  color: #fff;
  text-align: center;
  font-size: 14px;
}
</style>