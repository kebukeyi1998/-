<template>
	<gracePage :isSwitchPage="true" :headerHeight="0">
		<!-- 页面主体插槽 -->
		<view slot="gBody">
			<!-- 页面主体 -->
			<view class="demo_body grace-body">
				<!-- logo -->
				<view class="logo grace-flex grace-nowrap">
					<text class="logo-text">GraceUI</text>
					<view class="logo-ver">3.0</view>
				</view>
				<view class="logo-desc">一套代码多端发布 更丰富 更漂亮 更高效的超级UI</view>
				<!-- 横向展示栏 -->
				<view style="margin-top:50rpx;">
					<graceBoxBanner background="rgba(255,255,255,0.1)" :color="['#FFFFFF', '#FFFFFF', '#FFFFFF']" 
					:fontSize="['32rpx', '22rpx', '22rpx']" :items="items"></graceBoxBanner>
				</view>
				<!-- 白色内容区域 -->
				<view class="white-body">
					<view class="grace-title">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">关于 GraceUI</text>
						<text class="grace-text-small grace-gray">grace.hcoder.net</text>
					</view>
					<view>
						<text class="grace-text grace-black6">GraceUI 是一款极其丰富、成熟的UI框架~ 经过19个月的积极维护及高频更新，已经包含组件、布局、界面库、页面模板等至少150个UI元素。
截止 2020年3月01日 GraceUI 使用用户过万，我们不断收集上万开发者的使用反馈，不断完善！所以 GraceUI 更值得信赖~
因为组件过多及高频更新，我们无法全面演示全部元素及最新版本，我们随机挑选了少部分组件给未使用用户一个简单的体验，全部组件请访问 GraceUI 官网 : grace.hcoder.net，通过手册截图查看效果 (:</text>
					</view>
					<!-- 组件列表区域 -->
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">基础布局 [ {{list1.length}} ]</text>
						<text class="grace-text-small grace-gray">Flex布局 + 定位</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-tags-large grace-bg-blue grace-border-radius margin" v-for="(item, index) in list1" :key="index">{{item}}</text>
					</view>
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">常用样式 [ {{list2.length}} ]</text>
						<text class="grace-text-small grace-gray">常用基础样式</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-tags-large grace-bg-blue grace-border-radius margin" v-for="(item, index) in list2" :key="index">{{item}}</text>
					</view>
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">常用布局 [ {{list3.length}} ]</text>
						<text class="grace-text-small grace-gray">丰富的布局</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-tags-large grace-bg-blue grace-border-radius margin" v-for="(item, index) in list3" :key="index">{{item}}</text>
					</view>
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">常用组件 [ {{list4.length}} ]</text>
						<text class="grace-text-small grace-gray">丰富的组件</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-tags-large grace-bg-blue grace-border-radius margin" v-for="(item, index) in list4" :key="index">{{item}}</text>
					</view>
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">界面库 [ {{list5.length}} ]</text>
						<text class="grace-text-small grace-gray">帮您写好</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-tags-large grace-bg-blue grace-border-radius margin" v-for="(item, index) in list5" :key="index">{{item}}</text>
					</view>
					<view class="grace-title grace-margin-top">
						<view class="grace-title-border"></view>
						<text class="grace-title-text grace-blue">Grace.JS</text>
						<text class="grace-text-small grace-gray">超级工具</text>
					</view>
					<view class="grace-wrap" style="margin-top:16rpx;">
						<text class="grace-text grace-black6">Grace.js 是 GraceUI 框架的 js 框架，目标是 : "简化您的 uni-app 及 微信小程序 api 操作，同时提供丰富、好用的 js 工具，大幅度提高您的开发效率" 。</text>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceBoxBanner from "../../graceUI/components/graceBoxBanner.vue";
import graceDialog from '../../graceUI/components/graceDialog.vue';
// 演示调用 common.js
var common = require('../../common.js');
export default {
	data() {
		return {
			items: [
				['100', '+', '基础组件'],
				['30', '+', '界面模板'],
				['Grace', '.JS', '超级工具'],
				['1万', '+', '开发用户'],
			],
			list1:[],
			list1Str:'页面布局,Flex布局,元素定位 ',
			list2:[],
			list2Str:'文本颜色,背景样式,阴影效果,圆角边框,文本样式,内置图标,样式动画',
			list3:[],
			list3Str:'宫格布局,头部导航,底部导航,切换导航,吸顶容器,动态吸顶,通用列表,滑动列表,新闻列表,评论列表,图文卡片,名片卡片,滚动区域,遮罩弹层,局部选项卡,全屏选项卡,分段切换,折叠面板,普通表格,数据表格,分类展示,横向公告,返回顶部,弹出菜单,功能菜单,时间轴,侧边抽屉,图标分类,横向日期',
			list4:[],
			list4Str:'加载组件,全屏加载,下拉刷新,刷新组件,上拉加载,徽章组件,圆角组件,标签组件,滚动公告,无缝滚动,按钮组件,进度按钮,搜索组件,星级评价,通用标题,倒计时,轮播组件,日历时间,区间滑块,进度圆环,城市选择,地区联动,步骤提示,链接组件,优惠券组件,为空展示,图片选择,多图上传,头像群组,数值动画,顶部消息框,模态对话框,底部对话框,底部消息框,表单元素,表单验证,数值框,数字键盘,可选标签,点选按钮,下拉选择,	文本编辑器,编辑器解析,富文本加强,展开全文,时间选择器,时间段选择器',
			list5:[],
			list5Str:'搜索界面,登录注册,个人中心,购物车,订单中心,图片剪裁,商品详情,图片懒加载,骨架加载,抽奖活动,瀑布流,选择问卷,地址列表,添加地址,证件上传,滚动推荐,短信验证,排行榜,即时通讯'
		}
	},
	onLoad:function(){
		this.list1 = this.list1Str.split(',');
		this.list2 = this.list2Str.split(',');
		this.list3 = this.list3Str.split(',');
		this.list4 = this.list4Str.split(',');
		this.list5 = this.list5Str.split(',');
	},
	methods:{},
	components:{
		gracePage, graceBoxBanner
	}
}
</script>
<style>
page{background-image:linear-gradient(to bottom, #3688FF,#5a52ec); background-repeat:no-repeat; background-size:100% 500rpx; background-color:#F6F7F8;}
.demo_body{margin-top:50rpx;}
/* #ifdef MP-WEIXIN */
page{background-size:100% 600rpx;}
.demo_body{margin-top:100rpx;}
/* #endif */
.logo{margin:10rpx 0;}
.logo-text{font-size:50rpx; color:#FFFFFF; font-weight:bold; opacity:0.88; line-height:60rpx;}
.logo-ver{font-size:26rpx; color:#FFFFFF; margin-left:16rpx; line-height:38rpx; font-weight:bold; opacity:0.9;}
.logo-desc{line-height:38rpx; font-size:26rpx; color:#FFFFFF; opacity:.5; margin-top:20rpx;}
.white-body{width:100%; margin-top:50rpx; background:#FFFFFF; padding:25rpx; box-sizing:border-box; border-radius:10rpx;}
.grace-title-border{width:8rpx; background:#3688FF; margin-right:16rpx; height:28rpx; flex-shrink:0;}

.margin{margin:10rpx 10rpx 0 0;}
</style>