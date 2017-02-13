'use strict';

var SvgStore = require('webpack-svgstore-plugin');

var SRC = './src',
  DIST = './dist'

module.exports = {
  entry: SRC + '/js/index.js',

  output: {
    filename: '[name].js',
    path: DIST
  },

  resolve: {
    root: SRC
  },

  plugins: [
    new SvgStore({
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        style: 'position: absolute; width: 0; height: 0',
      },
      svgoOptions: {
        plugins: [
          { removeTitle: true }
        ]
      }
    })
  ]
};