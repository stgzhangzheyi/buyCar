<template>
	<div class="message">
		<div class="unPaid">
			<div class="left fl" @click="toUser({name:'user'})">返回</div>
			<div class="title fl">{{title}}</div>
			<div class="right fl"></div>
		</div>
		
		<div v-if="num == 1">
		<div class="msg" v-for="item in paidData">
			<div class="fl imagesMsg">
				<img class="imageSize" :src="item.sms">
			</div>
			<div class="fl textMsg">
				<div class="itemText">{{item.text}}</div>
				<div class="hiddenText">{{item.text}}</div>
				<div class="countPrice">
					<div class="fl count">
						<span>数量:</span><span>{{item.value}}</span><span>单价:</span><span>{{item.name}}</span>
					</div>
					<div class="fl price">
						<span>代付金额:</span><span>￥{{item.value*(item.name).slice(1)}}</span>
					</div>
				</div>
				
				<div class="delAndPaid">
					<span class="fl">取消</span>
					<span class="fr">付款</span>
				</div>

			</div>
		</div>
		<div class="oneKey" v-show="bedBoy">
			<span class="fl">一键取消</span><span class="fr">一键付款</span>
		</div>
		
		</div>

		<!-- 代发货 -->
		<div v-else-if="num == 2">
			<div class="msg" v-for="item in needAllShop">
			<div class="fl imagesMsg">
				<img class="imageSize" :src="item.sms">
			</div>
			<div class="fl textMsg">
				<div class="itemText">{{item.text}}</div>
				<div class="hiddenText">{{item.text}}</div>
				<div class="countPrice">
					<div class="fl count">
						<span>数量:</span><span>{{item.value}}</span><span>单价:</span><span>{{item.name}}</span>
					</div>
					<div class="fl price">
						<span>总金额:</span><span>￥{{item.value*(item.name).slice(1)}}</span>
					</div>
				</div>

				<div>
					<span>延长收货</span><span>确认收货</span>
				</div>

			</div>
		</div>
		</div>

		<!-- 全部订单 -->
		<div v-else>
			<div class="msg" v-for="item in needAllShop">
			<div class="fl imagesMsg">
				<img class="imageSize" :src="item.sms">
			</div>
			<div class="fl textMsg">
				<div class="itemText">{{item.text}}</div>
				<div class="hiddenText">{{item.text}}</div>
				<div class="countPrice">
					<div class="fl count">
						<span>数量:</span><span>{{item.value}}</span><span>单价:</span><span>{{item.name}}</span>
					</div>
					<div class="fl price">
						<span>总金额:</span><span>￥{{item.value*(item.name).slice(1)}}</span>
					</div>
				</div>

				<div>
					<span></span>
				</div>

			</div>
		</div>
		</div>

	</div>
</template>
<script>
import {mapGetters} from "vuex"
	export default {
		name:'Message',
		data(){
			return {
				title:'',
				num:''

			}
		},
		created(){
			this.title=this.$route.params.id;
			this.num=this.$route.params.n;
		},
		methods:{
			toUser(params){
				this.$router.push(params);
			}
		},
		computed:{
			...mapGetters(['paidData','needAllShop']),
			bedBoy(){
				let manBad=this.$store.getters.paidData;
				if(manBad.length==0){
					return false;
				}else{
					return true;
				}
			}
		}
	}
</script>
<style scoped>
	.message{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 644;
	font-size: 16px;
	overflow-y: auto;
	}
	.doCar{
		width: calc(100% - .4rem);
		padding: .2rem;
	}
	.countPrice{
		width: 100%;
		margin-top: .2rem;
		overflow: hidden;
	}
	.oneKey{
		width: calc(100% - .4rem);
		padding: .2rem;
		line-height: .6rem;
		font-size: 15px;
		height: .6rem;
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	.delAndPaid{
		width: 100%;
		height: .6rem;
		line-height: .6rem;
	}
	.fr{
		float: right;
	}
	.count{
		width: 50%;
		height: .6rem;
		line-height: .6rem;
		font-size: 12px;
	}
	.price{
		width: calc(100% - 50%);
		height: .6rem;
		line-height: .6rem;
	}
	.imagesMsg{
		width: 1.2rem;
		font-size: 0;
	}
	.imageSize{
		width: 1.2rem;
		height: 1.2rem;
	}
	.itemText,.hiddenText{
		width: 100%;
		height: 29px;
		overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp:2;
    	font-size: 14px;
	}
	.hiddenText{
		margin-top: .1rem;
		color: rgba(0,0,0,.5);
	}
	.textMsg{
		width: calc(100% - 1.2rem - .2rem);
		padding-left: .2rem
	}
	.unPaid{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.fl{
		float: left;
	}
	.left,.right{
		width: 1rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.title{
		width: calc(100% - 2rem);
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.msg{
		width: calc(100% - .4rem);
		padding: .2rem;
		overflow: hidden;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
</style>