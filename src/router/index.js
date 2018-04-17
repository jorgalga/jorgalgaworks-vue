import Vue from 'vue'
import Router from 'vue-router'
import VueMasonry from 'vue-masonry-css'
import HelloWorld from '@/components/HelloWorld'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(Router)
Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld 0',
      component: HelloWorld
    },
    {
      path: '/:id',
      name: 'HelloWorld 1',
      component: HelloWorld,
      props: true
    },
    {
      path: '/hello',
      name: 'HelloWorld 2',
      component: HelloWorld
    }
  ]
})
