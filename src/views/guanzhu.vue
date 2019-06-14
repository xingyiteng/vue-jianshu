<template>
    <div class="box_guanzhu">
        <el-container>
            <el-aside style="width:280px;">
                <div class="aside_top"><router-link to="">全部关注</router-link></div>
                <div class="tjgz"><router-link to=""><img src="../assets/guanzhu.png" alt=""><span>添加关注</span></router-link></div>
                <!-- <div style="margin-top:15px;"><img :src="now" style="width: 52px;height: 52px;border: 1px solid #ddd;border-radius: 10%;cursor: pointer;vertical-align:middle;"><span style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;margin-left:20px;cursor: pointer;">{{lx}}</span></div> -->
            </el-aside>
            <el-main style="padding:0;padding-left:40px;">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部推荐" name="first" >
                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" @click="guanzhu(index=1)" :class="{ active: list==1}" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">{{message}}</el-button>
                            </div>
                        </div>

                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item">
                            <div class="qutj_item_left">

                                <div class="qutj_item_left_t">
                                    <i class="el-icon-medal" style="font-size:20px"></i>
                                    <span>简书推荐专题</span>
                                </div>

                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <el-button type="info" round style="width:100%;margin-top:30px;margin-bottom:50px;">阅读更多</el-button>
                        
                    </el-tab-pane>
                    <el-tab-pane label="推荐作者" name="second">
                         <span slot="label"><i class="el-icon-user-solid"></i> 推荐作者</span>
                        
                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>
                    
                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="" style="border-radius: 50px;">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-tickets" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>
                        <el-button type="info" round style="width:100%;margin-top:30px;margin-bottom:50px;">阅读更多</el-button>
                        </el-tab-pane>
                    <el-tab-pane label="推荐专题" name="third">
                         <span slot="label"><i class="el-icon-menu"></i> 推荐专题</span>
                        
                             <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>

                        <div class="qutj_item" style="height:100px">
                            <div class="qutj_item_left">
                                <div class="qutj_item_left_b">
                                    <img src="../assets/guanzhu_list2.png" alt="">
                                    <div class="con">
                                        <router-link to="" style="margin: 0 0 5px;font-size: 15px;font-weight: 700;color: #333;display: block;">旅行·在路上</router-link>
                                        <p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>
                                        <i class="el-icon-menu" style="color: #969696;"></i><span>152.7K篇文章 · 3061.5K人关注</span>
                                    </div>
                                </div>
                            </div>

                            <div class="qutj_item_right">
                                <el-button type="success" round style="width:100%;font-size:16px;font-weight: 400;margin-top:5px">+  关注</el-button>
                            </div>
                        </div>
                        <el-button type="info" round style="width:100%;margin-top:30px;margin-bottom:50px;">阅读更多</el-button>

                        </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeName: 'first',
                list:'',
                message:'+ 关注',
                // now:['../assets/guanzhu.png'],
                // lx:'',
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            guanzhu(index){
                console.log(index);
                this.list=this.index;
                this.message='✔ 已关注';
                this.lx='旅行·在路上';
                this.now=['../assets/guanzhu_list.png'];
            },
        },
    }
</script>

<style lang="css">
    .box_guanzhu{
        width: 60%;
		height:auto;
        margin: 0 auto;
        margin-top: 60px;
        overflow: hidden;
    }
	.box_guanzhu .el-container{
		height: 100%;
	}
    .box_guanzhu aside{
        border-right: 1px solid #f0f0f0;
        color: #333;
    }
    .box_guanzhu aside .aside_top{
        width: 100%;
        margin-bottom: 10px;
    }
    .box_guanzhu aside .aside_top a{
        text-decoration: none;
        font-size: 15px;
        margin-left: 15px;
    }
    .box_guanzhu aside .tjgz{
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #f0f0f0;
    }
	.box_guanzhu aside .tjgz img{
		width: 40px;
		vertical-align: middle;
        margin-left: 20px;
	}
    .box_guanzhu aside .tjgz span{
        margin-left: 10px;
    }
    .box_guanzhu .el-tabs__item{
        font-size: 15px;
        font-weight: 700;
        color: #969696;
    }
    .box_guanzhu .el-tabs__item:hover{
        color: #646464;
    }
    .box_guanzhu .el-tabs__active-bar{
        background-color: #646464;
    }
    .box_guanzhu .is-active{
        color: #646464;
    }
    .box_guanzhu .el-tabs__nav-wrap::after{
        height: 0.5px;
        background-color:#f0f0f0;
    }
    .qutj_item{
        margin-top: 15px;
        margin-bottom: 5px;
        height: 115px;
        display: flex;
        border-bottom: 0.5px solid #f0f0f0;
    }
    .qutj_item .qutj_item_left{
        width: 80%;
        height: 100px;
    }
    .qutj_item .qutj_item_left_t{
        font-size: 12px;
        color: #ec6e56;
    }
    .qutj_item .qutj_item_left_t span{
        margin-left: 5px;
    }
    .qutj_item .qutj_item_left_b{
        width: 100%;
        height: 66px;
        margin-top: 10px;
        display: flex;
    }
    .qutj_item .qutj_item_left_b img{
        width: 52px;
        height: 52px;
        border: 1px solid #ddd;
        border-radius: 10%;
        cursor: pointer;
    }
    .qutj_item .qutj_item_left_b .con{
        margin-left: 15px;
    }
    .qutj_item .qutj_item_left_b .con p{
        margin: 0 0 2px;
        font-size: 12px;
        color: #969696;
        cursor: pointer;
    }
    .qutj_item .qutj_item_left_b .con span{
        font-size: 12px;
        color: #969696;
        cursor: pointer;
    }
    .qutj_item .qutj_item_right {
        width: 20%;
        position: relative;
    }
    .qutj_item .qutj_item_right button.active{
        border: 1px solid hsla(0,0%,59%,.6);
        background: none;
        color:  hsla(0,0%,59%,.6);
    }
</style>