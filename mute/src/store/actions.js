import * as types from './mutaion-types'
export default {
	async getData ({commit},axios){
		 let shop = await axios.get('/api/shop')
		 let love = await axios.get('/api/love')
		 let images= await axios.get('/api/images')
		 let bannerImg= await axios.get('/api/banner')
		 let products = await axios.get('/api/products')
		 let small= await axios.get('/api/small')
		 let nextBye= await axios.get('/api/nextBye') 
		 shop= shop.data.data
		 bannerImg=bannerImg.data.data
		 love=love.data.data
		 images=images.data.data
		 products=products.data.data
		 small=small.data.data
		 nextBye=nextBye.data.data
		 commit(types.SHOP_SELECT_DATA,shop)
		 commit(types.BANNER_DATA,bannerImg)
		 commit(types.SMALL_SHOP_DATA,love)
		 commit(types.IMAGE_ALL_DATA,images)
		 commit(types.PRODUCT_SHOP_DATA,products)
		 commit(types.SECOND_SHOP_DATA,small)
		 commit(types.SECOND_NEXT_BYE_DATA,nextBye)
},
showTopNav({commit}, value) {
    commit(types.ISSHOW_DATA, value)
  },
loginedData({commit},value){
	commit(types.LOGIN_USER_DATA,value)
},
disableNow({commit},value){
      commit(types.DISABLE_SHOW,value)
},
isChangeUser({commit},value){
	commit(types.USER_PASSWARD,value)
},
isUpShow({commit},value){
	return new Promise((resolve)=>{
		setTimeout(function(){
		commit(types.ISWINDOW,value)
		resolve()
         },300)
	})
},
isChangeSearch({commit},value){
	commit(types.ISSEARCH,value)
},
isHappyChange({commit},value){
	commit(types.ISHAPPY_DATA,value)
}

}