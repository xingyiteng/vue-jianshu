<template>
  <div id="app">
    <div class="daohang"></div>
    <div class="kuai1">
      <div class="main-top">
				<a href="#">
				<img src="../../assets/swl/111.png" style="width: 100%;height: 100%;border-radius: 50%;border: 0px solid red;"/>
				</a>
			</div>
      <div class="title">
				<a class="name">茶点故事</a>
			</div>
      <div class="info">
				<div class="meta-block">
				<a href="#"><li>66</li>关注></a>
				</div>
         <div class="meta-block">
           <a href="#"><li>4541</li>粉丝></a>
         </div>
         <div class="meta-block">
           <a href="#"><li>156</li>文章></a>
         </div>
         <div class="meta-block">
           <a href="#"><li>377653</li>字数></a>
         </div>
         <div class="meta-block">
           <a href="#"><li>10932</li>收获喜欢></a>
         </div>
         <div class="meta-block">
           <a href="#"><li>21.6w</li>简书钻></a>
         </div>
         <button class="jianxin" style="width:100px;height: 40px;">发简信</button>
         <button class="guanz">+ 关注</button>
    </div>

    </div>
    <div id="nav">
      <div class="fang1">
      <router-link to="/" style="color:white;text-decoration: none;">文章</router-link>
      </div>
      <div class="fang2">
      <router-link to="./About"  style="color:white;text-decoration: none;">动态</router-link>
      </div>
      <div class="fang3">
      <router-link to="/Zuixin"  style="color:white;text-decoration: none;">最新评论</router-link>
      </div>
      <div class="fang4">
      <router-link to="/Remen"  style="color:white;text-decoration: none;">热门</router-link>
      </div>
    </div>
    <router-view/>

    <div class="you">
      <div class="t1">
        <img src="../../assets/swl/222.png" style="width:25px;height:25px;margin-top:10px;">
        <p>年度故事VIP</p>
      </div>
      <div class="t2">
        <img src="../../assets/swl/333.png" style="width:25px;height:25px;margin-top:10px;">
        <p>简书员工</p>
      </div>
      <div class="fangkuai11">
        <p style="font-size:15px;color:#969696;">个人介绍</p>
        <p style="font-size:15px;color:black;">简书上的好故事，我！承！包！了！</p>
        <p style="font-size:15px;color:black;">本账号是帮助简书故事获得更多人喜欢的账号，如果您对简书故事曝光策略有任何好的简易，欢迎与我们简信取得联系~</p>
        <p style="font-size:15px;color:black;">欢迎来勾搭茶点君</p>
      </div>
      <div class="zhuanti">
        <p style="font-size:15px;color:#969696;">他创建的主题 ：</p>
        <ul class="ti">
          <a href="#"><li>茶点有毒</li></a>
          <a href="#"><li>向茶点故事投稿</li></a>
          <a href="#"><li>非虚构故事</li></a>
          <a href="#"><li>故事VIP精选书单</li></a>
          <a href="#"><li>故事VIP助力活动</li></a>
          <a href="#"><li>VICE Story Hub</li></a>
          <a href="#"><li>付费短篇故事</li></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>

.daohang{
				width: 100%;
				height: 80px;
				border: 1px solid red;
				margin-bottom: 1%;
			}
    .kuai1{
				width: 45%;
				height: 80px;
				border: 0px solid red;
				margin-left: 15%;
				margin-bottom: 20px;
        border: 0px solid red;
			}
      .main-top{
				width: 80px;
				height: 80px;
				float: left;
			}
      .title{
				padding: 5px 0 0 100px;
			}
			.name{
				display: inline;
				font-size: 21px;
				font-weight: 700;
				vertical-align: middle;
				
			}
      .info{
				margin-top: 5px;
				padding-left: 20px;
				font-size: 14px;
				display:inline-block;
				display: flex;
        list-style: none;
			}
			.meta-block{
				font-size: 12px;
				margin:0 7px 6px 0;
				padding: 0 7px 0 0;
				border-right: 1px solid #f0f0f0;
        
			}
      .meta-block a{
        color: #969696;
        text-decoration: none;
        
      }
      .meta-block li{
        color: black;
        font-size: 14px;
        list-style: none;
      }
      .guanz{
        width: 100px;
        height: 40px;
        border-radius: 20px;
				margin-left: 25px;
				background-color:#00EC00 ;
				color: white;
				margin-top: -18px;
				border: 1px solid #00ec00;
        font-size: 15px;
      }
      .jianxin{
				border-radius: 20px;
				margin-left: 25px;
				font-size: 15px;
				color: #00EC00;
				border: 1px solid #00ec00;
				background-color: white;
				margin-top: -18px;
			}
      .jianxin:hover{
				background-color:#00BB00 ;
				color: white;
			}
			.guanz:hover{
				background-color: #00bb00;
			}
   #nav{
        margin-left: 15%;
        width: 45%;
        height: 30px;
        font-size: 20px;
        text-decoration: none;
        text-align: center;
        display: flex;

      }
    .fang1{
        width: 20%;
        height: 30px;
        background-color:#313030;
        text-align: center;
        letter-spacing: 8px;
        border-radius: 5px;
      }
      .fang1:hover{
        background-color: #313030;
      }
    .fang2{
        width: 20%;
        height: 30px;
        background-color:darkgrey;
        text-align: center;
        letter-spacing: 8px;
        border-radius: 5px;
        margin-left: 50px;
      }
      .fang2:hover{
        background-color: #313030;
      }
    .fang3{
        width: 20%;
        height: 30px;
        background-color:darkgrey;
        text-align: center;
        letter-spacing: 4px;
        border-radius: 5px;
        margin-left: 50px;
      }
      .fang3:hover{
        background-color: #313030;
      }
    .fang4{
        width: 20%;
        height: 30px;
        background-color:darkgrey;
        text-align: center;
        letter-spacing: 8px;
        border-radius: 5px;
        margin-left: 50px;
      }
      .fang4:hover{
        background-color: #313030;
      }
    .you{
        width: 25%;
        height: 700px;
        float:right;
        margin-top: -850px;
        margin-right: 200px;
      }
      .t1{
        width: 100%;
        height: 40px;
      }
      .t1 p{
        font-size: 16px;
        display: inline;
        margin-left: 10px;
      }
      .t2{
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #f0f0f0;
      }
      .t2 p{
        font-size: 16px;
        display: inline;
        margin-left: 10px;
      }
      .fangkuai11{
        width: 100%;
        height: 200px;
        border-bottom: 1px solid #f0f0f0;

      }
      .zhuanti{
        width: 100%;
        height: 400px;
      }
      .t11{
        width: 100%;
        height: 50px;
      }
      .ti li{
        color:black;
        text-decoration: none; 
        font-weight: 600;
        margin-bottom: 10px;
      }
      .ti a{
        text-decoration: none;
      }
</style>
