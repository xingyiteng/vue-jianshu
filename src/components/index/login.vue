<template>
	 <div class="box">
		<div class="logo">
			<router-link to="/"><img src="../../assets/logo1.png" alt=""></router-link>
		</div>
		<div class="login">
				
			<div class="login_top">
				<router-link to="/Login">登录</router-link>
				<span>·</span>
				<router-link to="/zhuce">注册</router-link>
			</div>
				
			<div class="login_main">
					<form action="" method="post">
						<i class="el-icon-user-solid yonghu"></i><input type="text" name="" id="input" placeholder="手机号或邮箱" />
						<i class="el-icon-lock mima"></i><input type="password" name="" id="input2" placeholder="密码" />
						<div class="jzw">
							<input type="checkbox" name="" id="checkbox" value="" />
							<span>记住我</span>
						</div>
						<div class="wt">
							<a href="#">登录遇到的问题？</a>
						</div>
						<input type="submit" name="" id="submit" value="登录" />
					</form>
			</div>
				
			<div class="login_sj">
					<span id="hx"></span><p>社交账号登录</p><span id="hx"></span>
					<div id="qt">
						<div id="tb">
							<a href=""><img src="../../assets/weibo.png" ></a>
							<a href=""><img src="../../assets/weixin.png" ></a>
							<a href=""><img src="../../assets/QQ.png" ></a>
						</div>
						<div id=""><a href="">其他</a></div>
					</div>
				</div>
		</div>
	</div> 
</template>

<script>
	export default {
	  name: 'login',
	};
</script>

<style scoped>
	.box{
		width: 100%;
		height: 750px;
		background: #f1f1f1;
	}
	.box .logo{
		position: absolute;
		top: 56px;
	}
	.box .logo img{
		float: left;
		width: 100px;
		margin-left: 50px;
	}
	.box .login{
		width: 400px;
		height: 500px;
		position: relative;
		margin:0 auto;
		top: 100px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
	}
	.box .login .login_top{
		padding-top: 50px;
		text-align: center;
	}
	.box .login .login_top a,.box .login .login_top span{
		color: #969696;
		font-size: 18px;
		text-decoration: none;
	}
	.box .login .login_top span{
		padding: 0 20px 0 20px;
	}
	.box .login .login_top a:nth-child(1){
		display: inline-block;
		height: 30px;
		font-weight: 700;
		color: #ea6f5a;
		border-bottom: 2px solid #ea6f5a;
	}
	.box .login .login_top span{
		font-weight: 700;
	}
	.box .login .login_main{
		margin: 0 auto;
		margin-top: 40px;
	}
	.box .login .login_main form{
		width: 300px;
		margin: 0 auto;
		position: relative;
	}
	.box .login .login_main form .yonghu{
		position: absolute;
		left: 6px;
		top: 15px;
		font-size: 1.25rem;
		color:#969696;
	}
	.box .login .login_main form .mima{
		position: absolute;
		top: 65px;
		left: 6px;
		font-size: 1.25rem;
		color:#969696;
	}
	.box .login .login_main form #input{
		width: 270px;
		height: 50px;
		display: block;
		margin: 0 auto;
	  border: 1px solid #c8c8c8;
	  border-radius: 4px 4px 0 0;
		border-bottom: 0px solid;
	  background-color: hsla(0,0%,71%,.1);
		outline: none;
		color: #969696;
		font-size: 14px;
		padding-left: 30px;
	}
	.box .login .login_main form #input2{
		width: 270px;
		height: 50px;
		display: block;
		margin: 0 auto;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
		outline: none;
		color: #969696;
		font-size: 14px;
		padding-left: 30px;
	}
	.jzw{
		width: 70px;
		height: 24px;
		position: relative;
		display: inline-block;
		margin-top: 15px;
	}
	.jzw #checkbox{
		position: absolute;
		top: 5px;
		width: 15px;
		height: 15px;
		display: inline;
	}
	.jzw span{
			margin-left: 17px;
			font-size: 15px;
			color: #969696;
	}
	.wt{
		float: right;
		margin-top: 14px;
	}
	.wt a{
		text-decoration: none;
		font-size: 15px;
		color: #969696;
	}
	#submit{
		margin-top: 10px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
	}
	.login_sj{
		width: 300px;
		margin: 0 auto;
		position: relative;
		text-align: center;
		margin-top: 40px;
	}
	.login_sj p{
		display: inline-block;
    font-size: 12px;
		top: 8px;
		left: 40%;
		position: absolute;
    color: #b5b5b5;
	}
	#hx{
		display: inline-block;
		margin: 0 40px 0 50px;
		width: 60px;
		height: 0.5px;
		background: #b5b5b5;
	}
	#qt{
		width: 200px;
		margin: 0 auto;
		height: 34px;
		line-height: 30px;
		position: relative;
		margin-top: 20px;
	}
	#qt a{
		text-decoration: none;
		color: #969696;
		float: right;
	}
	.login_sj #qt img{
		width: 35px;
		margin-left: 14px;
		height: 30px;
	}
	#tb{
		float: left;
	}
</style>

