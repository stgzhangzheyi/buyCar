<template>
	<div class="nowBuy">
	<div>
	<!-- 图片展示 -->
	<div class="prevIcon">
		<div class="fl" @click="goPath({name:'shopshow',params: {id:add,n:pah}})">
			<mu-icon value="chevron_left" class="icon"></mu-icon>
		</div>
		<div class="fr timeIcon">
			<span class="noTime">剩1天17小时</span>
		</div>
	</div>

	<!-- 轮播图片 -->

	<div class="bannerShowTime">
		<div class="banner">
	 	<div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for='(i,index) in blue.arrItem' :key='index' class="swiper-slide">
              <div class="iSlide">
                  <img class="img" :src="i.imgUrl">
                </div>
            </div>
          </div>
        </div>
        </div>
	</div>
	<!-- 内容 -->
	<div class="nowPrice">
	<div class="momentprice"><span class="onePrice">{{blue.name}}</span><span style="text-decoration:line-through;" class="twoPrice">{{blue.smallName}}</span><span class="threePrice">{{blue.zhe}}</span></div>
	</div>
	<!-- 一	 -->
	<div class="carz">
		<div class="smallCarz">
			<div class="smallOneCarz fl">最后疯抢</div><div class="smallTwoCarz fl">￥17</div>
		</div>
	</div>

	<!-- 二 -->
	<div class="twoBigText">{{blue.text}}</div>
	<div class="threeBigText">
		<div class="fl threeLeft">
		<div class="threeSpanTextUp">新鲜货</div><div class="threeSpanLongText">递四方速递但是方法都是第三方东方的说法</div>
		</div>
		<div class="fl threeRight">
		<span class="fr">领取</span>
		</div>
	</div>

	<div class="threeBigText">
		<div class="fl threeLeft">
		<div class="threeSpanTextDown">实惠品</div><div class="threeSpanLongText">递四方速递但是方法都是第三方东方的说法</div>
		</div>
		<div class="fl threeRight">
		<span class="fr"></span>
		</div>
	</div>

	<!-- 颜色 -->
	<div class="colorAll">
	<div class="colorText">颜色</div>
	<div class="colorSelect">
		<div class="fl oneColor">浅花灰</div>
		<div class="fl twoColor">粉橙</div>
	</div>
	</div>

	<!-- 尺码 -->
	<div class="sizeAll">
		<div class="sizeText">
		<div class="fl sizeSmallText">尺码</div><div class="fr sizeTextColor">差点分手的</div>
		</div>
		<div class="sizeSelect">
			<div class="fl oneSize">66</div>
			<div class="fl oneSize">86</div>
			<div class="fl oneSize">66</div>
			<div class="fl oneSize">66</div>
		</div>
	</div>

	<!-- 地址 -->
	<div class="sendAll">
		<div class="sendWhere">配送至</div>
		<div class="sendAddress">
			<span>请选择地址</span>
		</div>
		<div class="sendDayGoods">
			<div class="fl">唯品会发货</div>
			<div class="fl">7天包退</div>
			<div class="fl">退货返运费</div>
			<div class="fl">...</div>
		</div>
	</div>

	<!-- 品牌 -->
	<div class="logoShow">
		<div class="logoShowLeft fl">查看品牌</div>
		<div class="logoShowRight fl">进入专场</div>
	</div>

	<!-- 图片展示 -->
	<div class="allImgeLast">
		<div class="shopPageImg">商品图片</div>
		<div v-for='(item,index) in blue.arrItem' :key='index' class="banner">
		<img :src="item.imgUrl">
		</div>
	</div>

	<!-- 固定底部 -->
	<div class="fixedBottom">
		<div class="fl leftBuyCar" @click="gotoGWC({name:'buycar',params: {id:add,n:pah}})">
			<img :src="gwc"  class="buyshopCar" />
		</div>
		<div class="fl rightBuyCar" @click="addToCar({vale:false,buyData:blue,id:add})">加入购物车</div>
	</div>
	
	<div class="smallWindow" v-show="isWindow">
	<div class="openLogin">
		<div class="fl openLoginLeft"></div>
		<div class="fl openLoginMiddle">请登录才可以添加</div>
		<div class="fl openLoginRight" @click="isUpShow(false)">
			<div class="changeLeftLine"></div>
			<div class="changRightLine"></div>
		</div>
	</div>
</div>
		
	<div class="emptyBottom"></div>
		
	</div>
	</div>
</template>
<script>
import '../../../static/css/swiper.min.css'
import Swiper from 'swiper'
import {mapState,mapActions} from 'vuex'
	export default{
		name:'Information',
		data(){
            return {
                vals:'',
                gwc:'../../../static/images/gwc.png',
                add:'',
                pah:''
            }
          },
          created() {
			//截取路由参数
			var params = this.$route.params.id;
			var path =this.$route.params.n;
			this.add=params;
			this.pah=path;
		},
          beforeRouteEnter(to, from, next) {
			next(vm=>{
				vm.vals=from.name;
			});
		},
		beforeRouteLeave(to, from, next) {
			next();
		},
		 mounted:function(){
		 var mySwiper = new Swiper('.swiper-container', {
	       //循环轮播
	      loop: true,

	      //自动轮播
	      autoplay: {
	        //每1500ms轮播一张图片
	        delay: 1500,

	        //点击图片索引停止轮播
	        disableOnInteraction: false
	      },

	      //(分页器)图片索引
	      pagination: {
	        el: '.swiper-pagination'
	      }

            })
          },
         methods:{
         	...mapActions(['disableNow','getValue','isUpShow']),
         	goPath(params){
         		this.$router.push(params);
         	},
         	gotoGWC(params){
         		this.$router.push(params);
         	},
         	addToCar(val){
         		if(!this.$store.state.isChangeLogin){
         		this.disableNow(val);
         		this.getValue(val);
         		}else{
         			this.isUpShow(true);
         		}
         	}
         },
         computed:{
         	...mapState(['secondData','productsData','isWindow']),
         	blue(){
         		var nice = this.add;
         		var kulu = this.pah;
         		// if(nice==undefined||kulu==undefined){
         		// 	return;
         		// }
         		let listItem=null;
				let items=this.secondData.find(item=>item.id===nice);
				if(items==undefined){
					let itemso=this.productsData.find(item=>item.id===nice);
				listItem=itemso.sm.find(i=>i.id===kulu);
				return listItem;
				}
				listItem=items.sm.find(i=>i.id===kulu);
				return listItem;

         	}
        }
	}
</script>
<style scoped>
	.nowBuy{
		position: absolute;
		left: 0;
		top: 0;
		font-size: 14px;
		background-color: rgb(255,255,255);
		width: 100%;
		height: 100%;
		z-index: 300;
		overflow-y:auto; 
	}
	.fixedBottom{
		width: calc(100% - .4rem);
		padding: .2rem;
		overflow: hidden;
		position: fixed;
		z-index: 100;
		left: 0;
		bottom: 0;
	}
	.changeLeftLine{
		width: 40%;
		height: 2px;
		position: absolute;
		left:calc((100% - 40%)/2);
		top: calc((100% - 2px)/2);
		background-color: rgba(0,0,0,.7);
		transform: rotateZ(45deg);
		z-index: 10;
	}
	.changRightLine{
		z-index: 20;
		width: 40%;
		height: 2px;
		position: absolute;
		left:calc((100% - 40%)/2);
		top: calc((100% - 2px)/2);
		background-color: rgba(0,0,0,.7);
		transform: rotateZ(-45deg);
	}
	.openLoginRight{
		position: relative;
	}
	.smallWindow{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 300;
		background-color: rgba(0,0,0,.1);
	}
	.openLogin{
		width: 100%;
		position:absolute;
		background-color: rgb(255,255,255);
		z-index: 4;
		left: 0;
		top:6rem;
		overflow: hidden;
	}
	.openLoginLeft,.openLoginRight{
		height: 1.2rem;
		width: 1.2rem;
	}
	.openLoginMiddle{
		width: calc(100% - 2.4rem);
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		color: rgba(12,122,234,.8);
		font-size: 14px;
	}
	.buyshopCar{
		width: 100%;
		height: 100%;
	}
	.leftBuyCar{
		width: calc(23% - 2px);
		height: calc(.7rem - 2px);
		border:1px solid rgba(0,0,0,.2);
	}
	.rightBuyCar{
		width: calc(100% - 23% - .2rem);
		height: .7rem;
		line-height: .7rem;
		margin-left: .2rem;
		text-align: center;
		color: rgb(255,255,255);
		background-color: rgba(255,33,233,.9);
	}
	.banner{
		font-size: 0;
	}
	.emptyBottom{
		width: 100%;
		height: 1rem;
	}
	.prevIcon{
		position: absolute;
		left: 0;
		top: 10px;
		width: 100%;
		z-index: 100;
	}
	img{
		height: auto;
		width: 100%;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.icon{
	display: block;
	width: .7rem;
	line-height:.7rem;
	text-align: center;
	font-size: 24px;
	margin-left: .2rem;
	border-radius: 50%;
	background-color: rgba(255,0,10,.1);
}
.timeIcon{
	height: .7rem;
	line-height: .7rem;
	margin-right: .2rem;
	font-size: 12px;
}
.noTime{
	padding-right: .2rem;
	padding-left: .1rem;
	padding-top: .04rem;
	border-radius: 15px 0;
	background-color: rgba(255,0,10,.1);
}
.bannerShowTime{
	width: 100%;
}
.nowPrice{
	width: calc(100% - .4rem);
	padding:0rem .2rem;
	background-color: rgb(255,255,255);
}
.momentprice{
	height:.8rem;
	line-height: .8rem;
}
.onePrice{
	font-size: 18px;
	padding-right: .1rem;
}
.twoPrice{
	padding-right: .1rem;
	font-size: 12px;
	color: rgba(0,0,0,.6);
}
.threePrice{
	padding:0rem .1rem;
	background-color: rgb(0,0,0);
	color: rgb(255,255,255);
	font-size: 12px;
}
.carz{
	width: calc(100% - .4rem);
	padding: .1rem .2rem;
}
.smallCarz{
	border:1px solid rgba(255,12,3,.4);
	font-size: 12px;
	overflow: hidden;
	width: 2rem;
	text-align: center;
}
.smallOneCarz{
	padding:0.06rem 0rem;
	width: 1.4rem;
	background-color: rgba(255,0,0,.4);
	color: rgb(255,255,255);
}
.smallTwoCarz{
	width: 0.6rem;
	padding:0.06rem 0rem;
	color: rgba(255,0,0,.6);
}
.twoBigText{
	padding: 0rem .2rem;
	width: calc(100% - .4rem);
	height: .6rem;
	line-height: .6rem;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px dotted rgba(0,0,0,.4);
}
.threeBigText{
	padding: .2rem;
	width: calc(100% - .4rem);
	font-size: 12px;
	overflow: hidden;
}
.threeSpanTextUp{
	border: 1px solid rgba(255,0,0,.5);
	width: 1.1rem;
	line-height: .3rem;
	height: .3rem;
	text-align: center;
	color: rgba(255,0,0,.7);
	float: left;
}
.threeSpanTextDown{
	border: 1px solid rgba(0,0,255,.5);
	width: 1.1rem;
	line-height: .3rem;
	height: .3rem;
	text-align: center;
	color: rgba(0,0,255,.7);
	float: left;
}
.threeSpanLongText{
	padding-left: .2rem;
	max-width: 80%;
	white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 1.1rem - .2rem - 2px);
    text-overflow: ellipsis;
    float: left;
    line-height: .3rem;
	height: .3rem;
	text-align: center;
	margin-top: 1px;
}
.threeLeft{
	width: 70%;
	overflow: hidden;
}
.threeRight{
	width: calc(100% - 70%);
	color: rgba(0,0,255,.7);
	line-height: .3rem;
	height: .3rem;
	margin-top: 1px;
}
.colorText{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	font-size: 14px;
}
.colorAll{
	width: calc(100% - .4rem);
	padding:.1rem .2rem;
}
.oneColor,.twoColor{
	border:1px solid rgba(0,0,0,.6);
	width: 1.7rem;
	height:.46rem;
	line-height: .46rem;
	font-size: 14px;
	text-align: center;
	color: rgba(0,0,0,.6);
	margin-right: .4rem; 
}
.colorSelect{
	overflow: hidden;
}
.sizeAll{
	width: calc(100% - .4rem);
	padding: .2rem; 
	border-bottom: 1px solid rgba(0,0,0,.1);
}
.sizeText{
	width: 100%;
	overflow: hidden;
}
.sizeSmallText{
	height:.8rem;
	line-height: .8rem;
}
.sizeTextColor{
	height:.8rem;
	line-height: .8rem;
	color: rgba(232,12,233,.6);
}
.oneSize{
	border:1px solid rgba(0,0,0,.6);
	width: calc(33.33% - 2px - .4rem);
	height:.46rem;
	line-height: .46rem;
	font-size: 14px;
	text-align: center;
	color: rgba(0,0,0,.6);
	margin:.1rem .2rem 0rem; 
}
.sizeSelect{
	overflow: hidden;
}
.sendWhere{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
}
.sendAll{
	width: calc(100% - .4rem);
	padding: .2rem;
}
.sendAddress{
	height: .6rem;
	line-height: .6rem;
	width: 100%;
	font-size: 12px;
}
.sendDayGoods{
	overflow: hidden;
}
.sendDayGoods>div{
	font-size: 12px;
	width: 25%;
	height: .8rem;
	text-align: center;
	line-height: .8rem;
}
.allImgeLast{
	width: calc(100% - .4rem);
	padding: .2rem;
}
.shopPageImg{
	width: 100%;
	height: .6rem;
	line-height: .6rem;
}
.logoShowLeft{
	width: calc(50% - 0.5px);
	height:.6rem;
	text-align: center;
	line-height: .6rem;
	border-right: 0.5px solid rgba(0,0,0,.1);
}
.logoShow{
	overflow: hidden;
	width: calc(100% - .4rem);
	padding: .2rem;
	border-top:1px solid rgba(0,0,0,.1);
	border-bottom:1px solid rgba(0,0,0,.1);
}
.logoShowRight{
	width: calc(50% - 0.5px);
	height:.6rem;
	text-align: center;
	line-height: .6rem;
	border-left: 0.5px solid rgba(0,0,0,.1);
}
</style>