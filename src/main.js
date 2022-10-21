import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
/* import radio from 'element-ui' */
import router from './router'
import store from './store'
import './assets/less/index.less'
import http from 'axios'
import  '../api/mock.js'
Vue.use(ElementUI);
Vue.prototype.$http=http;

/* Vue.use(radio); */
Vue.config.productionTip=false

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  }else {
    next()
  }
})
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
});