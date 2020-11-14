import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// socket 服务配置
var socketConfig = {
	'serverUrl' : 'http://39.105.55.32:9502/', // http 服务器地址
	'socketUrl' : 'ws://39.105.55.32:9502/'    // socket 服务地址
};

const store = new Vuex.Store({
	state: {
		graceIMMsgs   : [],
		graceIMStatus : 'wait', // wait - 等待 ing - 连接中 success - 已经连接
		graceIMToken  : '',
		graceIMScTop  : 0,
		graceIMHeight : 0,
		graceIMUIndex : '',
		graceIMConfig : socketConfig,
		graceIMFD     : 0,
		graceIMUID    : 0,
		graceIMFriends:[],
		graceIMPage   : {}
	},
	mutations: {
		// 连接并注册用户分组
		graceIMConnect(state, user){
			state.graceIMUIndex = user.uindex;
			// 初始化窗口
			const res = uni.getSystemInfoSync();
			state.graceIMHeight = res.windowHeight - 50;
			// 判断是否连接
			if(state.graceIMStatus == 'wait'){
				// 连接服务器获取连接 token
				console.log('IM 开始连接 ...');
				state.graceIMStatus = 'ing';
				uni.request({
					url:socketConfig.serverUrl+'?c=token&secretKey=gchatSapiKey2019',
					success:function(res){
						// 获取好友列表
						uni.request({
							url:socketConfig.serverUrl+'?c=friendList&token='+res.data.msg+'&uindex='+user.uindex,
							success:function(res){
								if(res.data.status == 'ok'){
									// 循环查询本地消息记录
									var friends     = res.data.msg;
									for(let i = 0; i < friends.length; i++){
										try{
											var history = uni.getStorageSync("graceIM_"+friends[i].group);
											if(history){
												history = JSON.parse(history);
												friends[i].lastcontent = history.lastcontent;
												friends[i].lasttime    = history.lasttime;
											}
											state.graceIMFriends = friends;
										}catch(e){
											//TODO handle the exception
										}
									}
								}
							}
						});
						
						state.graceIMToken =  res.data.msg;
						// 连接 socket 服务器
						uni.connectSocket({url : socketConfig.socketUrl + '?gchatToken=' + state.graceIMToken});
						// 连接成功
						uni.onSocketOpen(function (res){
							console.log('IM 服务连接成功 ...');
							state.graceIMStatus = 'success';
							// 获取系统信息
							try {
								const res    = uni.getSystemInfoSync();
								user.uuid    = state.graceIMToken;
								user.system  = res.model;
								user.token   = state.graceIMToken;
								user.type    = 'reg';
								uni.sendSocketMessage({
									data : JSON.stringify(user),
									fail:function(e){console.log('用户注册失败 ...');}
								});
							} catch(e){}
							// 刷新 tiken 30 秒一次保持心跳
							setInterval(function(){
								user.type  = 'keepConnect';
								user.token = state.graceIMToken;
								user.fd    = state.graceIMFD;
								user.uid   = state.graceIMUID;
								uni.sendSocketMessage({
									data : JSON.stringify(user),
									fail : function(e){console.log('刷新失败');}
								});
							}, 30000);
						});
						
						// 接收消息
						uni.onSocketMessage(function(res){
							console.log(res);
							var msg = JSON.parse(res.data);
							// 注册消息
							if(msg.type == "regback"){
								state.graceIMToken = msg.token;
								state.graceIMFD    = msg.fd;
								state.graceIMUID   = msg.uid;
							}
							// 对话消息
							else if(msg.type == "msg"){
								console.log(msg);
								state.graceIMMsgs.push(msg);
								state.graceIMScTop = 9999999 + Math.random();
								// 记录最后一条信息到本地
								try{
									var recContent = '';
									if(msg.contentType == 'txt'){
										recContent = msg.content.substring(0, 10);
									}else if(msg.contentType == 'img'){
										recContent = '[ 图片消息 ]';
									}else{
										recContent = '[ 语音消息 ]';
									}
									var history = {
										lastcontent : recContent,
										lasttime : msg.date
									}
									uni.setStorageSync("graceIM_"+msg.group, JSON.stringify(history));
								}catch(e){}
							}
						});
						
						// 连接断开
						uni.onSocketError(function(res){
							console.log('IM 服务断开 ...');
							state.graceIMStatus = 'wait';
						})
					},
					fail:function(e){
						console.log(e);
					}
				});
			}else{
				try {
					const res    = uni.getSystemInfoSync();
					user.uuid    = state.graceIMToken;
					user.system  = res.model;
					user.token   = state.graceIMToken;
					user.type    = 'reg';
					uni.sendSocketMessage({
						data : JSON.stringify(user),
						fail:function(e){console.log('用户注册失败 ...');},
					});
				} catch(e){}
			}
		},
		getFriendList : function(state){
			if(state.graceIMUIndex == ''){return ;}
			if(state.graceIMToken == ''){return ;}
			// 获取好友列表
			uni.request({
				url:socketConfig.serverUrl+'?c=friendList&token='+state.graceIMToken+'&uindex='+state.graceIMUIndex,
				success:function(res){
					if(res.data.status == 'ok'){
						// 循环查询本地消息记录
						var friends     = res.data.msg;
						for(let i = 0; i < friends.length; i++){
							try{
								var history = uni.getStorageSync("graceIM_"+friends[i].group);
								if(history){
									history = JSON.parse(history);
									friends[i].lastcontent = history.lastcontent;
									friends[i].lasttime    = history.lasttime;
								}
								state.graceIMFriends = friends;
							}catch(e){
								//TODO handle the exception
							}
						}
					}
				},
				fail:function(e){
					console.log(e);
				}
			});
		}
	}
})
export default store;