<template>
	<gracePage headerBG="#FFFFFF" footerBg="#FFFFFF" :customHeader="false">
		<view slot="gBody" style="padding-bottom:120rpx;">
			<!-- 轮播图 -->
			<swiper class="grace-swiper"  autoplay="true" indicator-dots 
			indicator-color="rgba(255, 255, 255, 1)" indicator-active-color="#3688FF" 
			style="height:399rpx" interval="5000">
				<swiper-item class="grace-swiper-item" v-for="(item, index) in swiperItems" :key="index">
					<image :src="item" mode="widthFix" class="grace-swiper-image"></image>
				</swiper-item>
			</swiper>
			<!-- 商品标题 分享按钮 -->
			<view class="grace-product-padding grace-space-between grace-flex-vcenter">
				<text class="grace-product-title grace-bold">{{product.name}}</text>
				<view class="grace-product-share" @tap="share"><text class="grace-icons icon-share3"></text></view>
			</view>
			<view class="grace-common-line"></view>
			<!-- 价格 -->
			<view class="grace-product-padding">
				<view class="grace-nowrap grace-flex-vcenter">
					<text class="grace-product-price">￥{{product.price}}</text>
					<text class="grace-text grace-gray grace-line-through" style="margin-left:30rpx;">￥{{product.priceMarket}}</text>
				</view>
				<view class="grace-space-between grace-flex-vcenter">
					<text class="grace-text-small grace-gray">运费 ￥0.00</text>
					<text class="grace-text-small grace-gray">已售 21008 件</text>
					<text class="grace-text-small grace-gray">浏览 36万次</text>
				</view>
			</view>
			<view class="grace-common-line"></view>
			<!-- 底部信息切换导航 -->
			<view class="grace-product-padding">
				<graceNavBar :items="navItems" lineHeight="80rpx" :isCenter="true" 
				:currentIndex="active" :size="200" activeLineBg="#FF7900" textAlign="center"
				activeColor="#FF7900" activeLineWidth="200rpx" activeLineHeight="2rpx" 
				:margin="10" @change="navChange"></graceNavBar>
			</view>
			<!-- 详情 请根据项目情况自行改进 可以使用 富文本-->
			<view class="grace-product-padding" :hidden="active == 1">
				<image class="grace-product-info-img" :src="item" mode="widthFix" v-for="(item,index) in product.imgs" :key="index"></image>
			</view>
			<!-- 评论区 -->
			<view class="grace-comments grace-product-padding" :hidden="active == 0">
				<view class="grace-comments-items" v-for="(item, index) in commentContents" :key="index">
					<image  :src="item.face" class="grace-comments-face"></image>
					<view class="grace-comments-body">
						<view class="grace-comments-header">
							<text class="grace-comments-header-text">{{item.name}}</text>
							<text class="grace-comments-info-text">{{item.date}}</text>
						</view>
						<text class="grace-comments-content">{{item.content}}</text>
						<view class="grace-comments-imgs" v-if="item.imgs">
							<view class="grace-comments-image" v-for="(img, indexImg) in item.imgs" :key="indexImg">
								<image :src="img" mode="widthFix" class="grace-comments-img" @click.stop="showImgs(index, indexImg)"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 属性选择 -->
			<graceBottomDialog :show="attrIsShow" @closeDialog="closeAttr">
				<form @submit="attrSubmit" style="box-sizing:border-box; padding:10rpx 25rpx;" class="grace-form" slot="content">
					<!-- 关闭按钮 -->
					<view class="grace-nowrap grace-flex-end">
						<text class="grace-icons icon-close" @tap="closeAttr"></text>
					</view>
					<!-- 头部商品信息 -->
					<view class="grace-product-attr-info">
						<image class= "grace-product-attr-info-image"  mode="widthFix" 
						src="https://img13.360buyimg.com/n7/jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg"></image>
						<view class="grace-product-attr-info-body">
							<text class="grace-product-attr-info-title">{{product.name}}</text>
							<text class="grace-product-attr-info-stone">库存 : 1999件</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<scroll-view style="height:700rpx;" scroll-y>
						<view class="grace-title grace-margin-top">选择颜色</view>
						<view><graceSelectTags selectedColor="#FF0036" :items="colorTips" type="radio" @change="change1"></graceSelectTags></view>
						<view class="grace-title grace-margin-top">选择类型</view>
						<view><graceSelectTags selectedColor="#FF0036" :items="typeTips" type="radio" @change="change2"></graceSelectTags></view>
						<view class="grace-margin-top"><text class="grace-title">购买数量</text></view>
						<view>
							<graceNumberBox :value="buyNum" v-on:change="buyNumChange"></graceNumberBox>
						</view>
					</scroll-view>
					<view class="grace-product-attr-btn">
						<button type="warn" style="background-color:#FF0036;" class="grace-button grace-border-radius" formType="submit">立即购买</button>
					</view>
				</form>
			</graceBottomDialog>
		</view>
		<!-- 底部 -->
		<view class="grace-space-between grace-flex-vcenter grace-bg-white" slot="gFooter">
			<view class="grace-grids grace-nowrap" style="width:250rpx;">
				<view class="grace-grids-items grace-relative" @tap="gohome">
					<text class="grace-grids-icon grace-icons icon-home"></text>
					<text class="grace-grids-text grace-grids-text">首页</text>
				</view>
				<view class="grace-grids-items grace-relative">
					<text class="grace-grids-icon grace-grids-icon grace-icons icon-shoucang grace-footer-active"></text>
					<text class="grace-grids-text grace-grids-text grace-footer-active">收藏</text>
				</view>
			</view>
			<view class="grace-flex-end" style="width:460rpx;">
				<button type="warn" class="grace-footer-button" style="background:#E55D52;" @tap="buyNow">立即购买</button>
				<button type="warn" class="grace-footer-button" style="background:#F37B1D;" @tap="buyNow">加入购物车</button>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceNavBar from "../../graceUI/components/graceNavBar.vue";
import graceBottomDialog from '../../graceUI/components/graceBottomDialog.vue';
import graceNumberBox from '../../graceUI/components/graceNumberBox.vue';
import graceSelectTags from '../../graceUI/components/graceSelectTags.vue';
export default {
    data() {
    	return {
			// 轮播图 
			swiperItems : [
				'http://i1.mifile.cn/f/i/2019/C76029A6/part6-2.jpg',
				'http://i1.mifile.cn/f/i/2019/C76029A6/part6-2.jpg',
				'http://i1.mifile.cn/f/i/2019/C76029A6/part6-2.jpg'
			],
			// 切换导航
			navItems : ['商品详情', '相关评论'],
			active:0,
			product : {
				name: "小米 MIX3 一面科技 一面艺术 ( 磁动力滑盖全面屏 | 故宫特别版 )",
				logo : "../../static/logo.png",
				price : 3188,
				priceMarket : 3200,
				imgs : [
					'https://img30.360buyimg.com/sku/jfs/t21838/18/2275707529/311540/cba1d04c/5b4f155fNac3aa2f0.jpg',
					'https://img30.360buyimg.com/sku/jfs/t22021/327/2281785192/48707/57806074/5b4f1579Nae7adb49.jpg',
					'https://img30.360buyimg.com/sku/jfs/t21682/256/2344553276/204456/cf7a2ddb/5b4ffbbfN48c54307.jpg'
				]
			},
			// 模拟评论数据 (实际项目来自api请求)
			commentContents : [
				{
					"content":"故国三千里，深宫二十年。一声何满子，双泪落君前。",
					"name":"graceUI - 小码",
					"face":"https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png",
					"date":"08/10 08:00"
				},
				{
					"content":"而今渐行渐远，渐觉虽悔难追。漫寄消寄息，终久奚为。也拟重论缱绻，争奈翻覆思维。纵再会，只恐恩情，难似当时。",
					"name":"路过繁华",
					"face":"https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
					"date":"02/10 18:00"
				},
				{
					"content":"图片回复，点击图片可以预览......",
					"name":"林夕阳",
					"imgs" : [
						"https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/4.png",
						"https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/3.png",
						"https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/1.png",
					],
					"face":"https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
					"date":"08/12 09:00"
				}
			],
			// 购买选择属性层展示
			attrIsShow : false,
			colorTips : [
				{ name: '灰色', value: '灰色', checked: true },
				{ name: '银色', value: '银色', checked: false}
			],
			colorSelected : "灰色",
			typeTips : [
				{ name: '套餐一', value: '套餐一', checked: true },
				{ name: '套餐二', value: '套餐二', checked: false},
				{ name: '套餐三', value: '套餐三', checked: false}
			],
			typeSelected : "套餐一",
			buyNum : 1
		}
    },
	onLoad:function () {},
	methods:{
		// 分享
		share: function(){uni.showToast({title:'请自行完善分享代码', icon: "none"});},
		// 导航切换
		navChange : function(e){
			this.active = e;
		},
		// 评论图片展示
		showImgs : function(commentsIndex, imgIndex){
			console.log(commentsIndex, imgIndex);
			uni.previewImage({
				urls:this.commentContents[commentsIndex].imgs,
				current:this.commentContents[commentsIndex].imgs[imgIndex]
			})
		},
		//打开属性视图
		buyNow : function(){this.attrIsShow = true;},
		// 关闭属性
		closeAttr : function(){this.attrIsShow = false;},
		// 颜色选择
		change1 : function (e) {this.colorSelected = e;},
		// 类型选择
		change2 : function (e) {this.typeSelected = e;},
		// 购买数量变化
		buyNumChange : function (e) {
			this.buyNum = e[0];
		},
		// 属性提交
		attrSubmit : function(e){
			//后续操作
			uni.showToast({
				title:"属性已经收集,请观察控制台",
				icon:"none"
			});
			//console.log("颜色 : " + this.colorSelected, "类型 : " + this.typeSelected , '数量 : ' + this.buyNum);
			//如果想关闭属性
			uni.navigateTo({
				url:"../order/order"
			})
			this.closeAttr();
		},
		// 返回首页
		gohome : function(){
			uni.switchTab({
				url:'../index/index'
			});
		}
	},
	components:{gracePage, graceNavBar, graceBottomDialog, graceSelectTags, graceNumberBox}
}
</script>
<style>
.grace-common-line{height:16rpx;}
.grace-product-padding{padding:20rpx 25rpx;}
.grace-product-title{line-height:44rpx; font-size:28rpx;}
.grace-product-share{width:80rpx; height:80rpx; text-align:center; font-size:40rpx; color:#FF7900; line-height:80rpx; flex-shrink:0; margin-left:12px;}
.grace-product-share:after{width:0; height:0;}
.grace-product-price{color:#FF7900; line-height:60rpx; font-size:30rpx; font-weight:bold;}
.grace-product-info-img{width:100%;}
.grace-product-attr-info{overflow:hidden; display:flex; justify-content:space-between;  border-bottom:1px solid #F1F1F3; padding-bottom:26rpx;}
.grace-product-attr-info-image{width:120rpx; height:auto; margin-right:10px; flex-shrink:0;}
.grace-product-attr-info-body{width:700rpx;}
.grace-product-attr-info-title{width:100%; font-size:28rpx; color:#333333; display:block;}
.grace-product-attr-info-stone{width:100%; font-size:20rpx; margin-top:8rpx; color:#666666; display:block;}
.icon-close{font-size:30rpx; line-height:80rpx; color:#888888;}
/* 调整宫格大小 */
.grace-grids-items{padding:6rpx 0; width:120rpx;}
.grace-grids-icon{height:50rpx; line-height:50rpx; font-size:40rpx; color:#6B7375;}
.grace-grids-text{line-height:28rpx; font-size:20rpx; margin-top:2px; color:#6B7375;}
.grace-footer-active{color:#FF0036;}
</style>