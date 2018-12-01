<template>
	<div class="middleContent">
	<!-- 轮播 -->
	<div>
	<mu-carousel hide-controls interval="3000" class="bannerChange">
  	<mu-carousel-item v-for="(item,index) in bannerData" :key="index">
    <img :src="item.img" class="bannerImages" />
  	</mu-carousel-item>
	</mu-carousel>
	</div>
	<!-- 商品选择	 -->
	<div class="goodShow">	
	<div class="luckly fl" v-for='(item,index) in smallShopData' :key='index' @click="goSmallShop({name:'smallshop'})">
		<div class="showBuy">
			<img :src="item.img" class="images" />
		</div>
		<div class="showText">{{item.miao}}</div>
	</div>
	</div>
	<!-- 商品展示 -->
	<div class="delFont">
		<img :src="msg" class="imgs"/>
	</div>
	<div class="delFont">
		<img :src="ma" class="imgs"/>
	</div>
	<div class="threeImages">
	<div class="fl mageParent" v-for='(item,index) in imagesAll' :key='index'>
		<img :src="item.img" class="mage">
	</div>
	</div>
	<div class="twoImage">
		<img class="fl twoShop" :src="du"/>
		<img class="fl twoShop" :src="lu"/>
	</div>
	<div class="timeUpdata">
		<div class="timeUpdataText">今日特卖 每天早10点晚8点上新</div>
		<div class="listItem">
			<img :src="tu" class="imgs" />
		</div>
		<div>
			<div class="delFont topValue" v-for="(item,index) in productsData" :key="index" @click="goBuyShop({name:'shopshow',params: {id:item.id}})">
				<img :src="item.img" class="imgs"/>
				<div class="listText">
					<div class="listTextUp">
						<div class="fl buyFastContent">
						<div class="buyFast fl">{{item.name}}</div>
						<div class="buyFastText fl">{{item.mainDescribe}}</div>
						</div>
						<div class="buyFastTime fl">
						<span class="fr">{{item.time}}</span>
					</div>
					</div>
					<div class="listTextDown">
						<img :src="item.icon" class="iconImage">
						<span>{{item.smallName}}</span>
					</div>
				</div>
			</div>
	
		</div>
	</div>
</div>
</template>
<script>
import {mapState} from 'vuex'
	export default {
		name:'OnePage',
		data(){
			return {
				msg:"../../../static/images/shop0.jpg",
				ma:'../../../static/images/shop1.jpg',
				du:'../../../static/images/h1.jpg',
				lu:'../../../static/images/h2.jpg',
				tu:'../../../static/images/list0.jpg'
			}
		},
		computed:{
			...mapState(['bannerData','smallShopData','imagesAll','productsData'])
		},
		methods:{
			goBuyShop(params){
				this.$router.push(params);
				
			},
			goSmallShop(params){
				 // location.reload();
				this.$router.push(params);
			}
		}
	}
</script>
<style scoped>
.middleContent{
	background-size: rgb(255,255,255);
	overflow-y: hidden;
    margin-top: calc(1.3rem + 3px);
    font-size: 16px;
}
.goodShow{
	font-size: 12px;
	overflow: hidden;
}
.luckly{ 
	width:20%;
}
.showBuy{
		margin-left:calc((100% - .8rem)/2);
		margin-top:.18rem;
		width:.8rem;
		height:.8rem;
		border-radius: 60%;
	}
.showText{
	width:100%;
	padding-top: .04rem;
	height: .4rem;
	line-height: .4rem;
	text-align: center;
}
.fl{
		float: left;
	}
.fr{
	float: right;
}
.images{
	height: .8rem;
	width:.8rem;
	border-radius: 60%;
}
.bannerChange{
	height:2.4rem;
}
.bannerImages{
		height:2.4rem;
		width: 100%;
}
.imgs{
	height: auto;
	width: 100%;
}
.threeImages,.twoImage{
	overflow: hidden;
}
.mageParent{
	width: 33.33%;
}
.mage{
	height: auto;
	width: 100%;
}
.delFont{
	font-size: 0;
}
.twoShop{
	width: 50%;
	height: auto;
}
.timeUpdata{
	width: 100%;
}
.timeUpdataText{
	height: .8rem;
	width: 100%;
	text-align: center;
	line-height: .8rem;
	font-size: 14px;
}
.topValue{
	padding-top: .2rem;
}
.listText{
	width: 100%;
}
.listTextUp{
	width: calc(100% - .3rem);
	font-size: 14px;
	padding: .06rem .15rem;
	overflow: hidden;
}
.listTextDown{
	width: calc(100% - .3rem);
	padding: .1rem .15rem 0rem;
	font-size: 12px;
	color: rgba(0,0,255,.6);
	overflow: hidden;
}
.buyFast{
	padding-right: .4rem;
	font-weight: bold;
	height: .28rem;
	line-height: .28rem;
}
.buyFastText{
	max-width:70%;
	height: .28rem;
	line-height: .28rem;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
}
.iconImage{
	width:14px;
	height:14px;
	float: left;
	padding-right: .08rem;
	line-height:.3rem;
}
.buyFastContent{
	width: 80%;
}
.buyFastTime{
	height: .3rem;
	width: 20%;
	font-size: 12px;
	color: rgba(0,0,0,.7);
	line-height: .3rem;
}
</style>