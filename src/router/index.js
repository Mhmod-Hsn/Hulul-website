import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from './../i18n'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render: h => h('router-view')
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('../views/Services.vue')
        },
        {
          path: 'projects',
          name: 'Projects',
          component: () => import('../views/Projects.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../views/Contact.vue')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../views/About.vue')
        }
      ],
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  if ( !['en','ar'].includes(lang) ) {
    return next('ar');
  }

  if ( i18n.locale !== lang ) {
    i18n.locale = lang;
  }

  next();
});

export default router
