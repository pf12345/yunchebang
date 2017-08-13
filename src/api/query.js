
import $ from 'jquery';
var domain = 'http://39.108.113.222/api/v1';
var ajaxDomain = 'http://127.0.0.1:8033'

export default {
  ajaxPost({url, params}, succ, err) {
    console.log(params);
    $.ajax({
      url: ajaxDomain + '/query/queryDataPost',
      type: 'POST',
      data: {
        url: domain + url,
        params: JSON.stringify(params)
      },
      timeout: 10000,
      success: function(res) {
        if(succ && typeof succ === 'function') {
          try {
            succ(JSON.parse(res));
          } catch (e) {
            succ(res)
          }
        }
      },
      error: function(err) {
        if(err && typeof err === 'function') {
          err(err);
        }
        console.log(err);
      }
    })
  },
  ajaxGet({url, params}, succ, err) {
    $.ajax({
      url: ajaxDomain + '/query/queryDataGet',
      type: 'POST',
      data: {
        url: domain + url,
      },
      success: function(res) {
        if(succ && typeof succ === 'function') {
          try {
            succ(JSON.parse(res));
          } catch (e) {
            succ(res)
          }
        }

      },
      error: function(err) {
        if(err && typeof err === 'function') {
          err(err);
        }
        console.log(err);
      }
    })
  }
}
