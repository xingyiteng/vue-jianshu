<template>
    <div class="box">

                                                <!--------- 左边 --------->
        <div class="con_left">
            <div class="con_left_top">
                <router-link to="/">回首页</router-link>
            </div>
            <div class="con_left_cen">
                <div style="width:84%;margin: 0 auto;">
                    <div class="xinjian">
                		<i class="el-icon-plus" style="font-weight: bold;color:#fff;cursor: pointer;"></i>
                    	<h1  @click="show2 = true" style="margin-bottom: 10px;">新建文集</h1>
                		<transition name="el-zoom-in-top">
                			<div v-show="show2">
                				<input  type="text" name="" id="text" placeholder="请输入文件名..." />
                				<input type="submit" name="" id="submit" value="提交" />
                				<button type="button" id="btn" @click="show2 = false">取消</button>
                			</div>	
                		</transition>
                    </div>
                </div>
                <div class="xj">
                    <router-link to="/xiewenzhang">日记本</router-link>
                    <i class="el-icon-s-tools tb1" style="position: absolute;top:15px;right:30px;cursor: pointer;"></i>
                    <router-link to="/suibi">随笔</router-link>
                    <el-dropdown trigger="click" style="position: absolute;top:55px;right:30px;cursor: pointer;color:#fff;font-size:16px">
						<span class="el-dropdown-link">
							<i class="el-icon-s-tools tb2" ></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="el-icon-edit">修改文集</el-dropdown-item>
							<el-dropdown-item icon="el-icon-delete">删除文集</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
                </div>
            </div>
            <div class="con_left_dibu">
                <div><i class="el-icon-s-unfold" style="color: #989898;cursor: pointer;padding-right:2px"></i><a>设置</a></div>
                <div><span>遇到问题?</span></div>
            </div>
        </div>


                                                 <!--------- 中间 --------->

        <div class="con_cen">
            <div class="xjwz">
                <i class="el-icon-circle-plus"></i><h1>新建文章</h1>
            </div>

            <div class="wz_list">
                <div class="wz_first">
                    <i class="el-icon-document"></i>
                    <span>字数:{{txtVal = content.length}}</span>
                    <div style="margin-left:20px">
                        <p>{{msg}}</p>
                        <h1 v-html="content">{{content}}</h1>
                    </div>
                    <i class="el-icon-s-tools tb" style="position: absolute;top:0px;font-size:18px;right:30px;"></i>
                    
                </div>
            </div>

            <div class="xfxj">
                <i class="el-icon-plus" style="font-weight: bold;color:#999;cursor: pointer;"></i>
                <span>在下方新建文章</span>
            </div>
        </div>


                                                <!--------- 右边 --------->
        <div class="con_right">
            <div class="con_right_top">
                <input v-model="msg" type="text" value="2019-06-07"><span>已保存</span>
            </div>
            <quill-editor 
                v-model="content"  
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
            </quill-editor>
        </div>
    </div>
</template>

<script>
// import bianjiqi from '../components/xiewenzhang/bianjiqi.vue'
export default {
    name:'xiewenzhang',
    // components:{
    //     bianjiqi
    // },

    data() {
        return {
            msg:'2019-06-08',
            content:'',
            txtVal:0,
            cc:'',
			show2:false
        }
},
        methods: {
                descInput(){
                    this.txtVal = this.content.length;
                },
                }
}
</script>

<style scoped>
    .box{
        display: flex;
        width: 100%;
    }

                                                /* 左边 */
    .con_left{
        width: 20%;
        height: 100%;
        position: absolute;
        display: inline-block;
        overflow: hidden;
        background: #404040;
    }
    .con_left_top{
        margin-top: 40px;
    }
    .con_left_top a{
        display: block;
        width: 90%;
        margin: 0 auto;
        border-radius: 30px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #dd7860;
        border:1px solid #dd7860;
    }
    .con_left_cen{
        width:100%;
        height: 79%;
        margin: 0 auto;
        margin-top: 30px;
    }
    .con_left_cen h1{
        font-size: 14px;
        display: inline-block;
        color: #fff;
        font-weight: lighter;
        cursor: pointer;
    }
	.xinjian{
		width: 100%;
		margin: 0 auto;
	}
	.xinjian #text{
		width: 100%;
		height: 35px;
		color: #ccc;
		background-color: #595959;
		border: 1px solid #333;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 20px;
		outline: none;
		text-indent:5px;
	}
	.xinjian #submit{
		position: relative;
		display: inline-block;
		text-align: center;
		color: #42c02e;
	    border: 1px solid #42c02e;
		width: 57px;
		height: 30px;
		line-height: 20px;
		padding: 4px 12px;
		outline: none;
		border-radius: 15px;
		font-size: 14px;
		font-weight: 500;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-color: #404040;
		background-image: none;
		white-space: nowrap;
		margin-left: 10px;
	}
	#btn{
		position: relative;
		display: inline-block;
		text-align: center;
		height: 30px;
		line-height: 20px;
		padding: 4px 12px;
		border: 1px solid transparent;
		border-radius: 15px;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		background-image: none;
		white-space: nowrap;
		background: #404040;
		outline: none;
		color:#999;
		margin-left: 5px;
	}
    .xj{
        width: 100%;
        height: 90%;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 5px;
        position: relative;
    }
    .xj a{
        display: block;
        width: 100%;
        height: 40px;
        margin: 0 auto;
        color: #fff;
        padding-left: 16px;
        cursor: pointer;
    }
    /* .xj a:nth-child(1){
        width: 100%;
        height: 40px;
        margin: 0 auto;
        padding-left: 16px;
        cursor: pointer;
        border-left: 2px solid #dd7860;
        background: #666666;
    } */
    .xj a.active{
        border-left: 2px solid #dd7860;
        background: #666666;
    }
    .tb1{
        display: none;
    }
    .tb2{
        display: block;
    }
    /* .xj a.active .tb{
        display: block;
    }
    .xj a.active .tb2{
        display: block;
    } */
    .con_left_dibu{
        width: 90%;
        height: 30px;
        display: flex;
        margin: 0 auto;
        line-height: 30px;
        font-size: 14px;
        justify-content: space-between;
    }
    .con_left_dibu span,.con_left_dibu a{
        color: #989898;
        cursor: pointer;
    }
                                        /* 中间 */
    .con_cen{
        margin-left: 20%;
        width: 25%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        overflow-y:scroll;
    }
    .con_cen .xjwz{
        width: 100%;
        height: 60px;
    }
    .con_cen .xjwz i{
        margin-left: 20px;
        font-size: 18px;
        vertical-align: middle;
        cursor: pointer;
    }
    .con_cen .xjwz h1{
        font-size: 15px;
        font-weight: lighter;
        line-height: px;
        margin-left: 10px;
        line-height: 60px;
        cursor: pointer;
        display: inline-block;
    }
    .wz_list{
        width: 100%;
        height: auto;
    }
    .wz_first{
        width: 100%;
        height: 90px;
        background: #e6e6e6;
        display: flex;
        cursor: pointer;
        position: relative;
        border-left: 5px solid #dd7860;
    }
    .wz_first i{
        display: block;
        font-size: 30px;
        color: #969595;
        margin-left: 18px;
        line-height: 90px;
    }
    .wz_first span{
        position: absolute;
        bottom: 2px;
        left: 7px;
        font-size: 9px;
        color: #595959;
    }   
    .wz_first p{
        margin-top: 16px;
        font-size: 18px;
        color: #595959;
    }
    .wz_first h1{
        width: 100px;
        font-size: 12px;
        margin-top: 10px;
        font-weight:400;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
        color: #595959;
    }
    .xfxj{
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin-left: 20px;
        color: #999;
    }
    .xfxj i,.xfxj span{
        cursor: pointer;
    }

                                        /* 右边 */
    .con_right{
        margin-left: 45%;
        width: 55%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }
    .con_right .con_right_top{
        width: 100%;
        height: 60px;
        position: relative;
    }
    .con_right .con_right_top input{
        margin-left: 30px;
        font-size: 30px;
        font-weight: 400;
        width: 100%;
        line-height: 60px;
        color: #595959;
        border: 0; 
        outline: none;
    }
    .con_right .con_right_top span{
        position: absolute;
        right: 5px;
        top: 3px;
        font-size: 14px;
        color: #999;
    }
</style>
