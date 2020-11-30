import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'
Vue.use(vueEventCalendar, {locale: 'en'}) 

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false


var firebaseConfig = {
apiKey: "AIzaSyAdWbmASi1wmbzVlc6Npb7q6i5b1Rq59Mo",
    authDomain: "nysoccerlapp.firebaseapp.com",
    databaseURL: "https://nysoccerlapp.firebaseio.com",
    projectId: "nysoccerlapp",
    storageBucket: "nysoccerlapp.appspot.com",
    messagingSenderId: "539647921835",
    appId: "1:539647921835:web:a5e3050231ce74cc85b1ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
