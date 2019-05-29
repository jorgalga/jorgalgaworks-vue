// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDjV8OQOhbaq2W8t8LAj3Lv2Kmy_rCjQZE',
  authDomain: 'trivu-mediamarkt.firebaseapp.com',
  databaseURL: 'https://trivu-mediamarkt.firebaseio.com',
  projectId: 'trivu-mediamarkt',
  storageBucket: 'trivu-mediamarkt.appspot.com',
  messagingSenderId: '937262613479',
  appId: '1:937262613479:web:911d1718ce44fadd'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(function (user) {
  Vue.config.productionTip = false
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
})
