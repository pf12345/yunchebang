import * as types from '../mutation-types'
import common from '../../api/common'
import fahuo from '../../api/fahuo'

const state = {
  previewImg: {
    visible: false,
    url: ''
  },
  freight_units: [],
  payer_list: [
    {
      name: '发货人付款',
      value: '1'
    },
    {
      name: '收货人付款',
      value: '2'
    }
  ],
  submitCheck: false,
  cargo_weight_type: 'fixed', //'range' or 'fixed'
  addInfo: {
    type: '整车', //1整车, 2拼车
    vehicle_num: '', //车辆数, 整车时候需要填入
    consignee: '', //收货人
    consignee_area_code: [], //收货省市区代码
    consignee_address: '', //收货详细地址
    consignee_address_xy: '', //收货详细地址经纬度 格式: 经度，维度 192,20
    consignee_cellphone: '', //手机号
    cargo_name: '', //货物名称
    cargo_type: '', //货物类别
    cargo_weight: '', //货物吨位
    cargo_weight_min: '', //货物吨位， 最小值
    cargo_weight_max: '', //货物吨位, 最大值
    cargo_volume: '', //货物体积， 立方米
    cargo_num: '', //货物件数
    freight: '', //货物运价
    freight_unit: '', //货物运价单位， 见配置信息unit字段
    payer: '', //支付人, 1 发货人 2 收货人
    buy_insurance: '', //是否购买保险 1 是 0 否
    insurance_type: '', //保险类型, 支持多个[type1, type2], 类型见配置信息
    vehicle_type: '', //车辆类型
    vehicle_length: '', //车辆长度, 米
    note: '', //备注
    cargo_images: [], //货物相片 json 数组 [src1, src2]
    cargo_area_code: [], //货物省市区代码
    cargo_address: '', //货物详细地址
    cargo_address_xy: '', //货物详细地址经纬度 格式: 经度，维度 192,20
    cargo_owner_name: '', //发货人姓名
    cargo_owner_cellphone: '', //发货人手机
    confirm_code: '' //确认收货验证码
  }
}


const getters = {
  addInfo: state => state.addInfo,
  cargo_weight_type: state => state.cargo_weight_type,
  payer_list: state => state.payer_list,
  previewImg: state => state.previewImg,
  previewImgUrl: state => state.previewImgUrl,
  submitCheck: state => state.submitCheck
}

// actions
const actions = {
  changeCargoWeightType({commit}, type) {
    commit(types.CHANGE_CARGO_WEIGHT_TYPE, type)
  },
  previewImgAction({commit}, {previewImgVisible, url}) {
    commit(types.PREVIEW_IMG, {
      previewImgVisible,
      url
    })
  },
  removeFile({commit}, index) {
    commit(types.REMOVE_FILE, index)
  },
  checkAddinfo({commit}, vue) {
    var waringFun = function(str) {
      vue.$Message.warning(str);
      commit(types.SET_CHECK_FAHUO_STATUS, false);
      return false;
    }
    if(!state.addInfo.cargo_owner_name) {
      return waringFun('请填写发货人');
    }
    if(!state.addInfo.cargo_owner_cellphone) {
      return waringFun('请填写发货人手机');
    }
    if(!state.addInfo.cargo_area_code.length) {
      return waringFun('请填写发货货物省市');
    }
    if(!state.addInfo.cargo_address || !state.addInfo.cargo_address_xy) {
      return waringFun('请填写发货货物详细地址');
    }

    if(!state.addInfo.consignee) {
      return waringFun('请填写收货人');
    }
    if(!state.addInfo.consignee_cellphone) {
      return waringFun('请填写收货人手机');
    }
    if(!state.addInfo.consignee_area_code.length) {
      return waringFun('请填写收货货物省市');
    }
    if(!state.addInfo.consignee_address || !state.addInfo.consignee_address_xy) {
      return waringFun('请填写收货货物详细地址');
    }

    if(!state.addInfo.cargo_type) {
      return waringFun('请填写货物类型');
    }
    if(!state.addInfo.cargo_num) {
      return waringFun('请填写货物件数');
    }
    if(!state.addInfo.cargo_weight && !state.addInfo.cargo_weight_min && !state.addInfo.cargo_weight_max) {
      return waringFun('请填写货物吨位');
    }
    if(!state.addInfo.cargo_volume) {
      return waringFun('请填写货物体积');
    }
    if(!state.addInfo.freight) {
      return waringFun('请填写货物运价');
    }
    if(!state.addInfo.freight_unit) {
      return waringFun('请选择货物运价单位');
    }
    if (state.addInfo.type == '整车' && !state.addInfo.vehicle_num) {
      return waringFun('请填写车辆数');
    }
    if(!state.addInfo.vehicle_type) {
      return waringFun('请填写车辆类型');
    }
    if(!state.addInfo.vehicle_length) {
      return waringFun('请填写车辆长度');
    }
    if(!state.addInfo.payer) {
      return waringFun('请选择支付方式');
    }

    commit(types.SET_CHECK_FAHUO_STATUS, true);
  },

  submitOrder({commit}, vue) {
    var params = {};
    for(var key in state.addInfo) {
      if(state.addInfo[key]) {
        params[key] = state.addInfo[key];
      }
    }
    if(params.cargo_area_code && typeof params.cargo_area_code == 'object') {
      params.cargo_area_code = params.cargo_area_code[params.cargo_area_code.length - 1];
    }
    if(params.consignee_area_code && typeof params.consignee_area_code == 'object') {
      params.consignee_area_code = params.consignee_area_code[params.consignee_area_code.length - 1];
    }
    if(params.cargo_images) {
      params.cargo_images = JSON.stringify(params.cargo_images);
    }

    if(params.type == '整车') {
      params.type = 1;
    } else if(params.type == '拼车') {
      params.type = 2;
    }

    fahuo.addOrder(params, function(res) {
      if(vue) {
        vue.$Message.success(res.message);
      }
    })
  }
}

// mutations
const mutations = {
  [types.CHANGE_CARGO_WEIGHT_TYPE](state, type) {
    state.cargo_weight_type = type;
  },
  [types.PREVIEW_IMG](state, {previewImgVisible, url}) {
    state.previewImg.visible = previewImgVisible;
    state.previewImg.url = url;
  },
  [types.REMOVE_FILE](state, index) {
    state.addInfo.cargo_images.splice(index, 1);
  },
  [types.SET_CHECK_FAHUO_STATUS](state, status) {
    state.submitCheck = status;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
