import Vue from 'vue'
import * as types from '../mutaion-types'

const state = {
  addData: [],
  note:[]
}

const getters = {
  addProducts: state => state.addData
}

const mutations = {
	[types.RECEVIVE_PROUDUCTS](state,value){
		if(value.id==undefined){
			state.note=[];
			state.addData=[];
			return;
		}
		let bubu=null;
		let kuku=state.note.find(item=>item===value.id);
		if(kuku==undefined){
			state.note.push(value.id);
         	state.addData.push(value.buyData)	
         	}else{
			bubu=state.addData.find(item=>item.id===value.buyData.id);
        	 if(bubu==undefined){
         	state.addData.push(value.buyData)
         	}
		}

	},
	[types.ADD_TO_CART](state,value){
			if(state.addData[value].count>0){
				state.addData[value].count--
			}else{
				return;
			}

	},
	[types.ADD_FROM_CART](state,value){
		
		state.addData[value].count++
	}
}
const actions={
	getValue({commit},value){
	commit(types.RECEVIVE_PROUDUCTS,value)
	},
	changeValue({commit},value){
		commit(types.ADD_TO_CART,value)
	},
	noChangeValue({commit},value){
		commit(types.ADD_FROM_CART,value)
	}
}

export default {
  state,
  getters,
  mutations,
  actions
}