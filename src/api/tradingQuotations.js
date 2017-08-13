
import query from './query';

export default {
  getComfirmedList(cb) {
    query.ajaxGet({
      url: '/users/order/list'
    }, cb)
  }
}
