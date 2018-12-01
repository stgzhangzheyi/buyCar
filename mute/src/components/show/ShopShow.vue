<template>
	<div class="showLists">
		<div class="chance">
		<div class="goodsTop">
		<div class="icons fl" v-on:click="goShow({name:isNaN(val)?'lastpage':'onepage'})">
	    <mu-icon value="chevron_left" class="icon"></mu-icon>
	  </div>
	  <div class="fl middleTopContent">
	  	<div class="textContentTitle">Mini Balabala婴幼服饰-最后疯抢专场</div>
	  </div>
	  <div class="fl">
	  	<mu-icon value="menu" class="icon"></mu-icon>
	  </div>
	</div>

	<div class="twoTopContent">
	<div class="fl together so0">
		<span></span>
		<span>有货商品</span>
	</div>
	<div class="fl together so1">
		<span>价格</span>
	</div>
	<div class="fl together so2">
		<span>折扣</span>
	</div>
	<div class="fl together so3">
		<span></span>
		<span>筛选</span>
	</div>
	</div>
	<!-- 内容 -->
	<div class="activeing">
		<span class="rightTime">剩2天</span>
	</div>
	<!-- 图片内容 -->
	<div class="itemsImgContent">
		<div class="itemImage fl" v-for="item in weipinghui" @click="buyGoods({name:'information',params: {id:val,n:item.id}})">
			<div class="smallChangeImg"><img :src="item.sms"/></div>
			<div class="twoLineText">{{item.text}}</div>
			<div class="price">
				<div class="fl priceText"><span>{{item.name}}</span><span style="text-decoration:line-through;" class="priceSmallText">{{item.smallName}}</span></div>
				<span class="fr moneyText">{{item.zhe}}</span>
			</div>
		</div>
	</div>
	</div>
	<!-- 内容 -->
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
	export default {
		name:'ShopShow',
		data(){
			return{
				msg:'../../../static/images/e3.jpg',
				val:''
			}
		},

		created() {
			//截取路由参数
			var params = this.$route.params.id;
			this.val=params;
		},
		computed:{
			...mapState(['secondData','productsData']),
			weipinghui(){
				// var params = this.$route.params.id;
				var params = this.val;
				var items=null;
				items=this.secondData.find(item=>item.id===params);
				if(items==undefined){
					items=this.productsData.find(item=>item.id===params);
				return items.sm;
				}
				return items.sm;
			}
		},
		methods:{
			...mapActions(['showTopNav']),
			goShow(params,value){
				this.$router.push(params);
				this.showTopNav(value);
			},
			buyGoods(params){
				this.$router.push(params);
			}
		}
	}
</script>
<style scoped>
.showLists{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 998;
	font-size: 14px;
}
.itemsImgContent{
	overflow: hidden;
}
.fl{
	float: left;
}
.goodsTop{
	overflow: hidden;
	border-bottom: 1px solid rgba(0,0,0,.1);

}
.icon{
	display: block;
	width: .8rem;
	line-height:.8rem;
	text-align: center;
	font-size: 24px;
}
.middleTopContent{
	width: calc(100% - .8rem - .8rem);
}
.textContentTitle{
	max-width: 90%;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .8rem;
    height: .8rem;
}
.twoTopContent{
	overflow:visible;
	background-color: rgb(255,255,255);
	border-bottom: 1px solid rgba(0,0,0,.1);
	height: .6rem;
	position: sticky;
	top: 0;
	z-index: 222;
}
.chance{
	width: 100%;
	background-color: rgb(255,255,255);
}
.so0{
	height: .6rem;
	width: calc(25% - 0.5px);
	line-height: .6rem;
	text-align: center;
	border-right:0.5px solid rgba(0,0,0,.1);
}
.so1{
	height: .6rem;
	width: calc(25% - 1px);
	line-height: .6rem;
	text-align: center;
	border-left:0.5px solid rgba(0,0,0,.1);
	border-right:0.5px solid rgba(0,0,0,.1);
}
.so2{
	height: .6rem;
	width: calc(25% - 1px);
	line-height: .6rem;
	text-align: center;
	border-right:0.5px solid rgba(0,0,0,.1);
	border-left: 0.5px solid rgba(0,0,0,.1);
}
.so3{
	height: .6rem;
	width: calc(25% - 0.5px);
	line-height: .6rem;
	text-align: center;
	border-left:0.5px solid rgba(0,0,0,.1);
}
.activeing{
	padding:.2rem .3rem 0rem; 
	width: calc(100% - .6rem);
	height: .5rem;
}
.rightTime{
	float: right;
	font-size: 12px;
}
.itemImage{
	padding:.2rem;
	width: calc(50% - .4rem);
	font-size: 0;
}
img{
	width: 100%;
	height: auto;
}
.smallChangeImg{
	padding-bottom: .1rem;
}
.twoLineText{
	font-size: 12px;
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    height: 24px;

}
.moneyText{
	line-height: .3rem;
	height: .3rem;
	text-align: center;
	font-size: 10px;
	padding:0rem .1rem;
	background-color: rgb(0,0,0,.8);
	color: rgb(255,255,255);
}
.price{
	overflow: hidden;
	padding-top: .1rem;
}
.priceText{
	line-height: .3rem;
	height: .3rem;
	font-size: 10px;
	color: rgba(255,0,0,.7);
}
.priceSmallText{
	color: rgba(0,0,0,.7)
}
.fr{
	float: right;
}
</style>