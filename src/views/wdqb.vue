<template>
  <div id="app">
      <toubu />>
    <div class="banner"></div>
    <div class="con">
      <div class="left">
        <div class="xian">
          <div class="touxiang">
            <img src="../assets/lbq/123.jpg" alt>
          </div>
          <div class="left-l">
            <h2>时光会证明一切</h2>
            <span>
              未绑定手机
              <a href>(去绑定)</a>
            </span>
          </div>
          
        </div>
        <div class="mid">
            <p>账户余额：<span>0</span>.00 </p>
            <button>提现</button> <h3> *当前余额不足</h3>
          </div>

          <div class="right">
            <p>每次提现最小额度为￥100.00 <br>
              提现会在 3-5 个工作日内到账<br>
              结算后的收益，提现不再收取手续费<br>
             <a href="">收入结算与提现常见问题</a> 
            </p> 
          </div>
          <div class="footer">
         <div id="ss"> 时间</div>
         <div id="dd"> 类型</div>
         <div id="xq"> 详情</div>
         <div id="je"> 金额</div>
         <div id="zt"> 状态</div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import header from '../components/header/header'
export default {
    components:{
        'toubu':header
    }
};
</script>

<style scoped>

a {
  text-decoration: none;
}
#app {
  width: 100%;
  height: 500px;
  /* background: greenyellow; */
}
.banner {
  width: 100%;
  height: 72px;
}
.con {
  width: 70%;
  height: 500px;
  margin: 0 auto;
  /* background: blue; */
}
.left {

  width: 100%;
  height: 500px;
}
.xian {
  margin-top: 40px;
  height: 150px;
  width: 35%;
  border-right: 1px solid #eeeeee;
}
.touxiang {
  float: left;
  padding-top: 10%;
  width: 100px;
  height: 100px;
}
.touxiang img {
  width: 100%;
  border-radius: 50px;
}
.touxiang h2 {
  display: block;
  position: relative;
  top: 20%;
  float: left;
}
.left-l {
  margin-left: 5%;
  float: left;
  margin-top: 10%;
}
.left-l span {
 
  display: block;
  position: relative;
  margin-top: 3%;
  padding-top: 5px;
  background: none;
  font-size: 12px;
}
.left-l a{
   color: #337ab7;
}
#zt{
 padding-top: 10px;
   margin-left: 20px;
  width: 80px;
  height: 15px;
  float: left;
  margin-top: 25px;
  line-height:1px;
}
#je{
   padding-top: 10px;
   margin-left: 20px;
  width: 80px;
  height: 15px;
  float: left;
  margin-top: 25px;
  border-right: 1px dashed #e7e4e4;
  line-height:1px;
}
#xq{
   padding-top: 10px;
   margin-left: 30px;
  width:516px;
  height: 15px;
  float: left;
  margin-top: 25px;
  border-right: 1px dashed #e7e4e4;
  line-height:1px;
}
#dd{
   padding-top: 10px;
   margin-left: 30px;
  width: 80px;
  height: 15px;
  float: left;
  margin-top: 25px;
  border-right: 1px dashed #e7e4e4;
  line-height:1px;
}
#ss{
  margin-left: 20px;
  padding-top: 10px;
  width: 150px;
  height: 15px;
  float: left;
  margin-top: 25px;
  border-right: 1px dashed #e7e4e4;
  line-height:1px;
}
.footer{
  border-radius: 5px;
  border: 1px solid #e7e4e4;
  width: 100%;
  height: 80px;
}
.right{
  width: 20%;
  height: 155px;
  float: right;
  margin-top: -14.5%;
}
.right a{
  color:#337ab7;
}
.right p{
  line-height:25px;
  margin-left: -10%;
  font-size: 13px;
  color: #969696;
}
.mid h3{
  font-size: 13px;
  color: #969696;
  margin-top: 2.5%;
  margin-left: 2%;
  float: left;
}
.mid button{
    margin-top: 2%;
  margin-left: 30%;
  border-radius: 15px;
  border:0px;background-color:transparent;
  border: 1px solid rgba(59,194,29,.7);
  color: #42c02e!important;
  float: left;
  width: 60px;
  height: 25px;
  outline: none;
}
.mid p{
  margin-left: 30%;
  display: block;
padding-top: 6%;
}
.mid span{
  font-size: 25px;
}
.mid {
  border-right:1px solid #eeeeee;
  width: 40%;
  height: 155px;
  margin-left: 35%;
  margin-top: -14.5%;
}

</style>
