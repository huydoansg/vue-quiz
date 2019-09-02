// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@scss': path.resolve(__dirname, 'src/scss')
      }
    }
  },
  css: {
    loaderOptions: {
      // contain only SASS code that doesn't get rendered, such as variables, mixins and functions
      sass: {
        data: `
          @import "@/scss/abstracts/_variables.scss";
          @import "@/scss/abstracts/_mixins.scss";
          @import "@/scss/abstracts/_functions.scss";
        `
      }
    }
  }
};
