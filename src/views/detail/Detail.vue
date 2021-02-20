<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      />
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      />
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      />
      <goods-list
        :goods="recommends"
        ref="recommend"
      />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top
      @click.native="backClick"
      v-show="isShowBackTop"
    />
    <toast
      :message="message"
      :show="show"
    />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from "components/content/backTop/BackTop"
import Toast from "components/common/toast/Toast"

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail";
import { debounce } from "common/utils"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: '',
      tabOffsetTop: 0,
      isTabFixed: false,
      message: '',
      show: false
    };
  },
  created () {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详细数据
    getDetail(this.iid).then(res => {
      // 2.1.获取顶部的图片轮播数据
      // console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 2.3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 2.4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 2.5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 2.6.获取评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    // 4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    }, 100)
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contentScroll (position) {
      // 获取y值
      const positionY = -position.y
      // positionY和主题中的值进行对比
      let length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000

      // 2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    backClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    addToCart () {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 2.将商品添加到购物车
      this.$store.dispatch('addCart', product).then(res => {
        this.message = res
        this.show = true
        setTimeout(() => {
          this.show = false
          this.message = ''
        }, 1500);
      })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: fixed;
  z-index: 9;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  height: calc(100% - 44px - 49px);
  position: absolute;
  margin-top: 44px;
}
</style>