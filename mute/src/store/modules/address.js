import Vue from 'vue'
import * as types from '../mutaion-types'

const state={
	sheng:[],
	shi:[],
	qu:[],
	newUserData:[],
	oldMessage:true
}
const getters = {
	newsData:state=>state.newUserData,
	oldsData:state=>state.oldMessage
}
const mutations={
	[types.SHENG_DATA](state,value){
		state.sheng=value
	},
	[types.SHI_DATA](state,value){
		state.shi=value
	},
	[types.QU_DATA](state,value){
		state.qu=value
	},
	[types.NEWUSERDATA](state,value){
		state.newUserData=value
	},
	[types.OLDMESSAGE_DATA](state,value){
		state.oldMessage=value
	}
}

const actions={
	async forway({commit},axios){
		let sheng= await axios.get('/api/sheng')
		let shi= await axios.get('/api/shi')
		let qu= await axios.get('/api/qu')
		commit(types.SHENG_DATA,sheng.data.data)
		commit(types.SHI_DATA,shi.data.data)
		commit(types.QU_DATA,qu.data.data)
	},
	getNewUserData({commit},value){
		commit(types.NEWUSERDATA,value)
	},
	getOldUserData({commit},value){
		commit(types.OLDMESSAGE_DATA,value)
	}
}
export default {
  state,
  getters,
  mutations,
  actions
}