import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FormValidation from '@/components/FormValidation'
import MainMenu from '@/components/MainMenu'
import Autocomplete from '@/components/Autocomplete'
import Posts from '@/components/PostsManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/Form',
      name: 'FormValidation',
      component: FormValidation
    },
    {
      path: '/Auto',
      name: 'Autocomplete',
      component: Autocomplete
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
