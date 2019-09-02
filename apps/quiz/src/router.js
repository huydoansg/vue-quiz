import Vue from 'vue';
import Router from 'vue-router';
import Home from '@pages/Home.vue';
import About from '@pages/About.vue';
import NotFound from '@pages/NotFound.vue';
import {
  DefaultPath
} from '@constants';
import {
  configure
} from '@pages/quiz';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/quiz',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  configure({
    basePath: DefaultPath
  }),
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
  ],
});
