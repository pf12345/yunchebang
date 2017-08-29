<template>
  <div class="indexContainer" id="indexContainer">
    <div class="header" id="anchor-0">
      <div class="logo">
        <img src="/images/logoBlue.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li @click="goAnchor('#anchor-0')">首页</li>
          <li @click="goAnchor('#anchor-1')">业务流程</li>
          <li @click="goAnchor('#anchor-2')">关于我们</li>
          <li class="login_btn" @click="showLoginPanel">货主登录</li>
        </ul>
      </div>
    </div>
    <div class="ads">
      <div id="loginContainer" v-if="showLogin">
        <div class="login" id="login">
          <h3>登录 <span id="hideBtn" @click="hideLogin"><Icon type="ios-arrow-up"></Icon></span></h3>
          <p><input v-model="phone" style="width: 214px" placeholder="请输入手机号"></input></p>
          <p v-if="showPwdLogin"><input type="password" v-model="password" style="width: 214px" placeholder="请输入密码"></input></p>
          <p class="imgCode" v-if="!showPwdLogin">
            <input v-model="imgCode" style="width: 100px" placeholder="请输入校验码"></input>
            <img :src="imgCodeUrl" alt="" @click="getNewImgCode">
          </p>
          <p v-if="!showPwdLogin">
            <input v-model="phoneCode" style="width: 100px" placeholder="请输入验证码"></input>
            <button type="button" id="phoneCodeBtn" name="button" @click="sendPhoneCode">{{sendCodeMsg}}</button>
          </p>
          <p class="usePwd" v-if="!showPwdLogin">
            <a href="javascript:;" @click="showLoginType('pwd')">使用密码登录</a>
          </p>
          <p class="usePwd" v-if="showPwdLogin" style="margin-top: 72px;">
            <a href="javascript:;" @click="showLoginType('code')">使用验证码登录</a>
          </p>
          <p class="loginBtn" v-if="!showPwdLogin">
            <Button @click="doLogin" style="width: 226px;height: 38px;" type="primary">登录</Button>
          </p>
          <p class="loginBtn" v-if="showPwdLogin">
            <Button @click="doLoginPwd" style="width: 226px;height: 38px;" type="primary">登录</Button>
          </p>
        </div>
      </div>

      <Carousel v-model="value1" autoplay arrow="never" :autoplay-speed="4000">
        <Carousel-item>
          <img src="/images/ad1.png" alt="">
        </Carousel-item>
        <Carousel-item>
          <img src="/images/ad2.png" alt="">
        </Carousel-item>
        <Carousel-item>
          <img src="/images/ad3.png" alt="">
        </Carousel-item>
      </Carousel>
    </div>
    <div class="service" id="anchor-1">
      <h1 style="font-weight:600">业务流程</h1>
      <h1 style="letter-spacing: 3px;color: #999;">service</h1>
      <div class="service_items">
        <div class="item">
          <img src="/images/service1.png" alt="">
        </div>
        <div class="item">
          <img src="/images/service2.png" alt="">
        </div>
        <div class="item">
          <img src="/images/service3.png" alt="">
        </div>
        <div class="item">
          <img src="/images/service4.png" alt="">
        </div>
      </div>

    </div>
    <div class="banner_bottom" id="anchor-2">
      随时随地就近装车找货
    </div>
    <div class="company_info">
      <div class="company_info_items">
        <div class="company_info_item">
          <ul>
            <li>云车邦</li>
            <li @click="goAnchor('#anchor-0')">首页</li>
            <li @click="goAnchor('#anchor-1')">业务流程</li>
            <li @click="goAnchor('#anchor-2')">关于我们</li>
          </ul>
          <p>客服电话：028-82938123</p>
          <p>公司地址：四川省成都市一环路52号云车邦大厦</p>
        </div>
        <div class="company_info_item company_info_qcodes" style="float: right">
          <div style="display: inline-block;">
            <img src="/images/qcode.png" alt="">
            <br>
            <p>云车邦货主端</p>
          </div>
          <div style="display: inline-block;">
            <img src="/images/qcode.png" alt="">
            <br>
            <p>云车邦司机端</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>版权所有 2007-2016 © 2016 517NA.COM AI | RIGHTS RESERVED</p>
      <p>四川云车邦科技股份有限公司 蜀ICP备08104680号 京公网安备1101054283</p>
    </div>
  </div>
</template>
<style media="screen">
#login input {
  margin: 0 20px;
  border: none !important;
  border-bottom: 1px solid #dadada !important;
  outline: 0;
  display: inline-block;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  color: #495060;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}
#login input::-moz-placeholder{color:#bbbec4;opacity:1}
#login input::-ms-input-placeholder{color:#bbbec4}
#login input::-webkit-input-placeholder{color:#bbbec4}
</style>
<style media="screen" scoped>
  #app .indexContainer {
    left: 0;
    top: 0;
    padding: 0;
    transition: all 2s;
    -moz-transition: all 2s; /* Firefox 4 */
    -webkit-transition: all 2s; /* Safari 和 Chrome */
    -o-transition: all 2s; /* Opera */
  }
  #loginContainer {
    position: relative;
    width: 1200px;
    margin: auto;
  }
  #login {
    width: 250px;
    height: 310px;
    position: absolute;
    top: 20px;
    right: 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    z-index: 2;
    background: #fff;
    border-radius: 5px;
  }
  #login h3 {
    text-align: center;
    position: relative;
  }
  #login > p {
    margin-bottom: 10px;
  }
  #hideBtn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: #2391e2;
    position: absolute;
    right: 15px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
  }
  .usePwd {
    text-align: right;
    font-size: 12px;
    margin: 30px 20px;

  }
  .usePwd a {
    text-decoration: underline;
    color: #666;
  }
  .usePwd a:hover {
    color: #2d8cf0;
  }
  .loginBtn {
    text-align: center;
    margin: 0 0 20px 0;
  }
  .imgCode img {
    width: 90px !important;
    vertical-align: middle;
  }
  #phoneCodeBtn {
    width: 90px;
    height: 26px;
    background: #ccc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: 0;
  }
  .ads {
    position: relative;;
  }
  .header {
    height: 110px;
    width: 1200px;
    margin: auto;
    padding-top: 30px;
  }
  .logo {
    display: inline-block;
  }
  .logo img {
    height: 60px;
  }
  .nav {
    float: right;
  }
  .nav li {
    float: left;
    padding: 10px 20px;
    font-size: 20px;
  }
  .nav li:hover {
    cursor: pointer;
  }
  .ads img {
    width: 100%;
  }
  .service {
    margin-top: 40px;
  }
  .service h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 100;
  }
  .service_items {
    width: 1200px;
    margin: auto;
  }
  .service_items .item {
    display: inline-block;
    width: 536px;
    height: 310px;
    margin: 60px 0 0;
  }
  .service_items .item:nth-of-type(2n) {
    float: right;
  }
  .service_items .item_img {
    width: 235px;
    height: 100%;
    display: inline-block;
    background: #f4d59c;
  }
  .service_items .item_label {
    width: 300px;
    height: 100%;
    display: inline-block;
    float: right;
    padding: 20px;
  }
  .service_items .item_label p {
    font-size: 32px;
    color: #fff;
  }
  .service_items .item_label p:first-of-type {
    text-decoration: underline;
    margin-bottom: 10px;
  }
  .banner_bottom {
    height: 420px;
    width: 100%;
    background: url('/images/banner_bottom.png') no-repeat;
    margin: 40px 0 0;
    line-height: 420px;
    font-size: 50px;
    text-align: center;
    font-weight: 600;
  }
  .company_info {
    height: 360px;
    background: #283c51;
    width: 100%;
  }
  .company_info_items {
    width: 1200px;
    margin: auto;
    height: 100%;
  }
  .company_info_items .company_info_item {
    display: inline-block;
    height: 100%;
  }
  .company_info_items li {
    float: left;
    font-size: 30px;
    color: #fff;
    padding: 50px 40px 130px 0;
    font-weight: 600;
  }

  .company_info_items p {
    font-size: 24px;
    color: #fff;
    margin-top: 20px;
  }
  .company_info_qcodes > div {
    margin: 50px 0 0 40px;
  }
  .company_info_qcodes > div p {
    text-align: center;
    font-size: 16px;
    margin: 0;
  }
  .copyright {
    height: 100px;
    width: 100%;
    background: #fff;
    padding-top: 20px;
  }
  .copyright p {
    text-align: center;
    padding: 10px 0 0;
  }
  .login_btn {
    background: #2391e2;
    border-radius: 28px;
    color: #fff;
    margin-left: 30px;
  }
</style>
<script>
export default {
  data() {
    return {
      value1: 0,
      phone: '',
      imgCode: '',
      phoneCode: '',
      showLogin: false,
      sendCodeMsg: '发送验证码',
      sendCodeMsgNum: 0,
      imgCodeUrl: '',
      showPwdLogin: false,
      password: ''
    }
  },
  created() {
    this.getNewImgCode();
  },
  methods: {
    getNewImgCode() {
      var that = this;
      $.get('http://39.108.113.222/api/v1/captcha', function(res) {
        that.imgCodeUrl = res.data.src;
      })
    },
    getPhoneCode() {
      var _phone = this.phone, that = this;
      if(!_phone) {
        this.$Message.warning('请输入手机号码！');
        return false;
      }
      if(_phone.length != 11 || !Number(_phone)) {
        this.$Message.warning('请输入正确的手机号码！');
        return false;
      }
      if(!this.imgCode) {
        this.$Message.warning('请输入校验码！');
        return false;
      }
      const msg = this.$Message.loading({
          content: '获取中，请稍后...',
          duration: 0
      });
      var url = 'http://39.108.113.222/api/v1/verify-code/get?cellphone='+_phone+'&captcha='+this.imgCode+'&use_type=login'
      $.get(url, function(res) {
        msg();
        if(res.errcode === 0) {
          that.$Message.success('获取成功')
        } else {
          that.$Message.warning(res.message);
        }
      })
      return true;
    },
    doLogin() {
      var _phone = this.phone, _phoneCode = this.phoneCode, that = this;;
      if(!_phone) {
        this.$Message.warning('请输入手机号码！');
        return false;
      }
      if(_phone.length != 11 || !Number(_phone)) {
        this.$Message.warning('请输入正确的手机号码！');
        return false;
      }
      if(!this.phoneCode) {
        this.$Message.warning('请输入验证码！');
        return false;
      }
      const msg = this.$Message.loading({
          content: '登录中，请稍后...',
          duration: 0
      });
      $.post("http://39.108.113.222/api/v1/users/login-verifycode",{
        cellphone: _phone,
        verify_code: _phoneCode
      },function(res){
        msg();
        if(res.errcode === 0) {
          that.$Message.success('登录成功');
          location.href = '/#/tradingQuotations';
        } else {
          that.$Message.warning(res.message);
        }
      });
    },
    doLoginPwd() {
      var _phone = this.phone, _password = this.password, that = this;;
      if(!_phone) {
        this.$Message.warning('请输入手机号码！');
        return false;
      }
      if(_phone.length != 11 || !Number(_phone)) {
        this.$Message.warning('请输入正确的手机号码！');
        return false;
      }
      if(!_password) {
        this.$Message.warning('请输入密码！');
        return false;
      }
      const msg = this.$Message.loading({
          content: '登录中，请稍后...',
          duration: 0
      });
      $.post("http://39.108.113.222/api/v1/users/login",{
        cellphone: _phone,
        password: _password
      },function(res){
        msg();
        if(res.errcode === 0) {
          that.$Message.success('登录成功');
          location.href = '/#/tradingQuotations';
        } else {
          that.$Message.warning(res.message);
        }
      });
    },
    goAnchor(selector) {
      var anchor = document.querySelector(selector);
      $('#indexContainer').animate({scrollTop: anchor.offsetTop}, 500);
    },
    showLoginPanel() {
      this.showLogin = true;
    },
    hideLogin() {
      this.showLogin = false;
    },
    sendPhoneCode() {
      var that = this, interval = null;
      if(this.sendCodeMsgNum > 0) {
        return false;
      }
      if(!this.getPhoneCode()){
        return false;
      };
      this.sendCodeMsgNum = 60;
      this.sendCodeMsg = this.sendCodeMsgNum + '秒后重发';
      interval = setInterval(function() {
        that.sendCodeMsgNum -= 1;
        if(that.sendCodeMsgNum == 0) {
          that.sendCodeMsg = '发送验证码';
          clearInterval(interval);
        }else{
          that.sendCodeMsg = that.sendCodeMsgNum + '秒后重发';
        }
      }, 1000);
    },
    showLoginType(type) {
      if(type == 'pwd') {
        this.showPwdLogin = true;
      }else {
        this.showPwdLogin = false;
      }
    }

  }
}
</script>
