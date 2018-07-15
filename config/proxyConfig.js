module.exports = {
    proxyList:{
        '/apis': {
            target: 'http://www.ykt.com/',//接口域名
            changeOrigin: true,//是否跨域
            pathRewrite: {
              '^/apis': 'http://127.0.0.1:8080'//需要rewrite重写
            }
          }
    }
}