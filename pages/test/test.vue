<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<!-- 示例 1 -->
			<view class="grace-list-items grace-margin-top" @tap="showDialog1">
				<view class="grace-list-body grace-border-b">
					<view class="grace-list-title">
						<text class="grace-list-title-text">普通形式的对话框</text>
						<text class="grace-list-title-desc">点击测试</text>
					</view>
				</view>
			</view>
			<graceBottomDialog ref="graceBottomDialog1" @closeDialog="closeDialog1">
				<view slot="btns" class="grace-space-between">
					<view class="grace-dialog-buttons" @tap="closeDialog1">取消</view>
					<view class="grace-dialog-buttons" style="color:#00B26A;" @tap="confirm1">确定</view>
				</view>
				<view slot="content">
					<view class="content1">普通文本提示 ^_^</view>
				</view>
			</graceBottomDialog>
			
			<!-- 示例 2 -->
			<view class="grace-list-items" @tap="showDialog2">
				<view class="grace-list-body grace-border-b">
					<view class="grace-list-title">
						<text class="grace-list-title-text">图片形式的对话框</text>
						<text class="grace-list-title-desc">点击测试</text>
					</view>
				</view>
			</view>
			<graceBottomDialog ref="graceBottomDialog2" @closeDialog="closeDialog2">
				<view  slot="btns" class="grace-space-between">
					<view class="grace-dialog-buttons" @tap="closeDialog2">取消</view>
					<view class="grace-dialog-buttons" style="color:#00B26A;" @tap="confirm2">确定</view>
				</view>
				<view slot="content" class="grace-img-in">
					<image src="https://graceui.oss-cn-beijing.aliyuncs.com/big.png" style="width:100%;" mode="widthFix"></image>
				</view>
			</graceBottomDialog>
			
			<!-- 示例 3 -->
			<view class="grace-list-items" @tap="showDialog3">
				<view class="grace-list-body grace-border-b">
					<view class="grace-list-title">
						<text class="grace-list-title-text">单选形式的对话框</text>
						<text class="grace-list-title-desc">点击测试</text>
					</view>
				</view>
			</view>
			<graceBottomDialog ref="graceBottomDialog3" @closeDialog="closeDialog3">
				<view class="grace-space-between" slot="btns">
					<view class="grace-dialog-buttons" @tap="closeDialog3">取消</view>
					<view class="grace-dialog-buttons" style="color:#00B26A;" @tap="confirm3">确定</view>
				</view>
				<view slot="content">
					<graceSelectTags itemWidth="230rpx" :items="shang" type="radio" @change="change"></graceSelectTags>
				</view>
			</graceBottomDialog>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceBottomDialog from '../../graceUI/components/graceBottomDialog.vue';
import graceSelectTags from '../../graceUI/components/graceSelectTags.vue';
export default {
    data() {
    	return {
			shang: [
				{ name: '10元', value: '10', checked: true },
				{ name: '20元', value: '20', checked: false },
				{ name: '50元', value: '50', checked: false },
				{ name: '100元', value: '100', checked: false },
				{ name: '200元', value: '200', checked: false },
				{ name: '500元', value: '500', checked: false }
			],
			// 记录客户选择的金额
			shangPrice : 10
		}
    },
	onLoad: function () {},
	methods:{
		// 第1个演示 [ 普通 ]
		showDialog1  : function(){this.$refs.graceBottomDialog1.open();},
		closeDialog1 : function(){this.$refs.graceBottomDialog1.hide();},
		confirm1 : function(){
			this.closeDialog1();
			uni.showToast({title:"您点击了确认按", icon:"none"});
		},
		
		// 第2个演示 [ 图片 ]
		showDialog2  : function(){this.$refs.graceBottomDialog2.open();},
		closeDialog2 : function(){this.$refs.graceBottomDialog2.hide();},
		confirm2 : function(){
			this.closeDialog2();
			uni.showToast({title:"您点击了确认按", icon:"none"});
		},
		
		// 第3个演示 [ 单选 ]
		showDialog3  : function(){this.$refs.graceBottomDialog3.open();},
		closeDialog3 : function(){this.$refs.graceBottomDialog3.hide();},
		confirm3 : function(){
			this.closeDialog3();
			uni.showToast({title:"打赏金额 ￥"+this.shangPrice, icon:"none"});
		},
		change : function(val){
			this.shangPrice = val;
		}
	},
	components:{
		gracePage, graceBottomDialog, graceSelectTags
	}
}
</script>
<style>
/* demo */
.content1{padding:20rpx; text-align:center; line-height:100rpx; background:#F8F8F8;}
.grace-dialog-buttons{width:150rpx; line-height:88rpx; height:88rpx; display:block; overflow:hidden; text-align:center; font-size:26rpx; color:#999999;}
</style>