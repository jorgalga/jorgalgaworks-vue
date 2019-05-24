import Vue from 'vue'
import Router from 'vue-router'
import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)

export default new Router({
  /* mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'index default',
      component: Home,
      props: true
    },
    {
      path: '/:lang',
      name: 'index with lang',
      component: Home,
      props: true
    },
    {
      path: '/home/',
      name: 'Home default',
      component: Home,
      props: true
    },
    {
      path: '/home/:lang',
      name: 'Home with lang',
      component: Home,
      props: true
    }
  ]
})
