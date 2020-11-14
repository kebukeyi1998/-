<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody">
			<view class="grace-body">
				<view class="grace-title grace-margin-top ">
					<view class="grace-title-border"></view>
					<text class="grace-title-text grace-blue">拖动定位</text>
					<text class="grace-text-small grace-gray">grace.hcoder.net</text>
				</view>
			</view>
			<view class="">
				<map style="width:750rpx; height:300px;" :scale="16" @regionchange="regionchange" id="map"
				:latitude="latitude" :longitude="longitude" :controls="controls"></map>
			</view>
			<view class="grace-margin-top grace-text-center">
				<text class="grace-text-small">中心坐标 : {{center[0]}}, {{center[1]}}</text>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "@/graceUI/components/gracePage.vue";
var graceJS = require('@/Grace.JS/grace.js');
export default {
	data() {
		return {
			latitude  : 39.909, // 纬度
			longitude : 116.39742 ,//经度,
			controls  : [{
				id : 1000,
				position : {left:uni.upx2px(350), top:150, width:30, height:30},
				iconPath  : '../../static/location.png',
				
			}],
			locationName  : '',
			center : ['', '']
		}
	},
	onLoad:function(){
		uni.showLoading();
		// 默认情况下获取当前位置
		// 请仔细阅读 注意事项!!
		// https://uniapp.dcloud.io/api/location/location
		uni.getLocation({
			type: 'gcj02',
			success:(res)=>{
				uni.hideLoading();
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
				this.latitude  =  res.latitude;
				this.longitude =  res.longitude;
				this.center    = [res.latitude, res.longitude];
			},
			fail:function(){
				uni.hideLoading();
			}
		});
	},
	methods:{
		regionchange : function(e){
			var map = uni.createMapContext('map', this);
			map.getCenterLocation({
				success:(res)=>{
					console.log(res);
					this.center    = [res.latitude, res.longitude];
				}
			})
		}
	},
	components:{
		gracePage
	}
}
</script>
<style>

</style>