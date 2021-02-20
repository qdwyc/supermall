export default {
  addCounter(state, payLoad) {
    payLoad.count++;
  },
  addToCart(state, payLoad) {
    payLoad.checked = true;
    state.cartList.push(payLoad);
  },
  // 设置请求加载
  setLoading(state, bol) {
    state.isLoading = bol;
  }
};
