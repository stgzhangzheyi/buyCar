import Vue from 'vue'
import * as types from '../mutaion-types'
import api from '../../api/index'

const state={
	listsVideo:[],
	messageData:[],
	appleData:[],
	allShops:[]
}
const getters = {
  videoData: state => state.listsVideo,
  paidData:state=>state.messageData,
  fruitData:state=>state.appleData,
  needAllShop:state=>state.allShops
}
const mutations={
	[types.VIDEO_DATA](state,value){
		state.listsVideo=value
	},
	[types.MESSAGE_DATA](state,value){
		value.forEach(v=>{
			state.messageData.push(v)
		})
	},
	[types.FRUIT_DATA](state,value){
		state.appleData=value
	},
	[types.ALL_SHOP_DATA](state,value){
		value.forEach(v=>{
		state.allShops.push(v)
		})
	}
}

const actions={
	async getVideoData({commit}){
		let data= await api.getVideoList()
		commit(types.VIDEO_DATA,data)
	},
	getMessageData({commit},value){
		commit(types.MESSAGE_DATA,value)
	},
	getFruitData({commit},value){
		commit(types.FRUIT_DATA,value)
	},
	toAllShops({commit},value){
		commit(types.ALL_SHOP_DATA,value)
	}
}
export default {
  state,
  getters,
  mutations,
  actions
}