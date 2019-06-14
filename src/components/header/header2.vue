<template>
  <div class="header">
    <router-link class="logo" to="###">
      <img src="../../assets/dpd/logo1.png">
    </router-link>
    <div class="main clearfix">
      <ul class="clearfix">
        <li class="sy">
          <router-link to="###">
            <img src="../../assets/dpd/4.png" style="margin:-7px 0;">
              首页
          </router-link>
        </li>
        <li class="xz">
          <router-link to="###">
            <img src="../../assets/dpd/9.png" style="margin:-6px 0;">
            下载App
            </router-link>
        </li>
        <li>
          <form action>
            <input type="text" placeholder="搜索">
            <i>
              <img src="../../assets/dpd/ss.png">
            </i>
          </form>
        </li>
      </ul>
      <div class="r">
        <router-link to="/logo" style="font-size: 18px;
    color: #969696;">Aa</router-link>
        <router-link class="beta" to="/logo">
          <img src="../../assets/dpd/beta.png">
        </router-link>
        <router-link to="/logo" style="color: #969696;font-size: 15px;">登录</router-link>
      </div>
    </div>
    <router-link class="zhuce" to="/logo">注册</router-link>
    <router-link class="xwz" to="/logo">
      <span>
        <img src="../../assets/dpd/ye.png">
      </span>
      <i>写文章</i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "微软雅黑";
}
li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix {
  z-index: 1;
}

.header {
  width: 100%;
  height: 58px;
  font-size: 17px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
}
.logo {
  width: 7%;
  float: left;
  height: 56px;
  /* border: 1px solid red; */
}
.logo img {
  display: block;
  width: 100%;
}

.main {
  width: 68%;
  margin-left: 8%;
  float: left;
  /* border: 1px solid red; */
}
.main ul {
  height: 58px;
  line-height: 58px;
  float: left;
}
.main li {
  float: left;
  padding: 0 20px;
}
.sy a {
  color: #ea6f5a;
}
.xz:hover {
  background: #f5f5f5;
}
.main form {
  position: relative;
}
.main input {
  padding: 0 40px 0 20px;
  width: 100px;
  height: 38px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline-style: none;
}
.main i {
  position: absolute;
  right: 20px;
  padding: 8px 0;
}

.r {
  width: 20%;
  float: right;
}
.r a {
  line-height: 58px;
  float: left;
  margin-right: 12%;
}

.beta {
  height: 55px;
}
.beta img {
  height: 25px;
  margin-top: 15px;
}

.zhuce {
  float: left;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  text-align: center;
}
.zhuce:hover {
  background: #e7887727;
}
.xwz {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
}
.xwz span img {
  margin: -9px 0;
}
.xwz i {
  font-style: normal;
}
</style>


