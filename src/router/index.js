import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import DocGuide from '@/components/DocGuide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/en-savoir-plus',
      name: 'DocGuide',
      component: DocGuide
    }
  ]
})
