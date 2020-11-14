<template>
	<view>
		<ss-select-city :hotCitys="hotCitys" v-model="value" @on-select="" />
	</view>
</template>

<script>
	import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue'
	
	export default {
		data() {
		  return {
		    hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
		    value: '杭州'
		  }
		},
		components: {
		  ssSelectCity
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
