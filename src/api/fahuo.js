import query from './query';

export default {
  addOrder(addInfo, cb) {
    query.ajaxPost({
      url: '/order/add',
      params: addInfo
    }, cb)
  }
}
