// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-vue/dist/bootstrap-vue";
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    password: undefined,
    isAuthenticated: false
  },
  mutations: {
    setPassword (state, password) {
      state.password = password
      state.isAuthenticated = true
    },
    destroyPassword (state) {
      state.password = undefined
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use(BootstrapVue);
Vue.config.productionTip = false
