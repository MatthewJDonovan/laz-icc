import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contact from '@/components/Contact'
import Competition from '@/components/Competition'
import Sponsors from '@/components/Sponsors'
import Laz from '@/components/Laz'
import Ontario from '@/components/Ontario'
import Involved from '@/components/Involved'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Hello
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/competition',
      name: 'competition',
      component: Competition
    }, {
      path: '/laz',
      name: 'laz',
      component: Laz
    }, {
      path: '/ontario',
      name: 'ontario',
      component: Ontario
    }, {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    }, {
      path: '/involved',
      name: 'involved',
      component: Involved
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
