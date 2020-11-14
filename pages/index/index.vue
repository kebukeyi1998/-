<template>
    <view>
        <!-- 演示一个渐变背景，请根据项目实际需求自行改进  -->
        <graceHeader background="#e11b01">
            <view class="grace-header-body">
                <!-- 进入地图 -->
                <view @tap="tomap" class="grace-icons grace-white"  style="font-size:12px;padding:10rpx">&#xe61c;</view>
                <!-- 进入地区地址 -->
				<view @tap="tomap" class="grace-header-icons grace-icons grace-white" style="font-size:12px" >大名县</view>
				
				<!-- 搜索内容 -->
                <view @tap="tosearch"  class="grace-header-content-noflex">
                    <graceSearch></graceSearch>
                </view>
                <!-- 设置按钮 -->
				<view class="grace-header-icons grace-icons grace-white" @tap="tokefu">&#xe626;</view>
                <view class="grace-header-icons grace-icons grace-white" @tap="tomes" >&#xe6b8;</view>
            </view>
        </graceHeader>
		
        <!-- 轮播图开始 -->	
		<view class="grbanner">
			<swiper class="grace-swiper" autoplay="true" indicator-dots indicator-color="rgba(255, 255, 255, 1)"
			   indicator-active-color="#3688FF" style="height:276rpx" interval="3000">
				   <swiper-item class="grace-swiper-item">
					   <navigator url="" class="grace-img-in">
						   <image class="swiper-image" mode="widthFix" src="https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/1.png"></image>
					   </navigator>
				   </swiper-item>
				   <swiper-item class="grace-swiper-item">
					   <navigator url="" class="grace-img-in">
						   <image class="swiper-image" mode="widthFix" src="https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/2.png"></image>
					   </navigator>
				   </swiper-item>
				   <swiper-item class="grace-swiper-item">
					   <navigator url="" class="grace-img-in">
						   <image class="swiper-image" mode="widthFix" src="https://graceui.oss-cn-beijing.aliyuncs.com/swiperimgs/3.png"></image>
					   </navigator>
				   </swiper-item>
			 </swiper>
		 </view>
		<!-- 轮播图结束 -->
	
        <view class="grmain">
            <view style="background:#F5F6F8;">
               <!--  公告开始 -->
               <graceSpeaker :vertical="false" :interval="5000" @change="change" iconClass="grace-icons icon-gonggao" :msgs="speakerMsgs"></graceSpeaker>
               <!--  公告结束 -->
			   <view class="line grtop" ></view>
			   <view class="grace-space-between grace-flex-vcenter">
					<view class="grace-h4 grtopleft">服务通</view>
					<view>服务通竭诚为您服务</view>
				</view>
			   <!-- 五宫格开始 -->
			   <view class="grace-grids grace-margin-top five">
						 <view class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/jd.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">供热服务</text>
						 </view>
						 <view class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/ks.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">配送服务</text>
						 </view>
						 <view class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/nq.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">清洗服务</text>
						 </view>
						 <view class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/pt.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">定制商城</text>
						 </view>
						 <view class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/st.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">生活缴费</text>
						 </view>
				 </view>
				 <!-- 五宫格结束 -->
				

				 <view class="grace-space-between grace-flex-vcenter grnavtop">
					<view class="grace-h4 grtopleft">供热服务</view>
					<view>更多>></view>
				 </view>
				 <view class="grace-grids grace-margin-top three">
						 <navigator url="../productInfo/productInfo" class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/product.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">供热服务</text>
							 <text class="grace-grids-text grace-red">￥188.00</text>
						 </navigator>
						 <navigator url="../productInfo/productInfo" class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/product1.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">配送服务</text>
							 <text class="grace-grids-text grace-red">￥188.00</text>
						 </navigator>
						 <navigator url="../productInfo/productInfo" class="grace-grids-items">
							 <image class="grace-grids-icon-img" src="/static/index/product2.jpg" mode="widthFix"></image>
							 <text class="grace-grids-text">生活缴费</text>
							 <text class="grace-grids-text grace-red">￥188.00</text>
						 </navigator>
				 </view>
				
				 <view class="grace-space-between grace-flex-vcenter grnavtop">
				 					<view class="grace-h4 grtopleft">供热服务</view>
				 					<view>更多>></view>
				 </view>
				 <view class="grace-grids grace-margin-top three">
					 <view class="grace-grids-items">
						 <image class="grace-grids-icon-img" src="/static/index/product.jpg" mode="widthFix"></image>
						 <text class="grace-grids-text">供热服务</text>
						 <text class="grace-grids-text grace-red">￥188.00</text>
					 </view>
					 <view class="grace-grids-items">
						 <image class="grace-grids-icon-img" src="/static/index/product1.jpg" mode="widthFix"></image>
						 <text class="grace-grids-text">配送服务</text>
						 <text class="grace-grids-text grace-red">￥188.00</text>
					 </view>
					 <view class="grace-grids-items">
						 <image class="grace-grids-icon-img" src="/static/index/product2.jpg" mode="widthFix"></image>
						 <text class="grace-grids-text">生活缴费</text>
						 <text class="grace-grids-text grace-red">￥188.00</text>
					 </view>
				 </view>
				 
				 
				 <view class="grace-space-between grace-flex-vcenter grnavtop">
				 					<view class="grace-h4 grtopleft">供热服务</view>
				 					<view>更多>></view>
				 </view>
				 <view class="grace-grids grace-margin-top three">
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">供热服务</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product1.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">配送服务</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product2.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">生活缴费</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 </view>
				 
				 <view class="grace-space-between grace-flex-vcenter grnavtop">
				 					<view class="grace-h4 grtopleft">供热服务</view>
				 					<view>更多>></view>
				 </view>
				 <view class="grace-grids grace-margin-top three">
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">供热服务</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product1.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">配送服务</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 						 <view class="grace-grids-items">
				 							 <image class="grace-grids-icon-img" src="/static/index/product2.jpg" mode="widthFix"></image>
				 							 <text class="grace-grids-text">生活缴费</text>
				 							 <text class="grace-grids-text grace-red">￥188.00</text>
				 						 </view>
				 </view>
			</view>
        </view>
    </view>
</template>
<script>
import graceHeader from '../../graceUI/components/graceHeader.vue';
import graceSearch from '../../graceUI/components/graceSearch.vue';
import graceSpeaker from "@/graceUI/components/graceSpeaker.vue";

export default {
    data() {
        return {
		   speakerMsgs : [
					{ title: "GraceUI 更快、更好的前端UI", url:"../index/index", opentype: "navigate"},
					{ title: "Hcoder.net - 精品 IT 课程中心", url: "../index/index", opentype: "switchTab"}
		    ]
		}
    },
	onLoad() {
		// 设置 app 当前版本
		var version = '1.0.1';
		// 版本检查
		/*
		uni.request({
			url:'http://grace.hcoder.net/api/index/version',
			success:(res)=>{
				console.log(res);
				if(version != res.data.version){
					//既可以跳转又可以弹出
					uni.navigateTo({
						url:'../download/download',
					})
				}
			}
		})
		*/
	},
    methods: {
		tomap:function(){
			/*
			uni.navigateTo({
			 	url:"./map/map"
			})
			*/
		   uni.navigateTo({
		   	url:"./city/city"
		   })
		},
		tosearch:function(){
			 uni.navigateTo({
			 	url:"/pages/search/search"
			 })
		},
        goback : function(){
            uni.showToast({title:"您点击了返回按钮", icon: "none"});
            uni.navigateBack({});
        },
		tomes:function(){
			uni.navigateTo({
				url:'./message/message'
			})
		},
		//进入到客服页面
		tokefu:function(){
		    uni.navigateTo({
		    	url:"./chat/chat"
		    })
		},
		//进入消息通知
        set : function(){
            uni.showToast({title:"您点击了设置按钮", icon: "none"});
        },
		change:function(){
			console.log("触发change事件")
		}
    },
    components:{
        graceHeader,
        graceSearch,
		graceSpeaker
    }
}
</script>
<style>
.grbanner{
	background:#e11b01;
	height:275rpx
}
.grace-swiper{
	width:695rpx;
	margin:0rpx auto;
    padding-top:30rpx
}
.grmain{
	width:695rpx;
	margin:50rpx auto 0;	
}
.grtop{
	height:80rpx;
	
}
.grtopleft{
	border-left:5px solid #e11b01;
	padding-left:20rpx;
	font-weight: bold;
}
.line{
	height:20rpx;
	background:#f3f3f3
}

.five > .grace-grids-items{
	width:135rpx;
	
}
.five .grace-grids-icon-img{
	width:110rpx;
	height:110rpx
}

.three > .grace-grids-items{
	width:220rpx;
	margin-right:16rpx
    
}

.three > .grace-grids-items:last-child{
	margin-right:0
}
.three .grace-grids-icon-img{
	width:220rpx;
	height:220rpx
}

</style>