import Vue from 'vue'
import Router from 'vue-router'
import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Speakers from '@/views/speakers'
import Space from '@/views/space'
import Agenda from '@/views/agenda'
import Partners from '@/views/partners'
import Organizers from '@/views/organizers'
import Tickets from '@/views/tickets'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)
var sRoutes = [
  {
    path: '/',
    name: 'Home page',
    component: Home
  },
  {
    path: '/speakers',
    name: 'Speakers & artists',
    component: Speakers
  },
  {
    path: '/space',
    name: 'The Space',
    component: Space
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/organizers',
    name: 'Organizers',
    component: Organizers
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  }
]
/*
for (var i = 0; i < window.dataConfig.data.toffers.length; i++) {
  sRoutes.push({
    path: window.dataConfig.data.toffers[i].path,
    name: window.dataConfig.data.toffers[i].name,
    component: Tickets
  })
}
*/
for (var key in window.dataConfig.data.toffers) {
  if (window.dataConfig.data.toffers.hasOwnProperty(key)) {
    // console.log(key + ':' + window.dataConfig.data.toffers[key].path)
    sRoutes.push({
      path: window.dataConfig.data.toffers[key].path,
      name: window.dataConfig.data.toffers[key].name,
      component: Tickets
    })
  }
}
export default new Router({
  /* mode: 'history', */
  routes: sRoutes
})
