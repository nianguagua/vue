module.exports = {
    proxyList:{
        // '/login': {
        //     target: 'http://192.168.1.101:1837',//接口域名
        //     changeOrigin: true,//是否跨域
        //     pathRewrite: {
        //       '^/login': 'http://127.0.0.1:8080'//需要rewrite重写
        //     }
        //   }
       '/login': {
	        target: 'http://192.168.1.101:1837',//接口域名
	        changeOrigin: true//是否跨域
	      }
        //'/hello':"http://192.168.1.101:1837"
    }
}