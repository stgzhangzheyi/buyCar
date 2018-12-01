<template>
	<div id="address">
		<div v-show='oldsData'>
			<!-- 头部导航 -->
			<div class="addAddress">
				<div class="fl returnPrev" @click="prevShop({name:'buycar',params: {id:ids,n:pat}})">返回</div>
				<div class="fl getAddress">添加收货地址</div>
				<div class="fl emptyAddress">)</div>
			</div>
			<div class="peopleName">
				<div class="peopleText fl">收货人</div>
				<div class="fl inputValue">
					<input v-model="name" type="" name="">
				</div>
			</div>

			<div class="peopleName">
				<div class="peopleText fl">手机号</div>
				<div class="fl inputValue">
					<input v-model="number" type="" name="">
				</div>
			</div>
				
			<!-- 三级联动 -->
			<div class="threeActive">
			<div class="fl">
				<select v-model="selectedProvince">
				  <option  :value ="index" v-for="(item,index) in sheng" :key="index">{{item}}</option>
				</select>
			</div>

			<div class="fl">
				<select v-model="selectedCity">
				  <option  :value ="index" v-for="(item,index) in city" :key="index">{{item}}</option>
				</select>
			</div>

			<div class="fl">
				<select v-model="selectedBlock">
				  <option  :value ="index" v-for="(item,index) in smallCity" :key="index">{{item}}</option>
				</select>
			</div>
	
			</div>

			<div class="lastAddress">
				<div class="smallAddress">详细地址:</div>
				<div class="smallText">
					<input v-model="addr" type="" name="">
				</div>
			</div>
			<!-- 固定底部 -->

			<div class="addressBottom">
				<div class="request" @click="commitData({name:name,address:addr,num:number,sheng:selectedProvince,shi:selectedCity,qu:selectedBlock})">确定</div>
			</div>
			
			<!-- 弹框 -->
			<div class="tanKuang" v-show="closeCom">
				<div class="closeCommit">
					<div class="leftRoate"></div>
					<div class="rightRoate"></div>
					<div class="middleCommit" @click="closeMy()">请完善个人信息</div>
				</div>
			</div>

		</div>
		
		<div v-show="!oldsData">
		<div class="secondChangData">
			<div class="addAddress">
				<div class="fl returnPrev" @click="prevShop({name:'buycar',params: {id:ids,n:pat}})">返回</div>
				<div class="fl getAddress">地址信息</div>
				<div class="fl emptyAddress">^</div>
			</div>
			<div class="sUserName">
				<span class="fl">收货人:</span><span class="fl dataName">{{newsData.address}}{{newsData.name}}</span>
			</div>

			<div class="sUserName">
				<span class="fl">手机号码:</span><span class="fl dataName">{{newsData.num}}</span>
			</div>

			<div class="sUserName">
				<span class="fl">地址:</span><span class="fl dataName">{{newsData.address}}</span>
			</div>
			<div class="sUserName">
				<span class="fl">详细地址:</span><span class="fl dataName">{{newsData.sheng}}{{newsData.shi}}{{newsData.qu}}{{newsData.address}}</span>
			</div>
			

		</div>

			<div class="changeData">
				<div class="xiuGai" @click="xiuGai()">修改</div>
			</div>

		</div>

	</div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
	export default{
		name:'Address',
		data(){
			return{
				ids:'',
				pat:'',
				value:'',
				sheng:'',
				shi:[],
				qu:'',
				vas:'',
				city:'',
				smallCity:'',
				selectedProvince:'',
				selectedCity:'',
				selectedBlock:'',
				love:[],
				name:'',
				number:'',
				addr:'',
				closeCom:false
			}
		},
		created() {
			var params = this.$route.params.id;
			var path=this.$route.params.n;
			this.pat=path;
			this.ids=params;
			this.sheng =this.$store.state.address.sheng;
			this.shi =this.$store.state.address.shi;
			this.qu =this.$store.state.address.qu;
		},
		mounted(){
		},
		watch:{
			  selectedProvince (newVal, oldVal) {
			  	this.love=[];
			  	this.city=this.shi[newVal]
			  	for(var key in this.city){
			  	this.love.push(key);
			  	}
			  	this.smallCity=this.qu[this.love[0]]
			  	
			  },
			   selectedCity (newVal) {
			   	this.smallCity=this.qu[newVal]
			   	
			   }
		},
		computed:{
			...mapGetters(['oldsData','newsData'])
		},
		methods:{
			...mapActions(['getNewUserData','getOldUserData']),
			prevShop(params){
				this.$router.push(params);
			},
			xiuGai(){
				this.getOldUserData(true);
			},
			closeMy(){
				this.closeCom=false;
			},
			commitData(value){
				if(this.name==null||this.name==''||this.number==null||this.number==''||this.addr==null||this.addr==''||this.selectedProvince==null||this.selectedProvince==''||this.selectedCity==null||this.selectedCity==''||this.selectedBlock==null||this.selectedBlock==''){
					this.closeCom=true;
				}else{
				this.getNewUserData(value);
				this.getOldUserData(false)
				}
				
			}
		}
	}
</script>
<style scoped>
	#address{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 609;
	font-size: 16px;
	overflow-y: auto;
	}
	.dataName{
		padding-left: .2rem;
	}
	.changeData{
		width:calc(100% - .4rem);
		position:fixed;
		left: 0;
		bottom: 0;
		background-color: rgb(255,255,255);
		z-index: 34;
		padding: .2rem;
		border-top: 1px solid rgba(0,0,0,.1);
	}
	.secondChangData{
		width: 100%;
		height: calc(100% - .6rem - .4rem - 1px);
		overflow-y:hidden; 
	}
	.xiuGai{
		width: 100%;
		height:.6rem;
		background-color: rgba(0,0,0,.3);
		line-height: .6rem;
		text-align: center;
		color: rgb(255,255,255);
	}
	.sUserName{
		width:calc(100% - .4rem);
		padding:.2rem;
		height: .6rem;
		border-bottom: 1px solid rgba(0,0,0,.1);
		line-height: .6rem;
	}
	.middleCommit{
		position: absolute;
		left: 0;
		top:calc((100% - .8rem)/2);
		line-height: .8rem;
		height: .8rem;
		width:100%;
		text-align: center;
		color: rgba(255,250,250,.8);
	}
	.tanKuang{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		background-color:rgba(0,0,0,.6);
	}
	.closeCommit{
		width: calc(100% - 2.4rem);
		height: 4rem;
		position:absolute;
		left: 0;
		margin:0rem 1.2rem;
		top: calc((100% - 4rem)/2);
	}
	.leftRoate{
		width: 10%;
		height: 3px;
		position: absolute;
		left: 0;
		top: calc((100% - 3px)/2);
		background-color: yellow;
		transform: rotateZ(45deg);
		animation: mylove 5s;
		animation-iteration-count:infinite;
	}
	@keyframes mylove
	{
	from{background-color: rgb(255,255,255);}
	to{background-color:rgb(255,0,0);}
	}
	.rightRoate{
		width: 10%;
		height: 3px;
		position: absolute;
		left: 0;
		top: calc((100% - 3px)/2);
		background-color: yellow;
		animation: mylove 5s ;
		animation-iteration-count:infinite;
		transform: rotateZ(-45deg);
	}
	.threeActive{
		width: calc(100% - .4rem);
		padding: .2rem;
		overflow: hidden;
	}
	.threeActive>div{
		padding-right: .1rem;
	}
	.addAddress{
		width: calc(100% - .4rem);
		padding: 0rem .2rem;
		overflow: hidden;
	}
	.emptyAddress{
		animation: myfirst 5s infinite alternate;
	}
	.request{
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		letter-spacing:3px;
		background-color: rgba(0,0,0,.1);
	}
	.addressBottom{
		border-top: 1px solid rgba(0,0,0,.1);
		position: fixed;
		left: 0;
		bottom: 0;
		width: calc(100% - .4rem);
		padding: .2rem;
	}
	.smallText{
		width: 100%;
		height: .5rem;
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	.smallAddress{
		width: 100%;
		height: .4rem;
		line-height: .4rem;
	}
	.lastAddress{
		width: calc(100% - .4rem);
		padding: .2rem;
	}
	input{
		outline: none;
		border:none;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		font-size: 16px;
	}
	.fl{
		float: left;
	}
	.returnPrev,.emptyAddress{
		width: .8rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.getAddress{
		width: calc(100% - .8rem - .8rem);
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.peopleName{
		width: calc(100% - .4rem);
		margin-top: .1rem;
		padding: .2rem;
		overflow: hidden;
	}
	.peopleText{
		width: 20%;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	.inputValue{
		width: calc(100% - 20% - .2rem);
		height: .8rem;
		padding-left: .2rem;
		border-bottom: 1px solid rgba(0,0,0,.2);
	}
	@keyframes myfirst
	{
		0%{transform: rotateZ(45deg);}
		40%{transform: rotateZ(80deg);}
		80%{transform: rotateZ(125deg);}
		100%{transform: rotateZ(235deg);}
	}
</style>