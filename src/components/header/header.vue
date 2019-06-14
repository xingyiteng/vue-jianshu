<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <router-link class="logo" to="./">
          <img src="../../assets/dpd/logo1.png">
        </router-link>
      </el-col>
      <el-col :span="16">
        <div class="main clearfix">
          <ul class="clearfix dh">
            <li class="sy">
              <router-link to="###">
                <i class="el-icon-discover"></i>
                发现
              </router-link>
            </li>
            <li class="xz">
              <router-link to="###">
                <i class="el-icon-postcard"></i>
                关注
              </router-link>
            </li>
            <li class="xz">
              <!-- <router-link to="###">
                <i class="el-icon-bell"></i>
                消息
              </router-link>-->
              <el-dropdown>
                <span class="el-dropdown-link">
                  <router-link to="./xiaoxi" style="font-size:17px">
                    <i class="el-icon-bell"></i>
                    消息
                  </router-link>
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-chat-square">评论</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-message">简信</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-upload2">投稿请求</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-star-off">喜欢和赞</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">关注</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-s-flag">赞赏和付费</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-more">其他提醒</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <!-- <ul>
                <li>
                  <router-link>
                    <i class="el-icon-chat-square"></i>
                    <span>评论</span>
                  </router-link>
                </li>
              </ul>-->
            </li>
            <li class="in">
              <form action @click="sousuo=!sousuo">
                <input type="text" placeholder="搜索">
                <i id="ss">
                  <img src="../../assets/dpd/ss.png">
                </i>
                <div id="tc" v-show="sousuo">
                  <div class="tcn clearfix">
                    <div class="tcn_t">
                      <span>热门搜索</span>
                      <a href>
                        <i class="el-icon-refresh"></i>
                        换一批
                      </a>
                    </div>
                    <ul>
                      <li>
                        <router-link to>区块链</router-link>
                      </li>
                      <li>
                        <router-link to>小程序</router-link>
                      </li>
                      <li>
                        <router-link to>vue</router-link>
                      </li>
                      <li>
                        <router-link to>毕业</router-link>
                      </li>
                      <li>
                        <router-link to>PHP</router-link>
                      </li>
                      <li>
                        <router-link to>故事</router-link>
                      </li>
                      <li>
                        <router-link to>flutter</router-link>
                      </li>
                      <li>
                        <router-link to>理财</router-link>
                      </li>
                      <li>
                        <router-link to>美食</router-link>
                      </li>
                      <li>
                        <router-link to>投稿</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
              <!-- <el-dropdown trigger="click">
                <form action @click="sousuo=!sousuo">
                  <input type="text" placeholder="搜索">
                  <i id="ss">
                    <img src="../../assets/dpd/ss.png">
                  </i>
                </form>
                <el-dropdown-menu slot="dropdown">
                  <router-link to>
                    <el-dropdown-item>区块链</el-dropdown-item>
                  </router-link>
                  <el-dropdown-item>
                    <router-link>黄金糕</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>-->
            </li>
          </ul>
          <div class="r clearfix">
            <a @click="show=!show" style="font-size: 18px;color: #969696;">Aa</a>
            <div class="r_kg" v-show="show">
              <el-switch
              v-model="value1"
              active-text="夜间模式"
              inactive-text="白天模式"
              @change="changStyle($event)"
              >
              </el-switch>
              <el-switch v-model="value2" active-text="楷体" inactive-text="宋体"></el-switch>
              <el-switch v-model="value3" active-text="繁体" inactive-text="简体"></el-switch>
            </div>
            <router-link class="beta" to="">
              <img src="../../assets/dpd/beta.png">
            </router-link>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="zhu clearfix" style="display: inline-block; float:left;  overflow: hidden;">
          <!-- <router-link class="zhuce" to="/logo">
            <img src="../../assets/dpd/dpd.jpg">
            <i class="el-icon-caret-bottom"></i>
          </router-link>-->
          <el-dropdown>
            <span class="el-dropdown-link">
              <router-link class="zhuce" to="/logo">
                <img src="../../assets/dpd/dpd.jpg">
                <i class="el-icon-caret-bottom"></i>
              </router-link>
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user-solid"><router-link to="./wenzhang">我的主页</router-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-collection-tag"> <router-link to="./shoucang">收藏的文章</router-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-star-on">喜欢的文章</el-dropdown-item>
              <el-dropdown-item icon="el-icon-success"><router-link to="./yigouneirong">已购内容</router-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-finance"><router-link to="./wdqb">我的钱包</router-link></el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-s-comment">
                <router-link to="./rmwt">帮助与反馈</router-link>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <router-link class="xwz" to="./xiewenzhang">
          <span>
            <img src="../../assets/dpd/ye.png">
          </span>
          <router-link to="./xiewenzhang"><i style="color:#fff;">写文章</i></router-link>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sousuo: false,
      show: "",
      value1: false,
      value2: false,
      value3: false
    };
  },
  methods: {
    changStyle($event) {
      if($event==true) {
        var div = document.createElement('cover');
        div. id="cover"
        div.setAttribute('style','')
        document.body.appendChild(div);
      }else if($event==false){
        var div = document.getElementById('cover');
        div.parentNode.removeChild(div);
      }
    }
  }
};
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
  float: left;
  display: block;
  height: 58px;
  width: 58px;
}
.logo img {
  width: 170%;
}

.main {
  width: 100%;
  // margin-left: 8%;
  /* border: 1px solid red; */
}
.dh {
  float: left;
  height: 58px;
  line-height: 58px;
}
.sy,
.xz,
.in {
  float: left;
  padding: 0 20px;
}
.sy a {
  color: #ea6f5a;
}
.xz:hover {
  background: #f5f5f5;
}
// .xz ul{
//   width: 200px;
//   border-radius: 0 0 4px 4px;
// }
.main form {
  position: relative;
}
.main input {
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline-style: none;
  transition: 0.5s all;
}
.main input:hover {
  width: 240px;
}
.main i{
  position: relative;
  right: 0;
}
#ss {
  position: absolute;
  right: 20px;
  padding: 8px 0;
}
#tc {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.tcn {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
}
.tcn_t {
  height: 20px;
  margin-bottom: 10px;
}
.tcn_t span {
  display: inline-block;
  float: left;
  font-size: 14px;
  color: #969696;
  line-height: 20px;
}
.tcn_t a {
  float: right;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  line-height: 20px;
}
.tcn_t a i {
  display: inline-block;
  line-height: 1;
  transition: 0.5s ease;
}
.tcn ul {
  height: auto;
}
.tcn ul li {
  padding: 0;
  margin-right: 8px;
  display: inline-block;
  line-height: 28px;
  float: left;
}
.tcn ul li a {
  padding: 2px 4px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.r {
  float: right;
  margin-right: 20px;
}
.r a {
  line-height: 58px;
  margin-left: 25px;
  float: left;
  cursor: pointer;
}
.r_kg {
  position: absolute;
  top: 56px;
  width: 200px;
  height: 130px;
  padding: 20px 20px 20px 24px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.el-switch {
  margin: 0 auto;
  margin-bottom: 30px;
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
  width: 40px;
  height: 40px;
  margin: 8px 24px 8px 16px;
  position: relative;
}
.zhu:hover {
  background: #f7f7f7;
}
.zhuce img {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.zhuce i {
  position: absolute;
  top: 13px;
  right: -23px;
  color: #999;
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


