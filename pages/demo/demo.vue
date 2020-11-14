<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
export default {
    data() {
    	return {}
    },
	methods:{},
	components:{
		gracePage
	}
}
</script>
<style>
</style>