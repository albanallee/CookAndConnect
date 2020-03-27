// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-vue/dist/bootstrap-vue";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(BootstrapVue);
Vue.config.productionTip = false
