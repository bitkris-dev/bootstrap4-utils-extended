module.exports = (ctx) => ({
	plugins: [
		require("css-mqpacker")(),
		require('cssnano')({ preset: 'default' })
	]
})