<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<form @submit="formSubmit" class="grace-form">
			<!--content -->
				<view class="release-content">
					<view>
						<textarea name="content" placeholder="请简要描述你想要的服务(至少10个字)" class="release-content-input" value="" v-model="textareaVal"/>
					</view>
				</view>
				<!-- 图片选择  -->
				<view class="grace-title grace-margin-top">
					<text class="grace-title-text grace-black">请选择图片</text>
					<text class="grace-text-small grace-gray grace-icons icon-remove" @tap="clearAllImgs">清空图片</text>
				</view>
				<view style="margin-top:5rpx;">
					<graceSelectImgAndUpload :maxFileNumber="9" ref="selectimgandupload" @removeImg="removeImg" 
					@uploaded="imgLoaded" @change="imgsChange" @uploaderror="uploaderror" 
					uploadServerUrl="http://您的上传服务器api地址"></graceSelectImgAndUpload>
				</view>
				
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">预约报修</text>
					<view class="grace-form-body"  @tap="showDialog3"  >
						<input type="text" class="grace-form-input" name="service" :value="service" placeholder="请输入内容"></input>
					</view>
				</view>
				
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">预约地址</text>
					<view class="grace-form-body"  @tap="yyaddress"  >
						<input type="text" class="grace-form-input" name="address" :value="cityvalue"></input>
					</view>
				</view>
				
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">预约时间</text>
					<view class="grace-form-body"  @tap="showDialog1"  >
						<input type="text" class="grace-form-input" :value="appointTime"  placeholder="选择预约上门时间"></input>
					</view>
				</view>
				
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">详细地址</text>
					<view class="grace-form-body">
						<picker class="grace-form-picker" @change="bindPickerChange" :value="areaIndex" :range="area" name="area">
							<text class="grace-text">{{area[areaIndex]}}</text>
							<!-- <text class="grace-icons" style="margin-left:5px;"></text> -->
						</picker>
					</view>
				</view>
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">联系人</text>
					<view class="grace-form-body">
						<input type="text" class="grace-form-input" name="contact"  placeholder="请输入联系人"></input>
					</view>
				</view>
				<view class="grace-form-item grace-border-b">
					<text class="grace-form-label">联系电话</text>
					<view class="grace-form-body">
						<input type="text" class="grace-form-input" name="contact"   placeholder="请输入联系人电话"></input>
					</view>
				</view>
				<view style="padding:22rpx 0;">
					<button class="grace-button" style="line-height:80rpx;" formType="submit">立即发布</button>
				</view>
			</form>
			<!-- 服务选择  -->
			<graceBottomDialog ref="graceBottomDialog3" @closeDialog="closeDialog3">
				<view class="grace-space-between" slot="btns">
					<view class="grace-dialog-buttons" @tap="closeDialog3">取消</view>
					<view class="grace-dialog-buttons" style="color:#00B26A;" @tap="confirm3">确定</view>
				</view>
				<view slot="content">
					<graceSelectTags itemWidth="230rpx" :items="serviceList" type="radio" @change="change"></graceSelectTags>
				</view>
			</graceBottomDialog>
			<!-- 时间日期选择 -->
			<graceBottomDialog :show="show1" >
				<view class="grace-space-between grace-border-b" slot="btns" >
					<view class="grace-dialog-buttons" style="font-size:32rpx" @tap="closeDialog1">取消</view>
					<view class="grace-dialog-buttons" style="color:#e11b01;font-size:32rpx" @tap="confirm1">确定</view>
				</view>
				<view slot="content" style="padding-top:20px">
					<time-selector @selectTime="selectTimeEvent" startTime="08:00" endTime="19:00" selectedTabColor="red" selectedItemColor="#f06c4c"></time-selector>
				</view>
			</graceBottomDialog>
		</view>
	</gracePage>
</template>
<script>
import timeSelector from '@/components/xiujun-time-selector/index.vue';
export default {
	data(){
		return {
			textareaVal:'',
			selectedimgs : [],
			// 上传按钮名称
			subtxt : "发布",
			serviceList: [
				{ name: '室内不热', value: '室内不热', checked: true },
				{ name: '室内漏水', value: '室内漏水', checked: false }
			],
			//预约时间
			appointTime:"",
			// 记录客户选择的金额
			show1:false,
			//服务名
			service:"" ,
			
			areaIndex:'0',
			area:[
				"请输入详细小区门牌号",
				"美景菩提小区",
				"恒大城",
				"瓦屋里小区"
			],
			
			address:"",
			latitude:"",
			longitude:"",
			
			citydefault:'',
			cityvalue:"河南省,郑州市,高新区"
		}
	},
	components:{
		timeSelector
	},
	onLoad : function () {
		// 设置默认值
		setTimeout(()=>{
			this.$refs.selectimgandupload.setItems([
				'https://images.pexels.com/photos/3381028/pexels-photo-3381028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
				'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			]);
		}, 1000);
		this.citydefault = ['河南省', '郑州市', '高新区'];
	},
	methods:{
		showDialog3  : function(){this.$refs.graceBottomDialog3.open();},
		closeDialog3 : function(){this.$refs.graceBottomDialog3.hide();},
		confirm3 : function(){
			this.closeDialog3();
			// uni.showToast({title:"打赏金额 ￥"+this.shangPrice, icon:"none"});
		},
		change : function(val){
			this.service = val;
		},
		/*****************  选择服务的时间 **********************/
		showDialog1 : function(){
			this.show1 = true;
		},
		closeDialog1 : function(){
			this.show1 = false;
		},
		confirm1 : function(){
			this.closeDialog1();
			//uni.showToast({title:"您点击了确认按", icon:"none"});
		},
		selectTimeEvent(e){
			this.appointTime = e
			console.log(e)
		},
		/*****************  选择服务的时间 **********************/
		// 选择图片时引起的数据变化
		imgsChange : function (imgs){this.selectedimgs = imgs;},
		// 提交动态
		submit : function () {
			if(this.selectedimgs.length < 1){uni.showToast({title:"请选择图片", icon:"none"}); return ;}
			this.subtxt = "图片上传中";
			this.$refs.selectimgandupload.upload();
		},
		imgLoaded : function(res){
			this.subtxt = "数据提交中";
			console.log(res);
			console.log(this.textareaVal);
			// 提交数据 图片信息保存在 res 内[ 数组形式 ]
			// 内容保存在 textareaVal
			//连接 api 提交即可
			//提交成功页面跳转
		},
		uploaderror : function(){
			console.log('上传过程遇到错误');
		},
		// 清空图片
		clearAllImgs : function(){
			this.selectedimgs = [];
			this.$refs.selectimgandupload.clearAllImgs();
		},
		removeImg : function (e) {
			console.log('被删除的图片信息');
			console.log(e);
		},

		/*************  省市区********************/
		yyaddress : function(){this.$refs.graceAddressPicker1.open();},
		confirm2:function (e) {
			// 返回选中城市的编号及文本信息
			console.log(e);
			this.cityvalue = e.names[0]+','+e.names[1]+","+e.names[2];
			this.close2();
		},
		close2 : function(){this.$refs.graceAddressPicker1.hide();},
		/*************  省市区********************/
		
		/*********  小区数据 picker的使用 *********/
		bindPickerChange(e){
			console.log(e)
			this.areaIndex=e.detail.value
		},
		/*********  小区数据 *********/
		
	}
}
</script>
<style>
.release-content{margin-top:40rpx; background-color:#f7f7f7; border-radius:10rpx;}
.release-button{background:#3688FF; height:50rpx; padding:0 25rpx; line-height:50rpx; border-radius:50rpx; color:#FFFFFF; font-size:22rpx;}
.release-content-input{height:180rpx; font-size:28rpx; width:650; color:#8e8080; padding:25rpx; line-height:46rpx;}
button{border-radius:40rpx ;background-color: red;color: #fff;}
</style>