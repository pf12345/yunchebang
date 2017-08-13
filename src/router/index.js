import Vue from 'vue'
import Router from 'vue-router'

import leftMenu from './../components/leftMenu.vue';
import top from './../components/top.vue';
import Index from './../components/Index.vue'
import tradingQuotations from './../components/tradingQuotations.vue'
import fahuo from './../components/fahuo.vue'
import cheyuanInfo from './../components/cheyuanInfo.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        content: Index
      }
    },
    {
      path: '/tradingQuotations',
      name: '交易行情',
      components: {
        left: leftMenu,
        content: tradingQuotations,
        top: top
      }
    },
    {
      path: '/fahuo',
      name: '我要发货',
      components: {
        left: leftMenu,
        content: fahuo,
        top: top
      }
    },
    {
      path: '/cheyuanInfo',
      name: '车源信息',
      components: {
        left: leftMenu,
        content: cheyuanInfo,
        top: top
      }
    }
  ]
})
