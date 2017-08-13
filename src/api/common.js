import query from './query';

export default {
  getUserInfo(cb) {
    query.ajaxGet({
      url: '/users/info'
    }, cb)
  },
  getConfig(cb) {
    query.ajaxGet({
      url: '/config?version=1'
    }, cb)
  },
  getUploadConfig(cb) {
    query.ajaxGet({
      url: '/file/token/get'
    }, cb)
  }
}
