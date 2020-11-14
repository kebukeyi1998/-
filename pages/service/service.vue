<template>
	<gracePage :customHeader="false">
		<view slot="gBody" id="gBody" class="grace-flex-v1">
			<!-- 搜索组件宽度自适应于外层 -->
			<view style="width:600rpx; margin-left:75rpx; margin-top:25rpx; padding-bottom:25rpx;" id="hSearch">
				<graceSearch background="#F5F6F7" @confirm="search"></graceSearch>
			</view>
			 <view class="grace-space-between">
				<scroll-view scroll-y class="grace-cate-left" :scroll-into-view="leftTo" :style="{height:mainHeight+'px'}">
					<view v-for="(item, index) in mainCate" 
					:key="index" :class="['grace-cate-left-item', currentCateIndex == index ? 'grace-bg-white' : '']" 
					:data-cateleftindex="index"  @tap='changCate' :id="'cateleft_'+index">
						<view :class="['grace-cate-left-item-block', currentCateIndex == index ? 'grace-bg-red' : '']"></view>
						<text class="grace-cate-left-item-txt">{{item.name}}</text>
					</view>
				</scroll-view>
				<scroll-view class="grace-cate-right" scroll-y :scroll-into-view="cateTo" @scroll="rscroll" :style="{height:mainHeight+'px'}">
					<image src="https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg" mode="widthFix" class="grace-cate-banner"></image>
					<block v-for="(cate, index) in mainCate" :key="index">
						<view class="grace-title" :id="'cates_'+index">{{cate.name}}</view>
						<view class="grace-grids">
							<view class="grace-grids-items" v-for="(cates, cateIndex) in cates[index]" :key="cateIndex">
								<image :src="cates.img" class="grace-grids-icon-img" mode="widthFix"></image>
								<view class="grace-grids-text">{{cates.name}}</view>
							</view>
						</view>
					</block>
				</scroll-view>
		  </view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceSearch from "../../graceUI/components/graceSearch.vue";
var pageHeight = 600;
export default{
	data() {
		return {
			currentCateIndex : 0,
			// 左侧滚动定位
			leftTo : '',
			// 产品列表滚动定位
			cateTo: '',
			//分类
			mainCate: [
				{ cateid: 1, name: '热门推荐' },
				{ cateid: 2, name: '促销打折' },
				{ cateid: 3, name: '国际名牌' },
				{ cateid: 4, name: '大衣外套' },
				{ cateid: 5, name: '汽车用品' },
				{ cateid: 6, name: '儿童用品' },
				{ cateid: 7, name: '文具用品' },
				{ cateid: 8, name: '精品男装' },
				{ cateid: 9, name: '精品女装' },
				{ cateid: 10, name: '电脑办公' },
				{ cateid: 11, name: '礼品鲜花' }
			],
			// 产品列表对应分类
			cates:[
				[
					{img:"https://img12.360buyimg.com/n7/jfs/t1/41038/23/8111/125893/5d197f6bE13b5b60b/d096287306d9697d.jpg", name:'笔记本'},
					{img:"https://img13.360buyimg.com/n7/jfs/t18721/244/2119732351/347247/9bdd72d0/5ae2ba64N5dab57c9.png", name:'台式机'},
					{img:"https://m.360buyimg.com/mobilecms/jfs/t1/48251/22/10274/141808/5d780a36E23d69ff5/816d5cdc474282e9.jpg!q30!q70.jpg", name:'手机'},
					{img:"https://img10.360buyimg.com/n7/jfs/t1/79901/27/10437/210203/5d7f6475E0678dd23/26eb0834be711698.jpg", name:'手表'},
					{img:"https://img12.360buyimg.com/n2/jfs/t15646/81/2662960791/222685/9161ae7f/5ab8785dN778e03c9.jpg", name:'男装'},
					{img:"https://img11.360buyimg.com/n2/jfs/t1/46366/31/5365/484786/5d31d47aEf06e8f9c/38eb685c47b2a15c.jpg", name:'女装'},
					{img:"https://img12.360buyimg.com/n1/s200x200_jfs/t1/78036/36/8621/83389/5d6625bdEe5394f5b/c6777e0096ff87af.jpg", name:'书籍'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/7412/27/10868/199847/5c2626f2E8ded84bf/ee6108960eac107d.jpg", name:'玩具'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/33671/4/10988/375316/5cd12c99Ef31f48f5/8cf041207c0d17da.jpg", name:'汽车'},
					{img:"https://img10.360buyimg.com/n7/jfs/t18763/68/2635567752/158546/a0df056e/5b029fd9Na83237cc.jpg", name:'零食'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/12074/33/13864/212796/5ca17746Ecd7af6e9/727c4ed671be8e48.jpg", name:'饮料'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/36557/6/12871/381145/5d0c963eEb96b5b98/5314fab5b9236337.jpg", name:'海鲜'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/26075/10/13907/175170/5ca2ca3dE5a040fb2/7c152ee6ece3892b.jpg", name:'海底捞'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg", name:'小米'},
					{img:"https://img12.360buyimg.com/n7/jfs/t19285/134/1183713143/149950/acf159b1/5ac1bf0eNc32a6018.jpg", name:'华为'},
					{img:"https://img13.360buyimg.com/n7/jfs/t1/38864/2/14683/99870/5d5a7ec6E514e0258/a368e81edc2c32f0.jpg", name:'oppo'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg", name:'苹果'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/8884/8/5241/179708/5bdd30dfEcff8f850/b9a680a960b6ff44.jpg", name:'李宁'}
				],
				[
					{img:"https://img13.360buyimg.com/n7/jfs/t322/22/1539080527/49421/693de9cb/543cfcf0Nf293d4a8.jpg", name:'办公'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1891/106/1814684171/133147/13a3ee92/568e141dNbb27d647.jpg", name:'文具'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/11386/39/7853/151320/5c67b85cE1cb53a00/ff387c45b643f9e6.jpg", name:'童装'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/38461/26/14771/43221/5d5ca9eeE95fba713/8260fd8836bc2f8f.jpg", name:'空调'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/51788/27/9185/57397/5d688550E054cad16/de472aedcad5a582.jpg", name:'净水器'},
					{img:"https://img11.360buyimg.com/n2/jfs/t1/46366/31/5365/484786/5d31d47aEf06e8f9c/38eb685c47b2a15c.jpg", name:'女装'},
					{img:"https://img12.360buyimg.com/n1/s200x200_jfs/t1/78036/36/8621/83389/5d6625bdEe5394f5b/c6777e0096ff87af.jpg", name:'书籍'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/7412/27/10868/199847/5c2626f2E8ded84bf/ee6108960eac107d.jpg", name:'玩具'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/33671/4/10988/375316/5cd12c99Ef31f48f5/8cf041207c0d17da.jpg", name:'汽车'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/41038/23/8111/125893/5d197f6bE13b5b60b/d096287306d9697d.jpg", name:'笔记本'},
					{img:"https://img13.360buyimg.com/n7/jfs/t18721/244/2119732351/347247/9bdd72d0/5ae2ba64N5dab57c9.png", name:'台式机'},
					{img:"https://m.360buyimg.com/mobilecms/jfs/t1/48251/22/10274/141808/5d780a36E23d69ff5/816d5cdc474282e9.jpg!q30!q70.jpg", name:'手机'},
					{img:"https://img10.360buyimg.com/n7/jfs/t1/79901/27/10437/210203/5d7f6475E0678dd23/26eb0834be711698.jpg", name:'手表'},
					{img:"https://img12.360buyimg.com/n2/jfs/t15646/81/2662960791/222685/9161ae7f/5ab8785dN778e03c9.jpg", name:'男装'},
					{img:"https://img11.360buyimg.com/n2/jfs/t1/46366/31/5365/484786/5d31d47aEf06e8f9c/38eb685c47b2a15c.jpg", name:'女装'},
					{img:"https://img12.360buyimg.com/n1/s200x200_jfs/t1/78036/36/8621/83389/5d6625bdEe5394f5b/c6777e0096ff87af.jpg", name:'书籍'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/7412/27/10868/199847/5c2626f2E8ded84bf/ee6108960eac107d.jpg", name:'玩具'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/33671/4/10988/375316/5cd12c99Ef31f48f5/8cf041207c0d17da.jpg", name:'汽车'},
					{img:"https://img10.360buyimg.com/n7/jfs/t18763/68/2635567752/158546/a0df056e/5b029fd9Na83237cc.jpg", name:'零食'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/12074/33/13864/212796/5ca17746Ecd7af6e9/727c4ed671be8e48.jpg", name:'饮料'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/36557/6/12871/381145/5d0c963eEb96b5b98/5314fab5b9236337.jpg", name:'海鲜'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/26075/10/13907/175170/5ca2ca3dE5a040fb2/7c152ee6ece3892b.jpg", name:'海底捞'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg", name:'小米'},
					{img:"https://img12.360buyimg.com/n7/jfs/t19285/134/1183713143/149950/acf159b1/5ac1bf0eNc32a6018.jpg", name:'华为'},
					{img:"https://img13.360buyimg.com/n7/jfs/t1/38864/2/14683/99870/5d5a7ec6E514e0258/a368e81edc2c32f0.jpg", name:'oppo'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg", name:'苹果'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/8884/8/5241/179708/5bdd30dfEcff8f850/b9a680a960b6ff44.jpg", name:'李宁'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/67340/22/1660/178313/5d005973Ec83da71f/c8d887b905ccab1b.jpg", name:'乔丹'}
				],
				[
					{img:"https://img14.360buyimg.com/n7/jfs/t1/33265/40/10735/224576/5ccf9532E4c5cf4de/83366d0baaff27e1.png", name:'lv'},
					{img:"https://img14.360buyimg.com/n7/jfs/t16393/276/2624849592/77771/d2376ac7/5abc9341Nbcb5bbe0.jpg", name:'nick'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/78697/4/8666/29088/5d694324E733154b3/aeacb481051dff21.jpg", name:'阿迪'},
					{img:"https://img12.360buyimg.com/n7/jfs/t3277/20/9010107917/153861/cd572af7/58cb8b97N5fc4d61d.jpg", name:'奔驰'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/26075/10/13907/175170/5ca2ca3dE5a040fb2/7c152ee6ece3892b.jpg", name:'海底捞'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg", name:'小米'},
					{img:"https://img12.360buyimg.com/n7/jfs/t19285/134/1183713143/149950/acf159b1/5ac1bf0eNc32a6018.jpg", name:'华为'},
					{img:"https://img13.360buyimg.com/n7/jfs/t1/38864/2/14683/99870/5d5a7ec6E514e0258/a368e81edc2c32f0.jpg", name:'oppo'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg", name:'苹果'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/8884/8/5241/179708/5bdd30dfEcff8f850/b9a680a960b6ff44.jpg", name:'李宁'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/67340/22/1660/178313/5d005973Ec83da71f/c8d887b905ccab1b.jpg", name:'乔丹'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/51668/19/2231/92757/5d00c1efE52f1e00e/5009644f153ec8d4.jpg", name:'安踏'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/41038/23/8111/125893/5d197f6bE13b5b60b/d096287306d9697d.jpg", name:'笔记本'},
					{img:"https://img13.360buyimg.com/n7/jfs/t18721/244/2119732351/347247/9bdd72d0/5ae2ba64N5dab57c9.png", name:'台式机'},
					{img:"https://m.360buyimg.com/mobilecms/jfs/t1/48251/22/10274/141808/5d780a36E23d69ff5/816d5cdc474282e9.jpg!q30!q70.jpg", name:'手机'},
					{img:"https://img10.360buyimg.com/n7/jfs/t1/79901/27/10437/210203/5d7f6475E0678dd23/26eb0834be711698.jpg", name:'手表'},
					{img:"https://img12.360buyimg.com/n2/jfs/t15646/81/2662960791/222685/9161ae7f/5ab8785dN778e03c9.jpg", name:'男装'},
					{img:"https://img11.360buyimg.com/n2/jfs/t1/46366/31/5365/484786/5d31d47aEf06e8f9c/38eb685c47b2a15c.jpg", name:'女装'},
					{img:"https://img12.360buyimg.com/n1/s200x200_jfs/t1/78036/36/8621/83389/5d6625bdEe5394f5b/c6777e0096ff87af.jpg", name:'书籍'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/7412/27/10868/199847/5c2626f2E8ded84bf/ee6108960eac107d.jpg", name:'玩具'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/33671/4/10988/375316/5cd12c99Ef31f48f5/8cf041207c0d17da.jpg", name:'汽车'},
					{img:"https://img10.360buyimg.com/n7/jfs/t18763/68/2635567752/158546/a0df056e/5b029fd9Na83237cc.jpg", name:'零食'},
					{img:"https://img12.360buyimg.com/n7/jfs/t1/12074/33/13864/212796/5ca17746Ecd7af6e9/727c4ed671be8e48.jpg", name:'饮料'},
					{img:"https://img14.360buyimg.com/n7/jfs/t1/36557/6/12871/381145/5d0c963eEb96b5b98/5314fab5b9236337.jpg", name:'海鲜'},
					{img:"https://img11.360buyimg.com/n7/jfs/t1/26075/10/13907/175170/5ca2ca3dE5a040fb2/7c152ee6ece3892b.jpg", name:'海底捞'}
				]
				//请根据自己的项目自行完善分类数据
			],
			mainHeight : 300
		}
	},
	components:{
		gracePage, graceSearch
	},
	onReady:function(){
		uni.getSystemInfo({
			success: function(res) {
				pageHeight = res.windowHeight;
			},
		});
		setTimeout(()=>{
			uni.createSelectorQuery().select('#gBody').fields(
				{size: true}, (res) => {
					uni.createSelectorQuery().select('#hSearch').fields(
						{size: true}, (res2) => {
							this.mainHeight = res.height - res2.height;
						}
					).exec();
				}
			).exec();
		},1000);
	},
	methods:{
		// 分类切换
		changCate:function(e){
			var cateid     = e.currentTarget.dataset.cateleftindex;
			this.leftTo    = 'cateleft_' + cateid;
			this.currentCateIndex = cateid;
			this.cateTo    = 'cates_' + cateid;
		},
		// 产品区域滚动
		rscroll : function(e){
			var sctop = e.detail.scrollTop;
			this.getIndex(0, sctop);
		},
		// 动态识别分类激活
		getIndex: function (i, sctop){
			var _self = this;
			var query = uni.createSelectorQuery();
			query.select('#cates_' + i).boundingClientRect();
			query.selectViewport().scrollOffset();
			query.exec(function (res){
				if (res[0].top > 0 &&  res[0].top < pageHeight / 2){
					_self.currentCateIndex =  i;
					_self.leftTo           =  'cateleft_' + i;
				}else{
					i++;
					if (i < _self.mainCate.length) { _self.getIndex(i, sctop); }
				}
			});
		},
		// 搜索
		search : function(e){
			console.log(e);
			// 请自行完善搜索功能
			// 可以打开新页面搜索产品
		}
	}
}
</script>
<style>
/* 分类展示 */
.grace-cate-left{width:188rpx; background:#F8F8F8; flex-shrink:0; overflow:hidden;}
.grace-cate-left-item{padding:35rpx 0; display:flex; flex-direction:row; flex-wrap:nowrap; justify-content:space-between;}
.grace-cate-left-item-block{width:10rpx; height:40rpx; background-color:#F8F8F8;}
.grace-cate-left-item-txt{line-height:40rpx; height:40rpx; text-align:center; font-size:26rpx; display:block; width:170rpx;}
.grace-cate-right{width:518rpx; background:#FFFFFF; padding-right:20rpx; font-size:0;}
.grace-cate-banner{font-size:0; width:518rpx;}
.grace-grids-items{width:172rpx;}
</style>