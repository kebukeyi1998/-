<script>
/* 如果您不使用 nvue 请将本页面代码全部复制覆盖到 app.vue */
/* 不使用 nvue 请您同时删除 pages 目录下的全部 .nvue 文件 */
export default {
	onLaunch: function() {},
	onShow: function() {},
	onHide: function() {}
}
</script>
<style>
/* 引入核心样式 */
@import "./graceUI/graceUI.css";
@import "./graceUI/graceIcons.css";  /* 第一套图标 graceui自带的 */

/*
如下修改和补充能够保证不修改 GraceUI 框架的核心源码，当 GraceUI 升级时可以直接使用框架核心文件包覆盖旧文件
请根据业务原型或者设计稿规划出自己的 公共样式, 如:
*/
.color-black{color:#333333;}
.color-red{color:#FF0036;}
/* 修改 graceUI 或者其他 UI 框架示例 如, 修改 grace-title: */
.grace-title{color:#333333;}
navigator{opacity:1; background:none;}
.navigator-hover{background:none; opacity:0.8;}



/*
		全局公共样式和字体图标
	*/
@font-face {
	font-family: yticon;
	font-weight: normal;
	font-style: normal;
	src: url('https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf') format('truetype');
}

.yticon {
	font-family: "yticon" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-yiguoqi1:before {
	content: "\e700";
}

.icon-iconfontshanchu1:before {
	content: "\e619";
}

.icon-iconfontweixin:before {
	content: "\e611";
}

.icon-alipay:before {
	content: "\e636";
}

.icon-shang:before {
	content: "\e624";
}

.icon-shouye:before {
	content: "\e626";
}

.icon-shanchu4:before {
	content: "\e622";
}

.icon-xiaoxi:before {
	content: "\e618";
}

.icon-jiantour-copy:before {
	content: "\e600";
}

.icon-fenxiang2:before {
	content: "\e61e";
}

.icon-pingjia:before {
	content: "\e67b";
}

.icon-daifukuan:before {
	content: "\e68f";
}

.icon-pinglun-copy:before {
	content: "\e612";
}

.icon-dianhua-copy:before {
	content: "\e621";
}

.icon-shoucang:before {
	content: "\e645";
}

.icon-xuanzhong2:before {
	content: "\e62f";
}

.icon-gouwuche_:before {
	content: "\e630";
}

.icon-icon-test:before {
	content: "\e60c";
}

.icon-icon-test1:before {
	content: "\e632";
}

.icon-bianji:before {
	content: "\e646";
}

.icon-jiazailoading-A:before {
	content: "\e8fc";
}

.icon-zuoshang:before {
	content: "\e613";
}

.icon-jia2:before {
	content: "\e60a";
}

.icon-huifu:before {
	content: "\e68b";
}

.icon-sousuo:before {
	content: "\e7ce";
}

.icon-arrow-fine-up:before {
	content: "\e601";
}

.icon-hot:before {
	content: "\e60e";
}

.icon-lishijilu:before {
	content: "\e6b9";
}

.icon-zhengxinchaxun-zhifubaoceping-:before {
	content: "\e616";
}

.icon-naozhong:before {
	content: "\e64a";
}

.icon-xiatubiao--copy:before {
	content: "\e608";
}

.icon-shoucang_xuanzhongzhuangtai:before {
	content: "\e6a9";
}

.icon-jia1:before {
	content: "\e61c";
}

.icon-bangzhu1:before {
	content: "\e63d";
}

.icon-arrow-left-bottom:before {
	content: "\e602";
}

.icon-arrow-right-bottom:before {
	content: "\e603";
}

.icon-arrow-left-top:before {
	content: "\e604";
}

.icon-icon--:before {
	content: "\e744";
}

.icon-zuojiantou-up:before {
	content: "\e605";
}

.icon-xia:before {
	content: "\e62d";
}

.icon--jianhao:before {
	content: "\e60b";
}

.icon-weixinzhifu:before {
	content: "\e61a";
}

.icon-comment:before {
	content: "\e64f";
}

.icon-weixin:before {
	content: "\e61f";
}

.icon-fenlei1:before {
	content: "\e620";
}

.icon-erjiye-yucunkuan:before {
	content: "\e623";
}

.icon-Group-:before {
	content: "\e688";
}

.icon-you:before {
	content: "\e606";
}

.icon-forward:before {
	content: "\e607";
}

.icon-tuijian:before {
	content: "\e610";
}

.icon-bangzhu:before {
	content: "\e679";
}

.icon-share:before {
	content: "\e656";
}

.icon-yiguoqi:before {
	content: "\e997";
}

.icon-shezhi1:before {
	content: "\e61d";
}

.icon-fork:before {
	content: "\e61b";
}

.icon-kafei:before {
	content: "\e66a";
}

.icon-iLinkapp-:before {
	content: "\e654";
}

.icon-saomiao:before {
	content: "\e60d";
}

.icon-shezhi:before {
	content: "\e60f";
}

.icon-shouhoutuikuan:before {
	content: "\e631";
}

.icon-gouwuche:before {
	content: "\e609";
}

.icon-dizhi:before {
	content: "\e614";
}

.icon-fenlei:before {
	content: "\e706";
}

.icon-xingxing:before {
	content: "\e70b";
}

.icon-tuandui:before {
	content: "\e633";
}

.icon-zuanshi:before {
	content: "\e615";
}

.icon-zuo:before {
	content: "\e63c";
}

.icon-shoucang2:before {
	content: "\e62e";
}

.icon-shouhuodizhi:before {
	content: "\e712";
}

.icon-yishouhuo:before {
	content: "\e71a";
}

.icon-dianzan-ash:before {
	content: "\e617";
}



</style>