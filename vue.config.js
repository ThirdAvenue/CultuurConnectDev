// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CultuurConnectDev/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto', // this line is important for JSON imports
        }
      ]
    }
  }
};
