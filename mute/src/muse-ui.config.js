// import 'muse-ui/lib/styles/base.less'
import {
	BottomNav,
	AppBar,
	Icon,
	Button,
	Carousel,
	List
} from 'muse-ui'

const components = [List,BottomNav,AppBar,Icon,Button,Carousel]

export default {
  // Vue.use会触发一个 名叫install触发并接受Vue对象作为第一个参数
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
