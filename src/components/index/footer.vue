<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="kuang">

    <ul>
      <li><a href="" class="li1">关于间书</a></li>
      <li><a href="" class="li2">联系我们</a></li>
      <li><a href="" class="li3">加入我们</a></li>
      <li><a href="" class="li4">间书出版</a></li>
      <li><a href="" class="li5">品牌与徽标</a></li>
      <li><a href="" class="li6">帮助中心</a></li>
      <li><a href="" class="li7">合作伙伴</a></li>
    </ul>

    <div class="zi">
      <li>@2012-2019 上海佰集信息科技有限公司/简书/泸ICP备11018329号-5<img src="../../assets/111.png" style="width:40px; height:20px;">
      <a href="#" class="li8">泸公网安备31010402002252号/</a><img  src="../../assets/222.png" style="width:45px; height:20px">
      简书网举报电话：021-34770013/<img src="../../assets/333.png" style="width:20px;height:25px"></li>
    </div> 
  </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kuang{
  width: 750px;
  height: 130px;
}
ul {
  list-style-type: none;
  padding: 0;

}
.li1:hover{
  color: black;
}
.li2:hover{
  color: black;
}
.li3:hover{
  color: black;
}
.li4:hover{
  color: black;
}
.li5:hover{
  color: black;
}
.li6:hover{
  color: black;
}
.li7:hover{
  color: black;
}
.li8:hover{
  color: black;
}
.li8{
  color: rgb(167, 169, 172);
}
.zi{
  font-size: 13px;
  color: rgb(167, 169, 172);
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(135, 138, 141);
  text-decoration: none;
}
</style>
