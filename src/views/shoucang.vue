<template>
    <div class="shoucang">
        <toubu />>
        <div class="h" style="margin-top:60px">
            <div class="h_h">
                <img src="../assets/shuqian.png" alt="">
                <h1 style="margin-top:35px; color:#fff9ec;">收藏的文章</h1>
            </div>
            <div class="h_c" v-show="del">
                <h3>聊聊VueJs<span>&nbsp;</span>组件化编程1</h3>
                <p>这篇文章是同事Awe，vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。前端开发的现状<span>&nbsp;</span>随着互联网设备的宽带和硬件的发展，web...</p>
                <img src="../assets/guanggao1.jpg" alt="" style="float:right; width:240px; height:160px; position: relative; margin-top:-90px;">
                <ul style="margin-top:25px;">
                    <li><span style="font-size:14px; color: #999999;">乖小鬼</span></li>
                    <li><a href="#"><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xiaoxi.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">12</span></a></li>
                    <li><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xin.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">1</span></li>
                    <li class="qqq" ><span><el-button type="text" @click="open"><p style="color: #999999; margin-left:10px;">取消收藏</p></el-button></span></li>
                </ul>
            </div>
             <div class="h_c" v-show="del2">
                <h3>聊聊VueJs<span>&nbsp;</span>组件化编程2</h3>
                <p>这篇文章是同事Awe，vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。前端开发的现状<span>&nbsp;</span>随着互联网设备的宽带和硬件的发展，web...</p>
                <img src="../assets/guanggao1.jpg" alt="" style="float:right; width:240px; height:160px; position: relative; margin-top:-90px;">
                <ul style="margin-top:25px;">
                    <li><span style="font-size:14px; color: #999999;">乖小鬼</span></li>
                    <li><a href="#"><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xiaoxi.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">12</span></a></li>
                    <li><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xin.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">1</span></li>
                    <li class="qqq" ><span><el-button type="text" @click="open2"><p style="color: #999999; margin-left:10px;">取消收藏</p></el-button></span></li>
                </ul>
            </div>
             <div class="h_c" v-show="del3">
                <h3>聊聊VueJs<span>&nbsp;</span>组件化编程3</h3>
                <p>这篇文章是同事Awe，vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。前端开发的现状<span>&nbsp;</span>随着互联网设备的宽带和硬件的发展，web...</p>
                <img src="../assets/guanggao1.jpg" alt="" style="float:right; width:240px; height:160px; position: relative; margin-top:-90px;">
                <ul style="margin-top:25px;">
                    <li><span style="font-size:14px; color: #999999;">乖小鬼</span></li>
                    <li><a href="#"><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xiaoxi.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">12</span></a></li>
                    <li><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xin.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">1</span></li>
                    <li class="qqq" ><span><el-button type="text" @click="open3"><p style="color: #999999; margin-left:10px;">取消收藏</p></el-button></span></li>
                </ul>
            </div>
             <div class="h_c" v-show="del4">
                <h3>聊聊VueJs<span>&nbsp;</span>组件化编程4</h3>
                <p>这篇文章是同事Awe，vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。前端开发的现状<span>&nbsp;</span>随着互联网设备的宽带和硬件的发展，web...</p>
                <img src="../assets/guanggao1.jpg" alt="" style="float:right; width:240px; height:160px; position: relative; margin-top:-90px;">
                <ul style="margin-top:25px;">
                    <li><span style="font-size:14px; color: #999999;">乖小鬼</span></li>
                    <li><a href="#"><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xiaoxi.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">12</span></a></li>
                    <li><span style="font-size:14px; color: #999999; margin-left:10px;"><img src="../assets/xin.png" alt="" style="width:30px; height:30px; margin:-10px 5px;">1</span></li>
                    <li class="qqq" ><span><el-button type="text" @click="open4"><p style="color: #999999; margin-left:10px;">取消收藏</p></el-button></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../components/header/header'  
    export default {
        name:'shoucang',
        data(){
            return{
                del:true,
                del2:true,
                del3:true,
                del4:true
            }
        },
        components:{
            'toubu':header,
        },
        methods: {
            open() {
                this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    // 删除/隐藏当前div
                    this.del=!this.del;
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            },
             open2() {
                this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    // 删除/隐藏当前div
                    this.del2=!this.del2;
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            },
            open3() {
                this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    // 删除/隐藏当前div
                    this.del3=!this.del3;
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            },
            open4() {
                this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    // 删除/隐藏当前div
                    this.del4=!this.del4;
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            }
        }
    };
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .h{
        width: 60%;
        height: auto;
        
        margin: 0 auto;
        margin-top: 20px;
        /* border: 5px solid rgb(0, 242, 250); */
    }
    .h_h{
        width: 100%;
        height: 120px;
        border-radius: 15px;
        background: rgb(255, 129, 129);
        border: 1px solid white;
    }
    .h_h img{
        width: 60px;
        height: 60px;
        float: left;
        margin: 25px 50px;
    }
    .h_c{
        width: 100%;
        height: 180px;
        margin-top: 20px;
        border-bottom: 1px solid #f0f0f0;
    }
    .h_c:hover .qqq{
           opacity: 1;
    }
    .qqq{
       opacity: 0; 
       color: #999999;
    }
    .h_c p{
        width: 70%;
        color: #999999;
        margin-top: 10px;
        line-height: 25px;
    }
    .h_c ul li{
        display: inline;
    }
    a{
        text-decoration:none;
    }
</style>