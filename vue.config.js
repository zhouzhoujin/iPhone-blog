module.exports = {
    devServer: {
        port: 8001,     // 端口
    },
    lintOnSave: false,   // 取消 eslint 验证
    chainWebpack: config => {
		//*//
	
		config
		.plugin('webpack-bundle-analyzer')
		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
		
	},
}

