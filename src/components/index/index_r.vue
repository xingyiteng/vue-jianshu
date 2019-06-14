<template>
    <div class="index_r">
        <div class="con">
        <div class="biaoqian">
            <div class="bq">
                <img src="../../assets/bq1.png">
            </div>
            <div class="bq">
                <router-link to="/shoucang"><img src="../../assets/bq2.png"></router-link>
            </div>
            <div class="bq">
                <img src="../../assets/bq3.png">
            </div>
            <div class="bq">
                <img src="../../assets/bq4.png">
            </div>
            <div class="bto">
                <button>
                        <img src="../../assets/erweima.png" alt="" style="width:60px; height:60px; float:left; margin-left:30px;" >
                        <span style="margin-top:10px; font-size:14px;">下载简书手机App<span style="margin-left:10px;">></span></span>
                        <p style="margin-top:10px;  color:#999999;">随时随地发现和创造内容</p>
                </button>
            </div>
            <div class="guanggao">
                <img src="../../assets/guanggao1.jpg" alt="">
            </div>
            <div class="c">
                <p style="float:left; color:#999999; font-size:14px;">推荐作者</p>
                
                <a href="#" style="float:right; color:#999999; font-size:14px; text-decoration:none;">换一批<img src="../../assets/shuaxin.jpg" alt="" style="width:30px; height:30px; margin-top:-5px; float:left;"></a>
            </div>
                    <ul style="margin-top:50px; list-style: none;">
                        <li>
                            <img src="../../assets/1.jpg" alt="" style="border-radius:50%; float:left; width:48px; height:48px;">
                            <a href="#" style="float:right; text-decoration:none; font-size:13px; color:#42c02e;">+关注</a>
                            <a href="#" style="margin-left:10px; text-decoration:none; font-size:13px; color:#333333;">吕晓布</a>
                            <p style="font-size:13px; color:#999999; float:left; margin-top:5px; margin-left:10px;">写了669.4k字<span style="margin:5px;">·</span>21.3k喜欢</p>
                        </li>
                    </ul>
                    <ul style="margin-top:40px; list-style: none;">
                        <li>
                            <img src="../../assets/2.jpeg" alt="" style="border-radius:50%; float:left; width:48px; height:48px;">
                            <a href="#" style="float:right; text-decoration:none; font-size:13px; color:#42c02e;">+关注</a>
                            <a href="#" style="margin-left:10px; text-decoration:none; font-size:13px; color:#333333;">吕晓布</a>
                            <p style="font-size:13px; color:#999999; float:left; margin-top:5px; margin-left:10px;">写了669.4k字<span style="margin:5px;">·</span>21.3k喜欢</p>
                        </li>
                    </ul>
                    <ul style="margin-top:40px; list-style: none;">
                        <li>
                            <img src="../../assets/3.png" alt="" style="border-radius:50%; float:left; width:48px; height:48px;">
                            <a href="#" style="float:right; text-decoration:none; font-size:13px; color:#42c02e;">+关注</a>
                            <a href="#" style="margin-left:10px; text-decoration:none; font-size:13px; color:#333333;">吕晓布</a>
                            <p style="font-size:13px; color:#999999; float:left; margin-top:5px; margin-left:10px;">写了669.4k字<span style="margin:5px;">·</span>21.3k喜欢</p>
                        </li>
                    </ul>
                    <ul style="margin-top:40px; list-style: none;">
                        <li>
                            <img src="../../assets/4.jpg" alt="" style="border-radius:50%; float:left; width:48px; height:48px;">
                            <a href="#" style="float:right; text-decoration:none; font-size:13px; color:#42c02e;">+关注</a>
                            <a href="#" style="margin-left:10px; text-decoration:none; font-size:13px; color:#333333;">吕晓布</a>
                            <p style="font-size:13px; color:#999999; float:left; margin-top:5px; margin-left:10px;">写了669.4k字<span style="margin:5px;">·</span>21.3k喜欢</p>
                        </li>
                    </ul>
                    <ul style="margin-top:40px; list-style: none;">
                        <li>
                            <img src="../../assets/5.png" alt="" style="border-radius:50%; float:left; width:48px; height:48px;">
                            <a href="#" style="float:right; text-decoration:none; font-size:13px; color:#42c02e;">+关注</a>
                            <a href="#" style="margin-left:10px; text-decoration:none; font-size:13px; color:#333333;">吕晓布</a>
                            <p style="font-size:13px; color:#999999; float:left; margin-top:5px; margin-left:10px;">写了669.4k字<span style="margin:5px;">·</span>21.3k喜欢</p>
                        </li>
                    </ul>
            
                <router-link to="/tuijianzuozhe"><button style="width:280px; height:35px; margin-top:10px; outline: none; background:#f7f7f7; color:#787878; border-radius:5%; border: 1px solid #dcdcdc;">查看全部<span style="margin-left:5px;">></span></button></router-link>
                <div class="guanggao">
                    <img src="../../assets/guanggao1.jpg" alt="">
                </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'indexR'
};
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        width: 100%;
        height: 55px;
        border: 1px solid red;
    }
    .index_r{
        width: 100%;
        height: auto;
        /* border: 1px solid rgb(62, 216, 255); */
    }
    .con{
        width: 80%;
        height: auto;
        /* border: 1px solid rgb(9, 255, 0); */
    }
    .biaoqian{
        width: 280px;
        height: auto;
        /* border: 1px solid red; */
    }
    .bq{
        width: 280px;
        height: 50px;
        /* border: 1px solid red; */
    }
    .bq img{
        width: 280px;
        height: 50px;
    }
    .bto{
        width: 280px;
        height: auto;
        margin-top: 5px;
        /* border: 1px solid red; */
    }
    .bto button{
        width: 280px;
        height: 80px;
        outline: none;
        border: 1px solid #f0f0f0;
        background: white;
    }
    .guanggao{
        width: 280px;
        height: 160px;
        margin-top: 20px;
        /* border: 1px solid red; */
    }
    .guanggao img{
        width: 280px;
        height: 160px;
    }
    .c{
        width: 280px;
        height: auto;
        margin-top: 10px;
        /* border: 1px solid red; */
    }
</style>

