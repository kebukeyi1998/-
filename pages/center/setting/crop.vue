<template>
	<view class="grace-img-crop">
		<view class="grace-cropper-wrapper" 
		:style="{height:height + 'px', width:width+'px'}">
			<canvas canvas-id="bgCropper" id="bgCropper"
			class="grace-cropper-bg" :disable-scroll="true"
			@touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
			:style="{width:width+'px', height:height+'px'}"></canvas>
			<canvas canvas-id="prevCropper" id="prevCropper" 
			class="grace-cropper-prev" :disable-scroll="true"></canvas>
		</view>
		<view class="grace-nowrap grace-bg-black">
			<view class="grace-cropper-btn" @tap="selectImg">选择图片</view>
			<view class="grace-cropper-btn" @tap="saveImg">保存头像</view>
		</view>
	</view>
</template>
<script>
// 加载 WeCropper.js 更新于 2020.09.21 请下载新版本框架获取 
import WeCropper from '../../../graceUI/jsTools/WeCropper.js';
export default {
	data() {
		return {
			// WeCropper 对象
			WeCropper    : null,
			// 核心宽度系统会重新计算
			width        : 300,
			// 核心高度系统会重新计算
			height       : 500,
			// 剪裁设置对象
			cropperSets  : {
				height   : 500,
				width    : 300,
				id       : 'bgCropper',
				targetId : 'prevCropper',
				scale    : 2.5,  // 最大缩放倍数
				zoom     : 8,    // 缩放系数
				cut      : {
				  x      : 0,   // 裁剪框x轴起点
				  y      : 0,   // 裁剪框y轴期起点
				  width  : 200, // 裁剪框宽度
				  height : 200  // 裁剪框高度
				}
			}
		}
	},
	onLoad:function(){
		// 获取屏幕信息规划剪裁组件宽度和高度
		const sysinfo               = uni.getSystemInfoSync();
		this.width                  = sysinfo.windowWidth;
		this.height                 = sysinfo.windowHeight - 50;
		this.cropperSets.width      = this.width;
		this.cropperSets.height     = this.height;
		this.cropperSets.pixelRatio = sysinfo.pixelRatio;
		this.cropperSets.cut.x      = (this.width  - this.cropperSets.cut.width) / 2;
		this.cropperSets.cut.y      = (this.height - this.cropperSets.cut.height) / 2;
		this.WeCropper = new WeCropper(this.cropperSets);
	},
	methods:{
		selectImg : function () {
			uni.chooseImage({
				count      : 1, 
				sizeType   : ['compressed'],
				sourceType : ['album', 'camera'],
				success    : (res) => {
					this.WeCropper.pushOrign(res.tempFilePaths[0]);
				}
			});
		},
		touchStart(e) {
			this.WeCropper.touchStart(e);
		},
		touchMove(e) {
			this.WeCropper.touchMove(e);
		},
		touchEnd(e) {
			this.WeCropper.touchEnd(e);
		},
		saveImg : function() {
			uni.showLoading({mask:true, title:""});
			this.WeCropper.getCropperImage((tempFilePath) => {
				if (tempFilePath) {
					console.log(tempFilePath);
					// 01. 此处 h5 端生成 base64 形式的图片数据, 其他端生成一个临时文件地址
					// 02. 可以连接 api 完成图片的上传工作
					// 03. 上传完成后关闭当页面，返回账户中心更新最新的头像地址即可
					// 此处演示了 图片预览
					uni.navigateBack({
						delta:1
					})
					// uni.previewImage({urls:[tempFilePath]});
				} else {
					console.log('获取图片地址失败，请稍后重试')
				}
				uni.hideLoading();
			});
		},
	}
}
</script>
<style>
.grace-img-crop{width:750rpx; background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDkvMjIvMjBpulvaAAAAQ0lEQVRIie3VsQ0AIAwDQZth2H8eljET0JgGiXf/OilNLGmqXJLVtqMNbwcMDAwMDHyck/SxXb/U/04NDAwMDPw+vAGUagde2qkMXgAAAABJRU5ErkJggg=='); height:100%; position:fixed; z-index:90; left:0; top:0;}
/* #ifdef H5 */
.grace-img-crop{top:44px;}
/* #endif */
.grace-cropper-wrapper{overflow:hidden;}
.grace-cropper-bg{}
.grace-cropper-prev{}
.grace-cropper-btn{width:50%; text-align:center; line-height:50px; font-size:28rpx; color:#FFFFFF;}
</style>