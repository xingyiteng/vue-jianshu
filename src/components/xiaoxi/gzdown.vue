<template>
<div>
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="" name="first">
        <span slot="label"><i class="el-icon-s-order"></i>最新收录</span>
        
        

    </el-tab-pane>
    <el-tab-pane label="" name="second">
         <span slot="label"><i class="el-icon-copy-document"></i> 最新关注</span>
    </el-tab-pane>
    <el-tab-pane label="热门" name="third">
        <span slot="label"><i class="el-icon-s-flag"></i> 热门</span>
    </el-tab-pane>
  </el-tabs>

  <router-view></router-view>
</div>
</template>


<style>

</style>


<script>
 export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
