import Vue from 'vue'
import Router from 'vue-router'
// import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Reglas from '@/views/reglas'
import Proposito from '@/views/proposito'
import Teams from '@/views/teams'
import Ranking from '@/views/ranking'
import Webex from '@/views/webex'
import External from '@/views/newexternal'
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
      path: '/teams',
      name: 'Teams default loc:es',
      component: Teams
    },
    {
      path: '/teams/es',
      name: 'Teams spanish loc:es',
      component: Teams
    },
    {
      path: '/teams/en',
      name: 'Teams english loc:en',
      component: Teams
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
      path: '/webex/es',
      name: 'Webex spanish loc:es',
      component: Webex
    },
    {
      path: '/webex/en',
      name: 'Webex english loc:en',
      component: Webex
    },
    {
      path: '/external/',
      name: 'External default loc:es',
      component: External
    },
    {
      path: '/external/es',
      name: 'External spanish loc:es',
      component: External
    },
    {
      path: '/external/en',
      name: 'External english loc:en',
      component: External
    }
  ]
})
