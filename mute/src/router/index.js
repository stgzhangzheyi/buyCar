import Vue from 'vue'
import Router from 'vue-router'

 Vue.use(Router)

const router=new Router({
	routes:[
	{path:'/smallshop',name:'smallshop',component: r => require(['@/components/show/SmallShop'], r)},
	{path:'/user',name:'user',component: r => require(['@/components/login/User'], r)},
	{path:'/onepage',name:'onepage',component: r => require(['@/components/routerChange/OnePage'], r)},
	{path:'/buycar',name:'buycar',component: r => require(['@/components/show/buycar'], r)},
	{path:'/information',name:'information',component: r => require(['@/components/show/Information'], r)},
	{path:'/lastpage',name:'lastpage',component: r => require(['@/components/routerChange/LastPage'], r)},
	{path:'/shopshow',name:'shopshow',component: r => require(['@/components/show/ShopShow'], r)},
	{path:'/login',name:'login',component: r => require(['@/components/login/Login'], r)},
	{path:'/todaypage',name:'todaypage',component: r => require(['@/components/routerChange/TodayPage'], r)},
	{path:'/search',name:'search',component: r => require(['@/components/topNav/Search'], r)},
	{path:'/solo',name:'solo',component: r => require(['@/components/video/Solo'], r)},
	{path:'/address',name:'address',component: r => require(['@/components/show/address/Address'], r)},
	{path:'/message',name:'message',component: r => require(['@/components/login/Message'], r)},
	{path: '*',redirect: () => {return {name:'onepage'}}}
	]
})
export default router
