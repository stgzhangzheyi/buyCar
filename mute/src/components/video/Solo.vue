<template>
	<div class="soloPage">
		<div>
			<!-- 头部 -->
		<div class="videoCard">
			<div class="fl leftCard">
			<img class="imgCard" :src="msg"/>
			</div>
			<div class="fl middleCard">商品展览</div>
			<div class="fl rightCard" @click="closePage({name:'smallshop'})">
				<div class="closeLeft"></div>
				<div class="closeRight"></div>
			</div>
		</div>
		<!-- 内容 -->

		<div class="killMe">
			<div class="killYou">
				<span :class="{fl:true,killed:isHappy}" @click="changeNow">搞笑集锦</span><span :class="{fr:true,killed:!isHappy}" @click="changePage">mini社区</span>
			</div>
		</div>
		<div v-show="isHappy">
		<div class="happy" v-for="item in gridData">
			<div class="leftHappy fl">
				<img class="happyImage" :src="item.profile_image"/>
			</div>
			<div class="rightHappy fl">
				<div class="happyName">{{item.name}}</div>
				<div class="happyText">{{item.text}}</div>
				<div class="delete"><img class="happyTextImg" :src="item.image1"/></div>
				<div class="bottomHappy">
					<span class="fl hand">点赞</span>
					<span class="fr say">评论</span>
				</div>
			</div>
		</div>
	</div>

	<div v-show="!isHappy">
		<div class="happy" v-for="item in gridData">
			<div class="leftHappy fl">
				<img class="happyImage" :src="item.profile_image"/>
			</div>
			<div class="rightHappy fl">
				<div class="happyName">{{item.screen_name}}</div>
				<div class="happyText">{{item.text}}</div>
				<div class="videoPlay">
					<video id="video" preload="auto" :src="item.videouri" controls="controls" type="video/mp4">
				</video>
				</div>
				<div class="bottomHappy">
					<span class="fl hand">点赞</span>
					<span class="fr say">评论</span>
				</div>
			</div>
		</div>
	</div>

	</div>
	</div>
</template>
<script>
import {mapActions,mapState} from "vuex"
	export default{
		name:'Solo',
		data(){
			return{
				msg:'../../../static/images/icon3.png',
				du:'../../../static/images/1.jpg',
				lu:'../../../static/images/2.jpg',
				gridData: [],
    			apiUrl: 'https://www.apiopen.top/satinApi?type=1&page=1'
			}
		},
		created(){
			this.getCustomers()
		},
		mounted:function(){
			
		},
		methods:{
			...mapActions(['isHappyChange']),
			closePage(params){
				this.$router.push(params)
			},
			getCustomers: function() {
      	this.$http.get(this.apiUrl)
        .then((response) => {
        	this.gridData=response.data.data;
        })
        .catch(function(response) {
          console.log(response)
        })
    	},
    	changePage(){
    		if(!this.$store.state.isHappy){
    			return;
    		}
    		this.isHappyChange(false);
    	},
    	changeNow(){
    		if(this.$store.state.isHappy){
    			return;
    		}
    		this.isHappyChange(true);
    	}
		},
		computed:{
			...mapState(['isHappy'])
		}
	}
</script>
<style scoped>
	.soloPage{
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
	.happyTextImg{
		width:100%;
		height: auto; 
	}
	.bottomHappy{
		width: 100%;
		height:.4rem;
		line-height: .4rem;
	}
	.happyText{
		width: 100%;
		padding: .1rem 0rem 0rem;
		font-size: 15px;
		overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp:5;
    	height: 76px;
    	letter-spacing:1px;
	}
	.delete{
		font-size: 0;
		height:7rem;
		overflow-y: auto; 
	}
	.videoPlay{
		width: 100%;
		height: 5rem;
		overflow: auto;
	}
	video{
		display: inline;
		width: 100%;
		height:auto;
	}
	.happyName{
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
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
	.killed{
		color: rgba(0,220,212,.9);
	}
	.videoCard{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.happyImage{
		width: 100%;
		height: 1rem;
	}
	.leftHappy{
		width: 1rem;
		font-size: 0; 
	}
	.rightHappy{
		width: calc(100% - 1rem - .2rem);
		padding-left: .2rem;
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
	.killYou{
		width: 100%;
		line-height: .6rem;
		text-align: center;
		height: .6rem;
	}
	.happy{
		width: calc(100% - .4rem);
		padding: .2rem;
		overflow: hidden;
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
	.killMe{
		width: calc(100% - .4rem);
		padding: .2rem; 
	}
	.closeRight{
		z-index: 20;
		width: 30%;
		height: 2px;
		position: absolute;
		left:calc((100% - 30%)/2);
		top: calc((100% - 2px)/2);
		background-color: rgba(0,0,0,.7);
		transform: rotateZ(-45deg);
		animation: mysecond 5s  infinite alternate;
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