import Vue from 'vue'
import Router from 'vue-router'
// import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Reglas from '@/views/reglas'
import Proposito from '@/views/proposito'
import Ranking from '@/views/ranking'
import Webex from '@/views/webex'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
// Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index default loc:es',
      component: Home
    },
    {
      path: '/es',
      name: 'index spanish loc:es',
      component: Home
    },
    {
      path: '/en',
      name: 'index english loc:en',
      component: Home
    },
    {
      path: '/reglas/',
      name: 'Reglas default loc:es',
      component: Reglas
    },
    {
      path: '/reglas/es',
      name: 'Reglas spanish loc:es',
      component: Reglas
    },
    {
      path: '/reglas/en',
      name: 'Reglas english loc:en',
      component: Reglas
    },
    {
      path: '/proposito',
      name: 'Proposito default loc:es',
      component: Proposito
    },
    {
      path: '/proposito/es',
      name: 'Proposito spanish loc:es',
      component: Proposito
    },
    {
      path: '/proposito/en',
      name: 'Proposito english loc:en',
      component: Proposito
    },
    {
      path: '/ranking/',
      name: 'Ranking default loc:es',
      component: Ranking
    },
    {
      path: '/ranking/es',
      name: 'Ranking spanish loc:es',
      component: Ranking
    },
    {
      path: '/ranking/en',
      name: 'Ranking english loc:en',
      component: Ranking
    },
    {
      path: '/webex/',
      name: 'Webex default loc:es',
      component: Webex
    },
    {
      path: '/webex/',
      name: 'Webex spanish loc:es',
      component: Webex
    },
    {
      path: '/webex/',
      name: 'Webex english loc:en',
      component: Webex
    }
  ]
})
