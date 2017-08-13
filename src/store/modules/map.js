import * as types from '../mutation-types'
import common from '../../api/common'

const state = {
  mapSearchResults: [],
  map: {
    visible: false,
    mapKey: '',
    resultVisible: false,
    instance: null,
    selectMapItem: null
  },
  local: null
}


const getters = {
  mapSearchResults: state => state.mapSearchResults,
  map: state => state.map,
  mapKey: state => state.mapKey
}

// actions
const actions = {
  initMap({commit}, obj) {
    var map = new BMap.Map(obj.mapContainer);
    map.centerAndZoom(obj.addr); // 初始化地图,设置城市和地图级别。
    var options = {
      // renderOptions: {map: map},
      onSearchComplete: function(results) {
        if (local.getStatus() == BMAP_STATUS_SUCCESS) {
          commit(types.GET_MAP_SEARCH_RESULTS, results)
        }
      }
    };
    var local = new BMap.LocalSearch(map, options);
    commit(types.SET_MAP_LOCAL, {local, map});
    // local.search("锦江逸家");
    // setTimeout(function() {
    //   local.search("天府新谷");
    // }, 2000)
  },
  mapLocalSearch({commit}) {
    commit(types.GET_MAP_SEARCH_RESULTS, {ki: []});
    var local = state.local;
    var key = state.map.mapKey;
    local.search(key);
  }
}

// mutations
const mutations = {
  [types.GET_MAP_SEARCH_RESULTS](state, results) {
    // console.log(results.ki);
    state.mapSearchResults = results.ki;
    state.map.resultVisible = true;
  },
  [types.SET_MAP_LOCAL](state, {local, map}) {
    state.local = local;
    state.map.instance = map;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
