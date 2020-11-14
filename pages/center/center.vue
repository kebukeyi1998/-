<template>
	<gracePage statusBarBG="rgba(255,255,255,0)" :headerHeight="0">
		<view slot="gBody">
			<view class="help-bg">
				<view class="grace-space-between grctop">
					<view  @tap="scan" class="grace-icons grace-h3 grace-icons1">&#xe61d;</view>
					<view class="grace-space-between grctopr" >
						<navigator url="./setting/setting" class="grace-icons grace-h3 grace-icons2">&#xe613;</navigator>
						<navigator url="./message/message" class="grace-icons grace-h3 grace-icons2">&#xe6b8;</navigator>
					</view>
				</view>
				<view class="grace-space-between grtcenter">
					<view class="grace-list-items">
						<view class="grace-list-image ucenter-face grace-relative">
							<image class="grace-list-image ucenter-face-image" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
						</view>
						<view class="grace-list-body">
							<view class="grace-list-title">
								<text class="grace-list-title-text">标题信息</text>
							</view>
							<view class="grace-list-body-desc">描述信息</view>
						</view>
						<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
					</view>	
				</view>
			</view>
			<view class="help-body">
				<view class="grace-grids grace-space-between grace-box-shadow" style="margin-top:50rpx;">
					<view class="grace-grids-items">
						<text class="grace-grids-icon">0</text>
						<text>购物车</text>
					</view>
					<view class="grace-grids-items">
						<text class="grace-grids-icon">0</text>
						<text>喜欢的商品</text>
					</view>

					<view class="grace-grids-items">
						<text class="grace-grids-icon">1</text>
						<text>关注的商品</text>
					</view>
				</view>
			
			</view>
			
			<view class="grcenter">
				<view class="grace-border gritem01" @tap="orderlist"  >
					<view class="grace-space-between">
						<view>我的订单</view>
						<view class="grace-icons icon-arrow-right"></view>
					</view>
					<view>
						<!-- 宫格布局  -->
					</view>
				</view>
				<view class="grace-border gritem02">
					<view class="grace-space-between">
						<view>我的钱包</view>
						<view></view>
					</view>
				</view>
				<view class="grace-border gritem03">
					
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
export default{
	data() {
		return {}
	},
	methods:{
		scan:function(){
			uni.scanCode({
				success(res) {
					console.log(res)
				}
			})
		}
	},
	components:{gracePage}
}
</script>
<style>
page{background-color:#F6F7F8;}
.help-bg{height:430rpx; background:linear-gradient(to top,#f86248,#fc653b);}
.help-body{width:680rpx; left:35rpx; top:230rpx; position:absolute; z-index:1;}
.grace-grids{background-color:#FFFFFF; border-radius:20rpx; padding:10rpx 0;}
.grace-grids-items{width:160rpx;}
.grctop{
	height:60rpx;
	padding-top:40rpx
}
.grace-icons{
	color: #fff;
}
.grace-icons1{
	margin-left: 40rpx;
}
.grace-icons2{
	margin-right: 40rpx;
}
.grace-list-items{
	width: 100%;
	height: 150rpx;
	margin: 10rpx 50rpx;
}
.grace-list-image{
	width: 120rpx;
	height: 120rpx;
}
.grtcenter{
	height:140rpx
}

.grcenter{
	width:720rpx;
	height:auto;
	margin:0 auto;
	margin-top:60rpx
}

.gritem01{
	height:300rpx;
	width:720rpx;

	background:#FFF;
	border-radius: 10rpx;
}
.gritem02{
	height:300rpx;
	width:720rpx;

	background:#FFF;
	margin-top:30rpx;
	margin-bottom:30rpx;
	border-radius: 10rpx;
}
.gritem03{
	height:390rpx;
	width:720rpx;
	border-radius: 10rpx;
	background:#FFF
}

</style>