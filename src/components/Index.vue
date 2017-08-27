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
          <li class="login_btn">货主登录</li>
        </ul>
      </div>
    </div>
    <div class="ads">
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
    font-size: 24px;
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
      value1: 0
    }
  },
  methods: {
    goAnchor(selector) {
      var anchor = document.querySelector(selector);
      $('#indexContainer').animate({scrollTop: anchor.offsetTop}, 500);
    }
  }
}
</script>
