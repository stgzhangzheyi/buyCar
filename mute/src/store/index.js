import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import product from './modules/product'
import cart from './modules/cart'
import address  from './modules/address'

Vue.use(Vuex)
const state={
	shopData:[],
	bannerData:[],
	smallShopData:[],
	imagesAll:[],
	productsData:[],
	secondData:[],
	nextByeData:[],
	isShow:true,
	loginUserData:[],
	buyCar:{
		isDisable:true,
		carData:[]
	},
	isChangeLogin:true,
	isWindow:false,
	isSearch:true,
	isHappy:true,
	names:[]

}
export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters,
   modules: {
    product,
    cart,
    address
  } 

})