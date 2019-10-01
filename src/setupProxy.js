const proxy = require('http-proxy-middleware');

// proxy middleware options
var options = {
    target: 'http://127.0.0.1:7000/', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      '^/server/test_code/': '/test_code/'
    }
  };
   

module.exports = function(app) {
  app.use('/server', proxy(options));
};

