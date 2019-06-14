<template>
  <div class="remen">
      <div class="top1">
        <a href="#">
          <div class="hong">置顶</div>
          怀念“首页投稿”，来“向茶点故事投稿”发起挑战吧！
        </a>
        <div class="k1">
           自从首页投稿君走了以后，大家都很想念他 现在，我们用另一种方式把你们的“首页投稿”请回来了！ 不仅有首页投稿的质量把控，而且还带来了新的BUFF...
        </div> 
        <div class="kk1">
          <li>评分：101.2</li>
          <li>观看：4940</li>
          <li>留言：68</li>
          <li>喜欢：101</li>
          <li>06.13 10：45</li>
        </div>
        <img :src="imgUrl" style="float:right;margin-top:-109px;width:140px;">
      </div>
      <div class="top2">
        <a href="#">
          茶点有毒：为啥到了婚龄就要结婚
        </a>
        <div class="k2">
           为啥到了婚龄就要结婚，难道活到平均年龄就该死吗？
        </div> 
        <div class="kk2">
          <li>评分：101.2</li>
          <li>观看：4940</li>
          <li>留言：68</li>
          <li>喜欢：101</li>
          <li>06.13 10：45</li>
        </div>
      </div>
 <div class="top3">
        <a href="#">
          家门前从天而降一片神奇花园，4天就能中出大瓜，我靠此发了大财，但没想到……
        </a>
        <div class="k3">
           李二三从小就对植物很感兴趣，什么样的话他都喜欢。他曾经在路边捡到过一株冰蓝色的菊花，于是宝贝似的捧回宿舍与室友们分享。可大家却并没有感到多……
        </div> 
        <div class="kk3">
          <li>评分：101.2</li>
          <li>观看：4940</li>
          <li>留言：68</li>
          <li>喜欢：101</li>
          <li>06.13 10：45</li>
        </div>
  </div>
   <div class="top4">
        <a href="#">
          茶点有毒：一个人如果没有梦想
        </a>
        <div class="k4">
           一个人如果没有梦想，跟无忧无虑有什么去区别呢？
        </div> 
        <div class="kk4">
          <li>评分：101.2</li>
          <li>观看：4940</li>
          <li>留言：68</li>
          <li>喜欢：101</li>
          <li>06.13 10：45</li>
        </div>
  </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        imgUrl:require("../swl/444.png")
      }
    }
  }
</script>

<style>
.remen{
    width: 45%;
    height: 700px;
    margin-left: 15%;
    margin-top: 30px;
    
}
.top1{
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
}
.hong{
  width: 40px;
  background-color:#e9634c;
  color: white;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  border-radius: 4px;
  line-height: 22px;
  vertical-align: middle;
  display: inline-block;
}
.top1 a{
  text-decoration: none;
  color: #313030;
  font-weight: 700;
  font-size: 18px;
}
.top1 a:hover{
  text-decoration: underline ;
}
.k1{
  width: 75%;
  height: 50px;

  margin: 0 0 4px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  margin-top: 10px;
}
.kk1{
  width: 70%;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  display: flex;

}
.kk1 li{
  margin: 0 10px;
  color: #999;
}

.top2{
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.top2 a{
  text-decoration: none;
  color: #313030;
  font-weight: 700;
  font-size: 18px;
}
.top2 a:hover{
  text-decoration: underline ;
}
.k2{
  width: 75%;
  height: 50px;

  margin: 0 0 4px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  margin-top: 10px;
}
.kk2{
  width: 70%;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  display: flex;
  margin-top: -25px;
}
.kk2 li{
  margin: 0 10px;
  color: #999;
}
.top3{
  width: 100%;
  height: 130px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.top3 a{
  text-decoration: none;
  color: #313030;
  font-weight: 700;
  font-size: 18px;
}
.top3 a:hover{
  text-decoration: underline ;
}
.k3{
  width: 75%;
  height: 50px;
  margin: 0 0 4px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  margin-top: 10px;
}
.kk3{
  width: 70%;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  display: flex;
  margin-top: 5px
}
.kk3 li{
  margin: 0 10px;
  color: #999;
}
.top4{
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
.top4 a{
  text-decoration: none;
  color: #313030;
  font-weight: 700;
  font-size: 18px;
}
.top4 a:hover{
  text-decoration: underline ;
}
.k4{
  width: 75%;
  height: 50px;
  margin: 0 0 4px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  margin-top: 10px;
}
.kk4{
  width: 70%;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  display: flex;
  margin-top: -25px;
}
.kk4 li{
  margin: 0 10px;
  color: #999;
}
</style>