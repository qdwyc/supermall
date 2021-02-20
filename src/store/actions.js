export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payLoad.iid
      );

      // 2.判断oldProduct
      if (oldProduct) {
        //数量+1
        context.commit("addCounter", oldProduct);
        resolve("当前的商品数量+1");
      } else {
        //添加新的商品
        payLoad.count = 1;
        context.commit("addToCart", payLoad);
        resolve("添加了新的商品");
      }
    });
  }
};
