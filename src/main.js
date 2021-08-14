import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueDebounce from "vue-debounce";

Vue.use(vueDebounce);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
