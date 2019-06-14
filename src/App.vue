<template>
  <div class="box"> 
	  <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
.content{
	width: 70%;
	margin: 0 auto;
	margin-top: 80px;
	display: flex;
	justify-content: space-between;
}
.con_left{
	width: 70%;
	margin: 0;
}
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "微软雅黑";
}
li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix {
  z-index: 1;
}
</style>
