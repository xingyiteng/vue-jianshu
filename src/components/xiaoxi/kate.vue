<template>
<div>
  <el-row>
   <el-col :span="8" :gutter="200">
    <div class="gzliebiao">
        <el-row>
            <el-col :span="8">全部关注<i class="el-icon-caret-bottom"></i></el-col>
            <el-col :span="8">&nbsp;</el-col>
             <router-link to="/gzqbgz"><a style="color:black" href="../gzqbgz.vue"><el-col :span="8"><i class="el-icon-s-custom"></i>添加关注</el-col></a></router-link>
        </el-row>
            <el-divider></el-divider>
        <router-link to="/jianyouquan"><div>
            <el-row>
                <el-col :span="6"><img src="../../assets/mutong/img1.png" style="" alt="" width="40px;"></el-col>
                <el-col :span="18"><span class="gz-user">简友圈</span></el-col>
            </el-row>
        </div></router-link>
        
        <router-link to="/gzliebiao"><div>
            <el-row>
                <el-col :span="6"><img src="../../assets/mutong/img2.png" style="border-radius:20px;" alt="" width="40px;"></el-col>
                <el-col :span="18"><span class="gz-user">菅田猎</span></el-col>
            </el-row>
        </div></router-link>
        <router-link to="/qiqiqi"><div>
            <el-row>
                <el-col :span="6"><img src="../../assets/mutong/img4.png" style="border-radius:20px;" alt="" width="40px;"></el-col>
                <el-col :span="18"><span class="gz-user">七兮岑</span></el-col>
            </el-row>
        </div></router-link>
        <router-link to="/kate"><div>
            <el-row>
                <el-col :span="6"><img src="../../assets/mutong/img5.png" style="border-radius:20px;" alt="" width="40px;"></el-col>
                <el-col :span="18"><span class="gz-user">飞扬卡特</span></el-col>
            </el-row>
        </div></router-link>
        <router-link to="/gzdown"><div>
            <el-row>
                <el-col :span="6"><img src="../../assets/mutong/img1.png" style="" alt="" width="40px;"></el-col>
                <el-col :span="18"><span class="gz-user">简友圈</span></el-col>
            </el-row>
        </div></router-link> 
    </div>
   </el-col>
<el-col :span="1">.</el-col>

<el-col :span="14">
    <div class="right-asd">
    <div class="gz-right" >
        <el-row :gutter="20" class="gzbuju" style="width:70%" align="center">
            <el-col :span="3"><div class="user123"><img src="../../assets/mutong/img5.png" alt=""></div></el-col>

            <el-col :span="10">
                <div class="name123"><p>飞翔卡特<i class="el-icon-male"></i></p></div>
                <div class="name111"><p>写了1265542字，获得了1636个喜欢</p></div>
            </el-col>

            <el-col :span="7">
                <div class="button1234"><el-button size="medium" type="success" round>发简信</el-button><el-button size="medium" type="success" round>个人主页</el-button></div>
            </el-col>
        </el-row>
    </div>


    <div class="daohang11">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="" name="first">
        <span slot="label"><i class="el-icon-s-order"></i>最新收录</span>
        
        <div class="right_txt">
        <div class="right_txt1">
            <a href="">逝水长东 第二章 旧事（五）</a>
            <p>孙振英见那剑直刺向自己的双目，心下便起了争胜之心:自己也是浸淫剑道多年，他不相信自己会比这看起来<br/>如此臃肿的胖子差。那身子向后一仰，身子...</p>
            <i class="el-icon-view"></i><span>12&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>0&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>

        <div class="right_txt1">
            <a href="">你儿子是小偷</a>
            <p>韩文庆最近就差被董连芳戳脊梁骨了。董连芳每次碰到韩文庆，念叨：“文庆，我听人说，你儿子是小偷。”<br/> 董连芳算韩文庆街坊，董连芳家住牛角巷...</p>
            <i class="el-icon-view"></i><span>112&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
        <div class="right_txt1">
            <a href="">逝水长东 第二章 旧事（四）</a>
            <p>方世雄不知道自己无意间已堵了斜鲁的路，不过此时他的瞳孔却倏地一缩。他忽然发现，那胖子手上虽然慌<br/>乱，但那脚步起落之间却甚是轻巧，这不应该...</p>
            <i class="el-icon-view"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>10&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
    </div>

    </el-tab-pane>
    <el-tab-pane label="" name="second">
         <span slot="label"><i class="el-icon-copy-document"></i> 最新关注</span>
         <div class="right_txt">
        <div class="right_txt1">
            <a href="">黄鳝</a>
            <p>在小城的东南面，有一片乱坟岗，那里的树很密，密到什么程度呢？夏天正午毒辣的阳光都透不进来，一片<br/>阴深深的，若是胆子足够大，那倒是个纳凉的...</p>
            <i class="el-icon-view"></i><span>12&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>0&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>

        <div class="right_txt1">
            <a href="">你儿子是小偷</a>
            <p>韩文庆最近就差被董连芳戳脊梁骨了。董连芳每次碰到韩文庆，念叨：“文庆，我听人说，你儿子是小偷。”<br/> 董连芳算韩文庆街坊，董连芳家住牛角巷...</p>
            <i class="el-icon-view"></i><span>112&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
        <div class="right_txt1">
            <a href="">逝水长东 第二章 旧事（四）</a>
            <p>方世雄不知道自己无意间已堵了斜鲁的路，不过此时他的瞳孔却倏地一缩。他忽然发现，那胖子手上虽然慌<br/>乱，但那脚步起落之间却甚是轻巧，这不应该...</p>
            <i class="el-icon-view"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>10&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="热门" name="third">
        <span slot="label"><i class="el-icon-s-flag"></i> 热门</span>
        <div class="right_txt">
        <div class="right_txt1">
            <a href="">逝水长东 第二章 旧事（五）</a>
            <p>孙振英见那剑直刺向自己的双目，心下便起了争胜之心:自己也是浸淫剑道多年，他不相信自己会比这看起来<br/>如此臃肿的胖子差。那身子向后一仰，身子...</p>
            <i class="el-icon-view"></i><span>12&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>0&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>

        <div class="right_txt1">
            <a href="">你儿子是小偷</a>
            <p>韩文庆最近就差被董连芳戳脊梁骨了。董连芳每次碰到韩文庆，念叨：“文庆，我听人说，你儿子是小偷。”<br/> 董连芳算韩文庆街坊，董连芳家住牛角巷...</p>
            <i class="el-icon-view"></i><span>112&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
        <div class="right_txt1">
            <a href="">逝水长东 第二章 旧事（四）</a>
            <p>方世雄不知道自己无意间已堵了斜鲁的路，不过此时他的瞳孔却倏地一缩。他忽然发现，那胖子手上虽然慌<br/>乱，但那脚步起落之间却甚是轻巧，这不应该...</p>
            <i class="el-icon-view"></i><span>2&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-chat-square"></i><span>10&nbsp;&nbsp;&nbsp;</span>
            <i class="el-icon-star-off"></i><span>5</span>
             <el-divider></el-divider>
        </div>
    </div>
    </el-tab-pane>
  </el-tabs>

  <router-view></router-view>
</div>
</div>
</el-col>
 </el-row>
</div>
 
</template>

<script>
export default {
name: "kate",
data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
.gzliebiao{
    width: 40%;
    margin-left: 400px;
}
.gz-user{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    color: #000;
    
}



.user123 img{
   
    width: 80px;
    border-radius: 40px;

}
/* .gzbuju{
    width: 40%;
} */
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
.button1234{
    float: left;
}



.right_txt{
    margin-top: 10px;
}
.right_txt1{
    float: left;
    text-align: left;
    width: 100%;
}
.right_txt1 a{
  
    font-weight:bold;
    color: #000;
    text-decoration:none;
}
.right_txt1 p{
      font-size: 13px;
      color: #999999;
}
.right_txt1 span{
    font-size: 12px;
    color: #b4b4b4;
}
.right-asd{
    width: 100%;
}
.daohang11{
    width: 60%;
} 
</style>
