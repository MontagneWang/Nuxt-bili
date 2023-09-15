// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			// title: 'Nuxt-bili',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'bilibili' },
				{ name: "referrer", content: "no-referrer" }
			],
		},
	},
	modules: [
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
