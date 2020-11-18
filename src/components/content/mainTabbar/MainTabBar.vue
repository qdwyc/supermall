<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页a.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类a.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="cart" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车a.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="profile" activeColor="#ff8198">
      <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的a.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
