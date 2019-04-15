import Vue from 'vue'
import Router from 'vue-router'
import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Speakers from '@/views/speakers'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home page',
      component: Home
    },
    {
      path: '/speakers',
      name: 'Speakers & artists',
      component: Speakers
    }
  ]
})
