'use strict';

var __svg__ = {
  path: '../svg/*.svg',
  name: 'sprite.svg'
};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);