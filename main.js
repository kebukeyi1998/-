import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 挂载 vueX
import store from './store';
Vue.prototype.$store = store;

//回到上一级
const prePage = ()=>{
	let pages = getCurrentPages(); //获取当前的页面对象
	let prePage = pages[pages.length - 2]; //获取上一个页面的页面对象
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;  //正对android ios兼容处理 
}

Vue.prototype.$api = {prePage};

const app = new Vue({
    ...App
})
app.$mount()
