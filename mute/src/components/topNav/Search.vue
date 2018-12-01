<template>
	<div class="search">
		<div class="searchTop">
			<div class="fl searchUp">搜索</div>
			<div class="fl searchMiddle">
			<div class="searchTo">
				<input v-model='value' type="" name="" @input="searchShow"/>
			</div>	
			</div>
			<div class="fl searchDown" @click="returnPrev({name:'onepage'})">返回</div>
		</div>
		<!-- 热门搜索 -->
		<div class="hotSearch" v-show='isSearch'>
			<div class="hotTo">热门搜索</div>
			<div class="searchCount fl">
				<span class="searchGoods">尼龙双肩包</span>
				<span class="searchGoods">降落伞</span>
				<span class="searchGoods">急救箱</span>
				<span class="searchGoods">98K</span>
			</div>
		</div>

		<div class="lists" v-show="!isSearch">
			<div class="itemSearch" v-for="item in count" @click="toWay({name:'shopshow',params: {id:item.id}})">{{item.text}}</div>
		</div>

	</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
	export default{
		name:'Search',
		data(){
			return{
				value:'',
				products:[],
				count:[]
			}
		},
		created(){
			// this.products=this.$store.getters.moon;
			this.products=this.$store.state.productsData
		},
		computed:{
			...mapState(['isSearch','productsData'])
		},
		methods:{
			...mapActions(['isChangeSearch']),
			toWay(params){
				this.isChangeSearch(true);
				this.$router.push(params);
			},
			returnPrev(params){
				this.isChangeSearch(true);
				this.$router.push(params);
			},
			searchShow(){
				this.count=[]
				this.products.forEach((value,item)=>{
					value.sm.forEach((v,i)=>{
						let val=v.text.indexOf(this.value);
						if(val>-1){
						this.count.push({id:value.id,text:v.text});

					}
					})
				})
				if(this.value==null||this.value==''){
					this.isChangeSearch(true);
				}else{
					this.isChangeSearch(false);
				}
			}
		}
	}
</script>
<style scoped>
	.search{
	width: 100%;
	height: 100%;
	background-color:rgb(255,255,255);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 778;
	font-size: 14px;
	overflow-y: auto;
	}
	.lists{
		width: calc(100% - .4rem);
		padding: .2rem .2rem 0rem;
	}
	.itemSearch{
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		margin-top: .2rem;
		white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	.hotSearch{
		width: calc(100% - .4rem);
		padding:.2rem;
	}
	.searchGoods{
		padding: 0rem .1rem;
		border-radius: 45px;
		color: rgba(255,110,0,.6);
		background-color: rgba(0,0,0,.1);
	}
	.searchCount{
		height: .6rem;
		line-height: .6rem;
		margin-right: .2rem;
	}
	.hotTo{
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		font-size: 14px;
	}
	input{
		border: none;
		outline: none;
		padding:0;
		margin: 0rem .2rem;
		width: calc(100% - .4rem);
		height: 100%;
	}
	.searchTo{
		width: calc(100% - 2px - .2rem);
		border-radius:35px;
		height: .4rem;
		margin: calc((.8rem - .4rem - 2px)/2) .1rem;
		border: 1px solid rgba(0,0,0,.6);
	}
	.searchTop{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.searchUp{
		width: 1rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
	}
	.searchMiddle{
		width:calc(100% - 1rem - 1rem);
		height: .8rem;
	}
	.searchDown{
		width: 1rem;
		height: .8rem;
		text-align: center;
		line-height:.8rem;
	}
	.fl{
		float: left;
	}
</style>