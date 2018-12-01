<template>
  <div id="app">
    <div class="topContent">
      <TopNav></TopNav>
    </div>
    <router-view/>
    <div class="bottomContent">
      <BottomNav></BottomNav>
    </div>
  </div>
</template>
<script>
import TopNav from './components/topNav/TopNav'
import BottomNav from './components/bottomNav/BottomNav'
import {rem} from '../static/js/rem'
export default {
  name: 'App',
  components:{
    TopNav,
    BottomNav
  },
  mounted:function(){
  	rem();
  }
}
</script>
<style>
html,body,#app{
  height: 100%;
  /*position: relative;*/
}
.topContent{
  background-color: rgb(255,255,255);
  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.bottomContent{
  position: fixed;
  left:0;
  bottom:.6rem;
  width: 100%;
  z-index: 101;
}
</style>
