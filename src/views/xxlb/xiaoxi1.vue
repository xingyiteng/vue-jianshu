<template>
<div>
    <div class="liebiao">
         <router-link to="/"><div class="liebiao-div"><i class="el-icon-chat-square icons"></i><a>评论</a></div></router-link>
        <router-link to="/xiaoxi1"><a href="" style="xiahuaxian"><div id="556" class="liebiao-div"><i class="el-icon-message icons"></i><a>简信</a></div></a></router-link>
        <router-link to="/xiaoxi2"><a href="" style="xiahuaxian"><div class="liebiao-div"><i class="el-icon-star-off icons"></i><a>投稿请求</a></div></a></router-link>
        <router-link to="/xiaoxi3"><a href="" style="xiahuaxian"><div class="liebiao-div"><i class="el-icon-upload2 icons"></i><a>喜欢和赞</a></div></a></router-link>
        <router-link to="/xiaoxi4"><a href="" style="xiahuaxian"><div class="liebiao-div"><i class="el-icon-user icons"></i><a>关注</a></div></a></router-link>
        <router-link to="/xiaoxi1"><a href="" style="xiahuaxian"><div class="liebiao-div"><i class="el-icon-food icons"></i><a>赞赏和支持</a></div></a></router-link>
        <router-link to="/xiaoxi1"><a href="" style="xiahuaxian"><div class="liebiao-div"><i class="el-icon-more icons"></i><a>其他支持</a></div></a></router-link> 
  </div> 
    <div class="right-vue">
        <div class="title1" ><span>全部简信</span></div>
        <div class="fenge"><hr/></div>
        <div>
            <div class="touxiang">
                <img src="../../assets/mutong/img2.png" width="60px">               
            </div>
            <div class="user-txt"><span class="user-txt1">简宝玉</span></div>
            <div class="user-txt2"><span>2017.12.16&nbsp;10:40∨</span></div>
            <div class="user-txt3"><span>&emsp;&emsp;欢迎加入丰富多彩的原创社区——简书。如果有任何疑问（如何投稿，专题主编，签约作者，简...</span></div>
        </div>
        <div>
            
        </div> 
        
    </div>
</div>
</template>
<style scoped>
.title1{
    width:fit-content;
    
    font-weight:bold;
    color: black;
  

}
.title1 span{
text-align: left;

}
.fenge{
    margin-top: 30px;
}
.touxiang{
    width:fit-content;
    text-align: left;
    margin-top:30px;
    margin-left: 30px;
    
}
.touxiang img{
    font-size: 50px;
    border-radius: 50px;
    border: 2px solid #adadad;
    text-align: left;
}
.user-txt{
    
     width:fit-content;
     margin-top: -70px;
     margin-left: 130px;
     color: #000;
     font-size: 16px;
     font-weight:bold
}
.user-txt2{
    
    color: #adadad;
     width:fit-content;
     margin-top: -20px;
     margin-left: 740px;
     float:right;
}
.user-txt3{
    width:fit-content;
    font-size: 14px;
    color: #adadad;
    margin-top: 20px;
    margin-left: 100px;
}
.right-vue{
     width: 40%;
  
  /* margin-top: -450px; */
  margin-left:700px;
}
</style>


<script>
export default {
    
}
</script>
