<template>
  <div class="indexContainer">
    <div class="header">
      <div class="logo">
        云车邦
      </div>
      <div class="nav">
        <ul>
          <li>首页</li>
          <li>企业流程</li>
          <li>关于我们</li>
          <li>货主登录</li>
          <li><Icon type="android-phone-portrait" style="margin-right: 5px;"></Icon>进入APP</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style media="screen" scoped>
  .header {
    height: 60px;
    width: 100%;
  }
  .logo {
    width: 33%;
    min-width: 100px;
    display: inline-block;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .nav {
    position: absolute;
    right: 60px;
    top: 10px;
    line-height: 1;
  }
  .nav li {
    float: left;
    padding: 10px;
    font-size: 14px;
  }
</style>
<script>
export default {

}
</script>
