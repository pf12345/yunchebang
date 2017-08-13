import * as types from '../mutation-types'
import cheyuanInfo from '../../api/cheyuanInfo'

const state = {
  cheyuanList: [],
  cheyuanData: {},
  cheyuanFilter: {
    cargo_area_code: [], //货物省市区代码
    consignee_area_code: [], //收货省市区代码
    vehicle_type: '不限' //车辆类型
  },
  cheyuanColumns: [{
    title: '发布时间',
    key: 'publish_time',
    width: 100,
    render(h, {row, column, index}) {
      return `${row.publish_time ? row.publish_time.split(' ')[0] : ''}`
    }
  }, {
    title: '路线',
    key: 'address',
    render(h, {row, column, index}) {
      return `${row.consignee_city + '-' + row.cargo_city}`
    }
  }, {
    title: '车辆类型',
    key: 'type',
    width: 100
  }, {
    title: '车辆长度',
    key: 'length',
    width: 150,
    render(h, {row, column, index}) {
      return `${row.length + '米'}`
    }
  }, {
    title: '车辆载重',
    width: 120,
    render(h, {row, column, index}) {
      return `${row.load + '吨'}`
    }
  }, {
    title: '装货体积',
    width: 120,
    render(h, {row, column, index}) {
      return `${row.volume}m³`
    }
  }, {
    title: '车辆车牌',
    key: 'plate_number',
    width: 100
  }, {
    title: '心意运价',
    key: 'freight',
    width: 100,
    render(h, {row, column, index}) {
      return `${row.freight + row.freight_unit}`
    }
  }]
}

// getters
const getters = {
  cheyuanList: state => state.cheyuanList,
  cheyuanColumns: state => state.cheyuanColumns,
  cheyuanFilter: state => state.cheyuanFilter
}

// actions
const actions = {
  getCheyuanList({commit}, cheyuanFilter) {
    cheyuanInfo.getList(cheyuanFilter, function(res) {
      var _cheyuanList = res.data;
      commit(types.GET_CHEYUAN_LIST, _cheyuanList)
    })
  // tradingQuotations.getComfirmedList()
  },
  clearCheyuanFilter({ commit }) {
    commit(types.CLEAR_CHEYUAN_FILTER)
  }
}

// mutations
const mutations = {
  [types.GET_CHEYUAN_LIST](state, cheyuanList) {
    state.cheyuanData = cheyuanList;
    state.cheyuanList = cheyuanList.data;
  },
  [types.CLEAR_CHEYUAN_FILTER](state) {
    state.cheyuanFilter = {
      cargo_area_code: [], //货物省市区代码
      consignee_area_code: [], //收货省市区代码
      vehicle_type: '不限' //车辆类型
    };
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
