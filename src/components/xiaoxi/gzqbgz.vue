<template>
<div>
  <el-row>
   <el-col :span="8" :gutter="200">
    <div class="gzliebiao">
        <el-row>
            <el-col :span="8">全部关注<i class="el-icon-caret-bottom"></i></el-col>
            <el-col :span="8">&nbsp;</el-col>
            <a style="color:black" href=""><el-col :span="8"><i class="el-icon-s-custom"></i>添加关注</el-col></a>
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
    


    <div class="daohang11">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="" name="first">
        <span slot="label">全部推荐</span>
        
        <div class="right_txt">
        <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>

        <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>
       <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>
    </div>

    </el-tab-pane>
    <el-tab-pane label="" name="second">
         <span slot="label"><i class="el-icon-user-solid"></i> 推荐作者</span>
         <div class="right_txt">
       <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>

       <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>
        <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="热门" name="third">
        <span slot="label"><i class="el-icon-menu"></i> 推荐专题</span>
        <div class="right_txt">
       <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>

        <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
             <el-divider></el-divider>
        </div>
       <div class="qbgz-txt">
            <el-row :gutter="20">
                <el-col :span="3"><img src="../../assets/mutong/img6.png" alt="" width="52px;" style="border-radius:26px;float:left;margin:0 auto"></el-col>
                 <el-col :span="14">
                      <a href="" style="font-size:15px;text-decoration:none;color:black;font-weight:bold;">真念一思</a>
                      <p>善良乐观、率真开朗、爱玩爱笑、自信自在</p>
                      <p style="margin-top:-7px"><a href="" style="color:skyblue;text-decoration:none;">七兮岑</a>关注了该作者</p>
                      <!-- <p><i class="el-icon-order"></i>可爱又可怜的小流浪猫</p> -->
                 </el-col >
                <el-col :span="5">
                    <div class="button1234"><el-button size="medium" type="success" round>+关注</el-button></div>
                </el-col>
            </el-row>
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
name: "gzqbgz",
data() {
      return {
        activeName: 'first'
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
.qbgz-txt p{
      margin-top: 20px;
      font-size: 12px;
      color: #999999;
      float:left;

}
.qbgz-txt a{

      float:left;
      
}
/* .daohang11{
    width: 40%;
} */
</style>
