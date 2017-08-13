
import query from './query';

export default {
  getList({cargo_area_code, consignee_area_code, vehicle_type}, cb) {
    var paramStr = 'cargo_area_code='+cargo_area_code+'&consignee_area_code＝' + consignee_area_code + '&vehicle_type='+vehicle_type;
    query.ajaxGet({
      url: '/vehicle/route/list?'+paramStr
    }, cb)
  }
}
