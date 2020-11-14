<template>
  
   <view class="grheader_bg" >
	   <view class="grheader">
		   <view class="grtop">
			   <view class="grace-icons icon-pick-up"></view>
			   <view class="grace-icons icon-pick-up"></view>
		   </view>
		   <view class="grcen"></view>
	   </view>
   </view> 
 
   <!-- 不要迷信ui框架  -->
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceBoxBanner from "../../graceUI/components/graceBoxBanner.vue";
import graceFlex from "../../graceUI/components/graceFlex.vue";
export default {
	data() {
		return {
			
		}
	},
	methods:{},
	components:{
		gracePage
	}
}
</script>
<style>
/* uniapp的单位也是rpx   */
.grheader_bg{
	height:430rpx;
	background:#f6453d;
}
.grheader{
	width:715rpx;
	height:290rpx;
	margin-top:40rpx
}

.grtop{
	width:100%;
	height:100rpx;
	line-height:100rpx;
	display:flex;
	flex-direction:row;
	justify-content:flex-end;
}
</style>