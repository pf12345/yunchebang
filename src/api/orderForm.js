
import query from './query';

export default {
  getList({type, status, pre_page, page}, cb) {
    var paramStr = 'pre_page='+ pre_page + '&page=' + page + '&type='+type+'&status=' + status;
    query.ajaxGet({
      url: '/users/order/list?'+paramStr
    }, cb)
  },
  getProcessList({consignee_area_code, status, cargo_area_code, with_consignee, pre_page, page}, cb) {
    var paramStr = 'pre_page='+ pre_page + '&page=' + page + '&consignee_area_code='+consignee_area_code+'&status=' + status+'&cargo_area_code='+cargo_area_code+'&with_consignee='+with_consignee;
    query.ajaxGet({
      url: '/users/order/process-list?'+paramStr
    }, cb)
  },
  getComfirmedList({time_option, type, with_consignee, pre_page, page}, cb) {
    var paramStr = 'pre_page='+ pre_page + '&page=' + page + '&type='+type+'&time_option=' + time_option + '&with_consignee=' + with_consignee;
    query.ajaxGet({
      url: '/order/comfirmed-list?'+paramStr
    }, cb)
  },
  getOrderFromDetail({id}, cb) {
    var paramStr = 'id='+ id;
    query.ajaxGet({
      url: '/order/get?'+paramStr
    }, cb)
  }
}
