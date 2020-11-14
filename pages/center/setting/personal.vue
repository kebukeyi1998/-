<template>
	<view>
		<form @submit="formSubmit" class="grace-form">
			<navigator class="grace-space-between gritem" style="80rpx"  url="./crop">
				<view class="grace-h4">头像</view>
				<view>
					<img src="/static/index/jd.jpg" class="grimg"/>
					<view class="grace-icons">&#xe601</view>
				</view>
			</navigator>
			<view class="grace-space-between gritem">
				<view class="grace-h4">昵称</view>
				<view class="grace-icons">你的昵称&#xe601;</view>
			</view>
			<view class="grace-space-between gritem">
				<view class="grace-h4">性别</view>
				<view class="grace-icons">男&#xe601;</view>
			</view>
			<navigator class="grace-space-between gritem" url="./shouji">
				<view class="grace-h4">手机号码</view>
				<view class="xh">未绑定</view>
			</navigator>

			<!-- <view class="grace-space-between gritem">
				<view class="grace-h4">邮箱</view>
				<view>1449168693@qq.com</view>
			</view> -->
			<view class="grace-form-item grace-border-b">
				<text class="grace-form-label">邮箱</text>
				<view class="grace-form-body">
					<input type="text" class="grace-form-input" name="contact"   placeholder="1449168693@qq.com"></input>
				</view>
			</view>
			<!-- <view class="grace-space-between gritem">
				<view class="grace-h4">省份证号</view>
				<view>41150319963598</view>
			</view> -->
			<view class="grace-form-item grace-border-b">
				<text class="grace-form-label">身份证号</text>
				<view class="grace-form-body">
					<input type="text" class="grace-form-input" name="contact"   placeholder="41150319963598"></input>
				</view>
			</view>
			<view style="padding:22rpx 0;margin: 0 40rpx;">
				<button class="grace-button" style="line-height:80rpx;" formType="submit">立即发布</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			submit:function(e){
				console.log(e)
			}
		}
	}
</script>

<style>
.gritem{
	height:50rpx;
	line-height: 50rpx;
	padding:25rpx;
	border-bottom:1px solid #f5f5f5
}
.icon-arrow-right{
	font-size:18px
}
.grimg{
	width:90rpx;
	height:90rpx;
	position: absolute;
	top: 0;
	right: 60rpx;
}
.xh{
	margin-right: 10rpx;
	border: 1px solid #ccc;
}
.grace-form{
	margin-top: 20rpx;
}
.grace-form-item{
	padding: 0 40rpx;
}
button{border-radius:40rpx ;background-color: red;color: #fff;}
</style>
