import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Post from './views/Post.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe
    },
    {
      path:'/post/:number',
      name: 'post',
      component: Post
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
