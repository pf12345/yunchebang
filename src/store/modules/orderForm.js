import * as types from '../mutation-types'
import orderForm from '../../api/orderForm'
const orderFormListPageSize = 6;

const state = {
  contractUrl: '/print/contract/',
  listType: 'all', //all, process, comfirmed
  orderFormListPageSize: orderFormListPageSize,
  orderFormListCurrent: 1,
  orderFormFilter: {
    type: '0', //0全部 1整车, 2拼车
    status: '1,5', //时间类型 1，5全部，1有效，5过期
    pre_page: orderFormListPageSize,
    page: 1
  },
  orderFormFilterTypeOptions: [
    {name: '0', desc: '全部'},
    {name: '1', desc: '整车'},
    {name: '2', desc: '拼车'}
  ],
  orderFormFilterStatusOptions: [
    {name: '0', desc: '全部'},
    {name: '1', desc: '有效'},
    {name: '2', desc: '过期'}
  ],
  orderFormProcessFilter: {
    consignee_area_code: '', //收货省市区代码
    status: '2,3,8,7', //订单状态， status_option中的name值
    cargo_area_code: '', //货物省市区代码
    with_consignee: '0', //0 我发的，我收的， 1我发的， 2 我收的
    pre_page: orderFormListPageSize,
    page: 1
  },
  orderFormFilterWithConsigneeOptions: [
    {name: '0', desc: '全部'},
    {name: '1', desc: '我发的'},
    {name: '2', desc: '我收的'}
  ],
  orderFormProcessFilterStatusOptions: [],
  orderFormComfirmedFilter: {
    time_option: 'last_three_month', //时间选择 传time_options 里面的name字段 默认为最近3个月
    type: '0', //0全部 1整车, 2拼车
    with_consignee: '0', //0 我发的，我收的， 1我发的， 2 我收的
    pre_page: orderFormListPageSize,
    page: 1
  },
  orderFormComfirmedFilterTypeOptions: [],
  orderFormComfirmedFilterTimeOptions: [],
  showOrderFormDetail: false,
  orderFormData: null,
  orderFormList: [], //待接单列表
  orderFormListTotal: 0,
  orderFormProcessList: [], //进行中列表
  orderFormListProcessTotal: 0,
  orderFormComfirmedList: [], //已交付列表
  orderFormListComfirmedTotal: 0,
  orderFormDetail: null //订单详情
}

const getters = {
  listType: state => state.listType,
  orderFormFilter: state => state.orderFormFilter,
  orderFormProcessFilter: state => state.orderFormProcessFilter,
  orderFormComfirmedFilter: state => state.orderFormComfirmedFilter,
  showOrderFormDetail: state => state.showOrderFormDetail,
  orderFormList: state => state.orderFormList,
  orderFormProcessList: state => state.orderFormProcessList,
  orderFormComfirmedList: state => state.orderFormComfirmedList,
  orderFormFilterTypeOptions: state => state.orderFormFilterTypeOptions,
  orderFormFilterStatusOptions: state => state.orderFormFilterStatusOptions,
  orderFormFilterWithConsigneeOptions: state => state.orderFormFilterWithConsigneeOptions,
  orderFormProcessFilterStatusOptions: state => state.orderFormProcessFilterStatusOptions,
  orderFormComfirmedFilterTypeOptions: state => state.orderFormComfirmedFilterTypeOptions,
  orderFormComfirmedFilterTimeOptions: state => state.orderFormComfirmedFilterTimeOptions,
  orderFormListTotal: state => state.orderFormListTotal,
  orderFormListProcessTotal: state => state.orderFormListProcessTotal,
  orderFormListComfirmedTotal: state => state.orderFormListComfirmedTotal,
  orderFormDetail: state => state.orderFormDetail,
  contractUrl: state => state.contractUrl
}

const actions = {
  getOrderFormList({commit}) {
    state.listType = 'all';
    orderForm.getList(state.orderFormFilter, (res) => {
      var _orderFormList = res.data;
      commit(types.GET_ORDER_FORM_LIST, _orderFormList)
    })
  },
  getOrderFormProcessList({commit}) {
    state.listType = 'process';
    orderForm.getProcessList(state.orderFormProcessFilter, (res) => {
      commit(types.GET_ORDER_FORM_PROCESS_LIST, res.data)
    })
  },
  getOrderFormComfirmedList({commit}) {
    state.listType = 'comfirmed';
    orderForm.getComfirmedList(state.orderFormComfirmedFilter, (res) => {
      commit(types.GET_ORDER_FORM_COMFIRMED_LIST, res.data)
    })
  },
  resetOrderFormFilter({commit}, type) {
    commit(types.REST_ORDER_FORM_FILTER, type);
  },
  showOrderFormDetail({commit}, item) {
    state.contractUrl = '/print/contract/'+item.id;
    orderForm.getOrderFromDetail({id: item.id}, (res) => {
      commit(types.SHOW_ORDER_FORM_DETAIL, res);
    })
  },
  returnList({commit}) {
    state.showOrderFormDetail = false;
  }
}

const mutations = {
  [types.GET_ORDER_FORM_LIST](state, orderFormList) {
    state.orderFormData = orderFormList;
    state.orderFormList = orderFormList.data;
    state.orderFormListTotal = orderFormList.total;
  },
  [types.GET_ORDER_FORM_PROCESS_LIST](state, orderFormProcess) {
    state.orderFormProcessFilterStatusOptions = orderFormProcess.status_options;
    state.orderFormProcessList = orderFormProcess.data.data;
    state.orderFormListProcessTotal = orderFormProcess.data.total;
  },
  [types.GET_ORDER_FORM_COMFIRMED_LIST](state, orderFormComfirmed) {
    state.orderFormComfirmedFilterTypeOptions = orderFormComfirmed.type_options;
    state.orderFormComfirmedFilterTimeOptions = orderFormComfirmed.time_options;
    state.orderFormComfirmedList = orderFormComfirmed.data.data;
    state.orderFormListComfirmedTotal = orderFormComfirmed.data.total;
  },
  [types.REST_ORDER_FORM_FILTER](state, type) {
    var resetAllFilter = function() {
      state.orderFormFilter.type = '0';
      state.orderFormFilter.status = '0';
    }
    var resetProcessFilter = function() {
      state.orderFormProcessFilter.status = '2,3,8,7';
      state.orderFormProcessFilter.with_consignee = '0';
    }
    var resetComfirmedFilter = function() {
      state.orderFormComfirmedFilter.time_option = 'last_three_month';
      state.orderFormComfirmedFilter.type = '0';
      state.orderFormComfirmedFilter.with_consignee = '0';
    }
    if(type === 'all') {
      resetAllFilter();
    } else if(type === 'process') {
      resetProcessFilter();
    } else if(type === 'comfirmed') {
      resetComfirmedFilter();
    } else {
      resetAllFilter();
      resetProcessFilter();
      resetComfirmedFilter();
    }
  },
  [types.SHOW_ORDER_FORM_DETAIL](state, res) {
    try {
      if(res.data.cargo_images) {
        res.data.cargo_images = JSON.parse(res.data.cargo_images);
      }
      if(res.data.order_rating) {
        if(res.data.order_rating.warehouse_cargo_images) {
          res.data.order_rating.warehouse_cargo_images = JSON.parse(res.data.order_rating.warehouse_cargo_images);
        }
        if(res.data.order_rating.warehouse_receipt_images) {
          res.data.order_rating.warehouse_receipt_images = JSON.parse(res.data.order_rating.warehouse_receipt_images);
        }
      }
    } catch (e) {

    }
    state.orderFormDetail = res.data;
    state.showOrderFormDetail = true;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
