<template>
	<gracePage :customHeader="false">
		<view slot="gBody">
			<view v-for="(item,index) in msgs" :key="index">
				<!-- 时间 -->
				<view class="time grace-flex-center grace-flex-vcenter">
					<text class="grace-white time-text">{{item.time}}</text>
				</view>
				<!-- 内容主体 -->
				<view class="message-body" v-for="(msg,indexMsg) in item.content" :key="indexMsg">
					<view class="message-body-title grace-bold">{{msg.status}}</view>
					<view class="grace-news-item">
						<image :src="msg.img" class="grace-news-img grace-news-img-l"></image>
						<view class="grace-news-body">
							<text class="grace-news-title">{{msg.msgcontent}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "@/graceUI/components/gracePage.vue";
export default {
	data() {
		return {
			msgs : [
				{
					time : "10:13",
					content :[
						{
							status	   : '您的订单已发货',
							img        : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4146488932,705679890&fm=26&gp=0.jpg',
							msgcontent : "订单[贵州茅台酒 飞天茅台53度]运送中，正在快马加鞭赶往下一站，点击查看详情 >>"
						},
						{
							status	   : '您的订单已配送',
							img        : 'https://img10.360buyimg.com/n7/jfs/t1/55966/15/10399/243915/5d789b47E494ae21b/0c3c348f42b20daa.jpg',
							msgcontent : "订单[华硕（ASUS）ROG-STRIX-RTX2080S]已配送完成，期待您分享商品使用心得，完成后可获得奖励，点击评价 >>"
						}
					]
				},
				{
					time : "2019年09月04日 12:44",
					content :[
						{
							status	   : '您的订单已完成',
							img        : 'https://img11.360buyimg.com/n7/jfs/t21817/85/1683800813/726302/9504d8c8/5b305b6bN6ffa447b.png',
							msgcontent : "订单[雷蛇（Razer）笔记本显卡拓展坞]运送中，正在快马加鞭赶往下一站，点击查看详情 >>"
						}
					]
				},
			]
		}
	},
	methods: {
		
	},
	components:{gracePage}
}
</script>
<style>
page{background:#EBEBEB;}
.message-body{width:650rpx; padding:25rpx; margin:25rpx; background-color:#FFFFFF; border-radius:20rpx;}
.message-body-title{height:80rpx; line-height:80rpx;}
.grace-news-img{width:150rpx; height:150rpx;}
.time{height:60rpx; margin:15rpx;}
.time-text{padding:10rpx 20rpx; background-color:#3F3F3F; border-radius:30rpx; font-size:22rpx;}
</style>