import Vue from 'vue'
import Router from 'vue-router'
// import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Ranking from '@/views/ranking'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
// Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index default',
      component: Home
    },
    {
      path: '/ranking/',
      name: 'Ranking default',
      component: Ranking
    }
  ]
})
