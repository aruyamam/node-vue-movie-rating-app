import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
