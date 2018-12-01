<template>
	<div id="smallShop">
		<div>
			<!-- 头部 -->
			<div class="topVideo">
				<div class="fl leftTopVideo">类型</div>
				<div class="fl middleTopVideo">动漫专区</div>
				<div class="fl rightTopVideo" @click="goHistory({name:'onepage'})">返回</div>
			</div>
			<!-- 内容 -->
			<div class="middleContent">
				<div class="hot fl">热门推荐</div>
				<div class="topBang fr">排行榜</div>
			</div>
			<!-- 动画 -->
			<div class="mianVideo">
				<div @click="toSolo({name:'solo'})" class="allVideo fl" v-for="item in videoData">
					<div class="imgVideo">
					<img class="changeImg" :src="item.img">
					</div>
					<!-- 文本 -->
					<div class="textVideo">
						<span>{{item.title}}</span>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
	export default{
		name:'SmallShop',
		data(){
			return{
				msg:'../../../static/images/1.jpg',
				ids:''
			}
		},
		created(){
			// this.ids=this.$route.params.id;
			this.getVideoData()
		},
		computed:{
			...mapGetters(['videoData'])
		},
		methods:{
			...mapActions(['getVideoData']),
			goHistory(params){
				this.$router.push(params);
			},
			toSolo(params){
				this.$router.push(params);
			}
		}

	}
</script>
<style scoped>
	#smallShop{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 568;
	font-size: 14px;
	}
	.allVideo{
		width:calc(50% - .2rem);
		padding: .2rem .1rem 0rem;
	}
	.textVideo{
		padding-top: .1rem;
		width: 100%;
		height: 24px;
		overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp:2;
    	font-size: 12px;
	}
	.imgVideo{
		width: 100%;
		font-size:0;
	}
	.topVideo{
		overflow: hidden;
		width: 100%;
		/*border-bottom: 1px dashed rgba(0,0,0,.2);*/
	}
	.hot,.topBang{
		width: 1.2rem;
		height:.6rem;
		text-align: center;
		line-height: .6rem;
	}
	.mianVideo{
		width: calc(100% - .2rem);
	    padding:.1rem .1rem .2rem;
	    overflow: hidden;
	}
	.changeImg{
		height:106px;
		width: 100%;
	}
	.topBang{
		color: rgba(0,220,212,.9);
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.leftTopVideo,.rightTopVideo{
		width: 1rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		font-size: 12px;
	}
	.middleContent{
		padding: .2rem;
		width: calc(100% - .4rem);
		overflow: hidden;
		/*border-bottom: 1px dashed rgba(0,0,0,.2);*/

	}
	.middleTopVideo{
		width: calc(100% - 1rem - 1rem);
		height: .6rem;
		line-height: .6rem;
		text-align: center;
	}
</style>