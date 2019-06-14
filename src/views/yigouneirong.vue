<template>
    <div class="layui-row vv">
        <!-- <router-link to="/shoucang">12312313</router-link> -->
        <toubu />
        <div class="layui-col-md12 qq" style="margin-top:80px">
            <div class="bb">
                <p><img src="../assets/ygnr.png" alt=""></p>
            </div>
            <div class="layui-col-md4 layui-col-md-offset4 cc">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <!-- <el-tab-pane label="文章"  name="first" style="color:#969696;"><img src="../assets/jiangzhang.png" alt="">&nbsp;文章</el-tab-pane>
                        <el-tab-pane label="连载" name="second" style="color:#969696;"><img src="../assets/huomiao.png" alt="">&nbsp;连载</el-tab-pane> -->
                        <el-tabs type="border-card">
                            <el-tab-pane>
                            <!-- <div style="border-bottom:1px solid #969696; width:100%; margin-bottom:10px; margin-top:-15px;"></div> -->
                                <span slot="label"><i><img src="../assets/jiangzhang.png" alt=""></i> 文章</span>
                                这是文章页面
                            </el-tab-pane>
                            
                            <el-tab-pane>
                                <!-- <div style="border-bottom:1px solid #969696; width:100%; margin-bottom:10px; margin-top:-15px;"></div> -->
                                <span slot="label"><i><img  src="../assets/huomiao.png" alt=""></i> 连载</span>
                                这是连载页面
                            </el-tab-pane>
                        </el-tabs>
                    </el-tabs>    
                </div> 
            </div>
        </div>
</template>


<script>
import header from '../components/header/header'  
export default {
    components:{
        'toubu':header,
    },
    name: 'vv',
    data() {
      return {
        activeName: 'first'
      };
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .vv .qq{
        height: 105px;
        margin-top: 40px;
        /* border: 1px solid red; */
    }
    .vv .bb{
        height: 100px;
        /* border: 1px solid red; */
    }
    .vv .bb p{
        text-align: center;
    }
    .vv .bb img{
        width: 638px;
        height: 105px;
        margin: 0 auto;
    }
    .vv .cc{
        height: auto;
        margin-top: 20px;
        width: 640px;
        margin: 0 auto;
        /* border: 1px solid red; */
    }
    .vv .cc img{
        width: 15px;
        height: 15px;
    }
    .vv .el-tabs__nav-scroll{
        background: white;
        margin-top: -10px;
        border-bottom: 1px solid #f0f0f0;
    }
    .vv .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color: #646464;
    font-weight: 900;
    background-color: #FFF;
    border-right-color: white;
    border-left-color: white;
    }
    .vv .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
        color: #646464;
    }
    .vv .el-tabs--border-card{
        border: 0;
    }
    .vv #tab-0:hover{
        border-bottom: 3px solid #969696;
    }
    .vv #tab-1:hover{
        border-bottom: 3px solid #969696;
    }
    /* .vv #tab-0{
        margin-left: 15px;
    } */
</style>
