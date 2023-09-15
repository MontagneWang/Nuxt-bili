// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	modules:[
		'@vant/nuxt',
	],
	// @ts-ignore
	css: [
		'assets/styles/iconfont.scss',
		'assets/styles/base.scss',
	],
	// 移动端适配
	postcss: {
		plugins: {
			'postcss-px-to-viewport': {
				viewportWidth: 375,
			},
		},
	},
})
