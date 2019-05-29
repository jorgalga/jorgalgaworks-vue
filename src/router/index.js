import Vue from 'vue'
import Router from 'vue-router'
import VueMasonry from 'vue-masonry-css'
import Home from '@/views/home'
import Dashboard from '@/views/dashboard'
import VueObserveVisibility from 'vue-observe-visibility'
import firebase from 'firebase'

Vue.use(Router)
Vue.use(VueMasonry)
Vue.use(VueObserveVisibility)
const router = new Router({
  /* mode: 'history', */
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Home,
      props: true
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: true,
      meta: {
        auth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser
  console.log(user)
  let rauth = to.matched.some(record => record.meta.auth)
  if (rauth && !user) {
    next('login')
  } else if (!rauth && user) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
