import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld 1',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld 2',
      component: HelloWorld
    }
  ]
})
