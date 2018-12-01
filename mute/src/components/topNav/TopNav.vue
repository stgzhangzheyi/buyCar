<template>
<div class="topGame">
	<div id="nav" class="nav">
		<div class="navLogin fl" v-show="!isChangeLogin" @click="toCard({name:'user'})">用户</div>
		<div class="navLogin fl" @click="goLogin({name:'login'})" v-show="isChangeLogin">登录
	  </div>
		<div class="navInput fl">
			<input type="" name="" placeholder="搜索品牌或商品" @click="toSearch({name:'search'})">
		</div>
		<div class="navIcon fl">
		<mu-button icon class='buttonIcon'>
	    <mu-icon value="menu"></mu-icon>
	  	</mu-button>
		</div>	
	</div>
	<!-- 商品选择 --> 
	<div class="selects">
	<div class="allShop">	
		<div :class="{active: item.isActive,fl:true}" v-for="(item,index) in shopData" :key="index" @click="change(item.path,item,index)">
		<div class="select">{{item.name}}</div>
		<div :class="{actives:item.isActive,lineSelect:true}"></div>
		</div>
	</div>
	</div>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
	export default {
		name:'TopNav',
		data(){
			return {
				msg:'../../../static/images/c4.jpg',
				value:[]
			}
		},
		computed:{
			...mapState(['shopData','isChangeLogin'])
		},
		methods:{
			toSearch(params){
				this.$router.push(params);
			},
			change(params,item,index){
				this.$router.push(params);
				if(item.isActive){
					return;
				}
				this.value=this.$store.getters.night;
				
		for (var i = 0; i < this.value.length; i++) {
        	if (this.value[i].isActive) {
          this.value[i].isActive = false;
          break;
		}
		}

      item.isActive = true;
			},
			goLogin(params){
				this.$router.push(params)
			},
			toCard(params){
				this.$router.push(params)
			}
		}
	}
</script>
<style scoped>
.topGame{
	font-size: 16px;
}
.nav{
	overflow: hidden;
}
.fl{
	float: left;
}
.navLogin{
	width: 15%;
	height: .7rem;
	line-height: .7rem;
	text-align: center;
	font-size: 14px;
	color: rgba(0,0,0,.6);
}
.navInput{
	width: calc(100% - 15% - 15% - 2px);
	height: .46rem;
	margin-top:calc((.7rem - .46rem - 2px)/2);
	border-radius: 35px 35px;
	border: 1px solid rgba(0,0,0,.1);
	}
.navIcon{
	width:15%;
}
.buttonIcon{
	height: .7rem;
	width: 100%;
	color: rgba(0,0,0,.5);
}
input{
	outline: none;
	border: none;
	padding: 0;
	height: .34rem;
	width: 90%;
	margin-left:calc((100% - 90%)/2); 
	margin-top:calc((.46rem - .34rem)/2);
	font-size: 14px;
	background-color: transparent;
}
.select{
	font-size: 12px;
	width: 1.2rem;
	height:.6rem;
	line-height: .6rem;
	text-align: center;
}
.lineSelect{
	width: 1rem;
	height:3px;
	margin-left: calc((1.2rem - 1rem)/2);
	background-color: rgba(21,121,121,.1); 
}
.allShop{
	width:10.8rem;
	overflow: hidden;
}
.selects{
	width: 100%;
	overflow-x: auto;
}
.active{
	color: rgba(255,0,110,.7);
}
.actives{
	background-color: rgba(255,0,110,.7);
}
</style>