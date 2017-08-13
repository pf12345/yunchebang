<template>
  <div id="app">
    <div class="layout">
      <router-view class="view left" name="left"></router-view>
      <router-view class="view content" name="content"></router-view>
      <router-view class="view top" name="top"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.layout{
  background: #fff;
  position: relative;
  overflow: hidden;
}
h3 {
  padding: 20px 0;
  font-size: 18px;
  font-weight: 300;
}
h4 {
  padding: 0 0 15px;
}
.border {
  border: 1px solid #dadada;
  border-radius: 5px;
}
.p20 {
  padding: 20px;
}
.mt20 {
  margin-top: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 14px;
}
#app .left {
  position: fixed;
  left: 0;
  top: 0;
  width: 140px;
  bottom: 0;
  background: #2391e2;
}
#app .left > ul {
  height: 100%;
  background: #f5f7f9;
}
#app .content {
  position: fixed;
  left: 140px;
  top: 40PX;
  bottom: 0;
  right: 0;
  padding: 0 20px;
  overflow: auto;
}
#app .warp_content {
  padding: 20px;
}
#app .top {
  height: 40px;
  line-height: 40px;
  background: #f4f4f4;
  position: relative;
  margin-left: 140px;
}
</style>
