<template>
	<div class="middleContent">
	<!-- 轮播 -->
	<div class="applePrice">
		<div class="bananaPrice">
			<div class="fl">
				<mu-icon value="search" class="iconTo"></mu-icon>
			</div>
			<div class="fl searchAll">大家都在搜:</div>
			<div class="upBanner fl">
				<ul id="fastAdv">
							<li>火热销售中</li>
							<li>爆热卖产品</li>
							<li>全场优惠</li>
							<li>最新上市产品</li>
							<li>季度最潮</li>
						</ul>
			</div>
			<div class="fl lastSearch">
				<span>今日好店</span><span class="colorRed">shop</span><span class="colorRed tonight">></span>
			</div>
		</div>
	</div>
	<!-- 商品选择	 -->
	<div class="goodShow">	
	<div class="luckly fl" v-for='(item,index) in smallShopData' :key='index'>
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
		name:'TodayPage',
		data(){
			return {
				msg:"../../../static/images/today1.jpg",
				ma:'../../../static/images/today3.jpg',
				du:'../../../static/images/h1.jpg',
				lu:'../../../static/images/h2.jpg',
				tu:'../../../static/images/today2.gif'
			}
		},
		mounted:function(){
		var $fastAdv = $('#fastAdv');
  		var $lis = $fastAdv.find('li');

  		var height = $lis.eq(0).height();

  		var index = 0;


  		var duration = 3000;

  		setInterval(function () {
  		
  		if (index >= $lis.length - 1) {
  			index = 0;
  			$fastAdv.css({top: -index * height + 'px'});
  		} else {
  			index++;
  		}

  		if (index == 0) {
  			index = 1;
  		}
  		$fastAdv.animate({top: -index * height + 'px'});
  	}, duration);
		},
		computed:{
			...mapState(['smallShopData','imagesAll','productsData'])
		},
		methods:{
			goBuyShop(params){
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
.applePrice{
	width: calc(100% - .4rem);
	padding: .2rem;
}
li{
	height: .6rem;
	width: 100%;
}
.tonight{
	padding-left: .1rem;
	/*transform: rotateX(104deg);*/
}
.bananaPrice{
	width: 100%;
	border:1px solid rgba(0,0,0,.2);
	border-radius: 50px;
	font-size: 12px;
	overflow: hidden;
}
.iconTo{
	margin-top:.05rem;
	margin-left: .1rem;
	width: .45rem;
	height: .45rem;
}
.searchAll{
	width:1.3rem;
	text-align: center;
	height: .6rem;
	line-height: .6rem;
}
.colorRed{
	color: rgba(255,0,0,.7);
}
.upBanner{
	width: calc(100% - 1.3rem - .1rem - 2rem - .45rem - .1rem - .1rem);
	padding-left: .1rem;
	height: .6rem;
	line-height: .6rem;
	font-size: 10px;
	font-weight: bold;
	color: rgba(255,23,233,.9);
	overflow-y: hidden;
	position: relative;
}
#fastAdv{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
.lastSearch{
	width: 2rem;
	margin-right: .1rem;
	height: .6rem;
	line-height: .6rem;
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