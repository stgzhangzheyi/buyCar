<template>
	<div class="bottomFixed">
		<div class="leftBottom" @click="goBuy({name:'buycar',params:{h:'e1'}})">
			<img :src="msg" class="smallIcon" />
		</div>
		<div class="rightBottom"></div>
	</div>
</template>
<script>
	export default {
	name:'BottomNav',
	data(){
		return {
			msg:'../../../static/images/gwc.png'
		}
	},
	created() {
			//截取路由参数
			var params = this.$route.params;
			
	},
	beforeRouteUpdate(to, from, next) {
			console.log('beforeRouteUpdate to ==> ', to);
			console.log('beforeRouteUpdate from ==> ', from);

			next();
	},
	methods:{
		goBuy(parems){
			this.$router.push(parems);
		}
	}
	}
</script>
<style scoped>
	.bottomFixed{
		
		overflow: hidden;
	}
	.leftBottom{
		width: 40px;
		height: 40px;
		font-size: 0;
		border-radius: 50%;
		margin-left: .3rem;
		background-color:rgba(255,255,255,.3);
		float: left;
	}
	.smallIcon{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.rightBottom{
		width: 40px;
		height: 40px;
		font-size: 0;
		border-radius: 50%;
		/*background-color:rgba(255,255,255,1);*/
		float: right;
		margin-right:.3rem;
	}
</style>