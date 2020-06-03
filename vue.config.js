const path = require('path');

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind } 
  configureWebpack: function(config) {
    return {
      resolve: {
        // extensions: ['.js', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      }
    };
  },
  productionSourceMap: false,
  devServer: {
    // port: 8888, // 端口号
    // host: 'localhost',
    https: false // https:{type:Boolean}
  }
};
