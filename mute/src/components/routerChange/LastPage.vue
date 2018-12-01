<template>
	<div class="secondContent">
	<!-- <router-view/> -->
	<div class="lastContentPage">
		<div class="delLine">
			<img :src="msg" />
		</div>
		<div>
			<div class="twoLastSelect">
			<div class="leftChange fl">
				<div class="colorTextChang">
				<span>今日疯抢</span><span>（45）</span>
				</div>
				<div class="smallTextLine"></div>
			</div>
			<div class="rightChange fl">
				<span>下期预告</span><span>（16）</span>
			</div>
			</div>
		</div>
		<div class="delLine everyDayUpdata">
			<img :src="ms" />
		</div>
		<!-- 数据更新内容 -->
		<div class="bigContentShow">
			<div class="smallContentShow" v-for="item in secondData">
				<!-- 上模块 -->
				<div class="smallUpShow delLine">
					<img :src="item.img" />
					<div class="timeLast">
					</div>
				</div>
				<!-- 下模块 -->
				<div class="smallDownShow">
					<div class="productsList">
			
						<div class="listOne fl" v-for="i in item.sm" @click="go({name: 'shopshow',params: {id:item.id}},!isShow)">
						<div class="imgPadding delLine"><img :src="i.sms"/></div>
						<div class="listSmallText">
							<p>{{i.text}}</p>
						</div>
						<div class="moneyText">
							<span class="textOneMoney">{{i.name}}</span><span style="text-decoration:line-through;" class="textTwoMoney">{{i.smallName}}</span>
						</div>
						</div>
						<!-- </router-link> -->
						</div>

						<div class="lastSmallTextShow">
							<div class="myLastText">{{item.mainDescribe}}</div>
						</div>
					</div>
				</div>

			</div>
			<!-- 下期预告 -->
			<div class="formachImg delLine">
				<img :src="mi"/>
			</div>
			<div>
				<div class="lastRun delLine" v-for="item in nextByeData">
					<img class="raduisImg" :src="item.img"/>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import {timeOut} from '../../../static/js/time.js'
import BScroll from 'better-scroll'
	export default {
		name:'LastPage',
		data(){
			return {
				msg:'../../../static/images/last1.webp',
				ms:'../../../static/images/last2.webp',
				mi:'../../../static/images/last3.webp',
				sd:'../../../static/images/b9.jpg',
				val:'',
				fuu:''
			}
		},
		mounted:function(){
			timeOut(4);
		},
		computed:{
			...mapState(['secondData','nextByeData'])
		},
		methods:{
			...mapActions(['showTopNav']),
			...mapState(['isShow']),
			go(params,show){
				
				this.showTopNav(show);
				this.$router.push(params);
			}
		}
	}
</script>
<style scoped>
	.lastContentPage{
		background-color: rgba(0,0,0,.06);
		font-size: 14px;
		margin-top: calc(1.3rem + 3px);
	}
	.timeLast{
		position: absolute;
		left: .4rem;
		top: 2rem;
		z-index: 44;
		width: 4rem;
		height: .4rem;
		line-height: .4rem;
		font-size: 14px;
	}
	img{
		width: 100%;
		height: auto;
	}
	.delLine{
		font-size: 0;
	}
	.fl{
		float: left;
	}
	.twoLastSelect{
		overflow: hidden;
		width: 100%;
	}
	.leftChange{
		width: 50%;
	}
	.colorTextChang{
		height:calc(.8rem - 2px);
		line-height:calc(.8rem - 2px);
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		color: rgba(255,0,121,.7);
	}
	.rightChange{
		width: 50%;
		height: .8rem;
		line-height:.8rem;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
	}
	.smallTextLine{
		height: 2px;
		width: 70%;
		margin-left: calc((100% - 70%)/2);
		background-color: rgba(255,0,121,.7);
	}
	.everyDayUpdata{
		background-color: rgba(0,0,0,.05);
	}
	.smallUpShow{
		padding: .2rem .3rem 0rem;
		position: relative;
	}
	.smallDownShow{
		padding: 0rem .3rem;
	}
	.productsList{
		overflow: hidden;
		width: 100%;
		padding-bottom:.2rem;
		border-bottom: 1px solid rgba(0,0,0,.1);
		background-color: rgb(255,255,255);
	}
	.listOne{
		width:33.33%;
	}
	.imgPadding{
		padding:.1rem .2rem 0rem;
		width:calc(100% - .4rem);
	}
	.listSmallText{
		padding: .12rem .1rem .1rem;
	}
	p{
    	overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp:2;
    	font-size: 12px;
    	height: 24px;
	}
	.moneyText{
		padding:0rem .1rem;
		font-size: 12px;
		height: .4rem;
		line-height: .4rem;
	}
	.textOneMoney{
		padding-right: .1rem;
	}
	.textTwoMoney{
		color: rgba(0,0,0,.4);
	}
	.lastSmallTextShow{
		width:100%;
		height: .8rem;
		border-radius:0px 0px 7px 7px;
		background-color: rgb(255,255,255);
	}
	.myLastText{
		width: calc(100% - .4rem);
		height:.4rem;
		padding: .1rem .2rem 0;
		line-height: .4rem;
		font-size: 14px;
		white-space: nowrap;
   		 overflow: hidden;
  	 	 text-overflow: ellipsis;
	}
	.lastRun{
		padding:.3rem .3rem 0rem;
	}
	.raduisImg{
		border-radius: 7px;
	}
</style>