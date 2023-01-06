const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 lintOnSave: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        additionalData: `@import "~@/styles/variables.scss";`
      },
    },
  },
//     devServer:{
//     host: '192.168.5.27',
//     port:8080, // 启动端口号
//     open:true,  // 启动后是否自动打开网页
//     proxy: { // 配置跨域
//         '/weixin': {
//             /* 目标代理服务器地址 */
//             target: 'http://192.168.5.27:8080',
//             /* 允许跨域 */
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/weixin': '' //规定请求地址以什么作为开头
//             }
//         },
//     },
// },
})
