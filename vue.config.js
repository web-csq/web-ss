const webpack = require ('webpack')
module.exports = {
  assetsDir: "./",
  publicPath:'./',
  productionSourceMap:false
};

configureWebpack: {

     plugins: [
  
        new webpack.ProvidePlugin({
  
          $:"jquery",
  
          jQuery:"jquery",
  
          "windows.jQuery":"jquery"
  
        })
  
      ]
  
  }
