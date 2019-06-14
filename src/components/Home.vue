<template>
  <div class="box">
		<div><toubu /></div>
		<div class="content">
			<div class="con_left"><index_l /></div>
			<div class="con_right"><indexR /></div>
		</div>
		<footer>
			<dibu />
		</footer>
		</div>
</template>

<script>
	import index_r from './index/index_r'  
	import header from './header/header'  
	import content from './index/content'
	import footer from './index/footer'
	import indexR from './index/indexR'
	export default {
	  components:{
	    'indexR':indexR,
		'toubu':header,
		'index_l':content,
		'dibu':footer
	  }
	}
</script>

<style scoped>
.content{
	width: 70%;
	margin: 0 auto;
	margin-top: 80px;
	display: flex;
	height: auto;
	justify-content: space-between;
}
.con_left{
	width: 70%;
	margin: 0;
}
footer{
	width: 70%;
	margin: 80px auto;
}
</style>
