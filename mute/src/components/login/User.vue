<template>
	<div class="userPage">
		<div>
			<!-- 头部 -->
		<div class="idCard">
			<div class="fl leftCard">
			<img class="imgCard" :src="msg"/>
			</div>
			<div class="fl middleCard">用户信息</div>
			<div class="fl rightCard" @click="closePage({name:'onepage'})">
				<div class="closeLeft"></div>
				<div class="closeRight"></div>
			</div>
		</div>

		<div class="vipImg">
			<img class="vip" :src="ms"/>
		</div>

		<div class="selectItem">
			<div class="fl leftPaid" @click="toMessage({name:'message',params:{id:'待付款',n:1}})">
				<div class="paidImg">
					<img class="imgItem" :src="msg"/>
				</div>
				<div class="paidText">待付款</div>
			</div>
			<div class="fl middlePaid" @click="toMessage({name:'message',params:{id:'待收货',n:2}})">
				<div class="paidImg">
					<img class="imgItem" :src="msg"/>
				</div>
				<div class="paidText">待收货</div>
			</div>
			<div class="fl rightPaid" @click="toMessage({name:'message',params:{id:'全部订单',n:3}})">
				<div class="paidImg">
					<img class="imgItem" :src="msg"/>
				</div>
				<div class="paidText">全部订单</div>
			</div>
		</div>
		<!-- 内容 -->
		<div class="contentCard">
			<div class="userName">
				<span class="fl">用户</span><span class="fr">{{getUserName}}</span>
			</div>
			<div class="buyCount">
				<span class="fl">商品数量</span><span class="fr">{{getBuyCount}}</span>
			</div>
		</div>

	</div>
	</div>
</template>
<script>
	export default{
		name:'User',
		data(){
			return{
				msg:'../../../static/images/icon3.png',
				ms:'../../../static/images/icon2.png'
			}
		},
		methods:{
			closePage(params){
				this.$router.push(params)
			},
			toMessage(params){
				this.$router.push(params)
			}
		},
		computed:{
			getUserName(){
				var userContent=decodeURIComponent(localStorage.username);
				var stringMiddle=userContent.toString().slice(2,5);
				var stringValue=userContent.indexOf(stringMiddle);
				if(stringValue>-1){
					var star=''
					for(var i=0;i<stringMiddle.length;i++){
						star+="*"
					}
					return userContent=userContent.replace(stringMiddle,star);
				}
			},
			getBuyCount(){
				let counts=this.$store.state.product.addData.length;
				if(counts==0){
					return '您还没商品，请去购买商品吧！'
				}else{
					return counts;
				}
			}
		}
	}
</script>
<style scoped>
	.userPage{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 668;
	font-size: 14px;
	overflow-y: auto;
	}
	.paidImg{
		width: calc(100% - .2rem);
		padding: .1rem;
	}
	.imgItem{
		width: 100%;
		height: auto;
	}
	.paidText{
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	}
	ul,li{
	list-style: none;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.selectItem{
		width: calc(100% - .4rem);
		padding: .2rem;
		overflow: hidden;
	}
	.leftPaid,.rightPaid{
		width: 20%
	}
	.middlePaid{
		width: calc(100% - 80%);
		padding: 0 20%;
	}
	.idCard{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px dashed rgba(0,0,0,.2);
	}
	.contentCard{
		width: calc(100% - .4rem);
		padding: .2rem
	}
	.userName,.buyCount{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.vip{
		width: 100%;
		height:auto;
	}
	.imgCard{
		width: 100%;
		height: 100%;
	}
	.leftCard{
		width: 1.2rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		font-size: 12px;
	}
	.rightCard{
		position: relative;
		width: 1.2rem;
		height: .8rem;
	}
	.closeLeft{
		z-index: 10;
		width: 30%;
		height: 2px;
		position: absolute;
		left:calc((100% - 30%)/2);
		top: calc((100% - 2px)/2);
		background-color: rgba(0,0,0,.7);
		transform: rotateZ(45deg);
		animation: myfirst 5s infinite alternate;
	}
	.middleCard{
		width: calc(100% - 1.2rem - 1.2rem);
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		font-size: 16px;
	}
	.closeRight{
		animation: mysecond 5s  infinite alternate;
		z-index: 20;
		width: 30%;
		height: 2px;
		position: absolute;
		left:calc((100% - 30%)/2);
		top: calc((100% - 2px)/2);
		background-color: rgba(0,0,0,.7);
		transform: rotateZ(-45deg);
	}
	.vipImg{
		width: calc(100% - 5.2rem);
		padding:.4rem 2.6rem;
	}
	@keyframes myfirst
	{
		0%{transform: rotateZ(45deg);}
		40%{transform: rotateZ(80deg);}
		80%{transform: rotateZ(125deg);}
		100%{transform: rotateZ(235deg);}
	}
	@keyframes mysecond
	{
		0%{transform: rotateZ(-45deg);}
		40%{transform: rotateZ(-80deg);}
		80%{transform: rotateZ(-125deg);}
		100%{transform: rotateZ(-235deg);}
	}
</style>