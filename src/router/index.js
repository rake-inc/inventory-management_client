import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup/',
      name: 'Register',
      component: Register
    }
  ]
})
