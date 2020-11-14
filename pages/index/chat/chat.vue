<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-flex-v1" id="gBody">
			<scroll-view scroll-y="true" :style="{height:mainHeight+'px'}" :scroll-top="graceIMScTop">
				<!-- 加载历史消息 -->
				<view style="margin-top:10px; text-align:center;">
					<text class="grace-im-system-msg" @tap="getHistoryMsg">{{historyLodginText}}</text>
				</view>
				<!-- 消息展示区 -->
				<graceIMMsg :msgs="graceIMMsgs" :userid="graceIMUIndex" :group="group"></graceIMMsg>
			</scroll-view>
			<!-- 消息提交区 -->
			<graceIMInput 
				:user="user" 
				:token="graceIMToken" 
				:config="graceIMConfig"></graceIMInput>
		</view>
	</gracePage>
</template>
<script>
// 引入 IM 组件 websocket
import graceIMInput from "@/graceUI/components/graceIMInput.vue";
import graceIMMsg from "@/graceUI/components/graceIMMsg.vue";
import gracePage from "@/graceUI/components/gracePage.vue";
var graceRandom = require("@/graceUI/jsTools/random.js");
// 挂载 vuex
import {
	mapState,
	mapMutations
} from 'vuex';

export default {
	data() {
		return {
			mainHeight : 500,
			user  : {},
			group : '',
			historyLodginText : '点击加载历史消息'
		};
	},
	onReady:function(){
		setTimeout(()=>{
			uni.createSelectorQuery().select('#gBody').fields(
				{size: true}, (res) => {
					this.mainHeight = res.height - 50;
				}
			).exec();
		},1000);
	},
	onLoad: function (options) {
		this.group = options.group;
		var navTitle = this.group == 'group1' ? 'GraceUI 官方交流群' : 'Hcoder 技术交流群';
		uni.setNavigationBarTitle({ title: navTitle });
		// 模拟一个用户信息 实际项目开发用户信息来自您的项目
		// 示例来自本地数据 在 列表页面注册了用户信息
		try{
			var user       = uni.getStorageSync('suser');
			user           = JSON.parse(user);
			user.group     = options.group;
			user.grouptype = 'group';
			this.user     = user;
			this.graceIMConnect(user);
		}catch(e){}
	},
	computed: {
		...mapState([
			'graceIMMsgs', 
			'graceIMScTop', 
			'graceIMHeight', 
			'graceIMUIndex', 
			'graceIMToken',
			'graceIMConfig',
			'graceIMPage'
		])
	},
	methods:{
		...mapMutations(['graceIMConnect']),
		// 加载历史消息
		getHistoryMsg : function(){
			if(!this.graceIMPage[this.group]){this.graceIMPage[this.group] = 1;}
			console.log(this.graceIMConfig.serverUrl+'?c=historyMsg&token='+this.graceIMToken+'&gid='+this.group+'&page='+this.graceIMPage[this.group]);
			if(this.historyLodginText != '点击加载历史消息'){return ;}
			this.historyLodginText = '加载中 ...';
			uni.request({
				url : this.graceIMConfig.serverUrl+'?c=historyMsg&token='+this.graceIMToken+'&gid='+this.group+'&page='+this.graceIMPage[this.group],
				success:(res)=>{
					if(res.data.status == 'ok'){
						this.historyLodginText = '点击加载历史消息';
						var msg = res.data.msg;
						for(var i = 0; i < msg.length; i++){
							this.graceIMMsgs.unshift(msg[i]);
						}
					}else if(res.data.status == 'empty'){
						this.historyLodginText = '已经加载全部';
					}else{
						this.historyLodginText = '点击加载历史消息';
					}
					this.graceIMPage[this.group] ++;
				}
			});
		},
	},
	components:{ graceIMInput, graceIMMsg, gracePage}
}
</script>
<style>
page{background:#F4F5F6;}
.grace-im-msg-list{display:flex; width:100%; flex:1; margin-bottom:50px;}
.grace-im-system-msg{background:#C1C1C1; color:#FFF; font-size:12px; line-height:1.5em; padding:5px 10px; display:inline-block; border-radius:3px;}
</style>