import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import tradingQuotations from './modules/tradingQuotations'
import common from './modules/common'
import map from './modules/map'
import fahuo from './modules/fahuo'
import cheyuanInfo from './modules/cheyuanInfo'


Vue.use(Vuex)

var debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    tradingQuotations,
    common,
    map,
    fahuo,
    cheyuanInfo
  }
})
