const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    //开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                // pathRewrite: {'^/api': ''},
                // ws: true, //用于支持websocket
                // changeOrigin: true //用于控制请求头中的host值
            }
        }
    }
})
