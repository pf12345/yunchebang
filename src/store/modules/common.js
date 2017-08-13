import * as types from '../mutation-types'
import common from '../../api/common'

const state = {
  curLeftMenu: 'jiaoyihangqing',
  userInfo: {},
  provinceCityList: [],
  commonConfig: {}
}

// getters
const getters = {
  curLeftMenu: state => state.curLeftMenu,
  userInfo: state => state.userInfo,
  provinceCityList: state => state.provinceCityList,
  commonConfig: state => state.commonConfig
}

// actions
const actions = {
  getUserInfo({commit}) {
    common.getUserInfo(function(res) {
      var userInfo = res.data;
      commit(types.GET_USER_INFO, { userInfo })
    })
  },
  getUploadConfig({ commit }, cb) {
    common.getUploadConfig(function(res) {
      var config = res.data;
      if(cb && typeof cb == 'function' && config) {
        // console.log(config);
        cb(config);
      }
    })
  },
  getConfig({commit}) {
    common.getConfig(function(res) {
      commit(types.GET_CONFIG, res)
    })
  }
}

// mutations
const mutations = {
  [types.GET_USER_INFO] (state, { userInfo }) {
   state.userInfo = userInfo;
 },
 [types.LEFT_NAE_SELECT] (state, type) {
    state.curLeftMenu = type;
    window.location.href = '/#/'+ type;
  },
  [types.GET_CONFIG] (state, {data}) {
    state.commonConfig = data;
    var province = [];
    var cities = [];
    var countys = []
    if (data && data.area && data.area.length) {
      data.area.forEach(function(area) {
        area.value = area.district_code;
        area.label = area.name;
        if (area.code < 100 && !area.name.match('台湾')) {
          area.children = [];
          province.push(area);
        }
        if (area.code > 1000 && area.code < 10000) {
          area.children = [];
          cities.push(area);
        }
        if (area.code > 100000 && area.code < 1000000) {
          countys.push(area);
        }
      })
      cities.forEach(function(city) {
        countys.forEach(function(county) {
          if (county.city_code === city.city_code) {
            city.children.push(county)
          }
        })
      })
      province.forEach(function(_province) {
        cities.forEach(function(city) {
          if (_province.province_code === city.province_code) {
            _province.children.push(city)
          }
        })
      })
    }
    state.provinceCityList = province;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
