<template>
	<div class="buyCars">
	<div v-show='hallo'>
	<div class="topNav">
	<div class="buyTopChange">
		<div class="fl toWhere" @click="toWheres({name:'onepage'})">
			<mu-icon value="chevron_left" class="icon"></mu-icon>
		</div>
		<div class="fl buyTopTitle">
			<span>购物车</span>
		</div>
		<div class="fl empty"></div>
	</div>
</div>

	<div class="middleContentBuy">
		<div class="emptyGoods">
		<div class="gwcImg"><img :src="msg" class="addBuy"/></div>
		<div class="gwcText">购物车空空如也</div>
		<div class="gwcFastBuy">
			<div class="goingBuy" @click="toWheres({name:'onepage'})">去抢购</div>
		</div>
		</div>
	</div>
</div>
	
	<!-- 商品展示 -->
	<div class="rePage" v-show='!hallo'>
		<div class="topNav">
	<div class="buyTopChange">
		<div class="fl toWhere" @click="toWheres({name:val=='address'&&ids!=undefined?'information':val=='address'&&ids==undefined?'onepage':val,params: {id:ids,n:pat}})">
			<mu-icon value="chevron_left" class="icon"></mu-icon>
		</div>
		<div class="fl buyTopTitle">
			<span>确认订单</span>
		</div>
		<div class="fl empty"></div>
	</div>
	</div>

	<!-- 地址 -->
	<div class="adr">
		<div class="fl setAdder">请设置你的地址</div>
		<div class="fl toSet" @click="toAddress({name:'address',params: {id:ids,n:pat}})">
			<div class="firstEnter"></div>
			<div class="secondEnter"></div>
		</div>
	</div>

	<div class="selectBuy">精选特卖</div>
	
	<div class="itemShopsShow">
		<div class="borderTop">
		<div class="itemShop" v-for='(item,index) in loveMe' :key="index">
			<div class="upShop">
				<div class="fl oneUpShop">
					<img :src="item.sms"/>
				</div>
				<div class="fl twoUpShop">
					<div class="firstUp">{{item.text}}</div>
					<div class="secondUp">{{item.text}}</div>
					<div class="thUp"><span>{{item.count}}</span><span>({{item.zhe}})</span></div>
				</div>
				<div class="fl threeUpShop">
					<div class="fr newMoney">{{item.name}}</div>
					<div class="fr oldMoney" style="text-decoration:line-through;">{{item.smallName}}</div>
				</div>
			</div>
			<div class="downShop">
				<div class="leftDownShop fl">
					<input class="youCan" type="checkbox" name="" v-model="item.isCheck"  @change="simpleCheck()" />
				</div>
				<div class="fl middleDownShop">
					<div class="fl deserButton" @click='decrease(item,index)'>-</div>
					<div class="fl"><input class="canYou" type="" name="" v-model='item.value' @input='modifyCount(item)'></div>
					<div class="fl indeButton" @click='increase(item,index)'>+</div>
				</div>
				<div class="fl rightDownShop">
					<span class="delet" @click="removeItem(index)">删除</span>
				</div>
			</div>
		</div>
	</div>
	</div>
	<!-- 商品总价格 -->
	<div class="allPrice">
		<div class="lineDownShop">
		<span class="fl">订单金额</span>
		<span class="fr">{{allCount}}</span>
	</div>
	</div>
	<div class="bottomCheck">
		<span>全选：</span><span><input v-model="listCheck" class="allCheck" type="checkbox" name="" @change="allSelect()" /></span>
	</div>
	<div class="result" @click="goMessage()">
		<div>提交订单</div>
	</div>

	<!-- 中间提示 -->
	<div class="nuAddress" v-show="setAdr">
		<div class="unAddressText">
			<div class="unSetText">
			<div class="fl upSetAddress"></div>
			<div class="fl unAddressTextSet">请去设置你的地址</div>
			<div class="fl downSetAddress" @click="closeSetAddr()">
				<div class="oneCloseSet"></div>
				<div class="twoCloseSet"></div>
			</div>
		</div>
		</div>
	</div>
	<!-- 底部导航 -->
	<div class="downBuy">
		<div class="needPaid"><span>还需支付：</span><span class="colorBuyChange">￥{{allCount}}</span></div>
		<div class="noToPaid">不支持到货付款</div>
		<div class="allShopsBuy">
			<div class="fl nuLeftBuy" disabled>
				<div>货到付款</div>
			</div>
			<div class="fl yesRightBuy" @click="buyPaiding()">
				<div>在线付款</div>
			</div>
		</div>
	</div>
	</div>

	</div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
	export default {
		name:'buycar',
		data(){
			return{
				msg:'../../../static/images/gwc.png',
				ims:'../../../static/images/1.jpg',
				val:'',
				value:1,
				count:'',
				allCount:0,
				ids:'',
				pat:'',
				listCheck:false,
				message:[],
				allShop:[],
				smallShop:[],
				setAdr:false
			}
		},
		created() {
			//截取路由参数
			var params = this.$route.params.id;
			var path=this.$route.params.n;
			// var hold=this.$route.params.h;

			this.pat=path;
			this.ids=params;
			// this.es=hold;
			
		},
		beforeRouteEnter(to, from, next) {
			next(vm=>{
				vm.val=from.name;
			});
		},

		//离开组件
		beforeRouteLeave(to, from, next) {

			next();
		},
		computed:{
			...mapState(['names']),
			hallo(){
				return this.$store.state.buyCar.isDisable;
				
			},
			loveMe(){
				return this.$store.state.product.addData;
			}
		},
		methods:{
			...mapGetters(['paidData']),
			...mapActions(['changeValue','noChangeValue','disableNow','getValue','getMessageData','getFruitData','toAllShops']),
			closeSetAddr(){
				this.setAdr=false;
			},
			goMessage(){
				var apple=this.$store.state.product.note;
				var lists=this.$store.state.product.addData;
				lists.forEach((v,i)=>{
					if(v.isCheck){
						this.message.push(v);
						this.smallShop.push(apple[i]);
						v.isCheck=false;
					}
				})
				

				this.allCount=0;
				this.listCheck=false;
				this.getMessageData(this.message);
				this.getFruitData(this.smallShop);
				
			},
			buyPaiding(){
				var newsData=this.$store.getters.newsData;
				if(newsData.name==undefined){
					console.log('请添加地址')
					this.setAdr=true;
					return;
				}
				var apple=this.$store.state.product.note;
				var lists=this.$store.state.product.addData;
				
				lists.forEach((v,i)=>{
					if(v.isCheck){
						this.allShop.push(v);
						v.isCheck=false;
					}
				})
			
				this.listCheck=false;
				this.allCount=0;
				this.toAllShops(this.allShop);
			},
			toAddress(params){
				this.$router.push(params);
			},
			toWheres(params){
				this.$router.push(params);
			},
			increase(item,index){
				if(item.count!=0){
					item.value++;
					this.changeValue(index)
					this.calcMoney();
				}else{
					return;
				}
			},
			decrease(item,index){
				item.value=item.value<=1?1:--item.value;
				this.calcMoney();
				// if(item.value>1){
				// 	this.noChangeValue(index);
				// }else{
				// 	return;
				// }
			},
			simpleCheck(){
				this.calcMoney();
				var lists=this.$store.state.product.addData;
					for (var i = 0; i < lists.length; i++) {
						if (!lists[i].isCheck) {
							this.listCheck = false;
							return;
						}
					}

					this.listCheck = true;
			},
			allSelect: function () {
				var lists=this.$store.state.product.addData;
					lists.forEach((v) => {
						v.isCheck = this.listCheck;
					})

					this.calcMoney();
				},
			calcMoney(){
			var lists=this.$store.state.product.addData;
			this.allCount=0;
			lists.forEach((v)=>{
				if (v.isCheck) {
				this.allCount+=v.value*v.name.substring(1);
			}
			})
				
			},
			removeItem(index){
				var lists=this.$store.state.product.addData;
				lists.splice(index,1);
				this.simpleCheck();
				if (lists.length == 0) {
					this.listCheck = false;
					this.disableNow({vale:true,buyData:lists});
					this.getValue({vale:true,buyData:lists});

				}
				
			},
			modifyCount(item){
				var value = parseInt(item.value);
				item.value = isNaN(value) ? 1 : value <= 1 ? 1 : value;
				this.calcMoney();
			}
		}
	}
</script>
<style scoped>
.buyCars{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
	font-size: 14px;
}
.nuAddress{
	position:fixed;
	width: 100%;
	height: 100%;
	z-index: 1590;
	left: 0;
	top: 0;
}
.unAddressText{
	position: absolute;
	left: 0;
	top: calc((100% - .6rem - 2px)/2);
	width: calc(100% - 2rem);
	padding:0rem 1rem;
}
.unSetText{
	border:1px solid rgba(20,220,0,.8);
	width: calc(100% - 2px);
	background-color: rgba(0,0,0,.6);
	overflow: hidden;
}
.unAddressTextSet{
	width: calc(100% - 1.2rem);
	height: .6rem;
	line-height: .6rem;
	text-align: center;
	color: rgb(255,255,255);
}
.oneCloseSet{
	width: 60%;
	height: 2px;
	position: absolute;
	left:calc((100% - 60%)/2);
	top:calc((100% - 2px)/2);
	transform: rotateZ(45deg);
	background-color: rgb(255,0,0);
}
.twoCloseSet{
	width: 60%;
	height: 2px;
	position: absolute;
	left:calc((100% - 60%)/2);
	top:calc((100% - 2px)/2);
	transform: rotateZ(-45deg);
	background-color: rgb(255,0,0);
}
.upSetAddress,.downSetAddress{
	width: .6rem;
	height: .6rem;
}
.downSetAddress{
	position: relative;
}
.colorBuyChange{
	color: rgba(255,0,0,.8);
}
.result{
	width:calc(100% - .4rem);
	padding:.2rem .2rem .3rem;
}
.result>div{
	height: .5rem;
	line-height: .5rem;
	width: 1.6rem;
	text-align: center;
	background-color: rgba(0,220,240,.3);
}
.nuLeftBuy{
	width: calc(50% - .4rem);
	padding: 0rem .2rem;
	cursor: pointer;
}
.rePage{
	width: 100%;
	height: calc(100% - .3rem - .4rem - .2rem - .5rem - 1px);
	overflow-y: auto;
}
.nuLeftBuy>div{
	width: calc(100% - 2px);
	border:1px solid rgba(0,0,0,.1);
	height: calc(.5rem - 2px);
	line-height: calc(.5rem - 2px);
	text-align: center;
	color: rgb(0,0,0,.7);
}
.allShopsBuy{
	width: calc(100% - .4rem);
	padding:.1rem .2rem;
	overflow: hidden;
}
.setAdder{
	width: 90%;
	height: .4rem;
	line-height: .4rem;
}
.yesRightBuy{
	width: calc(50% - .4rem);
	padding: 0rem .2rem;
	cursor: pointer;
}
.yesRightBuy>div{
	width:100%;
	height:.5rem;
	background-color: rgba(255,30,40,.4);
	text-align: center;
	line-height: .5rem;
	color: rgb(255,255,255);
}
.noToPaid{
	width: 100%;
	height: .3rem;
	line-height: .3rem;
	text-align: center;
	font-size: 12px;
	color: rgba(0,0,0,.6);
}
.bottomCheck{
	width: calc(100% - .4rem);
	padding: .2rem;
}
.downBuy{
	width: 100%;
	background-color:rgb(255,255,255);
	position: fixed;
	z-index: 134;
	left: 0;
	bottom: 0;
	border-top: 1px dashed rgba(0,0,0,.2);
}
.needPaid{
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	text-align: center;
}
.adr{
	width: calc(100% - .4rem);
	padding: .1rem .2rem;
	overflow: hidden;
	background-color: rgba(110,210,110,.1);
}
.toSet{
	width: calc(100% - 90% - .1rem);
	height: .4rem;
	line-height: .4rem;
	padding-left: .1rem;
	position: relative;
}
.firstEnter{
	width: 50%;
	height:2px;
	position: absolute;
	z-index: 120;
	left: calc((100% - 50%)/2);
	top: calc((100% - 2px)/2);
	transform: rotateZ(-120deg);
	background-color: rgb(255,0,0);
	animation: mysecond 5s  infinite alternate;
}
.secondEnter{
	width: 50%;
	height:2px;
	position: absolute;
	z-index: 130;
	left: calc((100% - 50%)/2);
	background-color: rgb(255,0,0);
	top: calc((100% - 2px)/2);
	transform: rotateZ(120deg);
	animation: myfirst 5s infinite alternate;
}
.canYou{
	width: 1rem;
	height:.6rem;
	padding: 0;
	margin:0;
	border: none;
	outline: none;
	text-align: center;
}
.youCan{
	padding: 0;
	margin-top:.18rem;
	border: none;
	outline: none; 
}
.allPrice{
	width: calc(100% - .4rem);
	padding: .4rem .2rem .1rem;
	line-height: .6rem;
	height: .6rem;
}
.deserButton{
	width: .8rem;
	height: .6rem;
	line-height: .6rem;
	text-align: center;
	border-right: 1px solid rgba(0,0,0,.1);
}
.delet{
	float: right;
}
.indeButton{
	width: .8rem;
	height: .6rem;
	line-height: .6rem;
	text-align: center;
	border-left: 1px solid rgba(0,0,0,.1);
}
.itemShop{
	width: 100%;
	padding-top:.2rem;
}
.borderTop{
	border-top: 1px solid rgba(0,0,0,.2);
	border-bottom: 1px solid rgba(0,0,0,.2);
}
.leftDownShop{
	width: 1.4rem;
	height: .6rem;
}
.middleDownShop{
	border: 1px solid rgba(0,0,0,.1);
	overflow: hidden;
}
.rightDownShop{
	height: .6rem;
	line-height: .6rem;
	width:calc(100% - 1.4rem - 2.6rem - 4px);
}
.lineDownShop{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	border-bottom: 1px solid rgba(0,0,0,.1);
	padding-bottom: .2rem;
}
.downShop{
	width: 100%;
	overflow: hidden;
	padding-top: .2rem;
	padding-bottom: .4rem;
}
.newMoney{
	padding-bottom:.1rem;
}
.oldMoney{
	color: rgba(0,0,0,.7);
}
.oneUpShop{
	width: 1.4rem;
	height: 1.4rem;
}
.oneUpShop>img{
	width: 1.4rem;
	height: 1.4rem;
}
.twoUpShop{
	width: calc(100% - 1.4rem - 1rem - .2rem);
	height: 1.4rem;
	padding-left: .2rem;
}
.threeUpShop{
	width: 1rem;
	height: 1.4rem;
}
.firstUp,.secondUp{
		width: 100%;
		height: 24px;
		overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp:2;
    	font-size: 12px;
}
.secondUp{
	padding-top: .2rem;
	color: rgba(0,0,0,.6);
}
.thUp{
	height:calc(100% - 48px - .2rem);
	font-size: 10px;
	color: rgba(0,0,0,.6);
}
.upShop{
	overflow: hidden;
	width: 100%;
}
.itemShopsShow{
	width: calc(100% - .4rem);
	padding: .2rem;
}
.selectBuy{
	width: calc(100% - .4rem);
	height: .8rem;
	line-height: .8rem;
	font-size: 12px;
	padding: 0rem .2rem;
}
.addBuy{
	width:100%;
	height: auto;
}
.fl{
	float: left;
}
.fr{
	float: right;
}
.icon{
	display: block;
	width: .8rem;
	height: .8rem;
	line-height:.8rem;
	text-align: center;
	font-size: 24px;
}
.buyTopTitle{
	width: calc(100% - .8rem - .8rem);
	height: .8rem;
	line-height: .8rem;
	font-size: 16px;
	text-align: center;
}
.buyTopChange{
	overflow: hidden;
	border-bottom: 1px solid rgba(0,0,0,.1);
}
.empty{
	width: .8rem;
	height: .8rem;
}
.middleContentBuy{
	height: calc(100% - .8rem - 1px);
	width: 100%;
	overflow-y:auto;
}

.emptyGoods{
	width: 100%;
	height: 6rem;
	background-color: rgba(2,0,0,.04);
}
.gwcImg{
	width: calc(100% - 4rem);
	padding:1rem 2rem 0rem;
	font-size: 0;
}
.gwcText{
	width: 100%;
	height:.8rem;
	line-height: .8rem;
	font-size: 14px;
	text-align: center;
}
.gwcFastBuy{
	width: calc(100% - 3.2rem);
	padding: 0rem 1.6rem;
}
.goingBuy{
	width: 100%;
	height:.6rem;
	border-radius: 5px;
	border:1px solid rgba(255,2,255,1);
	line-height: .6rem;
	text-align: center;
	color: rgba(255,2,255,1);
}
@keyframes myfirst
	{
		0%{transform: rotateZ(120deg);
			background-color: rgb(255,0,0);
		}
		40%{transform: rotateZ(240deg);
			background-color: rgb(255,220,110);
		}
		80%{transform: rotateZ(305deg);
			background-color: rgb(55,220,10);
		}
		100%{transform: rotateZ(335deg);
			background-color: rgb(25,20,220);
		}
	}
@keyframes mysecond
	{
		0%{transform: rotateZ(-120deg);
			background-color: rgb(255,0,0);
		}
		40%{transform: rotateZ(-240deg);
			background-color: rgb(255,220,110);
		}
		80%{transform: rotateZ(-305deg);
			background-color: rgb(55,220,10);
		}
		100%{transform: rotateZ(-335deg);
			background-color: rgb(25,20,220);
		}
	}
</style>