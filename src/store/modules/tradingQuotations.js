import * as types from '../mutation-types'
import tradingQuotations from '../../api/tradingQuotations'

const state = {
  tradingQuotationsList: [],
  tradingQuotationsData: {},
  columns: [{
    title: '成交时间',
    key: 'order_time',
    width: 100,
    render(h, {row, column, index}) {
      return `${row.order_time ? row.order_time.split(' ')[0] : ''}`
    }
  }, {
    title: '订单号码',
    key: 'age',
    width: 100
  }, {
    title: '发货－收获地',
    key: 'address',
    render(h, {row, column, index}) {
      return `${row.consignee_city + '-' + row.cargo_city}`
    }
  }, {
    title: '货物类型',
    key: 'cargo_type',
    width: 100
  }, {
    title: '货物品名',
    key: 'cargo_name',
    width: 150
  }, {
    title: '货物重量',
    width: 100,
    render(h, {row, column, index}) {
      return `${row.cargo_weight + '吨'}`
    }
  }, {
    title: '货物体积',
    width: 100,
    render(h, {row, column, index}) {
      return `${row.cargo_volume}m³`
    }
  }, {
    title: '运价',
    width: 80,
    render(h, {row, column, index}) {
      return `${row.freight + '/' + row.freight_unit}`
    }
  }, {
    title: '车辆类型',
    key: 'vehicle_type',
    width: 100
  }, {
    title: '车辆车牌',
    key: 'plate_number',
    width: 100
  }]
}

// getters
const getters = {
  tradingQuotationsList: state => state.tradingQuotationsList,
  columns: state => state.columns
}

// actions
const actions = {
  getTradingQuotationsList({commit}) {
    tradingQuotations.getComfirmedList(function(res) {
      var _tradingQuotationsList = res.data;
      commit(types.GET_TRADING_QUOTATIONS, _tradingQuotationsList)
    })
  // tradingQuotations.getComfirmedList()
  }
}

// mutations
const mutations = {
  [types.GET_TRADING_QUOTATIONS](state, tradingQuotationsList) {
    state.tradingQuotationsData = tradingQuotationsList;
    state.tradingQuotationsList = tradingQuotationsList.data;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
