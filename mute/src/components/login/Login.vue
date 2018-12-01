<template>
	<div id="loginEnter">
		<div class="loginContent" v-if="isLogin">
			<div class="deleteLogin" @click="goEnter({name:'onepage'})">
				<div class="upLine"></div>
				<div class="downLine"></div>
			</div>
			<div class="loginMag">
				<img :src="msg">
			</div>
			<!-- 提示 -->
			<div class="tishi">
				{{content}}
			</div>
			<!-- 账号 -->
			<div class="mobuleNumber">
				<div class="userNumber fl">注册账号:</div>
				<div class="fl middleChange">
					<input  v-model="username" type="" name="" placeholder="请输入数字或字母6-12位"/>
				</div>
				<div class="fl del"></div>
			</div>
			

			<div class="mobuleNumber">
				<div class="psdNumber fl">注册密码:</div>
				<div class="fl middleChange">
					<input v-model="password" type="password" name="" placeholder="请输入数字或字母6-12位"/>
				</div>
				<div class="fl del"></div>
			</div>

			<!-- 注册登录 -->
			<div class="userPassword">
				<button class="successEnterLogin" @click='login()'>注册登录</button>
			</div>

			<!-- 密码登录 -->
			<div class="passwordLogin">
				<div class="smalPsd" @click='enterLogin'>密码登录</div>
			</div>

		</div>

		<!-- 登录 -->
		<div class="nextLoginPage" v-else>
			<div class="goodLogin">
				<div class="fl" @click="goPrev"><mu-icon value="chevron_left" class="icon"></mu-icon></div>
				<div class="fl loginTopText">用户登录</div>
				<div class="fl rightEmpty"></div>
			</div>
			<div class="errText">
				{{errorText}}
			</div>

			<div class="loginUserText">
				<div class="loginUserNumber fl">登录账号:</div>
				<div class="fl loginInputText">
					<input v-model='loginUser' type="" name="" placeholder="请输入数字或字母6-12位"/>
				</div>
				<div class="fl del"></div>
			</div>

			<div class="loginPsdText">
				<div class="loginPsdNumber fl">密码账号:</div>
				<div class="fl loginInputText">
					<input  v-model='loginPsd' type="password" name="" placeholder="请输入数字或字母6-12位"/>
				</div>
				<div class="fl del"></div>
			</div>

			<div class="lastLoginTexts"><div @click='reLogin({name:val})'>登录</div></div>

		</div>
	</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
	export default {
		name:'Login',
		data(){
			return{
				msg:'../../../static/images/1.jpg',
				password:'',
				username:'',
				isLogin:true,
				content:'',
				iserror:false,
				userMessage:[],
				loginUser:'',
				loginPsd:'',
				errorText:'',
				isGood:false,
				val:''
			}
		},
		beforeRouteEnter(to, from, next) {
			
			// 不能访问this ==> vue实例
			// console.log(this.msg);

			next(vm=>{
				vm.val=from.name;
			});
		},
		computed:{
			...mapState(['loginUserData'])
		},
		methods:{
			...mapActions(['isChangeUser']),
			goEnter(params){
				this.$router.push(params)
			},
			enterLogin(){
				this.isLogin = !this.isLogin;
			},
			goPrev(){
				this.isLogin = !this.isLogin;
			},
			isEmpty(val){
				return val ==undefined || val.trim()=='';
			},
			isUsername(val,min,max){
				return  new RegExp('^[A-Za-z\\d]{' + min + ',' + max + '}$').test(val);
			},
			isPassword(val,min,max){
				return new RegExp('^[A-Za-z\\d_]{'+min + ',' + max +'}$').test(val);
			},
			change(){
				if(this.isEmpty(this.username)){
					this.iserror=true;
					this.content='注册账号不能为空'
				}else if(!this.isUsername(this.username,6,12)){
					this.iserror=true;
					this.content='注册账号格式有错误'
				}else if(this.isEmpty(this.password)){
					this.iserror=true;
					this.content='注册密码不能为空'
				}else if(!this.isPassword(this.password,6,12)){
					this.iserror=true;
					this.content='注册密码格式有错误'
				}
				return !this.iserror;
			},
			chance(){
				if(this.isEmpty(this.loginUser)){
					this.isGood=true;
					this.errorText='注册账号不能为空'
				}else if(!this.isUsername(this.loginUser,6,12)){
					this.isGood=true;
					this.errorText='注册账号格式有错误'
				}else if(this.isEmpty(this.loginPsd)){
					this.isGood=true;
					this.errorText='注册密码不能为空'
				}else if(!this.isPassword(this.loginPsd,6,12)){
					this.isGood=true;
					this.errorText='注册密码格式有错误'
				}
				return !this.isGood;
			},
			...mapActions(['loginedData']),
			login(){
				var self =this;
				if(this.change()){
				localStorage.passname = encodeURIComponent(this.password);
				localStorage.username = encodeURIComponent(this.username);
					// this.userMessage.push({"用户名:":this.username,"用户密码:":this.password});
				this.isLogin = !this.isLogin;
				}
				this.loginedData(this.userMessage);
				setTimeout(function(){
					self.content=''
				},2000);
			},

			reLogin(params){
				var self =this;
				if(this.chance()){
					var psdContent=decodeURIComponent(localStorage.passname);
					var userContent=decodeURIComponent(localStorage.username);
					
					if(userContent==this.loginUser&&psdContent==this.loginPsd){
						// console.log('成功登陆');
						this.$router.push(params)
						this.isChangeUser(false);
					}else{
						this.errorText='账号或密码不存在，请重新输入!'
					}
				}
				this.loginedData(this.userMessage);
				setTimeout(function(){
					self.errorText=''
				},2000);
			}
		}
	}
</script>
<style scoped>
	#loginEnter{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 222;
		width: 100%;
		height: 100%;
		background-color: rgb(255,255,255);
		font-size: 14px;
	}
	.deleteLogin{
		position: fixed;
		right: .24rem;
		top: .3rem;
		z-index: 34;
		width:.6rem;
		height: .6rem;
	}
	.loginMag{
		font-size: 0;
	}
	.tishi{
		width: calc(100% - .4rem);
		padding:.1rem .2rem;
		height: .4rem;
		font-size: 12px;
		color: red;
		line-height: .4rem;
		background-color: rgba(0,0,0,.1);
	}
	.errText{
		width: calc(100% - .4rem);
		height: .4rem;
		padding: .1rem .2rem;
		line-height: .4rem;
		color: red;
	}
	input{
	outline: none;
	border: 0;
	padding: 0;
	margin:0;
	height: .4rem;
	width: 100%;
	margin-top: calc((.8rem - .4rem)/2);
	font-size: 10px;
	}
	img{
		width: 100%;
		height: auto;
	}
	.fl{
		float: left;
	}
	.upLine,.downLine{
		position: absolute;
		left:0;
		top: calc((100% - .04rem)/2);
		width:.6rem;
		height: .04rem;
		background-color: rgba(255,0,0,.8); 
	}
	.upLine{
		transform: rotateZ(45deg);
	}
	.downLine{
		transform: rotateZ(-45deg);
	}
	.mobuleNumber{
		overflow: hidden;
		width: calc(100% - .4rem);
		padding:.1rem .2rem;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.userNumber,.psdNumber{
		height: .8rem;
		line-height: .8rem;
		width:1.3rem;
	}
	.del{
		height: .8rem;
		line-height: .8rem;
		width: .8rem;
	}
	.middleChange{
		width: calc(100% - .8rem - 1.3rem);
		height: .8rem;
	}
	.userPassword{
		width: calc(100% - .4rem);
		padding:.3rem .2rem;
	}
	.successEnterLogin{
		width: 100%;
		height: .64rem;
		line-height: .64rem;
		text-align: center;
		background-color: rgba(0,10,253,.3);
		color: rgb(255,255,255);
		border-radius: 5px;
		padding: 0;
		outline: none;
	}
	.passwordLogin{
		width: calc(100% - .4rem);
		padding:.4rem .2rem .1rem;
		border-top: 1px solid rgba(0,0,0,.1);
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.smalPsd{
		width:1.4rem;
		height: .6rem;
		border: 1px solid rgba(0,0,255,.4);
		text-align: center;
		line-height: .6rem;
		color: rgba(0,0,255,.4);
		margin-left: calc((100% - 1.4rem)/2);
		border-radius: 5px;
	}
	.icon{
	display: block;
	width: .8rem;
	line-height:.8rem;
	height: .8rem;
	text-align: center;
	font-size: 24px;
	background-color: rgba(232,213,121,.3);
}
.rightEmpty{
	width: .8rem;
	line-height:.8rem;
	height: .8rem;
	text-align: center;
	font-size: 24px;
	background-color: rgba(232,213,121,.3);
}
.loginTopText{
	width:calc(100% - .8rem - .8rem);
	line-height:.8rem;
	height: .8rem;
	text-align: center;
	font-size: 16px;
	background-color: rgba(232,213,121,.3);
}
.loginUserText,.loginPsdText{
	width: calc(100% - .4rem);
	margin-top: .4rem;
	padding:.1rem .2rem .1rem;
	overflow: hidden;
	border-bottom: 1px solid rgba(0,0,0,.1);
}
.loginUserNumber,.loginPsdNumber{
	height: .8rem;
	line-height: .8rem;
	width:1.3rem;
}
.loginInputText{
	width: calc(100% - .8rem - 1.3rem);
	height: .8rem;
}
.goodLogin{
	overflow: hidden;
}
.lastLoginTexts{
	width: calc(100% - .4rem);
	padding: .2rem;
}
.lastLoginTexts>div{
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	background-color: rgba(232,213,121,.3);
}
</style>