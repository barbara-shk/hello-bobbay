const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/barbara/'
    : '/',
    outputDir: path.resolve(__dirname,'./dist'),
  }