"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLOUDIMAGE_OPERATIONS = exports.UPLOADER = exports.FILTERS = exports.EFFECTS = exports.TOOLS = void 0;
// 'effects', 'filters', 'adjust', 'crop', 'resize', 'rotate'
var TOOLS = ['adjust', 'effects', 'filters', 'rotate', 'crop', 'resize', 'watermark']; // 'clarity', 'edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'noise', 'old_paper', 'posterize', 'radial_blur',
//   'sin_city', 'tilt_shift'

exports.TOOLS = TOOLS;
var EFFECTS = ['edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'radial_blur', 'sin_city', 'tilt_shift']; // 'colorize', 'contrast', 'cross_process', 'glow_sun', 'hdr_effect', 'jarques', 'love', 'old_boot',
//   'orange_peel', 'pin_hole', 'pleasant', 'sepia', 'sun_rise', 'vintage'

exports.EFFECTS = EFFECTS;
var FILTERS = ['cross_process', 'glow_sun', 'jarques', 'love', 'old_boot', 'orange_peel', 'pin_hole', 'sepia', 'sun_rise', 'vintage'];
exports.FILTERS = FILTERS;
var CLOUDIMAGE_OPERATIONS = ['crop', 'resize', 'rotate'];
exports.CLOUDIMAGE_OPERATIONS = CLOUDIMAGE_OPERATIONS;
var cropPresets = [{
	name: 'original',
	value: 0
}, {
	name: '3 : 3',
	value: 1
}, {
	name: '3.75 : 3',
	value: 1.25
}, {
	name: '6.6 : 3',
	value: 2.2
}];
var resizePresets = [{
  name: 'big square',
  width: 600,
  height: 600,
  ratio: 1
}, {
  name: 'middle square',
  width: 400,
  height: 400,
  ratio: 1
}, {
  name: 'small square',
  width: 200,
  height: 200,
  ratio: 1
}, {
  name: 'small size',
  width: 1200,
  height: 960,
  ratio: 1.25
}, {
  name: 'better quality',
  width: 1920,
  height: 1536,
  ratio: 1.25
}, {
  name: 'small size',
  width: 1200,
  height: 900,
  ratio: 1.33333
}, {
  name: 'better quality',
  width: 1920,
  height: 1440,
  ratio: 1.33333
}, {
  name: 'small size',
  width: 1200,
  height: 800,
  ratio: 1.5
}, {
  name: 'better quality',
  width: 1920,
  height: 1280,
  ratio: 1.5
}, {
  name: 'small size',
  width: 1200,
  height: 675,
  ratio: 1.7777
}, {
  name: 'better quality',
  width: 1920,
  height: 1080,
  ratio: 1.7777
}, {
  name: 'small banner',
  width: 468,
  height: 60,
  ratio: 7.8
}, {
  name: 'big banner',
  width: 936,
  height: 120,
  ratio: 7.8
}];
var UPLOADER = {
  hideCloudimageSwitcher: true,
  processWithCloudimage: false,
  uploadWithCloudimageLink: false,
  elementId: null,
  isLowQualityPreview: true,
  reduceBeforeEdit: {
    mode: 'manual',
    widthLimit: 2000,
    heightLimit: 2000
  },
  cropBeforeEdit: null,
  cropPresets: cropPresets,
  resizePresets: resizePresets
};
exports.UPLOADER = UPLOADER;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOOLS, "TOOLS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(EFFECTS, "EFFECTS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(FILTERS, "FILTERS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(CLOUDIMAGE_OPERATIONS, "CLOUDIMAGE_OPERATIONS", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(cropPresets, "cropPresets", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(resizePresets, "resizePresets", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(UPLOADER, "UPLOADER", "/Users/dmitry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js");
}();

;
