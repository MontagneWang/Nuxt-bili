<script lang="ts" setup>

// SEO 优化
useSeoMeta({
	title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
	description: '哔哩哔哩是一个以动漫、游戏、音乐等内容为主的视频社区平台，提供直播、课堂、社区中心等多种功能，让用户在观看视频的同时享受互动交流的乐趣。',
	keywords: 'B站,bilibili,哔哩哔哩,动漫,番剧',
})


</script>

<template>
	<!-- 路由链接，<RouterLink> -->
	<NuxtLink to="/">首页</NuxtLink>
	<NuxtLink to="/video">视频页</NuxtLink>
	<!-- 路由出口，<RouterView> -->
	<NuxtPage/>

</template>

<style lang="scss">
/* 修改 vant 主题色 */
:root {
	--van-primary-color: #fb7299 !important;
	--van-back-top-background: #fbfbfb !important;
	--van-back-top-text-color: #666 !important;
}
</style>