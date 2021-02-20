<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button
        :is-checked="itemInfo.checked"
        @click.native="checkClick"
      >
      </check-button>
    </div>
    <div class="item-img">
      <img
        :src="itemInfo.image"
        alt="商品图片"
      />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkClick () {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped>
#shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  padding: 5px 10px;
  color: #333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>