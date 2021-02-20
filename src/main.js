import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入fastclick
import FastClick from "fastclick";
// 导入vue-lazyload
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

// 添加事件总线对象
Vue.prototype.$bus = new Vue();

// 解决移动端300ms延迟
FastClick.attach(document.body);
// 使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
}),
  new Vue({
    render: h => h(App),
    router,
    store
  }).$mount("#app");
