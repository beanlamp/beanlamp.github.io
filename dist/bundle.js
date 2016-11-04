/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(11);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.css = __webpack_require__ (3);
	module.exports.js = __webpack_require__ (10);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"preBootstrapCustomizations\":\"/home/christopher/git/beanlamp/src/styles/bootstrap/pre-customizations.scss\",\"bootstrapCustomizations\":\"/home/christopher/git/beanlamp/src/styles/bootstrap/customizations.scss\",\"appStyles\":\"/home/christopher/git/beanlamp/src/styles/app.scss\",\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/home/christopher/git/beanlamp/.bootstraprc\",\"bootstrapPath\":\"/home/christopher/git/beanlamp/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js", function() {
				var newContent = require("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"preBootstrapCustomizations\":\"/home/christopher/git/beanlamp/src/styles/bootstrap/pre-customizations.scss\",\"bootstrapCustomizations\":\"/home/christopher/git/beanlamp/src/styles/bootstrap/customizations.scss\",\"appStyles\":\"/home/christopher/git/beanlamp/src/styles/app.scss\",\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/home/christopher/git/beanlamp/.bootstraprc\",\"bootstrapPath\":\"/home/christopher/git/beanlamp/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"woff2\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"woff\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"truetype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"svg\");\n}\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n\n.glyphicon-plus:before {\n  content: \"+\";\n}\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > th,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn,\n.form-control-static.input-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\n.input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\n.input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\ntr.collapse.in {\n  display: table-row;\n}\n\ntbody.collapse.in {\n  display: table-row-group;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857;\n  color: #333333;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n\n.breadcrumb > .active {\n  color: #777777;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > a:focus,\n.pagination > li > span:hover,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n\n.pagination > .active > a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span,\n.pagination > .active > span:hover,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager:before,\n.pager:after {\n  content: \" \";\n  display: table;\n}\n\n.pager:after {\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #777777;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n\n.label-primary {\n  background-color: #337ab7;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge,\n.btn-group-xs > .btn .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-body:before,\n.panel-body:after {\n  content: \" \";\n  display: table;\n}\n\n.panel-body:after {\n  clear: both;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 20px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-default {\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n\n.panel-primary {\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n\n.panel-success {\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n\n.panel-info {\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n\n.panel-warning {\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n\n.panel-danger {\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header:before,\n.modal-header:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-header:after {\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-footer:after {\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: transparent;\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs {\n  display: none !important;\n}\n\n.visible-sm {\n  display: none !important;\n}\n\n.visible-md {\n  display: none !important;\n}\n\n.visible-lg {\n  display: none !important;\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table !important;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table !important;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table !important;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table !important;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table !important;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtbG9hZGVyL25vLW9wLmpzIiwic291cmNlcyI6WyIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1sb2FkZXIvbm8tb3AuanMiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9faGlkZS10ZXh0LnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19vcGFjaXR5LnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19pbWFnZS5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbGFiZWxzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNldC1maWx0ZXIuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2l6ZS5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzcG9uc2l2ZS12aXNpYmlsaXR5LnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19zaXplLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWItZm9jdXMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2V0LXRleHQuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtZW1waGFzaXMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RleHQtb3ZlcmZsb3cuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3ZlbmRvci1wcmVmaXhlcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYWxlcnRzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19idXR0b25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wYW5lbHMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhZ2luYXRpb24uc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2xpc3QtZ3JvdXAuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi1kaXZpZGVyLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcHJvZ3Jlc3MtYmFyLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL190YWJsZS1yb3cuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2JhY2tncm91bmQtdmFyaWFudC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JhZGllbnRzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19jbGVhcmZpeC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19uYXYtdmVydGljYWwtYWxpZ24uc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2dyaWQtZnJhbWV3b3JrLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmlkLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvc3JjL3N0eWxlcy9ib290c3RyYXAvcHJlLWN1c3RvbWl6YXRpb25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL3NyYy9zdHlsZXMvYm9vdHN0cmFwL2N1c3RvbWl6YXRpb25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25vcm1hbGl6ZS5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcmludC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19nbHlwaGljb25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3NjYWZmb2xkaW5nLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGUuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY29kZS5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19ncmlkLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RhYmxlcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvbXBvbmVudC1hbmltYXRpb25zLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Ryb3Bkb3ducy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b24tZ3JvdXBzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2lucHV0LWdyb3Vwcy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdmJhci5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19icmVhZGNydW1icy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdpbmF0aW9uLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2VyLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xhYmVscy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19iYWRnZXMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fanVtYm90cm9uLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RodW1ibmFpbHMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYWxlcnRzLnNjc3MiLCIvaG9tZS9jaHJpc3RvcGhlci9naXQvYmVhbmxhbXAvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Byb2dyZXNzLWJhcnMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWVkaWEuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbGlzdC1ncm91cC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYW5lbHMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fd2VsbHMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS1lbWJlZC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jbG9zZS5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tb2RhbHMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdG9vbHRpcC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wb3BvdmVycy5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jYXJvdXNlbC5zY3NzIiwiL2hvbWUvY2hyaXN0b3BoZXIvZ2l0L2JlYW5sYW1wL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL191dGlsaXRpZXMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS11dGlsaXRpZXMuc2NzcyIsIi9ob21lL2NocmlzdG9waGVyL2dpdC9iZWFubGFtcC9zcmMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9zcmMvc3R5bGVzL2Jvb3RzdHJhcC9wcmUtY3VzdG9taXphdGlvbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlc1wiO1xuJGljb24tZm9udC1wYXRoOiBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9mb250cy9ib290c3RyYXAvXCI7XG5AaW1wb3J0IFwiLi4vLi4vc3JjL3N0eWxlcy9ib290c3RyYXAvY3VzdG9taXphdGlvbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25vcm1hbGl6ZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ByaW50XCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZ2x5cGhpY29uc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3NjYWZmb2xkaW5nXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdHlwZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvZGVcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19ncmlkXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdGFibGVzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZm9ybXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY29tcG9uZW50LWFuaW1hdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19kcm9wZG93bnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b24tZ3JvdXBzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9faW5wdXQtZ3JvdXBzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbmF2c1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdmJhclwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2JyZWFkY3J1bWJzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFnaW5hdGlvblwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2VyXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbGFiZWxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYmFkZ2VzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fanVtYm90cm9uXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdGh1bWJuYWlsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2FsZXJ0c1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Byb2dyZXNzLWJhcnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tZWRpYVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xpc3QtZ3JvdXBcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYW5lbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL193ZWxsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Jlc3BvbnNpdmUtZW1iZWRcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jbG9zZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21vZGFsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Rvb2x0aXBcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wb3BvdmVyc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Nhcm91c2VsXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdXRpbGl0aWVzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS11dGlsaXRpZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi9zcmMvc3R5bGVzL2FwcC5zY3NzXCI7XG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFV0aWxpdGllc1xuQGltcG9ydCBcIm1peGlucy9oaWRlLXRleHRcIjtcbkBpbXBvcnQgXCJtaXhpbnMvb3BhY2l0eVwiO1xuQGltcG9ydCBcIm1peGlucy9pbWFnZVwiO1xuQGltcG9ydCBcIm1peGlucy9sYWJlbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtZmlsdGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy9yZXNwb25zaXZlLXZpc2liaWxpdHlcIjtcbkBpbXBvcnQgXCJtaXhpbnMvc2l6ZVwiO1xuQGltcG9ydCBcIm1peGlucy90YWItZm9jdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzZXQtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy90ZXh0LWVtcGhhc2lzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtb3ZlcmZsb3dcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdmVuZG9yLXByZWZpeGVzXCI7XG5cbi8vIENvbXBvbmVudHNcbkBpbXBvcnQgXCJtaXhpbnMvYWxlcnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2J1dHRvbnNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFuZWxzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIm1peGlucy9uYXYtZGl2aWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9mb3Jtc1wiO1xuQGltcG9ydCBcIm1peGlucy9wcm9ncmVzcy1iYXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGFibGUtcm93XCI7XG5cbi8vIFNraW5zXG5AaW1wb3J0IFwibWl4aW5zL2JhY2tncm91bmQtdmFyaWFudFwiO1xuQGltcG9ydCBcIm1peGlucy9ib3JkZXItcmFkaXVzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyYWRpZW50c1wiO1xuXG4vLyBMYXlvdXRcbkBpbXBvcnQgXCJtaXhpbnMvY2xlYXJmaXhcIjtcbkBpbXBvcnQgXCJtaXhpbnMvY2VudGVyLWJsb2NrXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi12ZXJ0aWNhbC1hbGlnblwiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkLWZyYW1ld29ya1wiO1xuQGltcG9ydCBcIm1peGlucy9ncmlkXCI7XG4iLCIvLyBDU1MgaW1hZ2UgcmVwbGFjZW1lbnRcbi8vXG4vLyBIZWFkcyB1cCEgdjMgbGF1bmNoZWQgd2l0aCBvbmx5IGAuaGlkZS10ZXh0KClgLCBidXQgcGVyIG91ciBwYXR0ZXJuIGZvclxuLy8gbWl4aW5zIGJlaW5nIHJldXNlZCBhcyBjbGFzc2VzIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhpcyBkb2Vzbid0IGhvbGQgdXAuIEFzXG4vLyBvZiB2My4wLjEgd2UgaGF2ZSBhZGRlZCBgLnRleHQtaGlkZSgpYCBhbmQgZGVwcmVjYXRlZCBgLmhpZGUtdGV4dCgpYC5cbi8vXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2NvbW1pdC9hYTAzOTZlYWU3NTdcblxuLy8gRGVwcmVjYXRlZCBhcyBvZiB2My4wLjEgKGhhcyBiZWVuIHJlbW92ZWQgaW4gdjQpXG5AbWl4aW4gaGlkZS10ZXh0KCkge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gTmV3IG1peGluIHRvIHVzZSBhcyBvZiB2My4wLjFcbkBtaXhpbiB0ZXh0LWhpZGUoKSB7XG4gIEBpbmNsdWRlIGhpZGUtdGV4dDtcbn1cbiIsIi8vIE9wYWNpdHlcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIC8vIElFOCBmaWx0ZXJcbiAgJG9wYWNpdHktaWU6ICgkb3BhY2l0eSAqIDEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cbkBtaXhpbiBpbWctcmVzcG9uc2l2ZSgkZGlzcGxheTogYmxvY2spIHtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gUGFydCAxOiBTZXQgYSBtYXhpbXVtIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvOyAvLyBQYXJ0IDI6IFNjYWxlIHRoZSBoZWlnaHQgYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCwgb3RoZXJ3aXNlIHlvdSBnZXQgc3RyZXRjaGluZ1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS4gTm90ZSB0aGF0IHRoZVxuLy8gc3BlbGxpbmcgb2YgYG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpb2AgaXMgaW50ZW50aW9uYWwuXG5AbWl4aW4gaW1nLXJldGluYSgkZmlsZS0xeCwgJGZpbGUtMngsICR3aWR0aC0xeCwgJGhlaWdodC0xeCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1pbWFnZS1wYXRoKFwiI3skZmlsZS0xeH1cIiksIFwiI3skZmlsZS0xeH1cIikpO1xuXG4gIEBtZWRpYVxuICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgIC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICBtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXG4gIG9ubHkgc2NyZWVuIGFuZCAoICAgICAgICAgICAgICAgIG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTJ4fVwiKSwgXCIjeyRmaWxlLTJ4fVwiKSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkd2lkdGgtMXggJGhlaWdodC0xeDtcbiAgfVxufVxuIiwiLy8gTGFiZWxzXG5cbkBtaXhpbiBsYWJlbC12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgJltocmVmXSB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5IGFuZCBiZWxvdy5cblxuQG1peGluIHJlc2V0LWZpbHRlcigpIHtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcbn1cbiIsIi8vIFJlc2l6ZSBhbnl0aGluZ1xuXG5AbWl4aW4gcmVzaXphYmxlKCRkaXJlY3Rpb24pIHtcbiAgcmVzaXplOiAkZGlyZWN0aW9uOyAvLyBPcHRpb25zOiBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYm90aFxuICBvdmVyZmxvdzogYXV0bzsgLy8gUGVyIENTUzMgVUksIGByZXNpemVgIG9ubHkgYXBwbGllcyB3aGVuIGBvdmVyZmxvd2AgaXNuJ3QgYHZpc2libGVgXG59XG4iLCIvLyBSZXNwb25zaXZlIHV0aWxpdGllc1xuXG4vL1xuLy8gTW9yZSBlYXNpbHkgaW5jbHVkZSBhbGwgdGhlIHN0YXRlcyBmb3IgcmVzcG9uc2l2ZS11dGlsaXRpZXMubGVzcy5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUjeyRwYXJlbnR9ICB7IGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgdHIjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIHRoI3skcGFyZW50fSxcbiAgdGQjeyRwYXJlbnR9ICAgICB7IGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxufVxuXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiByZXNwb25zaXZlLWludmlzaWJpbGl0eSgkcGFyZW50KSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLy8gU2l6aW5nIHNob3J0Y3V0c1xuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gc3F1YXJlKCRzaXplKSB7XG4gIEBpbmNsdWRlIHNpemUoJHNpemUsICRzaXplKTtcbn1cbiIsIi8vIFdlYktpdC1zdHlsZSBmb2N1c1xuXG5AbWl4aW4gdGFiLWZvY3VzKCkge1xuICAvLyBXZWJLaXQtc3BlY2lmaWMuIE90aGVyIGJyb3dzZXJzIHdpbGwga2VlcCB0aGVpciBkZWZhdWx0IG91dGxpbmUgc3R5bGUuXG4gIC8vIChJbml0aWFsbHkgdHJpZWQgdG8gYWxzbyBmb3JjZSBkZWZhdWx0IHZpYSBgb3V0bGluZTogaW5pdGlhbGAsXG4gIC8vIGJ1dCB0aGF0IHNlZW1zIHRvIGVycm9uZW91c2x5IHJlbW92ZSB0aGUgb3V0bGluZSBpbiBGaXJlZm94IGFsdG9nZXRoZXIuKVxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuIiwiQG1peGluIHJlc2V0LXRleHQoKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIE5PVCByZXNldCBmb250LXNpemUuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvLyBGYWxsYmFjayBmb3Igd2hlcmUgYHN0YXJ0YCBpcyBub3Qgc3VwcG9ydGVkXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG4iLCIvLyBUeXBvZ3JhcGh5XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHRleHQtZW1waGFzaXMtdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBUZXh0IG92ZXJmbG93XG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbkBtaXhpbiB0ZXh0LW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjQuXG5cbi8vIC0gQW5pbWF0aW9uc1xuLy8gLSBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyAtIEJveCBzaGFkb3dcbi8vIC0gQm94IHNpemluZ1xuLy8gLSBDb250ZW50IGNvbHVtbnNcbi8vIC0gSHlwaGVuc1xuLy8gLSBQbGFjZWhvbGRlciB0ZXh0XG4vLyAtIFRyYW5zZm9ybWF0aW9uc1xuLy8gLSBUcmFuc2l0aW9uc1xuLy8gLSBVc2VyIFNlbGVjdFxuXG5cbi8vIEFuaW1hdGlvbnNcbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAtby1hbmltYXRpb246ICRhbmltYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1uYW1lKCRuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcbn1cbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24oJGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbkBtaXhpbiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50KCRpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1maWxsLW1vZGUoJGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHkpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG4vL1xuLy8gTm90ZTogRGVwcmVjYXRlZCBgLmJveC1zaGFkb3coKWAgYXMgb2YgdjMuMS4wIHNpbmNlIGFsbCBvZiBCb290c3RyYXAnc1xuLy8gc3VwcG9ydGVkIGJyb3dzZXJzIHRoYXQgaGF2ZSBib3ggc2hhZG93IGNhcGFiaWxpdGllcyBub3cgc3VwcG9ydCBpdC5cblxuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuLy8gQm94IHNpemluZ1xuQG1peGluIGJveC1zaXppbmcoJGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6ICRib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiAkYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG5AbWl4aW4gY29udGVudC1jb2x1bW5zKCRjb2x1bW4tY291bnQsICRjb2x1bW4tZ2FwOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbkBtaXhpbiBoeXBoZW5zKCRtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiAkbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiAkbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiAkbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiAkbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiAkbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuQG1peGluIHNjYWxlKCRyYXRpby4uLikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbn1cblxuQG1peGluIHNjYWxlWCgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xufVxuQG1peGluIHNjYWxlWSgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xufVxuQG1peGluIHNrZXcoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlM2QoJHgsICR5LCAkeikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbn1cbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWCgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xufVxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJG9yaWdpbikge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luOyAvLyBJRTkgb25seVxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG59XG5cblxuLy8gVHJhbnNpdGlvbnNcblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCR0cmFuc2l0aW9uLXByb3BlcnR5Li4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xufVxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJHRyYW5zaXRpb24tZHVyYXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gdHJhbnNpdGlvbi10cmFuc2Zvcm0oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gJHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuQG1peGluIHVzZXItc2VsZWN0KCRzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogJHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogJHNlbGVjdDtcbn1cbiIsIi8vIEFsZXJ0c1xuXG5AbWl4aW4gYWxlcnQtdmFyaWFudCgkYmFja2dyb3VuZCwgJGJvcmRlciwgJHRleHQtY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuXG4gIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgNSUpO1xuICB9XG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuICB9XG59XG4iLCIvLyBCdXR0b24gdmFyaWFudHNcbi8vXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcblxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRjb2xvciwgJGJhY2tncm91bmQsICRib3JkZXIpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMjUlKTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTAlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGJvcmRlciwgMTIlKTtcbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICAgIH1cbiAgfVxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbiAgJi5kaXNhYmxlZCxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLmJhZGdlIHtcbiAgICBjb2xvcjogJGJhY2tncm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbi8vIEJ1dHRvbiBzaXplc1xuQG1peGluIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59XG4iLCIvLyBQYW5lbHNcblxuQG1peGluIHBhbmVsLXZhcmlhbnQoJGJvcmRlciwgJGhlYWRpbmctdGV4dC1jb2xvciwgJGhlYWRpbmctYmctY29sb3IsICRoZWFkaW5nLWJvcmRlcikge1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG5cbiAgJiA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgICBjb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRoZWFkaW5nLWJvcmRlcjtcblxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gICAgLmJhZGdlIHtcbiAgICAgIGNvbG9yOiAkaGVhZGluZy1iZy1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG4gICYgPiAucGFuZWwtZm9vdGVyIHtcbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICB9XG59XG4iLCIvLyBQYWdpbmF0aW9uXG5cbkBtaXhpbiBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgPiBsaSB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBMaXN0IEdyb3Vwc1xuXG5AbWl4aW4gbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoJHN0YXRlLCAkYmFja2dyb3VuZCwgJGNvbG9yKSB7XG4gIC5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuXG4gICAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmLCBidXR0b24mIHRvIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSwgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX1cbiAgfVxuXG4gIGEubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSxcbiAgYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG5cbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gICAgJi5hY3RpdmUsXG4gICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgJi5hY3RpdmU6Zm9jdXMge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhvcml6b250YWwgZGl2aWRlcnNcbi8vXG4vLyBEaXZpZGVycyAoYmFzaWNhbGx5IGFuIGhyKSB3aXRoaW4gZHJvcGRvd25zIGFuZCBuYXYgbGlzdHNcblxuQG1peGluIG5hdi1kaXZpZGVyKCRjb2xvcjogI2U1ZTVlNSkge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpIC0gMSkgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xufVxuIiwiLy8gRm9ybSB2YWxpZGF0aW9uIHN0YXRlc1xuLy9cbi8vIFVzZWQgaW4gZm9ybXMubGVzcyB0byBnZW5lcmF0ZSB0aGUgZm9ybSB2YWxpZGF0aW9uIENTUyBmb3Igd2FybmluZ3MsIGVycm9ycyxcbi8vIGFuZCBzdWNjZXNzZXMuXG5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkdGV4dC1jb2xvcjogIzU1NSwgJGJvcmRlci1jb2xvcjogI2NjYywgJGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUpIHtcbiAgLy8gQ29sb3IgdGhlIGxhYmVsIGFuZCBoZWxwIHRleHRcbiAgLmhlbHAtYmxvY2ssXG4gIC5jb250cm9sLWxhYmVsLFxuICAucmFkaW8sXG4gIC5jaGVja2JveCxcbiAgLnJhZGlvLWlubGluZSxcbiAgLmNoZWNrYm94LWlubGluZSxcbiAgJi5yYWRpbyBsYWJlbCxcbiAgJi5jaGVja2JveCBsYWJlbCxcbiAgJi5yYWRpby1pbmxpbmUgbGFiZWwsXG4gICYuY2hlY2tib3gtaW5saW5lIGxhYmVsICB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICB9XG4gIC8vIFNldCB0aGUgYm9yZGVyIGFuZCBib3ggc2hhZG93IG9uIHNwZWNpZmljIGlucHV0cyB0byBtYXRjaFxuICAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSk7IC8vIFJlZGVjbGFyZSBzbyB0cmFuc2l0aW9ucyB3b3JrXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpO1xuICAgICAgJHNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA2cHggbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCUpO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcbiAgICB9XG4gIH1cbiAgLy8gU2V0IHZhbGlkYXRpb24gc3RhdGVzIGFsc28gZm9yIGFkZG9uc1xuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIH1cbiAgLy8gT3B0aW9uYWwgZmVlZGJhY2sgaWNvblxuICAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbn1cblxuXG4vLyBGb3JtIGNvbnRyb2wgZm9jdXMgc3RhdGVcbi8vXG4vLyBHZW5lcmF0ZSBhIGN1c3RvbWl6ZWQgZm9jdXMgc3RhdGUgYW5kIGZvciBhbnkgaW5wdXQgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbG9yLFxuLy8gd2hpY2ggZGVmYXVsdHMgdG8gdGhlIGAkaW5wdXQtYm9yZGVyLWZvY3VzYCB2YXJpYWJsZS5cbi8vXG4vLyBXZSBoaWdobHkgZW5jb3VyYWdlIHlvdSB0byBub3QgY3VzdG9taXplIHRoZSBkZWZhdWx0IHZhbHVlLCBidXQgaW5zdGVhZCB1c2Vcbi8vIHRoaXMgdG8gdHdlYWsgY29sb3JzIG9uIGFuIGFzLW5lZWRlZCBiYXNpcy4gVGhpcyBhZXN0aGV0aWMgY2hhbmdlIGlzIGJhc2VkIG9uXG4vLyBXZWJLaXQncyBkZWZhdWx0IHN0eWxlcywgYnV0IGFwcGxpY2FibGUgdG8gYSB3aWRlciByYW5nZSBvZiBicm93c2Vycy4gSXRzXG4vLyB1c2FiaWxpdHkgYW5kIGFjY2Vzc2liaWxpdHkgc2hvdWxkIGJlIHRha2VuIGludG8gYWNjb3VudCB3aXRoIGFueSBjaGFuZ2UuXG4vL1xuLy8gRXhhbXBsZSB1c2FnZTogY2hhbmdlIHRoZSBkZWZhdWx0IGJsdWUgYm9yZGVyIGFuZCBzaGFkb3cgdG8gd2hpdGUgZm9yIGJldHRlclxuLy8gY29udHJhc3QgYWdhaW5zdCBhIGRhcmsgZ3JheSBiYWNrZ3JvdW5kLlxuQG1peGluIGZvcm0tY29udHJvbC1mb2N1cygkY29sb3I6ICRpbnB1dC1ib3JkZXItZm9jdXMpIHtcbiAgJGNvbG9yLXJnYmE6IHJnYmEocmVkKCRjb2xvciksIGdyZWVuKCRjb2xvciksIGJsdWUoJGNvbG9yKSwgLjYpO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggJGNvbG9yLXJnYmEpO1xuICB9XG59XG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBSZWxhdGl2ZSB0ZXh0IHNpemUsIHBhZGRpbmcsIGFuZCBib3JkZXItcmFkaWkgY2hhbmdlcyBmb3IgZm9ybSBjb250cm9scy4gRm9yXG4vLyBob3Jpem9udGFsIHNpemluZywgd3JhcCBjb250cm9scyBpbiB0aGUgcHJlZGVmaW5lZCBncmlkIGNsYXNzZXMuIGA8c2VsZWN0PmBcbi8vIGVsZW1lbnQgZ2V0cyBzcGVjaWFsIGxvdmUgYmVjYXVzZSBpdCdzIHNwZWNpYWwsIGFuZCB0aGF0J3MgYSBmYWN0IVxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gaW5wdXQtc2l6ZSgkcGFyZW50LCAkaW5wdXQtaGVpZ2h0LCAkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICAjeyRwYXJlbnR9IHtcbiAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gICAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIHNlbGVjdCN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgfVxuXG4gIHRleHRhcmVhI3skcGFyZW50fSxcbiAgc2VsZWN0W211bHRpcGxlXSN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuIiwiLy8gUHJvZ3Jlc3MgYmFyc1xuXG5AbWl4aW4gcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAvLyBEZXByZWNhdGVkIHBhcmVudCBjbGFzcyByZXF1aXJlbWVudCBhcyBvZiB2My4yLjBcbiAgLnByb2dyZXNzLXN0cmlwZWQgJiB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgfVxufVxuIiwiLy8gVGFibGVzXG5cbkBtaXhpbiB0YWJsZS1yb3ctdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kKSB7XG4gIC8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4gIC8vIGluaGVyaXRhbmNlIHRvIG5lc3RlZCB0YWJsZXMuXG4gIC50YWJsZSA+IHRoZWFkID4gdHIsXG4gIC50YWJsZSA+IHRib2R5ID4gdHIsXG4gIC50YWJsZSA+IHRmb290ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9LFxuICAgID4gdGguI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9ID4gdGQsXG4gICAgJi4jeyRzdGF0ZX0gPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZXMgZm9yIGAudGFibGUtaG92ZXJgXG4gIC8vIE5vdGU6IHRoaXMgaXMgbm90IGF2YWlsYWJsZSBmb3IgY2VsbHMgb3Igcm93cyB3aXRoaW4gYHRoZWFkYCBvciBgdGZvb3RgLlxuICAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyIHtcbiAgICA+IHRkLiN7JHN0YXRlfTpob3ZlcixcbiAgICA+IHRoLiN7JHN0YXRlfTpob3ZlcixcbiAgICAmLiN7JHN0YXRlfTpob3ZlciA+IHRkLFxuICAgICY6aG92ZXIgPiAuI3skc3RhdGV9LFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIGJnLXZhcmlhbnQoJHBhcmVudCwgJGNvbG9yKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgfVxuICBhI3skcGFyZW50fTpob3ZlcixcbiAgYSN7JHBhcmVudH06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOSBhbmQgZG93blxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOSBhbmQgYmVsb3cuXG5AbWl4aW4gZ3JhZGllbnQtdmVydGljYWwoJHN0YXJ0LWNvbG9yOiAjNTU1LCAkZW5kLWNvbG9yOiAjMzMzLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gT3BlcmEgMTJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbkBtaXhpbiBncmFkaWVudC1kaXJlY3Rpb25hbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRkZWc6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xufVxuQG1peGluIGdyYWRpZW50LWhvcml6b250YWwtdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogIzAwYjNlZSwgJG1pZC1jb2xvcjogIzdhNDNiNiwgJGNvbG9yLXN0b3A6IDUwJSwgJGVuZC1jb2xvcjogI2MzMzI1Zikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MCk7IC8vIElFOSBhbmQgZG93biwgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5AbWl4aW4gZ3JhZGllbnQtc3RyaXBlZCgkY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyBDbGVhcmZpeFxuLy9cbi8vIEZvciBtb2Rlcm4gYnJvd3NlcnNcbi8vIDEuIFRoZSBzcGFjZSBjb250ZW50IGlzIG9uZSB3YXkgdG8gYXZvaWQgYW4gT3BlcmEgYnVnIHdoZW4gdGhlXG4vLyAgICBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlIGlzIGluY2x1ZGVkIGFueXdoZXJlIGVsc2UgaW4gdGhlIGRvY3VtZW50LlxuLy8gICAgT3RoZXJ3aXNlIGl0IGNhdXNlcyBzcGFjZSB0byBhcHBlYXIgYXQgdGhlIHRvcCBhbmQgYm90dG9tIG9mIGVsZW1lbnRzXG4vLyAgICB0aGF0IGFyZSBjbGVhcmZpeGVkLlxuLy8gMi4gVGhlIHVzZSBvZiBgdGFibGVgIHJhdGhlciB0aGFuIGBibG9ja2AgaXMgb25seSBuZWNlc3NhcnkgaWYgdXNpbmdcbi8vICAgIGA6YmVmb3JlYCB0byBjb250YWluIHRoZSB0b3AtbWFyZ2lucyBvZiBjaGlsZCBlbGVtZW50cy5cbi8vXG4vLyBTb3VyY2U6IGh0dHA6Ly9uaWNvbGFzZ2FsbGFnaGVyLmNvbS9taWNyby1jbGVhcmZpeC1oYWNrL1xuXG5AbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLy8gMVxuICAgIGRpc3BsYXk6IHRhYmxlOyAvLyAyXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cbiIsIi8vIENlbnRlci1hbGlnbiBhIGJsb2NrIGxldmVsIGVsZW1lbnRcblxuQG1peGluIGNlbnRlci1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iLCIvLyBOYXZiYXIgdmVydGljYWwgYWxpZ25cbi8vXG4vLyBWZXJ0aWNhbGx5IGNlbnRlciBlbGVtZW50cyBpbiB0aGUgbmF2YmFyLlxuLy8gRXhhbXBsZTogYW4gZWxlbWVudCBoYXMgYSBoZWlnaHQgb2YgMzBweCwgc28gd3JpdGUgb3V0IGAubmF2YmFyLXZlcnRpY2FsLWFsaWduKDMwcHgpO2AgdG8gY2FsY3VsYXRlIHRoZSBhcHByb3ByaWF0ZSB0b3AgbWFyZ2luLlxuXG5AbWl4aW4gbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRlbGVtZW50LWhlaWdodCkge1xuICBtYXJnaW4tdG9wOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAoKCRuYXZiYXItaGVpZ2h0IC0gJGVsZW1lbnQtaGVpZ2h0KSAvIDIpO1xufVxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBtYWtlLWdyaWQtY29sdW1ucygkaTogMSwgJGxpc3Q6IFwiLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiKSB7XG4gIEBmb3IgJGkgZnJvbSAoMSArIDEpIHRocm91Z2ggJGdyaWQtY29sdW1ucyB7XG4gICAgJGxpc3Q6IFwiI3skbGlzdH0sIC5jb2wteHMtI3skaX0sIC5jb2wtc20tI3skaX0sIC5jb2wtbWQtI3skaX0sIC5jb2wtbGctI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGNvbGxhcHNpbmcgd2hlbiBlbXB0eVxuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAvLyBJbm5lciBndXR0ZXIgdmlhIHBhZGRpbmdcbiAgICBwYWRkaW5nLWxlZnQ6ICBjZWlsKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gICAgcGFkZGluZy1yaWdodDogZmxvb3IoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgfVxufVxuXG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gZmxvYXQtZ3JpZC1jb2x1bW5zKCRjbGFzcywgJGk6IDEsICRsaXN0OiBcIi5jb2wtI3skY2xhc3N9LSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC0jeyRjbGFzc30tI3skaX1cIjtcbiAgfVxuICAjeyRsaXN0fSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuXG5AbWl4aW4gY2FsYy1ncmlkLWNvbHVtbigkaW5kZXgsICRjbGFzcywgJHR5cGUpIHtcbiAgQGlmICgkdHlwZSA9PSB3aWR0aCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tI3skaW5kZXh9IHtcbiAgICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPiAwKSB7XG4gICAgLmNvbC0jeyRjbGFzc30tcHVzaC0jeyRpbmRleH0ge1xuICAgICAgbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1c2gpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLTAge1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdWxsKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLSN7JGluZGV4fSB7XG4gICAgICByaWdodDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID09IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdWxsLTAge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gb2Zmc2V0KSB7XG4gICAgLmNvbC0jeyRjbGFzc30tb2Zmc2V0LSN7JGluZGV4fSB7XG4gICAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGluZGV4IC8gJGdyaWQtY29sdW1ucykpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIGxvb3AtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zLCAkY2xhc3MsICR0eXBlKSB7XG4gIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJGNvbHVtbnMge1xuICAgIEBpbmNsdWRlIGNhbGMtZ3JpZC1jb2x1bW4oJGksICRjbGFzcywgJHR5cGUpO1xuICB9XG59XG5cblxuLy8gQ3JlYXRlIGdyaWQgZm9yIHNwZWNpZmljIGNsYXNzXG5AbWl4aW4gbWFrZS1ncmlkKCRjbGFzcykge1xuICBAaW5jbHVkZSBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCB3aWR0aCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVsbCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgcHVzaCk7XG4gIEBpbmNsdWRlIGxvb3AtZ3JpZC1jb2x1bW5zKCRncmlkLWNvbHVtbnMsICRjbGFzcywgb2Zmc2V0KTtcbn1cbiIsIi8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG4vLyBDZW50ZXJlZCBjb250YWluZXIgZWxlbWVudFxuQG1peGluIGNvbnRhaW5lci1maXhlZCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAgZmxvb3IoKCRndXR0ZXIgLyAyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNlaWwoKCRndXR0ZXIgLyAyKSk7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG4vLyBDcmVhdGVzIGEgd3JhcHBlciBmb3IgYSBzZXJpZXMgb2YgY29sdW1uc1xuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogIGNlaWwoKCRndXR0ZXIgLyAtMikpO1xuICBtYXJnaW4tcmlnaHQ6IGZsb29yKCgkZ3V0dGVyIC8gLTIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBleHRyYSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS14cy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBtZWRpdW0gY29sdW1uc1xuQG1peGluIG1ha2UtbWQtY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZSB0aGUgbGFyZ2UgY29sdW1uc1xuQG1peGluIG1ha2UtbGctY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuIiwiLy8gQ3VzdG9taXplIEJvb3RzdHJhcCB2YXJpYWJsZXMgdGhhdCBnZXQgaW1wb3J0ZWQgYmVmb3JlIHRoZSBvcmlnaW5hbCBCb290c3RyYXAgdmFyaWFibGVzLlxuLy8gVGh1cyBvcmlnaW5hbCBCb290c3RyYXAgdmFyaWFibGVzIGNhbiBkZXBlbmQgb24gdmFsdWVzIGZyb20gaGVyZS4gQWxsIHRoZSBib290c3RyYXBcbi8vIHZhcmlhYmxlcyBhcmUgY29uZmlndXJlZCB3aXRoICFkZWZhdWx0LCBhbmQgdGh1cywgaWYgeW91IGRlZmluZSB0aGUgdmFyaWFibGUgaGVyZSwgdGhlblxuLy8gdGhhdCB2YWx1ZSBpcyB1c2VkLCByYXRoZXIgdGhhbiB0aGUgZGVmYXVsdC4gSG93ZXZlciwgbWFueSBib290c3RyYXAgdmFyaWFibGVzIGFyZSBkZXJpdmVkXG4vLyBmcm9tIG90aGVyIGJvb3RzdHJhcCB2YXJpYWJsZXMsIGFuZCB0aHVzLCB5b3Ugd2FudCB0byBzZXQgdGhpcyB1cCBiZWZvcmUgd2UgbG9hZCB0aGVcbi8vIG9mZmljaWFsIGJvb3RzdHJhcCB2ZXJzaW9ucy5cbi8vIEZvciBleGFtcGxlLCBfdmFyaWFibGVzLnNjc3MgY29udGFpbnM6XG4vLyAkaW5wdXQtY29sb3I6ICRncmF5ICFkZWZhdWx0O1xuLy8gVGhpcyBtZWFucyB5b3UgY2FuIGRlZmluZSAkaW5wdXQtY29sb3IgYmVmb3JlIHdlIGxvYWQgX3ZhcmlhYmxlcy5zY3NzXG5cbiIsIiRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXI6IGZhbHNlICFkZWZhdWx0O1xuLy9cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLz09IENvbG9yc1xuLy9cbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIEJvb3RzdHJhcC5cblxuJGdyYXktYmFzZTogICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAxMy41JSkgIWRlZmF1bHQ7IC8vICMyMjJcbiRncmF5LWRhcms6ICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDIwJSkgIWRlZmF1bHQ7ICAgLy8gIzMzM1xuJGdyYXk6ICAgICAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMzMuNSUpICFkZWZhdWx0OyAvLyAjNTU1XG4kZ3JheS1saWdodDogICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA0Ni43JSkgIWRlZmF1bHQ7IC8vICM3NzdcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDkzLjUlKSAhZGVmYXVsdDsgLy8gI2VlZVxuXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICBkYXJrZW4oIzQyOGJjYSwgNi41JSkgIWRlZmF1bHQ7IC8vICMzMzdhYjdcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICM1Y2I4NWMgIWRlZmF1bHQ7XG4kYnJhbmQtaW5mbzogICAgICAgICAgICAjNWJjMGRlICFkZWZhdWx0O1xuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICNkOTUzNGYgIWRlZmF1bHQ7XG5cblxuLy89PSBTY2FmZm9sZGluZ1xuLy9cbi8vIyMgU2V0dGluZ3MgZm9yIHNvbWUgb2YgdGhlIG1vc3QgZ2xvYmFsIHN0eWxlcy5cblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBgPGJvZHk+YC5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIEdsb2JhbCB0ZXh0IGNvbG9yIG9uIGA8Ym9keT5gLlxuJHRleHQtY29sb3I6ICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcblxuLy8qKiBHbG9iYWwgdGV4dHVhbCBsaW5rIGNvbG9yLlxuJGxpbmstY29sb3I6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIExpbmsgaG92ZXIgY29sb3Igc2V0IHZpYSBgZGFya2VuKClgIGZ1bmN0aW9uLlxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuLy8qKiBMaW5rIGhvdmVyIGRlY29yYXRpb24uXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWRlZmF1bHQ7XG5cblxuLy89PSBUeXBvZ3JhcGh5XG4vL1xuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktc2VyaWY6ICAgICAgIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZiAhZGVmYXVsdDtcbi8vKiogRGVmYXVsdCBtb25vc3BhY2UgZm9udHMgZm9yIGA8Y29kZT5gLCBgPGtiZD5gLCBhbmQgYDxwcmU+YC5cbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAxNHB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sYXJnZTogICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSkgIWRlZmF1bHQ7IC8vIH4xOHB4XG4kZm9udC1zaXplLXNtYWxsOiAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDsgLy8gfjEycHhcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi42KSkgIWRlZmF1bHQ7IC8vIH4zNnB4XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjE1KSkgIWRlZmF1bHQ7IC8vIH4zMHB4XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuNykpICFkZWZhdWx0OyAvLyB+MjRweFxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSkgIWRlZmF1bHQ7IC8vIH4xOHB4XG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkpICFkZWZhdWx0OyAvLyB+MTJweFxuXG4vLyoqIFVuaXQtbGVzcyBgbGluZS1oZWlnaHRgIGZvciB1c2UgaW4gY29tcG9uZW50cyBsaWtlIGJ1dHRvbnMuXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgIDEuNDI4NTcxNDI5ICFkZWZhdWx0OyAvLyAyMC8xNFxuLy8qKiBDb21wdXRlZCBcImxpbmUtaGVpZ2h0XCIgKGBmb250LXNpemVgICogYGxpbmUtaGVpZ2h0YCkgZm9yIHVzZSB3aXRoIGBtYXJnaW5gLCBgcGFkZGluZ2AsIGV0Yy5cbiRsaW5lLWhlaWdodC1jb21wdXRlZDogICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlKSkgIWRlZmF1bHQ7IC8vIH4yMHB4XG5cbi8vKiogQnkgZGVmYXVsdCwgdGhpcyBpbmhlcml0cyBmcm9tIHRoZSBgPGJvZHk+YC5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAxLjEgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG5cblxuLy89PSBJY29ub2dyYXBoeVxuLy9cbi8vIyMgU3BlY2lmeSBjdXN0b20gbG9jYXRpb24gYW5kIGZpbGVuYW1lIG9mIHRoZSBpbmNsdWRlZCBHbHlwaGljb25zIGljb24gZm9udC4gVXNlZnVsIGZvciB0aG9zZSBpbmNsdWRpbmcgQm9vdHN0cmFwIHZpYSBCb3dlci5cblxuLy8qKiBMb2FkIGZvbnRzIGZyb20gdGhpcyBkaXJlY3RvcnkuXG5cbi8vIFtjb252ZXJ0ZXJdIElmICRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIgaWYgdXNlZCwgcHJvdmlkZSBwYXRoIHJlbGF0aXZlIHRvIHRoZSBhc3NldHMgbG9hZCBwYXRoLlxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBiZWNhdXNlIHNvbWUgYXNzZXQgaGVscGVycywgc3VjaCBhcyBTcHJvY2tldHMsIGRvIG5vdCB3b3JrIHdpdGggZmlsZS1yZWxhdGl2ZSBwYXRocy5cbiRpY29uLWZvbnQtcGF0aDogaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgXCJib290c3RyYXAvXCIsIFwiLi4vZm9udHMvYm9vdHN0cmFwL1wiKSAhZGVmYXVsdDtcblxuLy8qKiBGaWxlIG5hbWUgZm9yIGFsbCBmb250IGZpbGVzLlxuJGljb24tZm9udC1uYW1lOiAgICAgICAgICBcImdseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXJcIiAhZGVmYXVsdDtcbi8vKiogRWxlbWVudCBJRCB3aXRoaW4gU1ZHIGljb24gZmlsZS5cbiRpY29uLWZvbnQtc3ZnLWlkOiAgICAgICAgXCJnbHlwaGljb25zX2hhbGZsaW5nc3JlZ3VsYXJcIiAhZGVmYXVsdDtcblxuXG4vLz09IENvbXBvbmVudHNcbi8vXG4vLyMjIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS4gVmFsdWVzIGJhc2VkIG9uIDE0cHggdGV4dCBhbmQgMS40MjggbGluZS1oZWlnaHQgKH4yMHB4IHRvIHN0YXJ0KS5cblxuJHBhZGRpbmctYmFzZS12ZXJ0aWNhbDogICAgIDZweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDogICAxMnB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAgMTBweCAhZGVmYXVsdDtcbiRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6ICAxNnB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy1zbWFsbC12ZXJ0aWNhbDogICAgNXB4ICFkZWZhdWx0O1xuJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDogIDEwcHggIWRlZmF1bHQ7XG5cbiRwYWRkaW5nLXhzLXZlcnRpY2FsOiAgICAgICAxcHggIWRlZmF1bHQ7XG4kcGFkZGluZy14cy1ob3Jpem9udGFsOiAgICAgNXB4ICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQtbGFyZ2U6ICAgICAgICAgMS4zMzMzMzMzICFkZWZhdWx0OyAvLyBleHRyYSBkZWNpbWFscyBmb3IgV2luIDguMSBDaHJvbWVcbiRsaW5lLWhlaWdodC1zbWFsbDogICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgNnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgIDNweCAhZGVmYXVsdDtcblxuLy8qKiBHbG9iYWwgY29sb3IgZm9yIGFjdGl2ZSBpdGVtcyAoZS5nLiwgbmF2cyBvciBkcm9wZG93bnMpLlxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIEdsb2JhbCBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhY3RpdmUgaXRlbXMgKGUuZy4sIG5hdnMgb3IgZHJvcGRvd25zKS5cbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuLy8qKiBXaWR0aCBvZiB0aGUgYGJvcmRlcmAgZm9yIGdlbmVyYXRpbmcgY2FyZXRzIHRoYXQgaW5kaWNhdGUgZHJvcGRvd25zLlxuJGNhcmV0LXdpZHRoLWJhc2U6ICAgICAgICAgIDRweCAhZGVmYXVsdDtcbi8vKiogQ2FyZXRzIGluY3JlYXNlIHNsaWdodGx5IGluIHNpemUgZm9yIGxhcmdlciBjb21wb25lbnRzLlxuJGNhcmV0LXdpZHRoLWxhcmdlOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuXG4vLz09IFRhYmxlc1xuLy9cbi8vIyMgQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4vLyoqIFBhZGRpbmcgZm9yIGA8dGg+YHMgYW5kIGA8dGQ+YHMuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAgIDhweCAhZGVmYXVsdDtcbi8vKiogUGFkZGluZyBmb3IgY2VsbHMgaW4gYC50YWJsZS1jb25kZW5zZWRgLlxuJHRhYmxlLWNvbmRlbnNlZC1jZWxsLXBhZGRpbmc6ICA1cHggIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIHVzZWQgZm9yIGFsbCB0YWJsZXMuXG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIHVzZWQgZm9yIGAudGFibGUtc3RyaXBlZGAuXG4kdGFibGUtYmctYWNjZW50OiAgICAgICAgICAgICAgICNmOWY5ZjkgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYC50YWJsZS1ob3ZlcmAuXG4kdGFibGUtYmctaG92ZXI6ICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kdGFibGUtYmctYWN0aXZlOiAgICAgICAgICAgICAgICR0YWJsZS1iZy1ob3ZlciAhZGVmYXVsdDtcblxuLy8qKiBCb3JkZXIgY29sb3IgZm9yIHRhYmxlIGFuZCBjZWxsIGJvcmRlcnMuXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PSBCdXR0b25zXG4vL1xuLy8jIyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICBub3JtYWwgIWRlZmF1bHQ7XG5cbiRidG4tZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kYnRuLWRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1kZWZhdWx0LWJvcmRlcjogICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuJGJ0bi1wcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJvcmRlcjogICAgICAgICAgICAgZGFya2VuKCRidG4tcHJpbWFyeS1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLXN1Y2Nlc3MtY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4kYnRuLXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1zdWNjZXNzLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4taW5mby1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbiRidG4taW5mby1ib3JkZXI6ICAgICAgICAgICAgICAgIGRhcmtlbigkYnRuLWluZm8tYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi13YXJuaW5nLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4td2FybmluZy1iZzogICAgICAgICAgICAgICAgICRicmFuZC13YXJuaW5nICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJvcmRlcjogICAgICAgICAgICAgZGFya2VuKCRidG4td2FybmluZy1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLWRhbmdlci1jb2xvcjogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYmc6ICAgICAgICAgICAgICAgICAgJGJyYW5kLWRhbmdlciAhZGVmYXVsdDtcbiRidG4tZGFuZ2VyLWJvcmRlcjogICAgICAgICAgICAgIGRhcmtlbigkYnRuLWRhbmdlci1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2U6ICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cblxuLy89PSBGb3Jtc1xuLy9cbi8vIyNcblxuLy8qKiBgPGlucHV0PmAgYmFja2dyb3VuZCBjb2xvclxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogYDxpbnB1dCBkaXNhYmxlZD5gIGJhY2tncm91bmQgY29sb3JcbiRpbnB1dC1iZy1kaXNhYmxlZDogICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBmb3IgYDxpbnB1dD5gc1xuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4vLyoqIGA8aW5wdXQ+YCBib3JkZXIgY29sb3JcbiRpbnB1dC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbi8vIFRPRE86IFJlbmFtZSBgJGlucHV0LWJvcmRlci1yYWRpdXNgIHRvIGAkaW5wdXQtYm9yZGVyLXJhZGl1cy1iYXNlYCBpbiB2NFxuLy8qKiBEZWZhdWx0IGAuZm9ybS1jb250cm9sYCBib3JkZXIgcmFkaXVzXG4vLyBUaGlzIGhhcyBubyBlZmZlY3Qgb24gYDxzZWxlY3Q+YHMgaW4gc29tZSBicm93c2VycywgZHVlIHRvIHRoZSBsaW1pdGVkIHN0eWxhYmlsaXR5IG9mIGA8c2VsZWN0PmBzIGluIENTUy5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4vLyoqIExhcmdlIGAuZm9ybS1jb250cm9sYCBib3JkZXIgcmFkaXVzXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZTogICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcbi8vKiogU21hbGwgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgaW5wdXRzIG9uIGZvY3VzXG4kaW5wdXQtYm9yZGVyLWZvY3VzOiAgICAgICAgICAgICAjNjZhZmU5ICFkZWZhdWx0O1xuXG4vLyoqIFBsYWNlaG9sZGVyIHRleHQgY29sb3JcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICAgICM5OTkgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBgLmZvcm0tY29udHJvbGAgaGVpZ2h0XG4kaW5wdXQtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuLy8qKiBMYXJnZSBgLmZvcm0tY29udHJvbGAgaGVpZ2h0XG4kaW5wdXQtaGVpZ2h0LWxhcmdlOiAgICAgICAgICAgICAoY2VpbCgkZm9udC1zaXplLWxhcmdlICogJGxpbmUtaGVpZ2h0LWxhcmdlKSArICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCAqIDIpICsgMikgIWRlZmF1bHQ7XG4vLyoqIFNtYWxsIGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtc21hbGw6ICAgICAgICAgICAgIChmbG9vcigkZm9udC1zaXplLXNtYWxsICogJGxpbmUtaGVpZ2h0LXNtYWxsKSArICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCAqIDIpICsgMikgIWRlZmF1bHQ7XG5cbi8vKiogYC5mb3JtLWdyb3VwYCBtYXJnaW5cbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRsZWdlbmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kbGVnZW5kLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3IgZm9yIHRleHR1YWwgaW5wdXQgYWRkb25zXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBCb3JkZXIgY29sb3IgZm9yIHRleHR1YWwgaW5wdXQgYWRkb25zXG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyICFkZWZhdWx0O1xuXG4vLyoqIERpc2FibGVkIGN1cnNvciBmb3IgZm9ybSBjb250cm9scyBhbmQgYnV0dG9ucy5cbiRjdXJzb3ItZGlzYWJsZWQ6ICAgICAgICAgICAgICAgIG5vdC1hbGxvd2VkICFkZWZhdWx0O1xuXG5cbi8vPT0gRHJvcGRvd25zXG4vL1xuLy8jIyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbi8vKiogQmFja2dyb3VuZCBmb3IgdGhlIGRyb3Bkb3duIG1lbnUuXG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBEcm9wZG93biBtZW51IGBib3JkZXItY29sb3JgLlxuJGRyb3Bkb3duLWJvcmRlcjogICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMTUpICFkZWZhdWx0O1xuLy8qKiBEcm9wZG93biBtZW51IGBib3JkZXItY29sb3JgICoqZm9yIElFOCoqLlxuJGRyb3Bkb3duLWZhbGxiYWNrLWJvcmRlcjogICAgICAgI2NjYyAhZGVmYXVsdDtcbi8vKiogRGl2aWRlciBjb2xvciBmb3IgYmV0d2VlbiBkcm9wZG93biBpdGVtcy5cbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICNlNWU1ZTUgIWRlZmF1bHQ7XG5cbi8vKiogRHJvcGRvd24gbGluayB0ZXh0IGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbi8vKiogSG92ZXIgY29sb3IgZm9yIGRyb3Bkb3duIGxpbmtzLlxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgZGFya2VuKCRncmF5LWRhcmssIDUlKSAhZGVmYXVsdDtcbi8vKiogSG92ZXIgYmFja2dyb3VuZCBmb3IgZHJvcGRvd24gbGlua3MuXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4vLyoqIEFjdGl2ZSBkcm9wZG93biBtZW51IGl0ZW0gdGV4dCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBBY3RpdmUgZHJvcGRvd24gbWVudSBpdGVtIGJhY2tncm91bmQgY29sb3IuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuLy8qKiBEaXNhYmxlZCBkcm9wZG93biBtZW51IGl0ZW0gYmFja2dyb3VuZCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyoqIFRleHQgY29sb3IgZm9yIGhlYWRlcnMgd2l0aGluIGRyb3Bkb3duIG1lbnVzLlxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogRGVwcmVjYXRlZCBgJGRyb3Bkb3duLWNhcmV0LWNvbG9yYCBhcyBvZiB2My4xLjBcbiRkcm9wZG93bi1jYXJldC1jb2xvcjogICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG5cblxuLy8tLSBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG4vL1xuLy8gTm90ZTogVGhlc2UgdmFyaWFibGVzIGFyZSBub3QgZ2VuZXJhdGVkIGludG8gdGhlIEN1c3RvbWl6ZXIuXG5cbiR6aW5kZXgtbmF2YmFyOiAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG4kemluZGV4LW5hdmJhci1maXhlZDogICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZ3JvdW5kOiAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG5cblxuLy89PSBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXG4vL1xuLy8jIyBEZWZpbmUgdGhlIGJyZWFrcG9pbnRzIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLCBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXhzYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4teHM6ICAgICAgICAgICAgICAgICAgNDgwcHggIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4teHMtbWluYCBhcyBvZiB2My4yLjBcbiRzY3JlZW4teHMtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi14cyAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1waG9uZWAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXBob25lOiAgICAgICAgICAgICAgICRzY3JlZW4teHMtbWluICFkZWZhdWx0O1xuXG4vLyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1zbWAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDc2OHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1zbS1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXNtICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXRhYmxldGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXRhYmxldDogICAgICAgICAgICAgICRzY3JlZW4tc20tbWluICFkZWZhdWx0O1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLW1kYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbWQ6ICAgICAgICAgICAgICAgICAgOTkycHggIWRlZmF1bHQ7XG4kc2NyZWVuLW1kLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tbWQgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tZGVza3RvcGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWRlc2t0b3A6ICAgICAgICAgICAgICRzY3JlZW4tbWQtbWluICFkZWZhdWx0O1xuXG4vLyBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3Bcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1sZ2AgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWxnOiAgICAgICAgICAgICAgICAgIDEyMDBweCAhZGVmYXVsdDtcbiRzY3JlZW4tbGctbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1sZyAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1sZy1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGctZGVza3RvcDogICAgICAgICAgJHNjcmVlbi1sZy1taW4gIWRlZmF1bHQ7XG5cbi8vIFNvIG1lZGlhIHF1ZXJpZXMgZG9uJ3Qgb3ZlcmxhcCB3aGVuIHJlcXVpcmVkLCBwcm92aWRlIGEgbWF4aW11bVxuJHNjcmVlbi14cy1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1zbS1taW4gLSAxKSAhZGVmYXVsdDtcbiRzY3JlZW4tc20tbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbWQtbWluIC0gMSkgIWRlZmF1bHQ7XG4kc2NyZWVuLW1kLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLWxnLW1pbiAtIDEpICFkZWZhdWx0O1xuXG5cbi8vPT0gR3JpZCBzeXN0ZW1cbi8vXG4vLyMjIERlZmluZSB5b3VyIGN1c3RvbSByZXNwb25zaXZlIGdyaWQuXG5cbi8vKiogTnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWQuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgYmV0d2VlbiBjb2x1bW5zLiBHZXRzIGRpdmlkZWQgaW4gaGFsZiBmb3IgdGhlIGxlZnQgYW5kIHJpZ2h0LlxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4vLyBOYXZiYXIgY29sbGFwc2Vcbi8vKiogUG9pbnQgYXQgd2hpY2ggdGhlIG5hdmJhciBiZWNvbWVzIHVuY29sbGFwc2VkLlxuJGdyaWQtZmxvYXQtYnJlYWtwb2ludDogICAgICRzY3JlZW4tc20tbWluICFkZWZhdWx0O1xuLy8qKiBQb2ludCBhdCB3aGljaCB0aGUgbmF2YmFyIGJlZ2lucyBjb2xsYXBzaW5nLlxuJGdyaWQtZmxvYXQtYnJlYWtwb2ludC1tYXg6ICgkZ3JpZC1mbG9hdC1icmVha3BvaW50IC0gMSkgIWRlZmF1bHQ7XG5cblxuLy89PSBDb250YWluZXIgc2l6ZXNcbi8vXG4vLyMjIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbi8vIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuJGNvbnRhaW5lci10YWJsZXQ6ICAgICAgICAgICAgICg3MjBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1zbS1taW5gIGFuZCB1cC5cbiRjb250YWluZXItc206ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLXRhYmxldCAhZGVmYXVsdDtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3BcbiRjb250YWluZXItZGVza3RvcDogICAgICAgICAgICAoOTQwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tbWQtbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLW1kOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1kZXNrdG9wICFkZWZhdWx0O1xuXG4vLyBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbiRjb250YWluZXItbGFyZ2UtZGVza3RvcDogICAgICAoMTE0MHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLWxnLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1sZzogICAgICAgICAgICAgICAgICRjb250YWluZXItbGFyZ2UtZGVza3RvcCAhZGVmYXVsdDtcblxuXG4vLz09IE5hdmJhclxuLy9cbi8vIyNcblxuLy8gQmFzaWNzIG9mIGEgbmF2YmFyXG4kbmF2YmFyLWhlaWdodDogICAgICAgICAgICAgICAgICAgIDUwcHggIWRlZmF1bHQ7XG4kbmF2YmFyLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICRsaW5lLWhlaWdodC1jb21wdXRlZCAhZGVmYXVsdDtcbiRuYXZiYXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsOiAgICAgICAgZmxvb3IoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKSAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbDogICAgICAgICAgKCgkbmF2YmFyLWhlaWdodCAtICRsaW5lLWhlaWdodC1jb21wdXRlZCkgLyAyKSAhZGVmYXVsdDtcbiRuYXZiYXItY29sbGFwc2UtbWF4LWhlaWdodDogICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGVmYXVsdC1jb2xvcjogICAgICAgICAgICAgIzc3NyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgI2Y4ZjhmOCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1ib3JkZXI6ICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1iZywgNi41JSkgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhciBsaW5rc1xuJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICM3NzcgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgIzMzMyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICAjNTU1ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWRlZmF1bHQtYmcsIDYuNSUpICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1iZzogICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhciBicmFuZCBsYWJlbFxuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3IsIDEwJSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItYmc6ICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhciB0b2dnbGVcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtaG92ZXItYmc6ICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1pY29uLWJhci1iZzogICAgICAgICM4ODggIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWJvcmRlci1jb2xvcjogICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09PSBJbnZlcnRlZCBuYXZiYXJcbi8vIFJlc2V0IGludmVydGVkIG5hdmJhciBiYXNpY3NcbiRuYXZiYXItaW52ZXJzZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1saWdodCwgMTUlKSAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1iZzogICAgICAgICAgICAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItaW52ZXJzZS1iZywgMTAlKSAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIGxpbmtzXG4kbmF2YmFyLWludmVyc2UtbGluay1jb2xvcjogICAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktbGlnaHQsIDE1JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItaW52ZXJzZS1iZywgMTAlKSAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIzQ0NCAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIEludmVydGVkIG5hdmJhciBicmFuZCBsYWJlbFxuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWludmVyc2UtbGluay1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1icmFuZC1ob3Zlci1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIEludmVydGVkIG5hdmJhciB0b2dnbGVcbiRuYXZiYXItaW52ZXJzZS10b2dnbGUtaG92ZXItYmc6ICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS10b2dnbGUtaWNvbi1iYXItYmc6ICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS10b2dnbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuXG4vLz09IE5hdnNcbi8vXG4vLyMjXG5cbi8vPT09IFNoYXJlZCBuYXYgc3R5bGVzXG4kbmF2LWxpbmstcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgIDEwcHggMTVweCAhZGVmYXVsdDtcbiRuYXYtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJG5hdi1kaXNhYmxlZC1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRuYXYtZGlzYWJsZWQtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vPT0gVGFic1xuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtanVzdGlmaWVkLWFjdGl2ZS1saW5rLWJvcmRlci1jb2xvcjogICAgICRib2R5LWJnICFkZWZhdWx0O1xuXG4vLz09IFBpbGxzXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLz09IFBhZ2luYXRpb25cbi8vXG4vLyMjXG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFnZXJcbi8vXG4vLyMjXG5cbiRwYWdlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYm9yZGVyICFkZWZhdWx0O1xuJHBhZ2VyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuJHBhZ2VyLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24taG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwYWdlci1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdlci1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuJHBhZ2VyLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy89PSBKdW1ib3Ryb25cbi8vXG4vLyMjXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRqdW1ib3Ryb24taGVhZGluZy1jb2xvcjogICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWZvbnQtc2l6ZTogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24taGVhZGluZy1mb250LXNpemU6ICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpICFkZWZhdWx0O1xuXG5cbi8vPT0gRm9ybSBzdGF0ZXMgYW5kIGFsZXJ0c1xuLy9cbi8vIyMgRGVmaW5lIGNvbG9ycyBmb3IgZm9ybSBmZWVkYmFjayBzdGF0ZXMgYW5kLCBieSBkZWZhdWx0LCBhbGVydHMuXG5cbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICAgICAgICAgICAgICMzYzc2M2QgIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAjZGZmMGQ4ICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLXN1Y2Nlc3MtYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuJHN0YXRlLWluZm8tdGV4dDogICAgICAgICAgICAgICAgIzMxNzA4ZiAhZGVmYXVsdDtcbiRzdGF0ZS1pbmZvLWJnOiAgICAgICAgICAgICAgICAgICNkOWVkZjcgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1ib3JkZXI6ICAgICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtaW5mby1iZywgLTEwKSwgNyUpICFkZWZhdWx0O1xuXG4kc3RhdGUtd2FybmluZy10ZXh0OiAgICAgICAgICAgICAjOGE2ZDNiICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYmc6ICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcbiRzdGF0ZS13YXJuaW5nLWJvcmRlcjogICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS13YXJuaW5nLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1kYW5nZXItdGV4dDogICAgICAgICAgICAgICNhOTQ0NDIgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAjZjJkZWRlICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLWRhbmdlci1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG5cbi8vPT0gVG9vbHRpcHNcbi8vXG4vLyMjXG5cbi8vKiogVG9vbHRpcCBtYXggd2lkdGhcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIHRleHQgY29sb3JcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgYmFja2dyb3VuZCBjb2xvclxuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuXG4vLyoqIFRvb2x0aXAgYXJyb3cgd2lkdGhcbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgIDVweCAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCBhcnJvdyBjb2xvclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cblxuLy89PSBQb3BvdmVyc1xuLy9cbi8vIyNcblxuLy8qKiBQb3BvdmVyIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG1heGltdW0gd2lkdGhcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgYm9yZGVyIGNvbG9yXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjIpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGZhbGxiYWNrIGJvcmRlciBjb2xvclxuJHBvcG92ZXItZmFsbGJhY2stYm9yZGVyLWNvbG9yOiAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgdGl0bGUgYmFja2dyb3VuZCBjb2xvclxuJHBvcG92ZXItdGl0bGUtYmc6ICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIGFycm93IHdpZHRoXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgYXJyb3cgY29sb3JcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciBvdXRlciBhcnJvdyB3aWR0aFxuJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg6ICAgICAgICAgICAoJHBvcG92ZXItYXJyb3ctd2lkdGggKyAxKSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBvdXRlciBhcnJvdyBjb2xvclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgICBmYWRlX2luKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgMC4wNSkgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgZmFsbGJhY2sgY29sb3JcbiRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOiAgZGFya2VuKCRwb3BvdmVyLWZhbGxiYWNrLWJvcmRlci1jb2xvciwgMjAlKSAhZGVmYXVsdDtcblxuXG4vLz09IExhYmVsc1xuLy9cbi8vIyNcblxuLy8qKiBEZWZhdWx0IGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1kZWZhdWx0LWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBQcmltYXJ5IGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1wcmltYXJ5LWJnOiAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBTdWNjZXNzIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1zdWNjZXNzLWJnOiAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuLy8qKiBJbmZvIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1pbmZvLWJnOiAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuLy8qKiBXYXJuaW5nIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC13YXJuaW5nLWJnOiAgICAgICAgICAgICRicmFuZC13YXJuaW5nICFkZWZhdWx0O1xuLy8qKiBEYW5nZXIgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWRhbmdlci1iZzogICAgICAgICAgICAgJGJyYW5kLWRhbmdlciAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGxhYmVsIHRleHQgY29sb3JcbiRsYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIERlZmF1bHQgdGV4dCBjb2xvciBvZiBhIGxpbmtlZCBsYWJlbFxuJGxhYmVsLWxpbmstaG92ZXItY29sb3I6ICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IE1vZGFsc1xuLy9cbi8vIyNcblxuLy8qKiBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbi8vKiogUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCB0aXRsZVxuJG1vZGFsLXRpdGxlLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcbi8vKiogTW9kYWwgdGl0bGUgbGluZS1oZWlnaHRcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2YgbW9kYWwgY29udGVudCBhcmVhXG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGNvbnRlbnQgYm9yZGVyIGNvbG9yXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjIpICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBjb250ZW50IGJvcmRlciBjb2xvciAqKmZvciBJRTgqKlxuJG1vZGFsLWNvbnRlbnQtZmFsbGJhY2stYm9yZGVyLWNvbG9yOiAgICAgICAgICAjOTk5ICFkZWZhdWx0O1xuXG4vLyoqIE1vZGFsIGJhY2tkcm9wIGJhY2tncm91bmQgY29sb3JcbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGJhY2tkcm9wIG9wYWNpdHlcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgIC41ICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBoZWFkZXIgYm9yZGVyIGNvbG9yXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAjZTVlNWU1ICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBmb290ZXIgYm9yZGVyIGNvbG9yXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgOTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICA2MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gQWxlcnRzXG4vL1xuLy8jIyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmc6ICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICBib2xkICFkZWZhdWx0O1xuXG4kYWxlcnQtc3VjY2Vzcy1iZzogICAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1pbmZvLWJnOiAgICAgICAgICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LXdhcm5pbmctYmc6ICAgICAgICAgICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG5cblxuLy89PSBQcm9ncmVzcyBiYXJzXG4vL1xuLy8jI1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHdob2xlIHByb2dyZXNzIGNvbXBvbmVudFxuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogUHJvZ3Jlc3MgYmFyIHRleHQgY29sb3JcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIFZhcmlhYmxlIGZvciBzZXR0aW5nIHJvdW5kZWQgY29ybmVycyBvbiBwcm9ncmVzcyBiYXIuXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogU3VjY2VzcyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZzogICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuLy8qKiBXYXJuaW5nIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci13YXJuaW5nLWJnOiAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4vLyoqIERhbmdlciBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItZGFuZ2VyLWJnOiAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG4vLyoqIEluZm8gcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWluZm8tYmc6ICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcblxuXG4vLz09IExpc3QgZ3JvdXBcbi8vXG4vLyMjXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvbiBgLmxpc3QtZ3JvdXAtaXRlbWBcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogYC5saXN0LWdyb3VwLWl0ZW1gIGJvcmRlciBjb2xvclxuJGxpc3QtZ3JvdXAtYm9yZGVyOiAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuLy8qKiBMaXN0IGdyb3VwIGJvcmRlciByYWRpdXNcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHNpbmdsZSBsaXN0IGl0ZW1zIG9uIGhvdmVyXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3Igb2YgYWN0aXZlIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2YgYWN0aXZlIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4vLyoqIEJvcmRlciBjb2xvciBvZiBhY3RpdmUgbGlzdCBlbGVtZW50c1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlcjogICAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3IgZm9yIGNvbnRlbnQgd2l0aGluIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtdGV4dC1jb2xvcjogIGxpZ2h0ZW4oJGxpc3QtZ3JvdXAtYWN0aXZlLWJnLCA0MCUpICFkZWZhdWx0O1xuXG4vLyoqIFRleHQgY29sb3Igb2YgZGlzYWJsZWQgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2YgZGlzYWJsZWQgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBmb3IgY29udGVudCB3aXRoaW4gZGlzYWJsZWQgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWxpbmstY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I6ICAgJGxpc3QtZ3JvdXAtbGluay1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaGVhZGluZy1jb2xvcjogIzMzMyAhZGVmYXVsdDtcblxuXG4vLz09IFBhbmVsc1xuLy9cbi8vIyNcblxuJHBhbmVsLWJnOiAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYW5lbC1ib2R5LXBhZGRpbmc6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kcGFuZWwtaGVhZGluZy1wYWRkaW5nOiAgICAgICAxMHB4IDE1cHggIWRlZmF1bHQ7XG4kcGFuZWwtZm9vdGVyLXBhZGRpbmc6ICAgICAgICAkcGFuZWwtaGVhZGluZy1wYWRkaW5nICFkZWZhdWx0O1xuJHBhbmVsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBCb3JkZXIgY29sb3IgZm9yIGVsZW1lbnRzIHdpdGhpbiBwYW5lbHNcbiRwYW5lbC1pbm5lci1ib3JkZXI6ICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kcGFuZWwtZm9vdGVyLWJnOiAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kcGFuZWwtZGVmYXVsdC10ZXh0OiAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJHBhbmVsLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRwYW5lbC1kZWZhdWx0LWhlYWRpbmctYmc6ICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiRwYW5lbC1wcmltYXJ5LXRleHQ6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFuZWwtcHJpbWFyeS1ib3JkZXI6ICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwYW5lbC1wcmltYXJ5LWhlYWRpbmctYmc6ICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kcGFuZWwtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLXN1Y2Nlc3MtaGVhZGluZy1iZzogICAgJHN0YXRlLXN1Y2Nlc3MtYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC1pbmZvLXRleHQ6ICAgICAgICAgICAgICRzdGF0ZS1pbmZvLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtaW5mby1ib3JkZXI6ICAgICAgICAgICAkc3RhdGUtaW5mby1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtaW5mby1oZWFkaW5nLWJnOiAgICAgICAkc3RhdGUtaW5mby1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLXdhcm5pbmctdGV4dDogICAgICAgICAgJHN0YXRlLXdhcm5pbmctdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC13YXJuaW5nLWJvcmRlcjogICAgICAgICRzdGF0ZS13YXJuaW5nLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC13YXJuaW5nLWhlYWRpbmctYmc6ICAgICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtZGFuZ2VyLWJvcmRlcjogICAgICAgICAkc3RhdGUtZGFuZ2VyLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1kYW5nZXItaGVhZGluZy1iZzogICAgICRzdGF0ZS1kYW5nZXItYmcgIWRlZmF1bHQ7XG5cblxuLy89PSBUaHVtYm5haWxzXG4vL1xuLy8jI1xuXG4vLyoqIFBhZGRpbmcgYXJvdW5kIHRoZSB0aHVtYm5haWwgaW1hZ2VcbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgIDRweCAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJhY2tncm91bmQgY29sb3JcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuLy8qKiBUaHVtYm5haWwgYm9yZGVyIGNvbG9yXG4kdGh1bWJuYWlsLWJvcmRlcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuLy8qKiBUaHVtYm5haWwgYm9yZGVyIHJhZGl1c1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBDdXN0b20gdGV4dCBjb2xvciBmb3IgdGh1bWJuYWlsIGNhcHRpb25zXG4kdGh1bWJuYWlsLWNhcHRpb24tY29sb3I6ICAgICAkdGV4dC1jb2xvciAhZGVmYXVsdDtcbi8vKiogUGFkZGluZyBhcm91bmQgdGhlIHRodW1ibmFpbCBjYXB0aW9uXG4kdGh1bWJuYWlsLWNhcHRpb24tcGFkZGluZzogICA5cHggIWRlZmF1bHQ7XG5cblxuLy89PSBXZWxsc1xuLy9cbi8vIyNcblxuJHdlbGwtYmc6ICAgICAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR3ZWxsLWJvcmRlcjogICAgICAgICAgICAgICAgIGRhcmtlbigkd2VsbC1iZywgNyUpICFkZWZhdWx0O1xuXG5cbi8vPT0gQmFkZ2VzXG4vL1xuLy8jI1xuXG4kYmFkZ2UtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBMaW5rZWQgYmFkZ2UgdGV4dCBjb2xvciBvbiBob3ZlclxuJGJhZGdlLWxpbmstaG92ZXItY29sb3I6ICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRiYWRnZS1iZzogICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyoqIEJhZGdlIHRleHQgY29sb3IgaW4gYWN0aXZlIG5hdiBsaW5rXG4kYmFkZ2UtYWN0aXZlLWNvbG9yOiAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbi8vKiogQmFkZ2UgYmFja2dyb3VuZCBjb2xvciBpbiBhY3RpdmUgbmF2IGxpbmtcbiRiYWRnZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtbGluZS1oZWlnaHQ6ICAgICAgICAgICAxICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgMTBweCAhZGVmYXVsdDtcblxuXG4vLz09IEJyZWFkY3J1bWJzXG4vL1xuLy8jI1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXZlcnRpY2FsOiAgIDhweCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmctaG9yaXpvbnRhbDogMTVweCAhZGVmYXVsdDtcbi8vKiogQnJlYWRjcnVtYiBiYWNrZ3JvdW5kIGNvbG9yXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4vLyoqIEJyZWFkY3J1bWIgdGV4dCBjb2xvclxuJGJyZWFkY3J1bWItY29sb3I6ICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIG9mIGN1cnJlbnQgcGFnZSBpbiB0aGUgYnJlYWRjcnVtYlxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogVGV4dHVhbCBzZXBhcmF0b3IgZm9yIGJldHdlZW4gYnJlYWRjcnVtYiBlbGVtZW50c1xuJGJyZWFkY3J1bWItc2VwYXJhdG9yOiAgICAgICAgICBcIi9cIiAhZGVmYXVsdDtcblxuXG4vLz09IENhcm91c2VsXG4vL1xuLy8jI1xuXG4kY2Fyb3VzZWwtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjYpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cblxuLy89PSBDbG9zZVxuLy9cbi8vIyNcblxuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAwIDFweCAwICNmZmYgIWRlZmF1bHQ7XG5cblxuLy89PSBDb2RlXG4vL1xuLy8jI1xuXG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAjYzcyNTRlICFkZWZhdWx0O1xuJGNvZGUtYmc6ICAgICAgICAgICAgICAgICAgICAgI2Y5ZjJmNCAhZGVmYXVsdDtcblxuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG5cbiRwcmUtYmc6ICAgICAgICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJHByZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gVHlwZVxuLy9cbi8vIyNcblxuLy8qKiBIb3Jpem9udGFsIG9mZnNldCBmb3IgZm9ybXMgYW5kIGxpc3RzLlxuJGNvbXBvbmVudC1vZmZzZXQtaG9yaXpvbnRhbDogMTgwcHggIWRlZmF1bHQ7XG4vLyoqIFRleHQgbXV0ZWQgY29sb3JcbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBBYmJyZXZpYXRpb25zIGFuZCBhY3JvbnltcyBib3JkZXIgY29sb3JcbiRhYmJyLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBIZWFkaW5ncyBzbWFsbCBjb2xvclxuJGhlYWRpbmdzLXNtYWxsLWNvbG9yOiAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgc21hbGwgY29sb3JcbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCbG9ja3F1b3RlIGZvbnQgc2l6ZVxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuLy8qKiBCbG9ja3F1b3RlIGJvcmRlciBjb2xvclxuJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogUGFnZSBoZWFkZXIgYm9yZGVyIGNvbG9yXG4kcGFnZS1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBXaWR0aCBvZiBob3Jpem9udGFsIGRlc2NyaXB0aW9uIGxpc3QgdGl0bGVzXG4kZGwtaG9yaXpvbnRhbC1vZmZzZXQ6ICAgICAgICAkY29tcG9uZW50LW9mZnNldC1ob3Jpem9udGFsICFkZWZhdWx0O1xuLy8qKiBQb2ludCBhdCB3aGljaCAuZGwtaG9yaXpvbnRhbCBiZWNvbWVzIGhvcml6b250YWxcbiRkbC1ob3Jpem9udGFsLWJyZWFrcG9pbnQ6ICAgICRncmlkLWZsb2F0LWJyZWFrcG9pbnQgIWRlZmF1bHQ7XG4vLyoqIEhvcml6b250YWwgbGluZSBjb2xvci5cbiRoci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4iLCIvLyBUaGlzIGdldHMgbG9hZGVkIGFmdGVyIGJvb3RzdHJhcC92YXJpYWJsZXMgaXMgbG9hZGVkIGFuZCBiZWZvcmUgYm9vdHN0cmFwIGlzIGxvYWRlZC5cbi8vIEEgZ29vZCBleGFtcGxlIG9mIHRoaXMgaXMgd2hlbiB5b3Ugd2FudCB0byBvdmVycmlkZSBhIGJvb3RzdHJhcCB2YXJpYWJsZSB0byBiZSBiYXNlZFxuLy8gb24gdGhlIGRlZmF1bHQgdmFsdWUgb2YgYm9vdHN0cmFwLiBUaGlzIGlzIHByZXR0eSBzcGVjaWFsaXplZCBjYXNlLiBUaHVzLCB5b3Ugbm9ybWFsbHlcbi8vIGp1c3Qgb3ZlcnJpZGUgYm9vdHJhcCB2YXJpYWJsZXMgaW4gcHJlQm9vdHN0cmFwQ3VzdG9taXphdGlvbnMgc28gdGhhdCBkZXJpdmVkXG4vLyB2YXJpYWJsZXMgd2lsbCB1c2UgeW91ciBkZWZpbml0aW9uLlxuLy9cbi8vIEZvciBleGFtcGxlLCBpbiBfdmFyaWFibGVzLnNjc3M6XG4vLyAkaW5wdXQtaGVpZ2h0OiAoKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodCkgKyAoJGlucHV0LXBhZGRpbmcteSAqIDIpICsgKCRib3JkZXItd2lkdGggKiAyKSkgIWRlZmF1bHQ7XG4vLyBUaGlzIG1lYW5zIHRoYXQgeW91IGNvdWxkIGRlZmluZSB0aGlzIHlvdXJzZWxmIGluIHByZUJvb3RzdHJhcEN1c3RvbWl6YXRpb25zLiBPciB5b3UgY2FuIGRvXG4vLyB0aGlzIGluIGJvb3RzdHJhcEN1c3RvbWl6YXRpb25zIHRvIG1ha2UgdGhlIGlucHV0IGhlaWdodCAxMCUgYmlnZ2VyIHRoYW4gdGhlIGRlZmF1bHQgY2FsY3VsYXRpb24uXG4vLyBUaHVzIHlvdSBjYW4gbGV2ZXJhZ2UgdGhlIGRlZmF1bHQgY2FsY3VsYXRpb25zLlxuLy8gJGlucHV0LWhlaWdodDogJGlucHV0LWhlaWdodCAqIDEuMTA7XG5cbiIsIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLy9cbi8vIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXG4vLyAyLiBQcmV2ZW50IGlPUyBhbmQgSUUgdGV4dCBzaXplIGFkanVzdCBhZnRlciBkZXZpY2Ugb3JpZW50YXRpb24gY2hhbmdlLFxuLy8gICAgd2l0aG91dCBkaXNhYmxpbmcgdXNlciB6b29tLlxuLy9cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvLyAxXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLy8gMlxufVxuXG4vL1xuLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxuLy9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXG4vLyBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxuLy8gYW5kIEZpcmVmb3guXG4vLyBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxuLy9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vXG4vLyAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxuLy8gMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuLy9cblxuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyAxXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLy8gMlxufVxuXG4vL1xuLy8gUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbi8vIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG4vL1xuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXG4vLyBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXG4vL1xuXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gTGlua3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbi8vXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLy9cbi8vIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgZm9jdXNlZCBlbGVtZW50cyB3aGVuIHRoZXkgYXJlIGFsc28gaW4gYW5cbi8vIGFjdGl2ZS9ob3ZlciBzdGF0ZS5cbi8vXG5cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy9cblxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4vL1xuLy8gQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxuLy8gY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXG4vL1xuXG5tYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8vXG4vLyBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vLyBFbWJlZGRlZCBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXG4vL1xuXG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5cbi8vXG4vLyBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cbi8vXG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gR3JvdXBpbmcgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxuLy9cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cbi8vXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4vLyBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi8vIEZvcm1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcbi8vIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cbi8vXG5cbi8vXG4vLyAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbi8vIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiBpbmhlcml0OyAvLyAxXG4gIGZvbnQ6IGluaGVyaXQ7IC8vIDJcbiAgbWFyZ2luOiAwOyAvLyAzXG59XG5cbi8vXG4vLyBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cbi8vXG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxuLy8gQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cbi8vIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXG4vLyBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXG4vL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLy9cbi8vIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4vLyAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbi8vIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbi8vIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4vLyAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG4vL1xuXG5idXR0b24sXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8vIDFcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxuICBjdXJzb3I6IHBvaW50ZXI7IC8vIDNcbn1cblxuLy9cbi8vIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG4vL1xuXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8vXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG4vL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cbi8vIHRoZSBVQSBzdHlsZXNoZWV0LlxuLy9cblxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vL1xuLy8gSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxuLy8gRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbi8vXG4vLyAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxuLy8gMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cbi8vXG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIDFcbiAgcGFkZGluZzogMDsgLy8gMlxufVxuXG4vL1xuLy8gRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbi8vIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXG4vLyBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXG4vL1xuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy9cbi8vIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy8gMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbi8vXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLy8gMVxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLy8yXG59XG5cbi8vXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbi8vIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcbi8vIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cbi8vXG5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vL1xuLy8gRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxuLy9cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XG59XG5cbi8vXG4vLyAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXG4vLyAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXG4vL1xuXG5sZWdlbmQge1xuICBib3JkZXI6IDA7IC8vIDFcbiAgcGFkZGluZzogMDsgLy8gMlxufVxuXG4vL1xuLy8gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cbi8vXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vXG4vLyBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXG4vLyBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cbi8vXG5cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIFRhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cbi8vXG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLyohIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzcyAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJpbnQgc3R5bGVzLlxuLy8gSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6IGg1YnAuY29tL3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtZWRpYSBwcmludCB7XG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLy8gQmxhY2sgcHJpbnRzIGZhc3RlcjogaDVicC5jb20vc1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYSxcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBhW2hyZWZdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgKFwiIGF0dHIoaHJlZikgXCIpXCI7XG4gICAgfVxuXG4gICAgYWJiclt0aXRsZV06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XG4gICAgfVxuXG4gICAgLy8gRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcbiAgICAvLyBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXG4gICAgYVtocmVmXj1cIiNcIl06YWZ0ZXIsXG4gICAgYVtocmVmXj1cImphdmFzY3JpcHQ6XCJdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICBwcmUsXG4gICAgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDsgLy8gaDVicC5jb20vdFxuICAgIH1cblxuICAgIHRyLFxuICAgIGltZyB7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBwLFxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgb3JwaGFuczogMztcbiAgICAgICAgd2lkb3dzOiAzO1xuICAgIH1cblxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gICAgfVxuXG4gICAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgc3RhcnRcblxuICAgIC8vIEJvb3RzdHJhcCBjb21wb25lbnRzXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idG4sXG4gICAgLmRyb3B1cCA+IC5idG4ge1xuICAgICAgICA+IC5jYXJldCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhYmVsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICB9XG5cbiAgICAudGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgdGQsXG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICB0aCxcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgZW5kXG59XG4iLCIvL1xuLy8gR2x5cGhpY29ucyBmb3IgQm9vdHN0cmFwXG4vL1xuLy8gU2luY2UgaWNvbnMgYXJlIGZvbnRzLCB0aGV5IGNhbiBiZSBwbGFjZWQgYW55d2hlcmUgdGV4dCBpcyBwbGFjZWQgYW5kIGFyZVxuLy8gdGh1cyBhdXRvbWF0aWNhbGx5IHNpemVkIHRvIG1hdGNoIHRoZSBzdXJyb3VuZGluZyBjaGlsZC4gVG8gdXNlLCBjcmVhdGUgYW5cbi8vIGlubGluZSBlbGVtZW50IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNsYXNzZXMsIGxpa2Ugc286XG4vL1xuLy8gPGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj4gU3RhcjwvYT5cblxuQGF0LXJvb3Qge1xuICAvLyBJbXBvcnQgdGhlIGZvbnRzXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xuICAgIHNyYzogdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtZm9udC1wYXRoKCcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0uZW90JyksICcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0uZW90JykpO1xuICAgIHNyYzogdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtZm9udC1wYXRoKCcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0uZW90PyNpZWZpeCcpLCAnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LmVvdD8jaWVmaXgnKSkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtZm9udC1wYXRoKCcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0ud29mZjInKSwgJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS53b2ZmMicpKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1mb250LXBhdGgoJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS53b2ZmJyksICcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0ud29mZicpKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWZvbnQtcGF0aCgnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LnR0ZicpLCAnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LnR0ZicpKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1mb250LXBhdGgoJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS5zdmcjI3skaWNvbi1mb250LXN2Zy1pZH0nKSwgJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS5zdmcjI3skaWNvbi1mb250LXN2Zy1pZH0nKSkgZm9ybWF0KCdzdmcnKTtcbiAgfVxufVxuXG4vLyBDYXRjaGFsbCBiYXNlY2xhc3Ncbi5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLy8gSW5kaXZpZHVhbCBpY29uc1xuLmdseXBoaWNvbi1hc3RlcmlzayAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMDAyYVwiOyB9IH1cbi5nbHlwaGljb24tcGx1cyAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDAwMmJcIjsgfSB9XG4uZ2x5cGhpY29uLWV1cm8sXG4uZ2x5cGhpY29uLWV1ciAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyMGFjXCI7IH0gfVxuLmdseXBoaWNvbi1taW51cyAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjIxMlwiOyB9IH1cbi5nbHlwaGljb24tY2xvdWQgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDI2MDFcIjsgfSB9XG4uZ2x5cGhpY29uLWVudmVsb3BlICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyNzA5XCI7IH0gfVxuLmdseXBoaWNvbi1wZW5jaWwgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjcwZlwiOyB9IH1cbi5nbHlwaGljb24tZ2xhc3MgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDFcIjsgfSB9XG4uZ2x5cGhpY29uLW11c2ljICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDAyXCI7IH0gfVxuLmdseXBoaWNvbi1zZWFyY2ggICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAwM1wiOyB9IH1cbi5nbHlwaGljb24taGVhcnQgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDVcIjsgfSB9XG4uZ2x5cGhpY29uLXN0YXIgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDA2XCI7IH0gfVxuLmdseXBoaWNvbi1zdGFyLWVtcHR5ICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAwN1wiOyB9IH1cbi5nbHlwaGljb24tdXNlciAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDhcIjsgfSB9XG4uZ2x5cGhpY29uLWZpbG0gICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDA5XCI7IH0gfVxuLmdseXBoaWNvbi10aC1sYXJnZSAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxMFwiOyB9IH1cbi5nbHlwaGljb24tdGggICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMTFcIjsgfSB9XG4uZ2x5cGhpY29uLXRoLWxpc3QgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDEyXCI7IH0gfVxuLmdseXBoaWNvbi1vayAgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxM1wiOyB9IH1cbi5nbHlwaGljb24tcmVtb3ZlICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMTRcIjsgfSB9XG4uZ2x5cGhpY29uLXpvb20taW4gICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDE1XCI7IH0gfVxuLmdseXBoaWNvbi16b29tLW91dCAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxNlwiOyB9IH1cbi5nbHlwaGljb24tb2ZmICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMTdcIjsgfSB9XG4uZ2x5cGhpY29uLXNpZ25hbCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDE4XCI7IH0gfVxuLmdseXBoaWNvbi1jb2cgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxOVwiOyB9IH1cbi5nbHlwaGljb24tdHJhc2ggICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjBcIjsgfSB9XG4uZ2x5cGhpY29uLWhvbWUgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDIxXCI7IH0gfVxuLmdseXBoaWNvbi1maWxlICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyMlwiOyB9IH1cbi5nbHlwaGljb24tdGltZSAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjNcIjsgfSB9XG4uZ2x5cGhpY29uLXJvYWQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDI0XCI7IH0gfVxuLmdseXBoaWNvbi1kb3dubG9hZC1hbHQgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyNVwiOyB9IH1cbi5nbHlwaGljb24tZG93bmxvYWQgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjZcIjsgfSB9XG4uZ2x5cGhpY29uLXVwbG9hZCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDI3XCI7IH0gfVxuLmdseXBoaWNvbi1pbmJveCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyOFwiOyB9IH1cbi5nbHlwaGljb24tcGxheS1jaXJjbGUgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjlcIjsgfSB9XG4uZ2x5cGhpY29uLXJlcGVhdCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDMwXCI7IH0gfVxuLmdseXBoaWNvbi1yZWZyZXNoICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzMVwiOyB9IH1cbi5nbHlwaGljb24tbGlzdC1hbHQgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzJcIjsgfSB9XG4uZ2x5cGhpY29uLWxvY2sgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDMzXCI7IH0gfVxuLmdseXBoaWNvbi1mbGFnICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzNFwiOyB9IH1cbi5nbHlwaGljb24taGVhZHBob25lcyAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzVcIjsgfSB9XG4uZ2x5cGhpY29uLXZvbHVtZS1vZmYgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDM2XCI7IH0gfVxuLmdseXBoaWNvbi12b2x1bWUtZG93biAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzN1wiOyB9IH1cbi5nbHlwaGljb24tdm9sdW1lLXVwICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzhcIjsgfSB9XG4uZ2x5cGhpY29uLXFyY29kZSAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDM5XCI7IH0gfVxuLmdseXBoaWNvbi1iYXJjb2RlICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0MFwiOyB9IH1cbi5nbHlwaGljb24tdGFnICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDFcIjsgfSB9XG4uZ2x5cGhpY29uLXRhZ3MgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQyXCI7IH0gfVxuLmdseXBoaWNvbi1ib29rICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0M1wiOyB9IH1cbi5nbHlwaGljb24tYm9va21hcmsgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDRcIjsgfSB9XG4uZ2x5cGhpY29uLXByaW50ICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQ1XCI7IH0gfVxuLmdseXBoaWNvbi1jYW1lcmEgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0NlwiOyB9IH1cbi5nbHlwaGljb24tZm9udCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDdcIjsgfSB9XG4uZ2x5cGhpY29uLWJvbGQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQ4XCI7IH0gfVxuLmdseXBoaWNvbi1pdGFsaWMgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0OVwiOyB9IH1cbi5nbHlwaGljb24tdGV4dC1oZWlnaHQgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTBcIjsgfSB9XG4uZ2x5cGhpY29uLXRleHQtd2lkdGggICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDUxXCI7IH0gfVxuLmdseXBoaWNvbi1hbGlnbi1sZWZ0ICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1MlwiOyB9IH1cbi5nbHlwaGljb24tYWxpZ24tY2VudGVyICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTNcIjsgfSB9XG4uZ2x5cGhpY29uLWFsaWduLXJpZ2h0ICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDU0XCI7IH0gfVxuLmdseXBoaWNvbi1hbGlnbi1qdXN0aWZ5ICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1NVwiOyB9IH1cbi5nbHlwaGljb24tbGlzdCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTZcIjsgfSB9XG4uZ2x5cGhpY29uLWluZGVudC1sZWZ0ICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDU3XCI7IH0gfVxuLmdseXBoaWNvbi1pbmRlbnQtcmlnaHQgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1OFwiOyB9IH1cbi5nbHlwaGljb24tZmFjZXRpbWUtdmlkZW8gICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTlcIjsgfSB9XG4uZ2x5cGhpY29uLXBpY3R1cmUgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDYwXCI7IH0gfVxuLmdseXBoaWNvbi1tYXAtbWFya2VyICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2MlwiOyB9IH1cbi5nbHlwaGljb24tYWRqdXN0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjNcIjsgfSB9XG4uZ2x5cGhpY29uLXRpbnQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDY0XCI7IH0gfVxuLmdseXBoaWNvbi1lZGl0ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2NVwiOyB9IH1cbi5nbHlwaGljb24tc2hhcmUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjZcIjsgfSB9XG4uZ2x5cGhpY29uLWNoZWNrICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDY3XCI7IH0gfVxuLmdseXBoaWNvbi1tb3ZlICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2OFwiOyB9IH1cbi5nbHlwaGljb24tc3RlcC1iYWNrd2FyZCAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjlcIjsgfSB9XG4uZ2x5cGhpY29uLWZhc3QtYmFja3dhcmQgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDcwXCI7IH0gfVxuLmdseXBoaWNvbi1iYWNrd2FyZCAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3MVwiOyB9IH1cbi5nbHlwaGljb24tcGxheSAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzJcIjsgfSB9XG4uZ2x5cGhpY29uLXBhdXNlICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDczXCI7IH0gfVxuLmdseXBoaWNvbi1zdG9wICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3NFwiOyB9IH1cbi5nbHlwaGljb24tZm9yd2FyZCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzVcIjsgfSB9XG4uZ2x5cGhpY29uLWZhc3QtZm9yd2FyZCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDc2XCI7IH0gfVxuLmdseXBoaWNvbi1zdGVwLWZvcndhcmQgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3N1wiOyB9IH1cbi5nbHlwaGljb24tZWplY3QgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzhcIjsgfSB9XG4uZ2x5cGhpY29uLWNoZXZyb24tbGVmdCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDc5XCI7IH0gfVxuLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0ICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4MFwiOyB9IH1cbi5nbHlwaGljb24tcGx1cy1zaWduICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODFcIjsgfSB9XG4uZ2x5cGhpY29uLW1pbnVzLXNpZ24gICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDgyXCI7IH0gfVxuLmdseXBoaWNvbi1yZW1vdmUtc2lnbiAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4M1wiOyB9IH1cbi5nbHlwaGljb24tb2stc2lnbiAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODRcIjsgfSB9XG4uZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDg1XCI7IH0gfVxuLmdseXBoaWNvbi1pbmZvLXNpZ24gICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4NlwiOyB9IH1cbi5nbHlwaGljb24tc2NyZWVuc2hvdCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODdcIjsgfSB9XG4uZ2x5cGhpY29uLXJlbW92ZS1jaXJjbGUgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDg4XCI7IH0gfVxuLmdseXBoaWNvbi1vay1jaXJjbGUgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4OVwiOyB9IH1cbi5nbHlwaGljb24tYmFuLWNpcmNsZSAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTBcIjsgfSB9XG4uZ2x5cGhpY29uLWFycm93LWxlZnQgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDkxXCI7IH0gfVxuLmdseXBoaWNvbi1hcnJvdy1yaWdodCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA5MlwiOyB9IH1cbi5nbHlwaGljb24tYXJyb3ctdXAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTNcIjsgfSB9XG4uZ2x5cGhpY29uLWFycm93LWRvd24gICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDk0XCI7IH0gfVxuLmdseXBoaWNvbi1zaGFyZS1hbHQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA5NVwiOyB9IH1cbi5nbHlwaGljb24tcmVzaXplLWZ1bGwgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTZcIjsgfSB9XG4uZ2x5cGhpY29uLXJlc2l6ZS1zbWFsbCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDk3XCI7IH0gfVxuLmdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwMVwiOyB9IH1cbi5nbHlwaGljb24tZ2lmdCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDJcIjsgfSB9XG4uZ2x5cGhpY29uLWxlYWYgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTAzXCI7IH0gfVxuLmdseXBoaWNvbi1maXJlICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwNFwiOyB9IH1cbi5nbHlwaGljb24tZXllLW9wZW4gICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDVcIjsgfSB9XG4uZ2x5cGhpY29uLWV5ZS1jbG9zZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTA2XCI7IH0gfVxuLmdseXBoaWNvbi13YXJuaW5nLXNpZ24gICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwN1wiOyB9IH1cbi5nbHlwaGljb24tcGxhbmUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDhcIjsgfSB9XG4uZ2x5cGhpY29uLWNhbGVuZGFyICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTA5XCI7IH0gfVxuLmdseXBoaWNvbi1yYW5kb20gICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExMFwiOyB9IH1cbi5nbHlwaGljb24tY29tbWVudCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMTFcIjsgfSB9XG4uZ2x5cGhpY29uLW1hZ25ldCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTEyXCI7IH0gfVxuLmdseXBoaWNvbi1jaGV2cm9uLXVwICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExM1wiOyB9IH1cbi5nbHlwaGljb24tY2hldnJvbi1kb3duICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMTRcIjsgfSB9XG4uZ2x5cGhpY29uLXJldHdlZXQgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTE1XCI7IH0gfVxuLmdseXBoaWNvbi1zaG9wcGluZy1jYXJ0ICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExNlwiOyB9IH1cbi5nbHlwaGljb24tZm9sZGVyLWNsb3NlICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMTdcIjsgfSB9XG4uZ2x5cGhpY29uLWZvbGRlci1vcGVuICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTE4XCI7IH0gfVxuLmdseXBoaWNvbi1yZXNpemUtdmVydGljYWwgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExOVwiOyB9IH1cbi5nbHlwaGljb24tcmVzaXplLWhvcml6b250YWwgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjBcIjsgfSB9XG4uZ2x5cGhpY29uLWhkZCAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTIxXCI7IH0gfVxuLmdseXBoaWNvbi1idWxsaG9ybiAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyMlwiOyB9IH1cbi5nbHlwaGljb24tYmVsbCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjNcIjsgfSB9XG4uZ2x5cGhpY29uLWNlcnRpZmljYXRlICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTI0XCI7IH0gfVxuLmdseXBoaWNvbi10aHVtYnMtdXAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyNVwiOyB9IH1cbi5nbHlwaGljb24tdGh1bWJzLWRvd24gICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjZcIjsgfSB9XG4uZ2x5cGhpY29uLWhhbmQtcmlnaHQgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTI3XCI7IH0gfVxuLmdseXBoaWNvbi1oYW5kLWxlZnQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyOFwiOyB9IH1cbi5nbHlwaGljb24taGFuZC11cCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjlcIjsgfSB9XG4uZ2x5cGhpY29uLWhhbmQtZG93biAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTMwXCI7IH0gfVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctcmlnaHQgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzMVwiOyB9IH1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LWxlZnQgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzJcIjsgfSB9XG4uZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy11cCAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTMzXCI7IH0gfVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctZG93biAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzNFwiOyB9IH1cbi5nbHlwaGljb24tZ2xvYmUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzVcIjsgfSB9XG4uZ2x5cGhpY29uLXdyZW5jaCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTM2XCI7IH0gfVxuLmdseXBoaWNvbi10YXNrcyAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzN1wiOyB9IH1cbi5nbHlwaGljb24tZmlsdGVyICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzhcIjsgfSB9XG4uZ2x5cGhpY29uLWJyaWVmY2FzZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTM5XCI7IH0gfVxuLmdseXBoaWNvbi1mdWxsc2NyZWVuICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0MFwiOyB9IH1cbi5nbHlwaGljb24tZGFzaGJvYXJkICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDFcIjsgfSB9XG4uZ2x5cGhpY29uLXBhcGVyY2xpcCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQyXCI7IH0gfVxuLmdseXBoaWNvbi1oZWFydC1lbXB0eSAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0M1wiOyB9IH1cbi5nbHlwaGljb24tbGluayAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDRcIjsgfSB9XG4uZ2x5cGhpY29uLXBob25lICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQ1XCI7IH0gfVxuLmdseXBoaWNvbi1wdXNocGluICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0NlwiOyB9IH1cbi5nbHlwaGljb24tdXNkICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDhcIjsgfSB9XG4uZ2x5cGhpY29uLWdicCAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQ5XCI7IH0gfVxuLmdseXBoaWNvbi1zb3J0ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1MFwiOyB9IH1cbi5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldCAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNTFcIjsgfSB9XG4uZ2x5cGhpY29uLXNvcnQtYnktYWxwaGFiZXQtYWx0ICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTUyXCI7IH0gfVxuLmdseXBoaWNvbi1zb3J0LWJ5LW9yZGVyICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1M1wiOyB9IH1cbi5nbHlwaGljb24tc29ydC1ieS1vcmRlci1hbHQgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNTRcIjsgfSB9XG4uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcyAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTU1XCI7IH0gfVxuLmdseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0IHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1NlwiOyB9IH1cbi5nbHlwaGljb24tdW5jaGVja2VkICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNTdcIjsgfSB9XG4uZ2x5cGhpY29uLWV4cGFuZCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTU4XCI7IH0gfVxuLmdseXBoaWNvbi1jb2xsYXBzZS1kb3duICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1OVwiOyB9IH1cbi5nbHlwaGljb24tY29sbGFwc2UtdXAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjBcIjsgfSB9XG4uZ2x5cGhpY29uLWxvZy1pbiAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTYxXCI7IH0gfVxuLmdseXBoaWNvbi1mbGFzaCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2MlwiOyB9IH1cbi5nbHlwaGljb24tbG9nLW91dCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjNcIjsgfSB9XG4uZ2x5cGhpY29uLW5ldy13aW5kb3cgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTY0XCI7IH0gfVxuLmdseXBoaWNvbi1yZWNvcmQgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2NVwiOyB9IH1cbi5nbHlwaGljb24tc2F2ZSAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjZcIjsgfSB9XG4uZ2x5cGhpY29uLW9wZW4gICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTY3XCI7IH0gfVxuLmdseXBoaWNvbi1zYXZlZCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2OFwiOyB9IH1cbi5nbHlwaGljb24taW1wb3J0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjlcIjsgfSB9XG4uZ2x5cGhpY29uLWV4cG9ydCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTcwXCI7IH0gfVxuLmdseXBoaWNvbi1zZW5kICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3MVwiOyB9IH1cbi5nbHlwaGljb24tZmxvcHB5LWRpc2sgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzJcIjsgfSB9XG4uZ2x5cGhpY29uLWZsb3BweS1zYXZlZCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTczXCI7IH0gfVxuLmdseXBoaWNvbi1mbG9wcHktcmVtb3ZlICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3NFwiOyB9IH1cbi5nbHlwaGljb24tZmxvcHB5LXNhdmUgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzVcIjsgfSB9XG4uZ2x5cGhpY29uLWZsb3BweS1vcGVuICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTc2XCI7IH0gfVxuLmdseXBoaWNvbi1jcmVkaXQtY2FyZCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3N1wiOyB9IH1cbi5nbHlwaGljb24tdHJhbnNmZXIgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzhcIjsgfSB9XG4uZ2x5cGhpY29uLWN1dGxlcnkgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTc5XCI7IH0gfVxuLmdseXBoaWNvbi1oZWFkZXIgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4MFwiOyB9IH1cbi5nbHlwaGljb24tY29tcHJlc3NlZCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODFcIjsgfSB9XG4uZ2x5cGhpY29uLWVhcnBob25lICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTgyXCI7IH0gfVxuLmdseXBoaWNvbi1waG9uZS1hbHQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4M1wiOyB9IH1cbi5nbHlwaGljb24tdG93ZXIgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODRcIjsgfSB9XG4uZ2x5cGhpY29uLXN0YXRzICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTg1XCI7IH0gfVxuLmdseXBoaWNvbi1zZC12aWRlbyAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4NlwiOyB9IH1cbi5nbHlwaGljb24taGQtdmlkZW8gICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODdcIjsgfSB9XG4uZ2x5cGhpY29uLXN1YnRpdGxlcyAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTg4XCI7IH0gfVxuLmdseXBoaWNvbi1zb3VuZC1zdGVyZW8gICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4OVwiOyB9IH1cbi5nbHlwaGljb24tc291bmQtZG9sYnkgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOTBcIjsgfSB9XG4uZ2x5cGhpY29uLXNvdW5kLTUtMSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTkxXCI7IH0gfVxuLmdseXBoaWNvbi1zb3VuZC02LTEgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5MlwiOyB9IH1cbi5nbHlwaGljb24tc291bmQtNy0xICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOTNcIjsgfSB9XG4uZ2x5cGhpY29uLWNvcHlyaWdodC1tYXJrICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTk0XCI7IH0gfVxuLmdseXBoaWNvbi1yZWdpc3RyYXRpb24tbWFyayAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5NVwiOyB9IH1cbi5nbHlwaGljb24tY2xvdWQtZG93bmxvYWQgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOTdcIjsgfSB9XG4uZ2x5cGhpY29uLWNsb3VkLXVwbG9hZCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTk4XCI7IH0gfVxuLmdseXBoaWNvbi10cmVlLWNvbmlmZXIgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5OVwiOyB9IH1cbi5nbHlwaGljb24tdHJlZS1kZWNpZHVvdXMgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDBcIjsgfSB9XG4uZ2x5cGhpY29uLWNkICAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjAxXCI7IH0gfVxuLmdseXBoaWNvbi1zYXZlLWZpbGUgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIwMlwiOyB9IH1cbi5nbHlwaGljb24tb3Blbi1maWxlICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDNcIjsgfSB9XG4uZ2x5cGhpY29uLWxldmVsLXVwICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjA0XCI7IH0gfVxuLmdseXBoaWNvbi1jb3B5ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIwNVwiOyB9IH1cbi5nbHlwaGljb24tcGFzdGUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDZcIjsgfSB9XG4vLyBUaGUgZm9sbG93aW5nIDIgR2x5cGhpY29ucyBhcmUgb21pdHRlZCBmb3IgdGhlIHRpbWUgYmVpbmcgYmVjYXVzZVxuLy8gdGhleSBjdXJyZW50bHkgdXNlIFVuaWNvZGUgY29kZXBvaW50cyB0aGF0IGFyZSBvdXRzaWRlIHRoZVxuLy8gQmFzaWMgTXVsdGlsaW5ndWFsIFBsYW5lIChCTVApLiBPbGRlciBidWdneSB2ZXJzaW9ucyBvZiBXZWJLaXQgY2FuJ3QgaGFuZGxlXG4vLyBub24tQk1QIGNvZGVwb2ludHMgaW4gQ1NTIHN0cmluZyBlc2NhcGVzLCBhbmQgdGh1cyBjYW4ndCBkaXNwbGF5IHRoZXNlIHR3byBpY29ucy5cbi8vIE5vdGFibHksIHRoZSBidWcgYWZmZWN0cyBzb21lIG9sZGVyIHZlcnNpb25zIG9mIHRoZSBBbmRyb2lkIEJyb3dzZXIuXG4vLyBNb3JlIGluZm86IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTAxMDZcbi8vIC5nbHlwaGljb24tZG9vciAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDFmNmFhXCI7IH0gfVxuLy8gLmdseXBoaWNvbi1rZXkgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMWY1MTFcIjsgfSB9XG4uZ2x5cGhpY29uLWFsZXJ0ICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjA5XCI7IH0gfVxuLmdseXBoaWNvbi1lcXVhbGl6ZXIgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxMFwiOyB9IH1cbi5nbHlwaGljb24ta2luZyAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMTFcIjsgfSB9XG4uZ2x5cGhpY29uLXF1ZWVuICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjEyXCI7IH0gfVxuLmdseXBoaWNvbi1wYXduICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxM1wiOyB9IH1cbi5nbHlwaGljb24tYmlzaG9wICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMTRcIjsgfSB9XG4uZ2x5cGhpY29uLWtuaWdodCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjE1XCI7IH0gfVxuLmdseXBoaWNvbi1iYWJ5LWZvcm11bGEgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxNlwiOyB9IH1cbi5nbHlwaGljb24tdGVudCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDI2ZmFcIjsgfSB9XG4uZ2x5cGhpY29uLWJsYWNrYm9hcmQgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjE4XCI7IH0gfVxuLmdseXBoaWNvbi1iZWQgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxOVwiOyB9IH1cbi5nbHlwaGljb24tYXBwbGUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGY4ZmZcIjsgfSB9XG4uZ2x5cGhpY29uLWVyYXNlICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjIxXCI7IH0gfVxuLmdseXBoaWNvbi1ob3VyZ2xhc3MgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjMxYlwiOyB9IH1cbi5nbHlwaGljb24tbGFtcCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjNcIjsgfSB9XG4uZ2x5cGhpY29uLWR1cGxpY2F0ZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjI0XCI7IH0gfVxuLmdseXBoaWNvbi1waWdneS1iYW5rICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIyNVwiOyB9IH1cbi5nbHlwaGljb24tc2Npc3NvcnMgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjZcIjsgfSB9XG4uZ2x5cGhpY29uLWJpdGNvaW4gICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjI3XCI7IH0gfVxuLmdseXBoaWNvbi1idGMgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIyN1wiOyB9IH1cbi5nbHlwaGljb24teGJ0ICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjdcIjsgfSB9XG4uZ2x5cGhpY29uLXllbiAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwwMGE1XCI7IH0gfVxuLmdseXBoaWNvbi1qcHkgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMDBhNVwiOyB9IH1cbi5nbHlwaGljb24tcnVibGUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDIwYmRcIjsgfSB9XG4uZ2x5cGhpY29uLXJ1YiAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyMGJkXCI7IH0gfVxuLmdseXBoaWNvbi1zY2FsZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzMFwiOyB9IH1cbi5nbHlwaGljb24taWNlLWxvbGx5ICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzFcIjsgfSB9XG4uZ2x5cGhpY29uLWljZS1sb2xseS10YXN0ZWQgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjMyXCI7IH0gfVxuLmdseXBoaWNvbi1lZHVjYXRpb24gICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzM1wiOyB9IH1cbi5nbHlwaGljb24tb3B0aW9uLWhvcml6b250YWwgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzRcIjsgfSB9XG4uZ2x5cGhpY29uLW9wdGlvbi12ZXJ0aWNhbCAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjM1XCI7IH0gfVxuLmdseXBoaWNvbi1tZW51LWhhbWJ1cmdlciAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzNlwiOyB9IH1cbi5nbHlwaGljb24tbW9kYWwtd2luZG93ICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzdcIjsgfSB9XG4uZ2x5cGhpY29uLW9pbCAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjM4XCI7IH0gfVxuLmdseXBoaWNvbi1ncmFpbiAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzOVwiOyB9IH1cbi5nbHlwaGljb24tc3VuZ2xhc3NlcyAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDBcIjsgfSB9XG4uZ2x5cGhpY29uLXRleHQtc2l6ZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQxXCI7IH0gfVxuLmdseXBoaWNvbi10ZXh0LWNvbG9yICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0MlwiOyB9IH1cbi5nbHlwaGljb24tdGV4dC1iYWNrZ3JvdW5kICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDNcIjsgfSB9XG4uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi10b3AgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQ0XCI7IH0gfVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24tYm90dG9tICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0NVwiOyB9IH1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLWhvcml6b250YWx7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDZcIjsgfSB9XG4uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1sZWZ0ICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQ3XCI7IH0gfVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24tdmVydGljYWwgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0OFwiOyB9IH1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLXJpZ2h0ICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDlcIjsgfSB9XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLXJpZ2h0ICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjUwXCI7IH0gfVxuLmdseXBoaWNvbi10cmlhbmdsZS1sZWZ0ICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1MVwiOyB9IH1cbi5nbHlwaGljb24tdHJpYW5nbGUtYm90dG9tICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTJcIjsgfSB9XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLXRvcCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjUzXCI7IH0gfVxuLmdseXBoaWNvbi1jb25zb2xlICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1NFwiOyB9IH1cbi5nbHlwaGljb24tc3VwZXJzY3JpcHQgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTVcIjsgfSB9XG4uZ2x5cGhpY29uLXN1YnNjcmlwdCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjU2XCI7IH0gfVxuLmdseXBoaWNvbi1tZW51LWxlZnQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1N1wiOyB9IH1cbi5nbHlwaGljb24tbWVudS1yaWdodCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNThcIjsgfSB9XG4uZ2x5cGhpY29uLW1lbnUtZG93biAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjU5XCI7IH0gfVxuLmdseXBoaWNvbi1tZW51LXVwICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI2MFwiOyB9IH1cbiIsIi8vXG4vLyBTY2FmZm9sZGluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBSZXNldCB0aGUgYm94LXNpemluZ1xuLy9cbi8vIEhlYWRzIHVwISBUaGlzIHJlc2V0IG1heSBjYXVzZSBjb25mbGljdHMgd2l0aCBzb21lIHRoaXJkLXBhcnR5IHdpZGdldHMuXG4vLyBGb3IgcmVjb21tZW5kYXRpb25zIG9uIHJlc29sdmluZyBzdWNoIGNvbmZsaWN0cywgc2VlXG4vLyBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9nZXR0aW5nLXN0YXJ0ZWQvI3RoaXJkLWJveC1zaXppbmdcbioge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xufVxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuXG4vLyBCb2R5IHJlc2V0XG5cbmh0bWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbn1cblxuLy8gUmVzZXQgZm9udHMgZm9yIHJlbGV2YW50IGVsZW1lbnRzXG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cblxuLy8gTGlua3NcblxuYSB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBAaW5jbHVkZSB0YWItZm9jdXM7XG4gIH1cbn1cblxuXG4vLyBGaWd1cmVzXG4vL1xuLy8gV2UgcmVzZXQgdGhpcyBoZXJlIGJlY2F1c2UgcHJldmlvdXNseSBOb3JtYWxpemUgaGFkIG5vIGBmaWd1cmVgIG1hcmdpbnMuIFRoaXNcbi8vIGVuc3VyZXMgd2UgZG9uJ3QgYnJlYWsgYW55b25lJ3MgdXNlIG9mIHRoZSBlbGVtZW50LlxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG59XG5cblxuLy8gSW1hZ2VzXG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2VzIChlbnN1cmUgaW1hZ2VzIGRvbid0IHNjYWxlIGJleW9uZCB0aGVpciBwYXJlbnRzKVxuLmltZy1yZXNwb25zaXZlIHtcbiAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG59XG5cbi8vIFJvdW5kZWQgY29ybmVyc1xuLmltZy1yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG59XG5cbi8vIEltYWdlIHRodW1ibmFpbHNcbi8vXG4vLyBIZWFkcyB1cCEgVGhpcyBpcyBtaXhpbi1lZCBpbnRvIHRodW1ibmFpbHMubGVzcyBmb3IgYC50aHVtYm5haWxgLlxuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRodW1ibmFpbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHRodW1ibmFpbC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjJzIGVhc2UtaW4tb3V0KTtcblxuICAvLyBLZWVwIHRoZW0gYXQgbW9zdCAxMDAlIHdpZGVcbiAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmUoaW5saW5lLWJsb2NrKTtcbn1cblxuLy8gUGVyZmVjdCBjaXJjbGVcbi5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBzZXQgcmFkaXVzIGluIHBlcmNlbnRzXG59XG5cblxuLy8gSG9yaXpvbnRhbCBydWxlc1xuXG5ociB7XG4gIG1hcmdpbi10b3A6ICAgICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkaHItYm9yZGVyO1xufVxuXG5cbi8vIE9ubHkgZGlzcGxheSBjb250ZW50IHRvIHNjcmVlbiByZWFkZXJzXG4vL1xuLy8gU2VlOiBodHRwOi8vYTExeXByb2plY3QuY29tL3Bvc3RzL2hvdy10by1oaWRlLWNvbnRlbnRcblxuLnNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gVXNlIGluIGNvbmp1bmN0aW9uIHdpdGggLnNyLW9ubHkgdG8gb25seSBkaXNwbGF5IGNvbnRlbnQgd2hlbiBpdCdzIGZvY3VzZWQuXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvTk9URS1XQ0FHMjAtVEVDSFMtMjAxMzA5MDUvRzFcbi8vIENyZWRpdDogSFRNTDUgQm9pbGVycGxhdGVcblxuLnNyLW9ubHktZm9jdXNhYmxlIHtcbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBjbGlwOiBhdXRvO1xuICB9XG59XG5cblxuLy8gaU9TIFwiY2xpY2thYmxlIGVsZW1lbnRzXCIgZml4IGZvciByb2xlPVwiYnV0dG9uXCJcbi8vXG4vLyBGaXhlcyBcImNsaWNrYWJpbGl0eVwiIGlzc3VlIChhbmQgbW9yZSBnZW5lcmFsbHksIHRoZSBmaXJpbmcgb2YgZXZlbnRzIHN1Y2ggYXMgZm9jdXMgYXMgd2VsbClcbi8vIGZvciB0cmFkaXRpb25hbGx5IG5vbi1mb2N1c2FibGUgZWxlbWVudHMgd2l0aCByb2xlPVwiYnV0dG9uXCJcbi8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vXG4vLyBUeXBvZ3JhcGh5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEhlYWRpbmdzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgZm9udC1mYW1pbHk6ICRoZWFkaW5ncy1mb250LWZhbWlseTtcbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAkaGVhZGluZ3Mtc21hbGwtY29sb3I7XG4gIH1cbn1cblxuaDEsIC5oMSxcbmgyLCAuaDIsXG5oMywgLmgzIHtcbiAgbWFyZ2luLXRvcDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiA2NSU7XG4gIH1cbn1cbmg0LCAuaDQsXG5oNSwgLmg1LFxuaDYsIC5oNiB7XG4gIG1hcmdpbi10b3A6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICB9XG59XG5cbmgxLCAuaDEgeyBmb250LXNpemU6ICRmb250LXNpemUtaDE7IH1cbmgyLCAuaDIgeyBmb250LXNpemU6ICRmb250LXNpemUtaDI7IH1cbmgzLCAuaDMgeyBmb250LXNpemU6ICRmb250LXNpemUtaDM7IH1cbmg0LCAuaDQgeyBmb250LXNpemU6ICRmb250LXNpemUtaDQ7IH1cbmg1LCAuaDUgeyBmb250LXNpemU6ICRmb250LXNpemUtaDU7IH1cbmg2LCAuaDYgeyBmb250LXNpemU6ICRmb250LXNpemUtaDY7IH1cblxuXG4vLyBCb2R5IHRleHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxucCB7XG4gIG1hcmdpbjogMCAwICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbn1cblxuLmxlYWQge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTUpKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgKiAxLjUpO1xuICB9XG59XG5cblxuLy8gRW1waGFzaXMgJiBtaXNjXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEV4OiAoMTJweCBzbWFsbCBmb250IC8gMTRweCBiYXNlIGZvbnQpICogMTAwJSA9IGFib3V0IDg1JVxuc21hbGwsXG4uc21hbGwge1xuICBmb250LXNpemU6IGZsb29yKCgxMDAlICogJGZvbnQtc2l6ZS1zbWFsbCAvICRmb250LXNpemUtYmFzZSkpO1xufVxuXG5tYXJrLFxuLm1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhdGUtd2FybmluZy1iZztcbiAgcGFkZGluZzogLjJlbTtcbn1cblxuLy8gQWxpZ25tZW50XG4udGV4dC1sZWZ0ICAgICAgICAgICB7IHRleHQtYWxpZ246IGxlZnQ7IH1cbi50ZXh0LXJpZ2h0ICAgICAgICAgIHsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbi50ZXh0LWNlbnRlciAgICAgICAgIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4udGV4dC1qdXN0aWZ5ICAgICAgICB7IHRleHQtYWxpZ246IGp1c3RpZnk7IH1cbi50ZXh0LW5vd3JhcCAgICAgICAgIHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4vLyBUcmFuc2Zvcm1hdGlvblxuLnRleHQtbG93ZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XG4udGV4dC11cHBlcmNhc2UgICAgICB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi50ZXh0LWNhcGl0YWxpemUgICAgIHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cblxuLy8gQ29udGV4dHVhbCBjb2xvcnNcbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xufVxuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXByaW1hcnknLCAkYnJhbmQtcHJpbWFyeSk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtc3VjY2VzcycsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWluZm8nLCAkc3RhdGUtaW5mby10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC13YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtZGFuZ2VyJywgJHN0YXRlLWRhbmdlci10ZXh0KTtcblxuLy8gQ29udGV4dHVhbCBiYWNrZ3JvdW5kc1xuLy8gRm9yIG5vdyB3ZSdsbCBsZWF2ZSB0aGVzZSBhbG9uZ3NpZGUgdGhlIHRleHQgY2xhc3NlcyB1bnRpbCB2NCB3aGVuIHdlIGNhblxuLy8gc2FmZWx5IHNoaWZ0IHRoaW5ncyBhcm91bmQgKHBlciBTZW1WZXIgcnVsZXMpLlxuLmJnLXByaW1hcnkge1xuICAvLyBHaXZlbiB0aGUgY29udHJhc3QgaGVyZSwgdGhpcyBpcyB0aGUgb25seSBjbGFzcyB0byBoYXZlIGl0cyBjb2xvciBpbnZlcnRlZFxuICAvLyBhdXRvbWF0aWNhbGx5LlxuICBjb2xvcjogI2ZmZjtcbn1cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctc3VjY2VzcycsICRzdGF0ZS1zdWNjZXNzLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWluZm8nLCAkc3RhdGUtaW5mby1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy13YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctZGFuZ2VyJywgJHN0YXRlLWRhbmdlci1iZyk7XG5cblxuLy8gUGFnZSBoZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgLSAxKTtcbiAgbWFyZ2luOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICogMikgMCAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcGFnZS1oZWFkZXItYm9yZGVyLWNvbG9yO1xufVxuXG5cbi8vIExpc3RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFVub3JkZXJlZCBhbmQgT3JkZXJlZCBsaXN0c1xudWwsXG5vbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi8vIExpc3Qgb3B0aW9uc1xuXG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgZnJvbSBgLmxpc3QtdW5zdHlsZWRgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGFzIGBAbWl4aW4gbGlzdC11bnN0eWxlZGAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuLmxpc3QtdW5zdHlsZWQge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkO1xufVxuXG5cbi8vIElubGluZSB0dXJucyBsaXN0IGl0ZW1zIGludG8gaW5saW5lLWJsb2NrXG4ubGlzdC1pbmxpbmUge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkO1xuICBtYXJnaW4tbGVmdDogLTVweDtcblxuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG59XG5cbi8vIERlc2NyaXB0aW9uIExpc3RzXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7IC8vIFJlbW92ZSBicm93c2VyIGRlZmF1bHRcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xufVxuZHQsXG5kZCB7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbn1cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kZCB7XG4gIG1hcmdpbi1sZWZ0OiAwOyAvLyBVbmRvIGJyb3dzZXIgZGVmYXVsdFxufVxuXG4vLyBIb3Jpem9udGFsIGRlc2NyaXB0aW9uIGxpc3RzXG4vL1xuLy8gRGVmYXVsdHMgdG8gYmVpbmcgc3RhY2tlZCB3aXRob3V0IGFueSBvZiB0aGUgYmVsb3cgc3R5bGVzIGFwcGxpZWQsIHVudGlsIHRoZVxuLy8gZ3JpZCBicmVha3BvaW50IGlzIHJlYWNoZWQgKGRlZmF1bHQgb2Ygfjc2OHB4KS5cblxuLmRsLWhvcml6b250YWwge1xuICBkZCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXg7IC8vIENsZWFyIHRoZSBmbG9hdGVkIGBkdGAgaWYgYW4gZW1wdHkgYGRkYCBpcyBwcmVzZW50XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGRsLWhvcml6b250YWwtYnJlYWtwb2ludCkge1xuICAgIGR0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6ICgkZGwtaG9yaXpvbnRhbC1vZmZzZXQgLSAyMCk7XG4gICAgICBjbGVhcjogbGVmdDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdztcbiAgICB9XG4gICAgZGQge1xuICAgICAgbWFyZ2luLWxlZnQ6ICRkbC1ob3Jpem9udGFsLW9mZnNldDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBNaXNjXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zXG5hYmJyW3RpdGxlXSxcbi8vIEFkZCBkYXRhLSogYXR0cmlidXRlIHRvIGhlbHAgb3V0IG91ciB0b29sdGlwIHBsdWdpbiwgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNTI1N1xuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAkYWJici1ib3JkZXItY29sb3I7XG59XG4uaW5pdGlhbGlzbSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBAZXh0ZW5kIC50ZXh0LXVwcGVyY2FzZTtcbn1cblxuLy8gQmxvY2txdW90ZXNcbmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW46IDAgMCAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogJGJsb2NrcXVvdGUtZm9udC1zaXplO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcblxuICBwLFxuICB1bCxcbiAgb2wge1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdGU6IERlcHJlY2F0ZWQgc21hbGwgYW5kIC5zbWFsbCBhcyBvZiB2My4xLjBcbiAgLy8gQ29udGV4dDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTY2MFxuICBmb290ZXIsXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogODAlOyAvLyBiYWNrIHRvIGRlZmF1bHQgZm9udC1zaXplXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgIGNvbG9yOiAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDIwMTQgXFwwMEEwJzsgLy8gZW0gZGFzaCwgbmJzcFxuICAgIH1cbiAgfVxufVxuXG4vLyBPcHBvc2l0ZSBhbGlnbm1lbnQgb2YgYmxvY2txdW90ZVxuLy9cbi8vIEhlYWRzIHVwOiBgYmxvY2txdW90ZS5wdWxsLXJpZ2h0YCBoYXMgYmVlbiBkZXByZWNhdGVkIGFzIG9mIHYzLjEuMC5cbi5ibG9ja3F1b3RlLXJldmVyc2UsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIC8vIEFjY291bnQgZm9yIGNpdGF0aW9uXG4gIGZvb3RlcixcbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgJjpiZWZvcmUgeyBjb250ZW50OiAnJzsgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBBMCBcXDIwMTQnOyAvLyBuYnNwLCBlbSBkYXNoXG4gICAgfVxuICB9XG59XG5cbi8vIEFkZHJlc3Nlc1xuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG59XG4iLCIvL1xuLy8gQ29kZSAoaW5saW5lIGFuZCBibG9jaylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gSW5saW5lIGFuZCBibG9jayBjb2RlIHN0eWxlc1xuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTtcbn1cblxuLy8gSW5saW5lIGNvZGVcbmNvZGUge1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICRjb2RlLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29kZS1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcbn1cblxuLy8gVXNlciBpbnB1dCB0eXBpY2FsbHkgZW50ZXJlZCB2aWEga2V5Ym9hcmRcbmtiZCB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogJGtiZC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGtiZC1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc21hbGw7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjI1KTtcblxuICBrYmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cblxuLy8gQmxvY2tzIG9mIGNvZGVcbnByZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAoKCRsaW5lLWhlaWdodC1jb21wdXRlZCAtIDEpIC8gMik7XG4gIG1hcmdpbjogMCAwICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlIC0gMSk7IC8vIDE0cHggdG8gMTNweFxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogJHByZS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByZS1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHByZS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgLy8gQWNjb3VudCBmb3Igc29tZSBjb2RlIG91dHB1dHMgdGhhdCBwbGFjZSBjb2RlIHRhZ3MgaW4gcHJlIHRhZ3NcbiAgY29kZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLy8gRW5hYmxlIHNjcm9sbGFibGUgYmxvY2tzIG9mIGNvZGVcbi5wcmUtc2Nyb2xsYWJsZSB7XG4gIG1heC1oZWlnaHQ6ICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iLCIvL1xuLy8gR3JpZCBzeXN0ZW1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQ29udGFpbmVyIHdpZHRoc1xuLy9cbi8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoLCBhbmQgb3ZlcnJpZGUgaXQgZm9yIGZpeGVkIG5hdmJhcnMgaW4gbWVkaWEgcXVlcmllcy5cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIGNvbnRhaW5lci1maXhlZDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1zbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1tZDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICB3aWR0aDogJGNvbnRhaW5lci1sZztcbiAgfVxufVxuXG5cbi8vIEZsdWlkIGNvbnRhaW5lclxuLy9cbi8vIFV0aWxpemVzIHRoZSBtaXhpbiBtZWFudCBmb3IgZml4ZWQgd2lkdGggY29udGFpbmVycywgYnV0IHdpdGhvdXQgYW55IGRlZmluZWRcbi8vIHdpZHRoIGZvciBmbHVpZCwgZnVsbCB3aWR0aCBsYXlvdXRzLlxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgQGluY2x1ZGUgY29udGFpbmVyLWZpeGVkO1xufVxuXG5cbi8vIFJvd1xuLy9cbi8vIFJvd3MgY29udGFpbiBhbmQgY2xlYXIgdGhlIGZsb2F0cyBvZiB5b3VyIGNvbHVtbnMuXG5cbi5yb3cge1xuICBAaW5jbHVkZSBtYWtlLXJvdztcbn1cblxuXG4vLyBDb2x1bW5zXG4vL1xuLy8gQ29tbW9uIHN0eWxlcyBmb3Igc21hbGwgYW5kIGxhcmdlIGdyaWQgY29sdW1uc1xuXG5AaW5jbHVkZSBtYWtlLWdyaWQtY29sdW1ucztcblxuXG4vLyBFeHRyYSBzbWFsbCBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIGV4dHJhIHNtYWxsIGRldmljZXMgbGlrZVxuLy8gc21hcnRwaG9uZXMuXG5cbkBpbmNsdWRlIG1ha2UtZ3JpZCh4cyk7XG5cblxuLy8gU21hbGwgZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciB0aGUgc21hbGwgZGV2aWNlIHJhbmdlLCBmcm9tIHBob25lc1xuLy8gdG8gdGFibGV0cy5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChzbSk7XG59XG5cblxuLy8gTWVkaXVtIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgdGhlIGRlc2t0b3AgZGV2aWNlIHJhbmdlLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkKG1kKTtcbn1cblxuXG4vLyBMYXJnZSBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIHRoZSBsYXJnZSBkZXNrdG9wIGRldmljZSByYW5nZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gIEBpbmNsdWRlIG1ha2UtZ3JpZChsZyk7XG59XG4iLCIvL1xuLy8gVGFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnO1xufVxuY2FwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBwYWRkaW5nLWJvdHRvbTogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi8vIEJhc2VsaW5lIHN0eWxlc1xuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIC8vIENlbGxzXG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBwYWRkaW5nOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBCb3R0b20gYWxpZ24gZm9yIGNvbHVtbiBoZWFkaW5nc1xuICA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgfVxuICAvLyBSZW1vdmUgdG9wIGJvcmRlciBmcm9tIHRoZWFkIGJ5IGRlZmF1bHRcbiAgPiBjYXB0aW9uICsgdGhlYWQsXG4gID4gY29sZ3JvdXAgKyB0aGVhZCxcbiAgPiB0aGVhZDpmaXJzdC1jaGlsZCB7XG4gICAgPiB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEFjY291bnQgZm9yIG11bHRpcGxlIHRib2R5IGluc3RhbmNlc1xuICA+IHRib2R5ICsgdGJvZHkge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgLy8gTmVzdGluZ1xuICAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICB9XG59XG5cblxuLy8gQ29uZGVuc2VkIHRhYmxlIHcvIGhhbGYgcGFkZGluZ1xuXG4udGFibGUtY29uZGVuc2VkIHtcbiAgPiB0aGVhZCxcbiAgPiB0Ym9keSxcbiAgPiB0Zm9vdCB7XG4gICAgPiB0ciB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIHBhZGRpbmc6ICR0YWJsZS1jb25kZW5zZWQtY2VsbC1wYWRkaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIEJvcmRlcmVkIHZlcnNpb25cbi8vXG4vLyBBZGQgYm9yZGVycyBhbGwgYXJvdW5kIHRoZSB0YWJsZSBhbmQgYmV0d2VlbiBhbGwgdGhlIGNvbHVtbnMuXG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IHRoZWFkID4gdHIge1xuICAgID4gdGgsXG4gICAgPiB0ZCB7XG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gWmVicmEtc3RyaXBpbmdcbi8vXG4vLyBEZWZhdWx0IHplYnJhLXN0cmlwZSBzdHlsZXMgKGFsdGVybmF0aW5nIGdyYXkgYW5kIHRyYW5zcGFyZW50IGJhY2tncm91bmRzKVxuXG4udGFibGUtc3RyaXBlZCB7XG4gID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtYmctYWNjZW50O1xuICB9XG59XG5cblxuLy8gSG92ZXIgZWZmZWN0XG4vL1xuLy8gUGxhY2VkIGhlcmUgc2luY2UgaXQgaGFzIHRvIGNvbWUgYWZ0ZXIgdGhlIHBvdGVudGlhbCB6ZWJyYSBzdHJpcGluZ1xuXG4udGFibGUtaG92ZXIge1xuICA+IHRib2R5ID4gdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZy1ob3ZlcjtcbiAgfVxufVxuXG5cbi8vIFRhYmxlIGNlbGwgc2l6aW5nXG4vL1xuLy8gUmVzZXQgZGVmYXVsdCB0YWJsZSBiZWhhdmlvclxuXG50YWJsZSBjb2xbY2xhc3MqPVwiY29sLVwiXSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7IC8vIFByZXZlbnQgYm9yZGVyIGhpZGluZyBpbiBGaXJlZm94IGFuZCBJRTktMTEgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjIzKVxuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xufVxudGFibGUge1xuICB0ZCxcbiAgdGgge1xuICAgICZbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljOyAvLyBQcmV2ZW50IGJvcmRlciBoaWRpbmcgaW4gRmlyZWZveCBhbmQgSUU5LTExIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTYyMylcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBUYWJsZSBiYWNrZ3JvdW5kc1xuLy9cbi8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4vLyBpbmhlcml0YW5jZSB0byBuZXN0ZWQgdGFibGVzLlxuXG4vLyBHZW5lcmF0ZSB0aGUgY29udGV4dHVhbCB2YXJpYW50c1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ2FjdGl2ZScsICR0YWJsZS1iZy1hY3RpdmUpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ3N1Y2Nlc3MnLCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnaW5mbycsICRzdGF0ZS1pbmZvLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCd3YXJuaW5nJywgJHN0YXRlLXdhcm5pbmctYmcpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ2RhbmdlcicsICRzdGF0ZS1kYW5nZXItYmcpO1xuXG5cbi8vIFJlc3BvbnNpdmUgdGFibGVzXG4vL1xuLy8gV3JhcCB5b3VyIHRhYmxlcyBpbiBgLnRhYmxlLXJlc3BvbnNpdmVgIGFuZCB3ZSdsbCBtYWtlIHRoZW0gbW9iaWxlIGZyaWVuZGx5XG4vLyBieSBlbmFibGluZyBob3Jpem9udGFsIHNjcm9sbGluZy4gT25seSBhcHBsaWVzIDw3NjhweC4gRXZlcnl0aGluZyBhYm92ZSB0aGF0XG4vLyB3aWxsIGRpc3BsYXkgbm9ybWFsbHkuXG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWluLWhlaWdodDogMC4wMSU7IC8vIFdvcmthcm91bmQgZm9yIElFOSBidWcgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE0ODM3KVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAqIDAuNzUpO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuXG4gICAgLy8gVGlnaHRlbiB1cCBzcGFjaW5nXG4gICAgPiAudGFibGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgLy8gRW5zdXJlIHRoZSBjb250ZW50IGRvZXNuJ3Qgd3JhcFxuICAgICAgPiB0aGVhZCxcbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0ciB7XG4gICAgICAgICAgPiB0aCxcbiAgICAgICAgICA+IHRkIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3BlY2lhbCBvdmVycmlkZXMgZm9yIHRoZSBib3JkZXJlZCB0YWJsZXNcbiAgICA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7XG5cbiAgICAgIC8vIE51a2UgdGhlIGFwcHJvcHJpYXRlIGJvcmRlcnMgc28gdGhhdCB0aGUgcGFyZW50IGNhbiBoYW5kbGUgdGhlbVxuICAgICAgPiB0aGVhZCxcbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0ciB7XG4gICAgICAgICAgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICAgICAgICA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICA+IHRoOmxhc3QtY2hpbGQsXG4gICAgICAgICAgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT25seSBudWtlIHRoZSBsYXN0IHJvdydzIGJvdHRvbS1ib3JkZXIgaW4gYHRib2R5YCBhbmQgYHRmb290YCBzaW5jZVxuICAgICAgLy8gY2hhbmNlcyBhcmUgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSBgdHJgIGluIGEgYHRoZWFkYCBhbmQgdGhhdCB3b3VsZFxuICAgICAgLy8gcmVtb3ZlIHRoZSBib3JkZXIgYWx0b2dldGhlci5cbiAgICAgID4gdGJvZHksXG4gICAgICA+IHRmb290IHtcbiAgICAgICAgPiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICA+IHRoLFxuICAgICAgICAgID4gdGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEZvcm1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE5vcm1hbGl6ZSBub24tY29udHJvbHNcbi8vXG4vLyBSZXN0eWxlIGFuZCBiYXNlbGluZSBub24tY29udHJvbCBmb3JtIGVsZW1lbnRzLlxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICAvLyBDaHJvbWUgYW5kIEZpcmVmb3ggc2V0IGEgYG1pbi13aWR0aDogbWluLWNvbnRlbnQ7YCBvbiBmaWVsZHNldHMsXG4gIC8vIHNvIHdlIHJlc2V0IHRoYXQgdG8gZW5zdXJlIGl0IGJlaGF2ZXMgbW9yZSBsaWtlIGEgc3RhbmRhcmQgYmxvY2sgZWxlbWVudC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTIzNTkuXG4gIG1pbi13aWR0aDogMDtcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogJGxlZ2VuZC1jb2xvcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxlZ2VuZC1ib3JkZXItY29sb3I7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIEZvcmNlIElFOCB0byB3cmFwIGxvbmcgY29udGVudCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTMxNDEpXG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLy8gTm9ybWFsaXplIGZvcm0gY29udHJvbHNcbi8vXG4vLyBXaGlsZSBtb3N0IG9mIG91ciBmb3JtIHN0eWxlcyByZXF1aXJlIGV4dHJhIGNsYXNzZXMsIHNvbWUgYmFzaWMgbm9ybWFsaXphdGlvblxuLy8gaXMgcmVxdWlyZWQgdG8gZW5zdXJlIG9wdGltdW0gZGlzcGxheSB3aXRoIG9yIHdpdGhvdXQgdGhvc2UgY2xhc3NlcyB0byBiZXR0ZXJcbi8vIGFkZHJlc3MgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMuXG5cbi8vIE92ZXJyaWRlIGNvbnRlbnQtYm94IGluIE5vcm1hbGl6ZSAoKiBpc24ndCBzcGVjaWZpYyBlbm91Z2gpXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuLy8gUG9zaXRpb24gcmFkaW9zIGFuZCBjaGVja2JveGVzIGJldHRlclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxcHggXFw5OyAvLyBJRTgtOVxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBNYWtlIHJhbmdlIGlucHV0cyBiZWhhdmUgbGlrZSB0ZXh0dWFsIGZvcm0gY29udHJvbHNcbmlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gTWFrZSBtdWx0aXBsZSBzZWxlY3QgZWxlbWVudHMgaGVpZ2h0IG5vdCBmaXhlZFxuc2VsZWN0W211bHRpcGxlXSxcbnNlbGVjdFtzaXplXSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gRm9jdXMgZm9yIGZpbGUsIHJhZGlvLCBhbmQgY2hlY2tib3hcbmlucHV0W3R5cGU9XCJmaWxlXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzIHtcbiAgQGluY2x1ZGUgdGFiLWZvY3VzO1xufVxuXG4vLyBBZGp1c3Qgb3V0cHV0IGVsZW1lbnRcbm91dHB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbn1cblxuXG4vLyBDb21tb24gZm9ybSBjb250cm9sc1xuLy9cbi8vIFNoYXJlZCBzaXplIGFuZCB0eXBlIHJlc2V0cyBmb3IgZm9ybSBjb250cm9scy4gQXBwbHkgYC5mb3JtLWNvbnRyb2xgIHRvIGFueVxuLy8gb2YgdGhlIGZvbGxvd2luZyBmb3JtIGNvbnRyb2xzOlxuLy9cbi8vIHNlbGVjdFxuLy8gdGV4dGFyZWFcbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdXG4vLyBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRldGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXVxuLy8gaW5wdXRbdHlwZT1cIm1vbnRoXCJdXG4vLyBpbnB1dFt0eXBlPVwidGltZVwiXVxuLy8gaW5wdXRbdHlwZT1cIndlZWtcIl1cbi8vIGlucHV0W3R5cGU9XCJudW1iZXJcIl1cbi8vIGlucHV0W3R5cGU9XCJlbWFpbFwiXVxuLy8gaW5wdXRbdHlwZT1cInVybFwiXVxuLy8gaW5wdXRbdHlwZT1cInNlYXJjaFwiXVxuLy8gaW5wdXRbdHlwZT1cInRlbFwiXVxuLy8gaW5wdXRbdHlwZT1cImNvbG9yXCJdXG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlOyAvLyBNYWtlIGlucHV0cyBhdCBsZWFzdCB0aGUgaGVpZ2h0IG9mIHRoZWlyIGJ1dHRvbiBjb3VudGVycGFydCAoYmFzZSBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXIpXG4gIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7IC8vIE5vdGU6IFRoaXMgaGFzIG5vIGVmZmVjdCBvbiA8c2VsZWN0PnMgaW4gc29tZSBicm93c2VycywgZHVlIHRvIHRoZSBsaW1pdGVkIHN0eWxhYmlsaXR5IG9mIDxzZWxlY3Q+cyBpbiBDU1MuXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXMpO1xuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgYDpmb2N1c2Agc3RhdGUgdG8gaW1pdGF0ZSBuYXRpdmUgV2ViS2l0IHN0eWxlcy5cbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLWZvY3VzO1xuXG4gIC8vIFBsYWNlaG9sZGVyXG4gIEBpbmNsdWRlIHBsYWNlaG9sZGVyO1xuXG4gIC8vIFVuc3R5bGUgdGhlIGNhcmV0IG9uIGA8c2VsZWN0PmBzIGluIElFMTArLlxuICAmOjotbXMtZXhwYW5kIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAvLyBEaXNhYmxlZCBhbmQgcmVhZC1vbmx5IGlucHV0c1xuICAvL1xuICAvLyBIVE1MNSBzYXlzIHRoYXQgY29udHJvbHMgdW5kZXIgYSBmaWVsZHNldCA+IGxlZ2VuZDpmaXJzdC1jaGlsZCB3b24ndCBiZVxuICAvLyBkaXNhYmxlZCBpZiB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQuIER1ZSB0byBpbXBsZW1lbnRhdGlvbiBkaWZmaWN1bHR5LCB3ZVxuICAvLyBkb24ndCBob25vciB0aGF0IGVkZ2UgY2FzZTsgd2Ugc3R5bGUgdGhlbSBhcyBkaXNhYmxlZCBhbnl3YXkuXG4gICZbZGlzYWJsZWRdLFxuICAmW3JlYWRvbmx5XSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZy1kaXNhYmxlZDtcbiAgICBvcGFjaXR5OiAxOyAvLyBpT1MgZml4IGZvciB1bnJlYWRhYmxlIGRpc2FibGVkIGNvbnRlbnQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjU1XG4gIH1cblxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0ZXh0YXJlYSYgdG8gdGV4dGFyZWEuZm9ybS1jb250cm9sXG59XG5cbi8vIFJlc2V0IGhlaWdodCBmb3IgYHRleHRhcmVhYHNcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuXG4vLyBTZWFyY2ggaW5wdXRzIGluIGlPU1xuLy9cbi8vIFRoaXMgb3ZlcnJpZGVzIHRoZSBleHRyYSByb3VuZGVkIGNvcm5lcnMgb24gc2VhcmNoIGlucHV0cyBpbiBpT1Mgc28gdGhhdCBvdXJcbi8vIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuLy8gYmUgYWRkZWQgdG8gYC5mb3JtLWNvbnRyb2xgIGFzIGl0J3Mgbm90IHNwZWNpZmljIGVub3VnaC4gRm9yIGRldGFpbHMsIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU4Ni5cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuXG4vLyBTcGVjaWFsIHN0eWxlcyBmb3IgaU9TIHRlbXBvcmFsIGlucHV0c1xuLy9cbi8vIEluIE1vYmlsZSBTYWZhcmksIHNldHRpbmcgYGRpc3BsYXk6IGJsb2NrYCBvbiB0ZW1wb3JhbCBpbnB1dHMgY2F1c2VzIHRoZVxuLy8gdGV4dCB3aXRoaW4gdGhlIGlucHV0IHRvIGJlY29tZSB2ZXJ0aWNhbGx5IG1pc2FsaWduZWQuIEFzIGEgd29ya2Fyb3VuZCwgd2Vcbi8vIHNldCBhIHBpeGVsIGxpbmUtaGVpZ2h0IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gaGVpZ2h0IG9mIHRoZSBpbnB1dCwgYnV0IG9ubHlcbi8vIGZvciBTYWZhcmkuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM5ODQ4XG4vL1xuLy8gTm90ZSB0aGF0IGFzIG9mIDkuMywgaU9TIGRvZXNuJ3Qgc3VwcG9ydCBgd2Vla2AuXG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXG4gIGlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gICAgJi5mb3JtLWNvbnRyb2wge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgICB9XG5cbiAgICAmLmlucHV0LXNtLFxuICAgIC5pbnB1dC1ncm91cC1zbSAmIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIH1cblxuICAgICYuaW5wdXQtbGcsXG4gICAgLmlucHV0LWdyb3VwLWxnICYge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRm9ybSBncm91cHNcbi8vXG4vLyBEZXNpZ25lZCB0byBoZWxwIHdpdGggdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2luZyBvZiB2ZXJ0aWNhbCBmb3Jtcy4gRm9yXG4vLyBob3Jpem9udGFsIGZvcm1zLCB1c2UgdGhlIHByZWRlZmluZWQgZ3JpZCBjbGFzc2VzLlxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206ICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b207XG59XG5cblxuLy8gQ2hlY2tib3hlcyBhbmQgcmFkaW9zXG4vL1xuLy8gSW5kZW50IHRoZSBsYWJlbHMgdG8gcG9zaXRpb24gcmFkaW9zL2NoZWNrYm94ZXMgYXMgaGFuZ2luZyBjb250cm9scy5cblxuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBsYWJlbCB7XG4gICAgbWluLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkOyAvLyBFbnN1cmUgdGhlIGlucHV0IGRvZXNuJ3QganVtcCB3aGVuIHRoZXJlIGlzIG5vIHRleHRcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5yYWRpby1pbmxpbmUgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IDRweCBcXDk7XG59XG5cbi5yYWRpbyArIC5yYWRpbyxcbi5jaGVja2JveCArIC5jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IC01cHg7IC8vIE1vdmUgdXAgc2libGluZyByYWRpb3Mgb3IgY2hlY2tib3hlcyBmb3IgdGlnaHRlciBzcGFjaW5nXG59XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBvbiBzYW1lIGxpbmVcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhZGlvLWlubGluZSArIC5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lICsgLmNoZWNrYm94LWlubGluZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyAvLyBzcGFjZSBvdXQgY29uc2VjdXRpdmUgaW5saW5lIGNvbnRyb2xzXG59XG5cbi8vIEFwcGx5IHNhbWUgZGlzYWJsZWQgY3Vyc29yIHR3ZWFrIGFzIGZvciBpbnB1dHNcbi8vIFNvbWUgc3BlY2lhbCBjYXJlIGlzIG5lZWRlZCBiZWNhdXNlIDxsYWJlbD5zIGRvbid0IGluaGVyaXQgdGhlaXIgcGFyZW50J3MgYGN1cnNvcmAuXG4vL1xuLy8gTm90ZTogTmVpdGhlciByYWRpb3Mgbm9yIGNoZWNrYm94ZXMgY2FuIGJlIHJlYWRvbmx5LlxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgJltkaXNhYmxlZF0sXG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgZGlyZWN0bHkgb24gPGxhYmVsPnNcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuLy8gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBvbiBlbGVtZW50cyB3aXRoIDxsYWJlbD4gZGVzY2VuZGFudHNcbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBsYWJlbCB7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gU3RhdGljIGZvcm0gY29udHJvbCB0ZXh0XG4vL1xuLy8gQXBwbHkgY2xhc3MgdG8gYSBgcGAgZWxlbWVudCB0byBtYWtlIGFueSBzdHJpbmcgb2YgdGV4dCBhbGlnbiB3aXRoIGxhYmVscyBpblxuLy8gYSBob3Jpem9udGFsIGZvcm0gbGF5b3V0LlxuXG4uZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gIC8vIFNpemUgaXQgYXBwcm9wcmlhdGVseSBuZXh0IHRvIHJlYWwgZm9ybSBjb250cm9sc1xuICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgcGFkZGluZy1ib3R0b206ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7XG4gIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGBwYFxuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1iYXNlKTtcblxuICAmLmlucHV0LWxnLFxuICAmLmlucHV0LXNtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBCdWlsZCBvbiBgLmZvcm0tY29udHJvbGAgd2l0aCBtb2RpZmllciBjbGFzc2VzIHRvIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZVxuLy8gaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgZm9ybSBjb250cm9scy5cbi8vXG4vLyBUaGUgYC5mb3JtLWdyb3VwLSogZm9ybS1jb250cm9sYCB2YXJpYXRpb25zIGFyZSBzYWRseSBkdXBsaWNhdGVkIHRvIGF2b2lkIHRoZVxuLy8gaXNzdWUgZG9jdW1lbnRlZCBpbiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE1MDc0LlxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtc20nLCAkaW5wdXQtaGVpZ2h0LXNtYWxsLCAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG4uZm9ybS1ncm91cC1zbSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXNtYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbWFsbDtcbiAgfVxufVxuXG5AaW5jbHVkZSBpbnB1dC1zaXplKCcuaW5wdXQtbGcnLCAkaW5wdXQtaGVpZ2h0LWxhcmdlLCAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG4uZm9ybS1ncm91cC1sZyB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlO1xuICB9XG4gIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgfVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsXG4gIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgJGZvbnQtc2l6ZS1sYXJnZSk7XG4gICAgcGFkZGluZzogKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICsgMSkgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1sYXJnZTtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmZWVkYmFjayBzdGF0ZXNcbi8vXG4vLyBBcHBseSBjb250ZXh0dWFsIGFuZCBzZW1hbnRpYyBzdGF0ZXMgdG8gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2xzLlxuXG4uaGFzLWZlZWRiYWNrIHtcbiAgLy8gRW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvLyBFbnN1cmUgaWNvbnMgZG9uJ3Qgb3ZlcmxhcCB0ZXh0XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkaW5wdXQtaGVpZ2h0LWJhc2UgKiAxLjI1KTtcbiAgfVxufVxuLy8gRmVlZGJhY2sgaWNvbiAocmVxdWlyZXMgLmdseXBoaWNvbiBjbGFzc2VzKVxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjsgLy8gRW5zdXJlIGljb24gaXMgYWJvdmUgaW5wdXQgZ3JvdXBzXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1iYXNlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtYmFzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5pbnB1dC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbn1cbi5pbnB1dC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uaW5wdXQtZ3JvdXAtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB3aWR0aDogJGlucHV0LWhlaWdodC1zbWFsbDtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbWFsbDtcbn1cblxuLy8gRmVlZGJhY2sgc3RhdGVzXG4uaGFzLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG59XG4uaGFzLXdhcm5pbmcge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy1iZyk7XG59XG4uaGFzLWVycm9yIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLXRleHQsICRzdGF0ZS1kYW5nZXItYmcpO1xufVxuXG4vLyBSZXBvc2l0aW9uIGZlZWRiYWNrIGljb24gaWYgaW5wdXQgaGFzIHZpc2libGUgbGFiZWwgYWJvdmVcbi5oYXMtZmVlZGJhY2sgbGFiZWwge1xuXG4gICYgfiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyA1KTsgLy8gSGVpZ2h0IG9mIHRoZSBgbGFiZWxgIGFuZCBpdHMgbWFyZ2luXG4gIH1cbiAgJi5zci1vbmx5IH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cblxuLy8gSGVscCB0ZXh0XG4vL1xuLy8gQXBwbHkgdG8gYW55IGVsZW1lbnQgeW91IHdpc2ggdG8gY3JlYXRlIGxpZ2h0IHRleHQgZm9yIHBsYWNlbWVudCBpbW1lZGlhdGVseVxuLy8gYmVsb3cgYSBmb3JtIGNvbnRyb2wuIFVzZSBmb3IgZ2VuZXJhbCBoZWxwLCBmb3JtYXR0aW5nLCBvciBpbnN0cnVjdGlvbmFsIHRleHQuXG5cbi5oZWxwLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7IC8vIGFjY291bnQgZm9yIGFueSBlbGVtZW50IHVzaW5nIGhlbHAtYmxvY2tcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogbGlnaHRlbigkdGV4dC1jb2xvciwgMjUlKTsgLy8gbGlnaHRlbiB0aGUgdGV4dCBzb21lIGZvciBjb250cmFzdFxufVxuXG5cbi8vIElubGluZSBmb3Jtc1xuLy9cbi8vIE1ha2UgZm9ybXMgYXBwZWFyIGlubGluZSgtYmxvY2spIGJ5IGFkZGluZyB0aGUgYC5mb3JtLWlubGluZWAgY2xhc3MuIElubGluZVxuLy8gZm9ybXMgYmVnaW4gc3RhY2tlZCBvbiBleHRyYSBzbWFsbCAobW9iaWxlKSBkZXZpY2VzIGFuZCB0aGVuIGdvIGlubGluZSB3aGVuXG4vLyB2aWV3cG9ydHMgcmVhY2ggPDc2OHB4LlxuLy9cbi8vIFJlcXVpcmVzIHdyYXBwaW5nIGlucHV0cyBhbmQgbGFiZWxzIHdpdGggYC5mb3JtLWdyb3VwYCBmb3IgcHJvcGVyIGRpc3BsYXkgb2Zcbi8vIGRlZmF1bHQgSFRNTCBmb3JtIGNvbnRyb2xzIGFuZCBvdXIgY3VzdG9tIGZvcm0gY29udHJvbHMgKGUuZy4sIGlucHV0IGdyb3VwcykuXG4vL1xuLy8gSGVhZHMgdXAhIFRoaXMgaXMgbWl4aW4tZWQgaW50byBgLm5hdmJhci1mb3JtYCBpbiBuYXZiYXJzLmxlc3MuXG5cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBmcm9tIGAuZm9ybS1pbmxpbmVgIGZvciBsaWJzYXNzIGNvbXBhdGliaWxpdHlcbkBtaXhpbiBmb3JtLWlubGluZSB7XG5cbiAgLy8gS2ljayBpbiB0aGUgaW5saW5lXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIC8vIElubGluZS1ibG9jayBhbGwgdGhlIHRoaW5ncyBmb3IgXCJpbmxpbmVcIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIEluIG5hdmJhci1mb3JtLCBhbGxvdyBmb2xrcyB0byAqbm90KiB1c2UgYC5mb3JtLWdyb3VwYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87IC8vIFByZXZlbnQgbGFiZWxzIGZyb20gc3RhY2tpbmcgYWJvdmUgaW5wdXRzIGluIGAuZm9ybS1ncm91cGBcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdGF0aWMgY29udHJvbHMgYmVoYXZlIGxpa2UgcmVndWxhciBvbmVzXG4gICAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gICAgICAuaW5wdXQtZ3JvdXAtYnRuLFxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucHV0IGdyb3VwcyBuZWVkIHRoYXQgMTAwJSB3aWR0aCB0aG91Z2hcbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBvbiByYWRpb3MvY2hlY2tib3hlcyB0aGF0IHdlcmUgdXNlZCBmb3Igc3RhY2tpbmcsIGFuZFxuICAgIC8vIHRoZW4gdW5kbyB0aGUgZmxvYXRpbmcgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzIHRvIG1hdGNoLlxuICAgIC5yYWRpbyxcbiAgICAuY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC8vIFJlLW92ZXJyaWRlIHRoZSBmZWVkYmFjayBpY29uLlxuICAgIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICB9XG59XG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYXMgYEBtaXhpbiBmb3JtLWlubGluZWAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuLmZvcm0taW5saW5lIHtcbiAgQGluY2x1ZGUgZm9ybS1pbmxpbmU7XG59XG5cblxuXG4vLyBIb3Jpem9udGFsIGZvcm1zXG4vL1xuLy8gSG9yaXpvbnRhbCBmb3JtcyBhcmUgYnVpbHQgb24gZ3JpZCBjbGFzc2VzIGFuZCBhbGxvdyB5b3UgdG8gY3JlYXRlIGZvcm1zIHdpdGhcbi8vIGxhYmVscyBvbiB0aGUgbGVmdCBhbmQgaW5wdXRzIG9uIHRoZSByaWdodC5cblxuLmZvcm0taG9yaXpvbnRhbCB7XG5cbiAgLy8gQ29uc2lzdGVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgcmFkaW9zIGFuZCBjaGVja2JveGVzXG4gIC8vXG4gIC8vIExhYmVscyBhbHNvIGdldCBzb21lIHJlc2V0IHN0eWxlcywgYnV0IHRoYXQgaXMgc2NvcGVkIHRvIGEgbWVkaWEgcXVlcnkgYmVsb3cuXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSk7IC8vIERlZmF1bHQgcGFkZGluZyBwbHVzIGEgYm9yZGVyXG4gIH1cbiAgLy8gQWNjb3VudCBmb3IgcGFkZGluZyB3ZSdyZSBhZGRpbmcgdG8gZW5zdXJlIHRoZSBhbGlnbm1lbnQgYW5kIG9mIGhlbHAgdGV4dFxuICAvLyBhbmQgb3RoZXIgY29udGVudCBiZWxvdyBpdGVtc1xuICAucmFkaW8sXG4gIC5jaGVja2JveCB7XG4gICAgbWluLWhlaWdodDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICsgMSkpO1xuICB9XG5cbiAgLy8gTWFrZSBmb3JtIGdyb3VwcyBiZWhhdmUgbGlrZSByb3dzXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdztcbiAgfVxuXG4gIC8vIFJlc2V0IHNwYWNpbmcgYW5kIHJpZ2h0IGFsaWduIGxhYmVscywgYnV0IHNjb3BlIHRvIG1lZGlhIHF1ZXJpZXMgc28gdGhhdFxuICAvLyBsYWJlbHMgb24gbmFycm93IHZpZXdwb3J0cyBzdGFjayB0aGUgc2FtZSBhcyBhIGRlZmF1bHQgZm9ybSBleGFtcGxlLlxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAuY29udHJvbC1sYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTsgLy8gRGVmYXVsdCBwYWRkaW5nIHBsdXMgYSBib3JkZXJcbiAgICB9XG4gIH1cblxuICAvLyBWYWxpZGF0aW9uIHN0YXRlc1xuICAvL1xuICAvLyBSZXBvc2l0aW9uIHRoZSBpY29uIGJlY2F1c2UgaXQncyBub3cgd2l0aGluIGEgZ3JpZCBjb2x1bW4gYW5kIGNvbHVtbnMgaGF2ZVxuICAvLyBgcG9zaXRpb246IHJlbGF0aXZlO2Agb24gdGhlbS4gQWxzbyBhY2NvdW50cyBmb3IgdGhlIGdyaWQgZ3V0dGVyIHBhZGRpbmcuXG4gIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcmlnaHQ6IGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSk7XG4gIH1cblxuICAvLyBGb3JtIGdyb3VwIHNpemVzXG4gIC8vXG4gIC8vIFF1aWNrIHV0aWxpdHkgY2xhc3MgZm9yIGFwcGx5aW5nIGAuaW5wdXQtbGdgIGFuZCBgLmlucHV0LXNtYCBzdHlsZXMgdG8gdGhlXG4gIC8vIGlucHV0cyBhbmQgbGFiZWxzIHdpdGhpbiBhIGAuZm9ybS1ncm91cGAuXG4gIC5mb3JtLWdyb3VwLWxnIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb3JtLWdyb3VwLXNtIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCArIDEpO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIHN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gRm9yIGlucHV0LmJ0blxuICBmb250LXdlaWdodDogJGJ0bi1mb250LXdlaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy1iYXNlLXZlcnRpY2FsLCAkcGFkZGluZy1iYXNlLWhvcml6b250YWwsICRmb250LXNpemUtYmFzZSwgJGxpbmUtaGVpZ2h0LWJhc2UsICRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgQGluY2x1ZGUgdXNlci1zZWxlY3Qobm9uZSk7XG5cbiAgJixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgQGluY2x1ZGUgdGFiLWZvY3VzO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkYnRuLWRlZmF1bHQtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KSk7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC42NSk7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmJ0blxufVxuXG5hLmJ0biB7XG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLy8gRnV0dXJlLXByb29mIGRpc2FibGluZyBvZiBjbGlja3Mgb24gYDxhPmAgZWxlbWVudHNcbiAgfVxufVxuXG5cbi8vIEFsdGVybmF0ZSBidXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuLWRlZmF1bHQge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWRlZmF1bHQtY29sb3IsICRidG4tZGVmYXVsdC1iZywgJGJ0bi1kZWZhdWx0LWJvcmRlcik7XG59XG4uYnRuLXByaW1hcnkge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXByaW1hcnktY29sb3IsICRidG4tcHJpbWFyeS1iZywgJGJ0bi1wcmltYXJ5LWJvcmRlcik7XG59XG4vLyBTdWNjZXNzIGFwcGVhcnMgYXMgZ3JlZW5cbi5idG4tc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tc3VjY2Vzcy1jb2xvciwgJGJ0bi1zdWNjZXNzLWJnLCAkYnRuLXN1Y2Nlc3MtYm9yZGVyKTtcbn1cbi8vIEluZm8gYXBwZWFycyBhcyBibHVlLWdyZWVuXG4uYnRuLWluZm8ge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWluZm8tY29sb3IsICRidG4taW5mby1iZywgJGJ0bi1pbmZvLWJvcmRlcik7XG59XG4vLyBXYXJuaW5nIGFwcGVhcnMgYXMgb3JhbmdlXG4uYnRuLXdhcm5pbmcge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXdhcm5pbmctY29sb3IsICRidG4td2FybmluZy1iZywgJGJ0bi13YXJuaW5nLWJvcmRlcik7XG59XG4vLyBEYW5nZXIgYW5kIGVycm9yIGFwcGVhciBhcyByZWRcbi5idG4tZGFuZ2VyIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1kYW5nZXItY29sb3IsICRidG4tZGFuZ2VyLWJnLCAkYnRuLWRhbmdlci1ib3JkZXIpO1xufVxuXG5cbi8vIExpbmsgYnV0dG9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNYWtlIGEgYnV0dG9uIGxvb2sgYW5kIGJlaGF2ZSBsaWtlIGEgbGlua1xuLmJ0bi1saW5rIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICYsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJltkaXNhYmxlZF0sXG4gIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBCdXR0b24gU2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tbGcge1xuICAvLyBsaW5lLWhlaWdodDogZW5zdXJlIGV2ZW4tbnVtYmVyZWQgaGVpZ2h0IG9mIGJ1dHRvbiBuZXh0IHRvIGxhcmdlIGlucHV0XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsLCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWxhcmdlLCAkbGluZS1oZWlnaHQtbGFyZ2UsICRidG4tYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG59XG4uYnRuLXNtIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBwcm9wZXIgaGVpZ2h0IG9mIGJ1dHRvbiBuZXh0IHRvIHNtYWxsIGlucHV0XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsLCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG59XG4uYnRuLXhzIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmcteHMtdmVydGljYWwsICRwYWRkaW5nLXhzLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJ0bi1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbn1cblxuXG4vLyBCbG9jayBidXR0b25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIFZlcnRpY2FsbHkgc3BhY2Ugb3V0IG11bHRpcGxlIGJsb2NrIGJ1dHRvbnNcbi5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBTcGVjaWZpY2l0eSBvdmVycmlkZXNcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgJi5idG4tYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIvL1xuLy8gQ29tcG9uZW50IGFuaW1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEhlYWRzIHVwIVxuLy9cbi8vIFdlIGRvbid0IHVzZSB0aGUgYC5vcGFjaXR5KClgIG1peGluIGhlcmUgc2luY2UgaXQgY2F1c2VzIGEgYnVnIHdpdGggdGV4dFxuLy8gZmllbGRzIGluIElFNy04LiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzM1NTIuXG5cbi5mYWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihvcGFjaXR5IC4xNXMgbGluZWFyKTtcbiAgJi5pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYuaW4gICAgICB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCB0ciYuaW4gdG8gdHIuY29sbGFwc2UuaW5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIHRib2R5Ji5pbiB0byB0Ym9keS5jb2xsYXBzZS5pblxufVxuXG50ci5jb2xsYXBzZS5pbiAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdzsgfVxuXG50Ym9keS5jb2xsYXBzZS5pbiB7IGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDsgfVxuXG4uY29sbGFwc2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLXByb3BlcnR5KGhlaWdodCwgdmlzaWJpbGl0eSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tZHVyYXRpb24oLjM1cyk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKGVhc2UpO1xufVxuIiwiLy9cbi8vIERyb3Bkb3duIG1lbnVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIERyb3Bkb3duIGFycm93L2NhcmV0XG4uY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6ICAgJGNhcmV0LXdpZHRoLWJhc2UgZGFzaGVkO1xuICBib3JkZXItdG9wOiAgICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIFxcOTsgLy8gSUU4XG4gIGJvcmRlci1yaWdodDogJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAgJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi8vIFRoZSBkcm9wZG93biB3cmFwcGVyIChkaXYpXG4uZHJvcHVwLFxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyBQcmV2ZW50IHRoZSBmb2N1cyBvbiB0aGUgZHJvcGRvd24gdG9nZ2xlIHdoZW4gY2xvc2luZyBkcm9wZG93bnNcbi5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vLyBUaGUgZHJvcGRvd24gbWVudSAodWwpXG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LWRyb3Bkb3duO1xuICBkaXNwbGF5OiBub25lOyAvLyBub25lIGJ5IGRlZmF1bHQsIGJ1dCBibG9jayBvbiBcIm9wZW5cIiBvZiB0aGUgbWVudVxuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMnB4IDAgMDsgLy8gb3ZlcnJpZGUgZGVmYXVsdCB1bFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRW5zdXJlcyBwcm9wZXIgYWxpZ25tZW50IGlmIHBhcmVudCBoYXMgaXQgY2hhbmdlZCAoZS5nLiwgbW9kYWwgZm9vdGVyKVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJvcGRvd24tYmc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRkcm9wZG93bi1mYWxsYmFjay1ib3JkZXI7IC8vIElFOCBmYWxsYmFja1xuICBib3JkZXI6IDFweCBzb2xpZCAkZHJvcGRvd24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KSk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG5cbiAgLy8gQWxpZ25zIHRoZSBkcm9wZG93biBtZW51IHRvIHJpZ2h0XG4gIC8vXG4gIC8vIERlcHJlY2F0ZWQgYXMgb2YgMy4xLjAgaW4gZmF2b3Igb2YgYC5kcm9wZG93bi1tZW51LVtkaXJdYFxuICAmLnB1bGwtcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICAvLyBEaXZpZGVycyAoYmFzaWNhbGx5IGFuIGhyKSB3aXRoaW4gdGhlIGRyb3Bkb3duXG4gIC5kaXZpZGVyIHtcbiAgICBAaW5jbHVkZSBuYXYtZGl2aWRlcigkZHJvcGRvd24tZGl2aWRlci1iZyk7XG4gIH1cblxuICAvLyBMaW5rcyB3aXRoaW4gdGhlIGRyb3Bkb3duIG1lbnVcbiAgPiBsaSA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1jb2xvcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvLyBwcmV2ZW50IGxpbmtzIGZyb20gcmFuZG9tbHkgYnJlYWtpbmcgb250byBuZXcgbGluZXNcbiAgfVxufVxuXG4vLyBIb3Zlci9Gb2N1cyBzdGF0ZVxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcm9wZG93bi1saW5rLWhvdmVyLWJnO1xuICB9XG59XG5cbi8vIEFjdGl2ZSBzdGF0ZVxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnO1xuICB9XG59XG5cbi8vIERpc2FibGVkIHN0YXRlXG4vL1xuLy8gR3JheSBvdXQgdGV4dCBhbmQgZW5zdXJlIHRoZSBob3Zlci9mb2N1cyBzdGF0ZSByZW1haW5zIGdyYXlcblxuLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLy8gTnVrZSBob3Zlci9mb2N1cyBlZmZlY3RzXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZW1vdmUgQ1NTIGdyYWRpZW50XG4gICAgQGluY2x1ZGUgcmVzZXQtZmlsdGVyO1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuXG4vLyBPcGVuIHN0YXRlIGZvciB0aGUgZHJvcGRvd25cbi5vcGVuIHtcbiAgLy8gU2hvdyB0aGUgbWVudVxuICA+IC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgb3V0bGluZSB3aGVuIDpmb2N1cyBpcyB0cmlnZ2VyZWRcbiAgPiBhIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbi8vIE1lbnUgcG9zaXRpb25pbmdcbi8vXG4vLyBBZGQgZXh0cmEgY2xhc3MgdG8gYC5kcm9wZG93bi1tZW51YCB0byBmbGlwIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGRyb3Bkb3duXG4vLyBtZW51IHdpdGggdGhlIHBhcmVudC5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgbGVmdDogYXV0bzsgLy8gUmVzZXQgdGhlIGRlZmF1bHQgZnJvbSBgLmRyb3Bkb3duLW1lbnVgXG4gIHJpZ2h0OiAwO1xufVxuLy8gV2l0aCB2Mywgd2UgZW5hYmxlZCBhdXRvLWZsaXBwaW5nIGlmIHlvdSBoYXZlIGEgZHJvcGRvd24gd2l0aGluIGEgcmlnaHRcbi8vIGFsaWduZWQgbmF2IGNvbXBvbmVudC4gVG8gZW5hYmxlIHRoZSB1bmRvaW5nIG9mIHRoYXQsIHdlIHByb3ZpZGUgYW4gb3ZlcnJpZGVcbi8vIHRvIHJlc3RvcmUgdGhlIGRlZmF1bHQgZHJvcGRvd24gbWVudSBhbGlnbm1lbnQuXG4vL1xuLy8gVGhpcyBpcyBvbmx5IGZvciBsZWZ0LWFsaWduaW5nIGEgZHJvcGRvd24gbWVudSB3aXRoaW4gYSBgLm5hdmJhci1yaWdodGAgb3Jcbi8vIGAucHVsbC1yaWdodGAgbmF2IGNvbXBvbmVudC5cbi5kcm9wZG93bi1tZW51LWxlZnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbn1cblxuLy8gRHJvcGRvd24gc2VjdGlvbiBoZWFkZXJzXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgY29sb3I6ICRkcm9wZG93bi1oZWFkZXItY29sb3I7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vIGFzIHdpdGggPiBsaSA+IGFcbn1cblxuLy8gQmFja2Ryb3AgdG8gY2F0Y2ggYm9keSBjbGlja3Mgb24gbW9iaWxlLCBldGMuXG4uZHJvcGRvd24tYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogKCR6aW5kZXgtZHJvcGRvd24gLSAxMCk7XG59XG5cbi8vIFJpZ2h0IGFsaWduZWQgZHJvcGRvd25zXG4ucHVsbC1yaWdodCA+IC5kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi8vIEFsbG93IGZvciBkcm9wZG93bnMgdG8gZ28gYm90dG9tIHVwIChha2EsIGRyb3B1cC1tZW51KVxuLy9cbi8vIEp1c3QgYWRkIC5kcm9wdXAgYWZ0ZXIgdGhlIHN0YW5kYXJkIC5kcm9wZG93biBjbGFzcyBhbmQgeW91J3JlIHNldCwgYnJvLlxuLy8gVE9ETzogYWJzdHJhY3QgdGhpcyBzbyB0aGF0IHRoZSBuYXZiYXIgZml4ZWQgc3R5bGVzIGFyZSBub3QgcGxhY2VkIGhlcmU/XG5cbi5kcm9wdXAsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24ge1xuICAvLyBSZXZlcnNlIHRoZSBjYXJldFxuICAuY2FyZXQge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNhcmV0LXdpZHRoLWJhc2UgZGFzaGVkO1xuICAgIGJvcmRlci1ib3R0b206ICRjYXJldC13aWR0aC1iYXNlIHNvbGlkIFxcOTsgLy8gSUU4XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAvLyBEaWZmZXJlbnQgcG9zaXRpb25pbmcgZm9yIGJvdHRvbSB1cCBtZW51XG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxufVxuXG5cbi8vIENvbXBvbmVudCBhbGlnbm1lbnRcbi8vXG4vLyBSZWl0ZXJhdGUgcGVyIG5hdmJhci5sZXNzIGFuZCB0aGUgbW9kaWZpZWQgY29tcG9uZW50IGFsaWdubWVudCB0aGVyZS5cblxuQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgLm5hdmJhci1yaWdodCB7XG4gICAgLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87XG4gICAgfVxuICAgIC8vIE5lY2Vzc2FyeSBmb3Igb3ZlcnJpZGVzIG9mIHRoZSBkZWZhdWx0IHJpZ2h0IGFsaWduZWQgbWVudS5cbiAgICAvLyBXaWxsIHJlbW92ZSBjb21lIHY0IGluIGFsbCBsaWtlbGlob29kLlxuICAgIC5kcm9wZG93bi1tZW51LWxlZnQge1xuICAgICAgbGVmdDogMDsgcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQnV0dG9uIGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWFrZSB0aGUgZGl2IGJlaGF2ZSBsaWtlIGEgYnV0dG9uXG4uYnRuLWdyb3VwLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvLyBtYXRjaCAuYnRuIGFsaWdubWVudCBnaXZlbiBmb250LXNpemUgaGFjayBhYm92ZVxuICA+IC5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlLFxuICAgICYuYWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG59XG5cbi8vIFByZXZlbnQgZG91YmxlIGJvcmRlcnMgd2hlbiBidXR0b25zIGFyZSBuZXh0IHRvIGVhY2ggb3RoZXJcbi5idG4tZ3JvdXAge1xuICAuYnRuICsgLmJ0bixcbiAgLmJ0biArIC5idG4tZ3JvdXAsXG4gIC5idG4tZ3JvdXAgKyAuYnRuLFxuICAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWw6IEdyb3VwIG11bHRpcGxlIGJ1dHRvbiBncm91cHMgdG9nZXRoZXIgZm9yIGEgdG9vbGJhclxuLmJ0bi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7IC8vIE9mZnNldCB0aGUgZmlyc3QgY2hpbGQncyBtYXJnaW5cbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgLmJ0bixcbiAgLmJ0bi1ncm91cCxcbiAgLmlucHV0LWdyb3VwIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCxcbiAgPiAuaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vLyBTZXQgY29ybmVycyBpbmRpdmlkdWFsIGJlY2F1c2Ugc29tZXRpbWVzIGEgc2luZ2xlIGJ1dHRvbiBjYW4gYmUgaW4gYSAuYnRuLWdyb3VwIGFuZCB3ZSBuZWVkIDpmaXJzdC1jaGlsZCBhbmQgOmxhc3QtY2hpbGQgdG8gYm90aCBtYXRjaFxuLmJ0bi1ncm91cCA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgJjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLy8gTmVlZCAuZHJvcGRvd24tdG9nZ2xlIHNpbmNlIDpsYXN0LWNoaWxkIGRvZXNuJ3QgYXBwbHksIGdpdmVuIHRoYXQgYSAuZHJvcGRvd24tbWVudSBpcyB1c2VkIGltbWVkaWF0ZWx5IGFmdGVyIGl0XG4uYnRuLWdyb3VwID4gLmJ0bjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmJ0bi1ncm91cCA+IC5kcm9wZG93bi10b2dnbGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG5cbi8vIEN1c3RvbSBlZGl0cyBmb3IgaW5jbHVkaW5nIGJ0bi1ncm91cHMgd2l0aGluIGJ0bi1ncm91cHMgKHVzZWZ1bCBmb3IgaW5jbHVkaW5nIGRyb3Bkb3duIGJ1dHRvbnMgd2l0aGluIGEgYnRuLWdyb3VwKVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXAge1xuICBmbG9hdDogbGVmdDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICA+IC5idG46bGFzdC1jaGlsZCxcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xuICB9XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cblxuLy8gT24gYWN0aXZlIGFuZCBvcGVuLCBkb24ndCBzaG93IG91dGxpbmVcbi5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG91dGxpbmU6IDA7XG59XG5cblxuLy8gU2l6aW5nXG4vL1xuLy8gUmVtaXggdGhlIGRlZmF1bHQgYnV0dG9uIHNpemluZyBjbGFzc2VzIGludG8gbmV3IG9uZXMgZm9yIGVhc2llciBtYW5pcHVsYXRpb24uXG5cbi5idG4tZ3JvdXAteHMgPiAuYnRuIHsgQGV4dGVuZCAuYnRuLXhzOyB9XG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7IEBleHRlbmQgLmJ0bi1zbTsgfVxuLmJ0bi1ncm91cC1sZyA+IC5idG4geyBAZXh0ZW5kIC5idG4tbGc7IH1cblxuXG4vLyBTcGxpdCBidXR0b24gZHJvcGRvd25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdpdmUgdGhlIGxpbmUgYmV0d2VlbiBidXR0b25zIHNvbWUgZGVwdGhcbi5idG4tZ3JvdXAgPiAuYnRuICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1sZyArIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi8vIFRoZSBjbGlja2FibGUgYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgbWVudVxuLy8gUmVtb3ZlIHRoZSBncmFkaWVudCBhbmQgc2V0IHRoZSBzYW1lIGluc2V0IHNoYWRvdyBhcyB0aGUgOmFjdGl2ZSBzdGF0ZVxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpKTtcblxuICAvLyBTaG93IG5vIHNoYWRvdyBmb3IgYC5idG4tbGlua2Agc2luY2UgaXQgaGFzIG5vIG90aGVyIGJ1dHRvbiBzdHlsZXMuXG4gICYuYnRuLWxpbmsge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbn1cblxuXG4vLyBSZXBvc2l0aW9uIHRoZSBjYXJldFxuLmJ0biAuY2FyZXQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi8vIENhcmV0cyBpbiBvdGhlciBidXR0b24gc2l6ZXNcbi5idG4tbGcgLmNhcmV0IHtcbiAgYm9yZGVyLXdpZHRoOiAkY2FyZXQtd2lkdGgtbGFyZ2UgJGNhcmV0LXdpZHRoLWxhcmdlIDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4vLyBVcHNpZGUgZG93biBjYXJldHMgZm9yIC5kcm9wdXBcbi5kcm9wdXAgLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6IDAgJGNhcmV0LXdpZHRoLWxhcmdlICRjYXJldC13aWR0aC1sYXJnZTtcbn1cblxuXG4vLyBWZXJ0aWNhbCBidXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCxcbiAgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gQ2xlYXIgZmxvYXRzIHNvIGRyb3Bkb3duIG1lbnVzIGNhbiBiZSBwcm9wZXJseSBwbGFjZWRcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgICA+IC5idG4ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgPiAuYnRuICsgLmJ0bixcbiAgPiAuYnRuICsgLmJ0bi1ncm91cCxcbiAgPiAuYnRuLWdyb3VwICsgLmJ0bixcbiAgPiAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0biB7XG4gICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAmOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCRidG4tYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgfVxufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gID4gLmJ0bjpsYXN0LWNoaWxkLFxuICA+IC5kcm9wZG93bi10b2dnbGUge1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xuICB9XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuXG5cbi8vIEp1c3RpZmllZCBidXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZ3JvdXAtanVzdGlmaWVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogMSU7XG4gIH1cbiAgPiAuYnRuLWdyb3VwIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgPiAuYnRuLWdyb3VwIC5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG5cblxuLy8gQ2hlY2tib3ggYW5kIHJhZGlvIG9wdGlvbnNcbi8vXG4vLyBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBicm93c2VyJ3MgZm9ybSB2YWxpZGF0aW9uIGZlZWRiYWNrLCBwb3dlcmVkIGJ5IHRoZVxuLy8gYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHdlIGhhdmUgdG8gXCJoaWRlXCIgdGhlIGlucHV0cyB2aWEgYGNsaXBgLiBXZSBjYW5ub3QgdXNlXG4vLyBgZGlzcGxheTogbm9uZTtgIG9yIGB2aXNpYmlsaXR5OiBoaWRkZW47YCBhcyB0aGF0IGFsc28gaGlkZXMgdGhlIHBvcG92ZXIuXG4vLyBTaW1wbHkgdmlzdWFsbHkgaGlkaW5nIHRoZSBpbnB1dHMgdmlhIGBvcGFjaXR5YCB3b3VsZCBsZWF2ZSB0aGVtIGNsaWNrYWJsZSBpblxuLy8gY2VydGFpbiBjYXNlcyB3aGljaCBpcyBwcmV2ZW50ZWQgYnkgdXNpbmcgYGNsaXBgIGFuZCBgcG9pbnRlci1ldmVudHNgLlxuLy8gVGhpcyB3YXksIHdlIGVuc3VyZSBhIERPTSBlbGVtZW50IGlzIHZpc2libGUgdG8gcG9zaXRpb24gdGhlIHBvcG92ZXIgZnJvbS5cbi8vXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTI3OTQgYW5kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xNDU1OSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSB7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjbGlwOiByZWN0KDAsMCwwLDApO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gSW5wdXQgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCYXNlIHN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBGb3IgZHJvcGRvd25zXG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlOyAvLyBwcmV2ZW50IGlucHV0IGdyb3VwcyBmcm9tIGluaGVyaXRpbmcgYm9yZGVyIHN0eWxlcyBmcm9tIHRhYmxlIGNlbGxzIHdoZW4gcGxhY2VkIHdpdGhpbiBhIHRhYmxlXG5cbiAgLy8gVW5kbyBwYWRkaW5nIGFuZCBmbG9hdCBvZiBncmlkIGNsYXNzZXNcbiAgJltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBpbnB1dCBpcyBhbHdheXMgYWJvdmUgdGhlICphcHBlbmRlZCogYWRkb24gYnV0dG9uIGZvclxuICAgIC8vIHByb3BlciBib3JkZXIgY29sb3JzLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLy8gSUU5IGZ1YmFycyB0aGUgcGxhY2Vob2xkZXIgYXR0cmlidXRlIGluIHRleHQgaW5wdXRzIGFuZCB0aGUgYXJyb3dzIG9uXG4gICAgLy8gc2VsZWN0IGVsZW1lbnRzIGluIGlucHV0IGdyb3Vwcy4gVG8gZml4IGl0LCB3ZSBmbG9hdCB0aGUgaW5wdXQuIERldGFpbHM6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU2MSNpc3N1ZWNvbW1lbnQtMjg5MzY4NTVcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuICB9XG59XG5cbi8vIFNpemluZyBvcHRpb25zXG4vL1xuLy8gUmVtaXggdGhlIGRlZmF1bHQgZm9ybSBjb250cm9sIHNpemluZyBjbGFzc2VzIGludG8gbmV3IG9uZXMgZm9yIGVhc2llclxuLy8gbWFuaXB1bGF0aW9uLlxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBAZXh0ZW5kIC5pbnB1dC1sZztcbn1cbi5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIEBleHRlbmQgLmlucHV0LXNtO1xufVxuXG5cbi8vIERpc3BsYXkgYXMgdGFibGUtY2VsbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0bixcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi8vIEFkZG9uIGFuZCBhZGRvbiB3cmFwcGVyIGZvciBidXR0b25zXG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuIHtcbiAgd2lkdGg6IDElO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvLyBNYXRjaCB0aGUgaW5wdXRzXG59XG5cbi8vIFRleHQgaW5wdXQgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBwYWRkaW5nOiAkcGFkZGluZy1iYXNlLXZlcnRpY2FsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1ncm91cC1hZGRvbi1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XG5cbiAgLy8gU2l6aW5nXG4gICYuaW5wdXQtc20ge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsO1xuICB9XG4gICYuaW5wdXQtbGcge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlO1xuICB9XG5cbiAgLy8gTnVrZSBkZWZhdWx0IG1hcmdpbnMgZnJvbSBjaGVja2JveGVzIGFuZCByYWRpb3MgdG8gdmVydGljYWxseSBjZW50ZXIgd2l0aGluLlxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4vLyBSZXNldCByb3VuZGVkIGNvcm5lcnNcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bi1ncm91cCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmxhc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLWdyb3VwID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5kcm9wZG93bi10b2dnbGUsXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0biB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi8vIEJ1dHRvbiBpbnB1dCBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5pbnB1dC1ncm91cC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIEphbmtpbHkgcHJldmVudCBpbnB1dCBidXR0b24gZ3JvdXBzIGZyb20gd3JhcHBpbmcgd2l0aCBgd2hpdGUtc3BhY2VgIGFuZFxuICAvLyBgZm9udC1zaXplYCBpbiBjb21iaW5hdGlvbiB3aXRoIGBpbmxpbmUtYmxvY2tgIG9uIGJ1dHRvbnMuXG4gIGZvbnQtc2l6ZTogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAvLyBOZWdhdGl2ZSBtYXJnaW4gZm9yIHNwYWNpbmcsIHBvc2l0aW9uIGZvciBicmluZ2luZyBob3ZlcmVkL2ZvY3VzZWQvYWN0aXZlZFxuICAvLyBlbGVtZW50IGFib3ZlIHRoZSBzaWJsaW5ncy5cbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgKyAuYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG5cbiAgLy8gTmVnYXRpdmUgbWFyZ2luIHRvIG9ubHkgaGF2ZSBhIDFweCBib3JkZXIgYmV0d2VlbiB0aGUgdHdvXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgID4gLmJ0bixcbiAgICA+IC5idG4tZ3JvdXAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIH1cbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgID4gLmJ0bixcbiAgICA+IC5idG4tZ3JvdXAge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIE5hdnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gT3ZlcnJpZGUgZGVmYXVsdCB1bC9vbFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICA+IGEge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAkbmF2LWxpbmstcGFkZGluZztcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZWQgc3RhdGUgc2V0cyB0ZXh0IHRvIGdyYXkgYW5kIG51a2VzIGhvdmVyL3RhYiBlZmZlY3RzXG4gICAgJi5kaXNhYmxlZCA+IGEge1xuICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT3BlbiBkcm9wZG93bnNcbiAgLm9wZW4gPiBhIHtcbiAgICAmLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstaG92ZXItYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRsaW5rLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5hdiBkaXZpZGVycyAoZGVwcmVjYXRlZCB3aXRoIHYzLjAuMSlcbiAgLy9cbiAgLy8gVGhpcyBzaG91bGQgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjMgd2l0aCB0aGUgZHJvcHBpbmcgb2YgYC5uYXYtbGlzdGAsIGJ1dFxuICAvLyB3ZSBtaXNzZWQgaXQuIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IHRoaXMgYW55d2hlcmUsIGJ1dCBpbiB0aGUgaW50ZXJlc3RcbiAgLy8gb2YgbWFpbnRhaW5pbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBpbiBjYXNlIHlvdSB1c2UgaXQsIGl0J3MgZGVwcmVjYXRlZC5cbiAgLm5hdi1kaXZpZGVyIHtcbiAgICBAaW5jbHVkZSBuYXYtZGl2aWRlcjtcbiAgfVxuXG4gIC8vIFByZXZlbnQgSUU4IGZyb20gbWlzcGxhY2luZyBpbWdzXG4gIC8vXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvOTg0I2lzc3VlY29tbWVudC0zOTg1OTg5XG4gID4gbGkgPiBhID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEdpdmUgdGhlIHRhYnMgc29tZXRoaW5nIHRvIHNpdCBvblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIE1ha2UgdGhlIGxpc3QtaXRlbXMgb3ZlcmxheSB0aGUgYm90dG9tIGJvcmRlclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG5cbiAgICAvLyBBY3R1YWwgdGFicyAoYXMgbGlua3MpXG4gICAgPiBhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlICRib3JkZXItcmFkaXVzLWJhc2UgMCAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvciAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2ZSBzdGF0ZSwgYW5kIGl0cyA6aG92ZXIgdG8gb3ZlcnJpZGUgbm9ybWFsIDpob3ZlclxuICAgICYuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIHB1bGxpbmcgdGhpcyBpbiBtYWlubHkgZm9yIGxlc3Mgc2hvcnRoYW5kXG4gICYubmF2LWp1c3RpZmllZCB7XG4gICAgQGV4dGVuZCAubmF2LWp1c3RpZmllZDtcbiAgICBAZXh0ZW5kIC5uYXYtdGFicy1qdXN0aWZpZWQ7XG4gIH1cbn1cblxuXG4vLyBQaWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLm5hdi1waWxscyB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgLy8gTGlua3MgcmVuZGVyZWQgYXMgcGlsbHNcbiAgICA+IGEge1xuICAgICAgYm9yZGVyLXJhZGl1czogJG5hdi1waWxscy1ib3JkZXItcmFkaXVzO1xuICAgIH1cbiAgICArIGxpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgLy8gQWN0aXZlIHN0YXRlXG4gICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YWNrZWQgcGlsbHNcbi5uYXYtc3RhY2tlZCB7XG4gID4gbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgICsgbGkge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IC8vIG5vIG5lZWQgZm9yIHRoaXMgZ2FwIGJldHdlZW4gbmF2IGl0ZW1zXG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2IHZhcmlhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEp1c3RpZmllZCBuYXYgbGlua3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLm5hdi1qdXN0aWZpZWQge1xuICB3aWR0aDogMTAwJTtcblxuICA+IGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICA+IGEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gID4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHdpZHRoOiAxJTtcbiAgICAgID4gYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vdmUgYm9yZGVycyB0byBhbmNob3JzIGluc3RlYWQgb2YgYm90dG9tIG9mIGxpc3Rcbi8vXG4vLyBNaXhpbiBmb3IgYWRkaW5nIG9uIHRvcCB0aGUgc2hhcmVkIGAubmF2LWp1c3RpZmllZGAgc3R5bGVzIGZvciBvdXIgdGFic1xuLm5hdi10YWJzLWp1c3RpZmllZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG5cbiAgPiBsaSA+IGEge1xuICAgIC8vIE92ZXJyaWRlIG1hcmdpbiBmcm9tIC5uYXYtdGFic1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICB9XG5cbiAgPiAuYWN0aXZlID4gYSxcbiAgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZSAkYm9yZGVyLXJhZGl1cy1iYXNlIDAgMDtcbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSxcbiAgICA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAgID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuLy8gVGFiYmFibGUgdGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBIaWRlIHRhYmJhYmxlIHBhbmVzIHRvIHN0YXJ0LCBzaG93IHRoZW0gd2hlbiBgLmFjdGl2ZWBcbi50YWItY29udGVudCB7XG4gID4gLnRhYi1wYW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gID4gLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4vLyBEcm9wZG93bnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3BlY2lmaWMgZHJvcGRvd25zXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xuICAvLyBtYWtlIGRyb3Bkb3duIGJvcmRlciBvdmVybGFwIHRhYiBib3JkZXJcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgLy8gUmVtb3ZlIHRoZSB0b3Agcm91bmRlZCBjb3JuZXJzIGhlcmUgc2luY2UgdGhlcmUgaXMgYSBoYXJkIGVkZ2UgYWJvdmUgdGhlIG1lbnVcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG4iLCIvL1xuLy8gTmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBXcmFwcGVyIGFuZCBiYXNlIGNsYXNzXG4vL1xuLy8gUHJvdmlkZSBhIHN0YXRpYyBuYXZiYXIgZnJvbSB3aGljaCB3ZSBleHBhbmQgdG8gY3JlYXRlIGZ1bGwtd2lkdGgsIGZpeGVkLCBhbmRcbi8vIG90aGVyIG5hdmJhciB2YXJpYXRpb25zLlxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAkbmF2YmFyLWhlaWdodDsgLy8gRW5zdXJlIGEgbmF2YmFyIGFsd2F5cyBzaG93cyAoZS5nLiwgd2l0aG91dCBhIC5uYXZiYXItYnJhbmQgaW4gY29sbGFwc2VkIG1vZGUpXG4gIG1hcmdpbi1ib3R0b206ICRuYXZiYXItbWFyZ2luLWJvdHRvbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgLy8gUHJldmVudCBmbG9hdHMgZnJvbSBicmVha2luZyB0aGUgbmF2YmFyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogJG5hdmJhci1ib3JkZXItcmFkaXVzO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGhlYWRpbmdcbi8vXG4vLyBHcm91cHMgYC5uYXZiYXItYnJhbmRgIGFuZCBgLm5hdmJhci10b2dnbGVgIGludG8gYSBzaW5nbGUgY29tcG9uZW50IGZvciBlYXN5XG4vLyBzdHlsaW5nIG9mIHJlc3BvbnNpdmUgYXNwZWN0cy5cblxuLm5hdmJhci1oZWFkZXIge1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cblxuLy8gTmF2YmFyIGNvbGxhcHNlIChib2R5KVxuLy9cbi8vIEdyb3VwIHlvdXIgbmF2YmFyIGNvbnRlbnQgaW50byB0aGlzIGZvciBlYXN5IGNvbGxhcHNpbmcgYW5kIGV4cGFuZGluZyBhY3Jvc3Ncbi8vIHZhcmlvdXMgZGV2aWNlIHNpemVzLiBCeSBkZWZhdWx0LCB0aGlzIGNvbnRlbnQgaXMgY29sbGFwc2VkIHdoZW4gPDc2OHB4LCBidXRcbi8vIHdpbGwgZXhwYW5kIHBhc3QgdGhhdCBmb3IgYSBob3Jpem9udGFsIGRpc3BsYXkuXG4vL1xuLy8gVG8gc3RhcnQgKG9uIG1vYmlsZSBkZXZpY2VzKSB0aGUgbmF2YmFyIGxpbmtzLCBmb3JtcywgYW5kIGJ1dHRvbnMgYXJlIHN0YWNrZWRcbi8vIHZlcnRpY2FsbHkgYW5kIGluY2x1ZGUgYSBgbWF4LWhlaWdodGAgdG8gb3ZlcmZsb3cgaW4gY2FzZSB5b3UgaGF2ZSB0b28gbXVjaFxuLy8gY29udGVudCBmb3IgdGhlIHVzZXIncyB2aWV3cG9ydC5cblxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIHBhZGRpbmctcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBwYWRkaW5nLWxlZnQ6ICAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuaW4ge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICYuY29sbGFwc2Uge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7IC8vIE92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmluIHtcbiAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLy8gVW5kbyB0aGUgY29sbGFwc2Ugc2lkZSBwYWRkaW5nIGZvciBuYXZiYXJzIHdpdGggY29udGFpbmVycyB0byBlbnN1cmVcbiAgICAvLyBhbGlnbm1lbnQgb2YgcmlnaHQtYWxpZ25lZCBjb250ZW50cy5cbiAgICAubmF2YmFyLWZpeGVkLXRvcCAmLFxuICAgIC5uYXZiYXItc3RhdGljLXRvcCAmLFxuICAgIC5uYXZiYXItZml4ZWQtYm90dG9tICYge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1heC1oZWlnaHQ6ICRuYXZiYXItY29sbGFwc2UtbWF4LWhlaWdodDtcblxuICAgIEBtZWRpYSAobWF4LWRldmljZS13aWR0aDogJHNjcmVlbi14cy1taW4pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQm90aCBuYXZiYXIgaGVhZGVyIGFuZCBjb2xsYXBzZVxuLy9cbi8vIFdoZW4gYSBjb250YWluZXIgaXMgcHJlc2VudCwgY2hhbmdlIHRoZSBiZWhhdmlvciBvZiB0aGUgaGVhZGVyIGFuZCBjb2xsYXBzZS5cblxuLmNvbnRhaW5lcixcbi5jb250YWluZXItZmx1aWQge1xuICA+IC5uYXZiYXItaGVhZGVyLFxuICA+IC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIG1hcmdpbi1sZWZ0OiAgLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAgMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vL1xuLy8gTmF2YmFyIGFsaWdubWVudCBvcHRpb25zXG4vL1xuLy8gRGlzcGxheSB0aGUgbmF2YmFyIGFjcm9zcyB0aGUgZW50aXJldHkgb2YgdGhlIHBhZ2Ugb3IgZml4ZWQgaXQgdG8gdGhlIHRvcCBvclxuLy8gYm90dG9tIG9mIHRoZSBwYWdlLlxuXG4vLyBTdGF0aWMgdG9wICh1bmZpeGVkLCBidXQgMTAwJSB3aWRlKSBuYXZiYXJcbi5uYXZiYXItc3RhdGljLXRvcCB7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi8vIEZpeCB0aGUgdG9wL2JvdHRvbSBuYXZiYXJzIHdoZW4gc2NyZWVuIHJlYWwgZXN0YXRlIHN1cHBvcnRzIGl0XG4ubmF2YmFyLWZpeGVkLXRvcCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXItZml4ZWQ7XG5cbiAgLy8gVW5kbyB0aGUgcm91bmRlZCBjb3JuZXJzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLm5hdmJhci1maXhlZC10b3Age1xuICB0b3A6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbn1cbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBvdmVycmlkZSAubmF2YmFyIGRlZmF1bHRzXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbn1cblxuXG4vLyBCcmFuZC9wcm9qZWN0IG5hbWVcblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICA+IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIC5uYXZiYXIgPiAuY29udGFpbmVyICYsXG4gICAgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciB0b2dnbGVcbi8vXG4vLyBDdXN0b20gYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgYC5uYXZiYXItY29sbGFwc2VgLCBwb3dlcmVkIGJ5IHRoZSBjb2xsYXBzZVxuLy8gSmF2YVNjcmlwdCBwbHVnaW4uXG5cbi5uYXZiYXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oMzRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvLyBSZXNldCB1bnVzdWFsIEZpcmVmb3gtb24tQW5kcm9pZCBkZWZhdWx0IHN0eWxlOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9pc3N1ZXMvMjE0XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gIC8vIFdlIHJlbW92ZSB0aGUgYG91dGxpbmVgIGhlcmUsIGJ1dCBsYXRlciBjb21wZW5zYXRlIGJ5IGF0dGFjaGluZyBgOmhvdmVyYFxuICAvLyBzdHlsZXMgdG8gYDpmb2N1c2AuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAvLyBCYXJzXG4gIC5pY29uLWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB9XG4gIC5pY29uLWJhciArIC5pY29uLWJhciB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIG5hdiBsaW5rc1xuLy9cbi8vIEJ1aWxkcyBvbiB0b3Agb2YgdGhlIGAubmF2YCBjb21wb25lbnRzIHdpdGggaXRzIG93biBtb2RpZmllciBjbGFzcyB0byBtYWtlXG4vLyB0aGUgbmF2IHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgaG9yaXpvbnRhbCBuYXYgKGFib3ZlIDc2OHB4KS5cblxuLm5hdmJhci1uYXYge1xuICBtYXJnaW46ICgkbmF2YmFyLXBhZGRpbmctdmVydGljYWwgLyAyKSAoLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsKTtcblxuICA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6ICAgIDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgIC8vIERyb3Bkb3ducyBnZXQgY3VzdG9tIGRpc3BsYXkgd2hlbiBjb2xsYXBzZWRcbiAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICA+IGxpID4gYSxcbiAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjVweDtcbiAgICAgIH1cbiAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVuY29sbGFwc2UgdGhlIG5hdlxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcblxuICAgID4gbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICA+IGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogICAgJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciBmb3JtXG4vL1xuLy8gRXh0ZW5zaW9uIG9mIHRoZSBgLmZvcm0taW5saW5lYCB3aXRoIHNvbWUgZXh0cmEgZmxhdm9yIGZvciBvcHRpbXVtIGRpc3BsYXkgaW5cbi8vIG91ciBuYXZiYXJzLlxuXG4ubmF2YmFyLWZvcm0ge1xuICBtYXJnaW4tbGVmdDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tcmlnaHQ6IC0kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgcGFkZGluZzogMTBweCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICRzaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSksIDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJHNoYWRvdyk7XG5cbiAgLy8gTWl4aW4gYmVoYXZpb3IgZm9yIG9wdGltdW0gZGlzcGxheVxuICBAaW5jbHVkZSBmb3JtLWlubGluZTtcblxuICAuZm9ybS1ncm91cCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVmVydGljYWxseSBjZW50ZXIgaW4gZXhwYW5kZWQsIGhvcml6b250YWwgbmF2YmFyXG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gIC8vIFVuZG8gMTAwJSB3aWR0aCBmb3IgcHVsbCBjbGFzc2VzXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy8gRHJvcGRvd24gbWVudXNcblxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldHNcbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xufVxuLy8gTWVudSBwb3NpdGlvbiBhbmQgbWVudSBjYXJldCBzdXBwb3J0IGZvciBkcm9wdXBzIHZpYSBleHRyYSBkcm9wdXAgY2xhc3Ncbi5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRuYXZiYXItYm9yZGVyLXJhZGl1cyk7XG4gIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xufVxuXG5cbi8vIEJ1dHRvbnMgaW4gbmF2YmFyc1xuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGEgYnV0dG9uIHdpdGhpbiBhIG5hdmJhciAod2hlbiAqbm90KiBpbiBhIGZvcm0pLlxuXG4ubmF2YmFyLWJ0biB7XG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LWJhc2UpO1xuXG4gICYuYnRuLXNtIHtcbiAgICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGlucHV0LWhlaWdodC1zbWFsbCk7XG4gIH1cbiAgJi5idG4teHMge1xuICAgIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigyMik7XG4gIH1cbn1cblxuXG4vLyBUZXh0IGluIG5hdmJhcnNcbi8vXG4vLyBBZGQgYSBjbGFzcyB0byBtYWtlIGFueSBlbGVtZW50IHByb3Blcmx5IGFsaWduIGl0c2VsZiB2ZXJ0aWNhbGx5IHdpdGhpbiB0aGUgbmF2YmFycy5cblxuLm5hdmJhci10ZXh0IHtcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRsaW5lLWhlaWdodC1jb21wdXRlZCk7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gICAgbWFyZ2luLXJpZ2h0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgfVxufVxuXG5cbi8vIENvbXBvbmVudCBhbGlnbm1lbnRcbi8vXG4vLyBSZXB1cnBvc2UgdGhlIHB1bGwgdXRpbGl0aWVzIGFzIHRoZWlyIG93biBuYXZiYXIgdXRpbGl0aWVzIHRvIGF2b2lkIHNwZWNpZmljaXR5XG4vLyBpc3N1ZXMgd2l0aCBwYXJlbnRzIGFuZCBjaGFpbmluZy4gT25seSBkbyB0aGlzIHdoZW4gdGhlIG5hdmJhciBpcyB1bmNvbGxhcHNlZFxuLy8gdGhvdWdoIHNvIHRoYXQgbmF2YmFyIGNvbnRlbnRzIHByb3Blcmx5IHN0YWNrIGFuZCBhbGlnbiBpbiBtb2JpbGUuXG4vL1xuLy8gRGVjbGFyZWQgYWZ0ZXIgdGhlIG5hdmJhciBjb21wb25lbnRzIHRvIGVuc3VyZSBtb3JlIHNwZWNpZmljaXR5IG9uIHRoZSBtYXJnaW5zLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAubmF2YmFyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuXG4gICAgfiAubmF2YmFyLXJpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBBbHRlcm5hdGUgbmF2YmFyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRGVmYXVsdCBuYXZiYXJcbi5uYXZiYXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1iZztcbiAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWNvbG9yO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC10b2dnbGUtaG92ZXItYmc7XG4gICAgfVxuICAgIC5pY29uLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtYm9yZGVyO1xuICB9XG5cbiAgLy8gRHJvcGRvd24gbWVudSBpdGVtc1xuICAubmF2YmFyLW5hdiB7XG4gICAgLy8gUmVtb3ZlIGJhY2tncm91bmQgY29sb3IgZnJvbSBvcGVuIGRyb3Bkb3duXG4gICAgPiAub3BlbiA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnO1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heCkge1xuICAgICAgLy8gRHJvcGRvd25zIGdldCBjdXN0b20gZGlzcGxheSB3aGVuIGNvbGxhcHNlZFxuICAgICAgLm9wZW4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICA+IGxpID4gYSB7XG4gICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1iZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8vIExpbmtzIGluIG5hdmJhcnNcbiAgLy9cbiAgLy8gQWRkIGEgY2xhc3MgdG8gZW5zdXJlIGxpbmtzIG91dHNpZGUgdGhlIG5hdmJhciBuYXYgYXJlIGNvbG9yZWQgY29ycmVjdGx5LlxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbnZlcnNlIG5hdmJhclxuXG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYmc7XG4gIGJvcmRlci1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJvcmRlcjtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1jb2xvcjtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuYWN0aXZlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERhcmtlbiB0aGUgcmVzcG9uc2l2ZSBuYXYgdG9nZ2xlXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6ICRuYXZiYXItaW52ZXJzZS10b2dnbGUtYm9yZGVyLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnO1xuICAgIH1cbiAgICAuaWNvbi1iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWZvcm0ge1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRuYXZiYXItaW52ZXJzZS1iZywgNyUpO1xuICB9XG5cbiAgLy8gRHJvcGRvd25zXG4gIC5uYXZiYXItbmF2IHtcbiAgICA+IC5vcGVuID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICAvLyBEcm9wZG93bnMgZ2V0IGN1c3RvbSBkaXNwbGF5XG4gICAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgID4gLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuICAgICAgICB9XG4gICAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICAgICZbZGlzYWJsZWRdLFxuICAgIGZpZWxkc2V0W2Rpc2FibGVkXSAmIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJyZWFkY3J1bWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogJGJyZWFkY3J1bWItcGFkZGluZy12ZXJ0aWNhbCAkYnJlYWRjcnVtYi1wYWRkaW5nLWhvcml6b250YWw7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyZWFkY3J1bWItYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgKyBsaTpiZWZvcmUge1xuICAgICAgLy8gW2NvbnZlcnRlcl0gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9pc3N1ZXMvMTExNVxuICAgICAgJG5ic3A6IFwiXFwwMGEwXCI7XG4gICAgICBjb250ZW50OiBcIiN7JGJyZWFkY3J1bWItc2VwYXJhdG9yfSN7JG5ic3B9XCI7IC8vIFVuaWNvZGUgc3BhY2UgYWRkZWQgc2luY2UgaW5saW5lLWJsb2NrIG1lYW5zIG5vbi1jb2xsYXBzaW5nIHdoaXRlLXNwYWNlXG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGNvbG9yOiAkYnJlYWRjcnVtYi1jb2xvcjtcbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUge1xuICAgIGNvbG9yOiAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I7XG4gIH1cbn1cbiIsIi8vXG4vLyBQYWdpbmF0aW9uIChtdWx0aXBsZSBwYWdlcylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46ICRsaW5lLWhlaWdodC1jb21wdXRlZCAwO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG4gID4gbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTsgLy8gUmVtb3ZlIGxpc3Qtc3R5bGUgYW5kIGJsb2NrLWxldmVsIGRlZmF1bHRzXG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbG9hdDogbGVmdDsgLy8gQ29sbGFwc2Ugd2hpdGUtc3BhY2VcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGFnaW5hdGlvbi1ib3JkZXI7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKCRib3JkZXItcmFkaXVzLWJhc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgPiBhLFxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cy1iYXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGxpID4gYSxcbiAgPiBsaSA+IHNwYW4ge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUgPiBhLFxuICA+IC5hY3RpdmUgPiBzcGFuIHtcbiAgICAmLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIH1cblxuICA+IC5kaXNhYmxlZCB7XG4gICAgPiBzcGFuLFxuICAgID4gc3Bhbjpob3ZlcixcbiAgICA+IHNwYW46Zm9jdXMsXG4gICAgPiBhLFxuICAgID4gYTpob3ZlcixcbiAgICA+IGE6Zm9jdXMge1xuICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjtcbiAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2l6aW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMYXJnZVxuLnBhZ2luYXRpb24tbGcge1xuICBAaW5jbHVkZSBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGJvcmRlci1yYWRpdXMtbGFyZ2UpO1xufVxuXG4vLyBTbWFsbFxuLnBhZ2luYXRpb24tc20ge1xuICBAaW5jbHVkZSBwYWdpbmF0aW9uLXNpemUoJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuIiwiLy9cbi8vIFBhZ2VyIHBhZ2luYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLnBhZ2VyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46ICRsaW5lLWhlaWdodC1jb21wdXRlZCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItYmc7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkcGFnZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHBhZ2VyLWJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgPiBhOmhvdmVyLFxuICAgID4gYTpmb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5leHQge1xuICAgID4gYSxcbiAgICA+IHNwYW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5wcmV2aW91cyB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIH1cblxuICAuZGlzYWJsZWQge1xuICAgID4gYSxcbiAgICA+IGE6aG92ZXIsXG4gICAgPiBhOmZvY3VzLFxuICAgID4gc3BhbiB7XG4gICAgICBjb2xvcjogJHBhZ2VyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2VyLWJnO1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIExhYmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAuMmVtIC42ZW0gLjNlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmxhYmVsXG5cbiAgLy8gRW1wdHkgbGFiZWxzIGNvbGxhcHNlIGF1dG9tYXRpY2FsbHkgKG5vdCBhdmFpbGFibGUgaW4gSUU4KVxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gUXVpY2sgZml4IGZvciBsYWJlbHMgaW4gYnV0dG9uc1xuICAuYnRuICYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gIH1cbn1cblxuLy8gQWRkIGhvdmVyIGVmZmVjdHMsIGJ1dCBvbmx5IGZvciBsaW5rc1xuYS5sYWJlbCB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGFiZWwtbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIENvbG9yc1xuLy8gQ29udGV4dHVhbCB2YXJpYXRpb25zIChsaW5rZWQgbGFiZWxzIGdldCBkYXJrZXIgb24gOmhvdmVyKVxuXG4ubGFiZWwtZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLWRlZmF1bHQtYmcpO1xufVxuXG4ubGFiZWwtcHJpbWFyeSB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXByaW1hcnktYmcpO1xufVxuXG4ubGFiZWwtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXN1Y2Nlc3MtYmcpO1xufVxuXG4ubGFiZWwtaW5mbyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLWluZm8tYmcpO1xufVxuXG4ubGFiZWwtd2FybmluZyB7XG4gIEBpbmNsdWRlIGxhYmVsLXZhcmlhbnQoJGxhYmVsLXdhcm5pbmctYmcpO1xufVxuXG4ubGFiZWwtZGFuZ2VyIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtZGFuZ2VyLWJnKTtcbn1cbiIsIi8vXG4vLyBCYWRnZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgZm9udC13ZWlnaHQ6ICRiYWRnZS1mb250LXdlaWdodDtcbiAgY29sb3I6ICRiYWRnZS1jb2xvcjtcbiAgbGluZS1oZWlnaHQ6ICRiYWRnZS1saW5lLWhlaWdodDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRiYWRnZS1ib3JkZXItcmFkaXVzO1xuXG4gIC8vIEVtcHR5IGJhZGdlcyBjb2xsYXBzZSBhdXRvbWF0aWNhbGx5IChub3QgYXZhaWxhYmxlIGluIElFOClcbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIFF1aWNrIGZpeCBmb3IgYmFkZ2VzIGluIGJ1dHRvbnNcbiAgLmJ0biAmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xuICB9XG5cbiAgLmJ0bi14cyAmLFxuICAuYnRuLWdyb3VwLXhzID4gLmJ0biAmIHtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhJiB0byBhLmJhZGdlXG5cbiAgLy8gQWNjb3VudCBmb3IgYmFkZ2VzIGluIG5hdnNcbiAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgPiAmLFxuICAubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGEgPiAmIHtcbiAgICBjb2xvcjogJGJhZGdlLWFjdGl2ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFkZ2UtYWN0aXZlLWJnO1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbSA+ICYge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0gPiAmICsgJiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAubmF2LXBpbGxzID4gbGkgPiBhID4gJiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxufVxuXG4vLyBIb3ZlciBzdGF0ZSwgYnV0IG9ubHkgZm9yIGxpbmtzXG5hLmJhZGdlIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRiYWRnZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIi8vXG4vLyBKdW1ib3Ryb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctdG9wOiAgICAkanVtYm90cm9uLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkanVtYm90cm9uLXBhZGRpbmc7XG4gIG1hcmdpbi1ib3R0b206ICRqdW1ib3Ryb24tcGFkZGluZztcbiAgY29sb3I6ICRqdW1ib3Ryb24tY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRqdW1ib3Ryb24tYmc7XG5cbiAgaDEsXG4gIC5oMSB7XG4gICAgY29sb3I6ICRqdW1ib3Ryb24taGVhZGluZy1jb2xvcjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206ICgkanVtYm90cm9uLXBhZGRpbmcgLyAyKTtcbiAgICBmb250LXNpemU6ICRqdW1ib3Ryb24tZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICA+IGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZW4oJGp1bWJvdHJvbi1iZywgMTAlKTtcbiAgfVxuXG4gIC5jb250YWluZXIgJixcbiAgLmNvbnRhaW5lci1mbHVpZCAmIHtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTsgLy8gT25seSByb3VuZCBjb3JuZXJzIGF0IGhpZ2hlciByZXNvbHV0aW9ucyBpZiBjb250YWluZWQgaW4gYSBjb250YWluZXJcbiAgICBwYWRkaW5nLWxlZnQ6ICAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMik7XG4gICAgcGFkZGluZy1yaWdodDogKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBwYWRkaW5nLXRvcDogICAgKCRqdW1ib3Ryb24tcGFkZGluZyAqIDEuNik7XG4gICAgcGFkZGluZy1ib3R0b206ICgkanVtYm90cm9uLXBhZGRpbmcgKiAxLjYpO1xuXG4gICAgLmNvbnRhaW5lciAmLFxuICAgIC5jb250YWluZXItZmx1aWQgJiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICAoJGp1bWJvdHJvbi1wYWRkaW5nICogMik7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAoJGp1bWJvdHJvbi1wYWRkaW5nICogMik7XG4gICAgfVxuXG4gICAgaDEsXG4gICAgLmgxIHtcbiAgICAgIGZvbnQtc2l6ZTogJGp1bWJvdHJvbi1oZWFkaW5nLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBUaHVtYm5haWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE1peGluIGFuZCBhZGp1c3QgdGhlIHJlZ3VsYXIgaW1hZ2UgY2xhc3Ncbi50aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogJHRodW1ibmFpbC1wYWRkaW5nO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRodW1ibmFpbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHRodW1ibmFpbC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1cztcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXIgLjJzIGVhc2UtaW4tb3V0KTtcblxuICA+IGltZyxcbiAgYSA+IGltZyB7XG4gICAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmOmhvdmVyLCBhJjpmb2N1cywgYSYuYWN0aXZlIHRvIGEudGh1bWJuYWlsOmhvdmVyLCBhLnRodW1ibmFpbDpmb2N1cywgYS50aHVtYm5haWwuYWN0aXZlXG5cbiAgLy8gSW1hZ2UgY2FwdGlvbnNcbiAgLmNhcHRpb24ge1xuICAgIHBhZGRpbmc6ICR0aHVtYm5haWwtY2FwdGlvbi1wYWRkaW5nO1xuICAgIGNvbG9yOiAkdGh1bWJuYWlsLWNhcHRpb24tY29sb3I7XG4gIH1cbn1cblxuLy8gQWRkIGEgaG92ZXIgc3RhdGUgZm9yIGxpbmtlZCB2ZXJzaW9ucyBvbmx5XG5hLnRodW1ibmFpbDpob3ZlcixcbmEudGh1bWJuYWlsOmZvY3VzLFxuYS50aHVtYm5haWwuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAkbGluay1jb2xvcjtcbn1cbiIsIi8vXG4vLyBBbGVydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBzdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogJGFsZXJ0LXBhZGRpbmc7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICRhbGVydC1ib3JkZXItcmFkaXVzO1xuXG4gIC8vIEhlYWRpbmdzIGZvciBsYXJnZXIgYWxlcnRzXG4gIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIC8vIFNwZWNpZmllZCBmb3IgdGhlIGg0IHRvIHByZXZlbnQgY29uZmxpY3RzIG9mIGNoYW5naW5nICRoZWFkaW5ncy1jb2xvclxuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLy8gUHJvdmlkZSBjbGFzcyBmb3IgbGlua3MgdGhhdCBtYXRjaCBhbGVydHNcbiAgLmFsZXJ0LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiAkYWxlcnQtbGluay1mb250LXdlaWdodDtcbiAgfVxuXG4gIC8vIEltcHJvdmUgYWxpZ25tZW50IGFuZCBzcGFjaW5nIG9mIGlubmVyIGNvbnRlbnRcbiAgPiBwLFxuICA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgPiBwICsgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59XG5cbi8vIERpc21pc3NpYmxlIGFsZXJ0c1xuLy9cbi8vIEV4cGFuZCB0aGUgcmlnaHQgcGFkZGluZyBhbmQgYWNjb3VudCBmb3IgdGhlIGNsb3NlIGJ1dHRvbidzIHBvc2l0aW9uaW5nLlxuXG4uYWxlcnQtZGlzbWlzc2FibGUsIC8vIFRoZSBtaXNzcGVsbGVkIC5hbGVydC1kaXNtaXNzYWJsZSB3YXMgZGVwcmVjYXRlZCBpbiAzLjIuMC5cbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6ICgkYWxlcnQtcGFkZGluZyArIDIwKTtcblxuICAvLyBBZGp1c3QgY2xvc2UgbGluayBwb3NpdGlvblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0yMXB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEFsdGVybmF0ZSBzdHlsZXNcbi8vXG4vLyBHZW5lcmF0ZSBjb250ZXh0dWFsIG1vZGlmaWVyIGNsYXNzZXMgZm9yIGNvbG9yaXppbmcgdGhlIGFsZXJ0LlxuXG4uYWxlcnQtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGFsZXJ0LXZhcmlhbnQoJGFsZXJ0LXN1Y2Nlc3MtYmcsICRhbGVydC1zdWNjZXNzLWJvcmRlciwgJGFsZXJ0LXN1Y2Nlc3MtdGV4dCk7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtaW5mby1iZywgJGFsZXJ0LWluZm8tYm9yZGVyLCAkYWxlcnQtaW5mby10ZXh0KTtcbn1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC13YXJuaW5nLWJnLCAkYWxlcnQtd2FybmluZy1ib3JkZXIsICRhbGVydC13YXJuaW5nLXRleHQpO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtZGFuZ2VyLWJnLCAkYWxlcnQtZGFuZ2VyLWJvcmRlciwgJGFsZXJ0LWRhbmdlci10ZXh0KTtcbn1cbiIsIi8vXG4vLyBQcm9ncmVzcyBiYXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhciBhbmltYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFdlYktpdFxuQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7IH1cbiAgdG8gICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbn1cblxuLy8gU3BlYyBhbmQgSUUxMCtcbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tICB7IGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDsgfVxuICB0byAgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxufVxuXG5cbi8vIEJhciBpdHNlbGZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gT3V0ZXIgY29udGFpbmVyXG4ucHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRwcm9ncmVzcy1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4xKSk7XG59XG5cbi8vIEJhciBvZiBwcm9ncmVzc1xuLnByb2dyZXNzLWJhciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBjb2xvcjogJHByb2dyZXNzLWJhci1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmFyLWJnO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjE1KSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24od2lkdGggLjZzIGVhc2UpO1xufVxuXG4vLyBTdHJpcGVkIGJhcnNcbi8vXG4vLyBgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhcmAgaXMgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgaW4gZmF2b3Igb2YgdGhlXG4vLyBgLnByb2dyZXNzLWJhci1zdHJpcGVkYCBjbGFzcywgd2hpY2ggeW91IGp1c3QgYWRkIHRvIGFuIGV4aXN0aW5nXG4vLyBgLnByb2dyZXNzLWJhcmAuXG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLFxuLnByb2dyZXNzLWJhci1zdHJpcGVkIHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG59XG5cbi8vIENhbGwgYW5pbWF0aW9uIGZvciB0aGUgYWN0aXZlIG9uZVxuLy9cbi8vIGAucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXJgIGlzIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGluIGZhdm9yIG9mIHRoZVxuLy8gYC5wcm9ncmVzcy1iYXIuYWN0aXZlYCBhcHByb2FjaC5cbi5wcm9ncmVzcy5hY3RpdmUgLnByb2dyZXNzLWJhcixcbi5wcm9ncmVzcy1iYXIuYWN0aXZlIHtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZSk7XG59XG5cblxuLy8gVmFyaWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWluZm8ge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLWluZm8tYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmcpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRwcm9ncmVzcy1iYXItZGFuZ2VyLWJnKTtcbn1cbiIsIi5tZWRpYSB7XG4gIC8vIFByb3BlciBzcGFjaW5nIGJldHdlZW4gaW5zdGFuY2VzIG9mIC5tZWRpYVxuICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLm1lZGlhLFxuLm1lZGlhLWJvZHkge1xuICB6b29tOiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVkaWEtYm9keSB7XG4gIHdpZHRoOiAxMDAwMHB4O1xufVxuXG4ubWVkaWEtb2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLy8gRml4IGNvbGxhcHNlIGluIHdlYmtpdCBmcm9tIG1heC13aWR0aDogMTAwJSBhbmQgZGlzcGxheTogdGFibGUtY2VsbC5cbiAgJi5pbWctdGh1bWJuYWlsIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbn1cblxuLm1lZGlhLXJpZ2h0LFxuLm1lZGlhID4gLnB1bGwtcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5tZWRpYS1sZWZ0LFxuLm1lZGlhID4gLnB1bGwtbGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tZWRpYS1sZWZ0LFxuLm1lZGlhLXJpZ2h0LFxuLm1lZGlhLWJvZHkge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWVkaWEtbWlkZGxlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lZGlhLWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi8vIFJlc2V0IG1hcmdpbnMgb24gaGVhZGluZ3MgZm9yIHRpZ2h0ZXIgZGVmYXVsdCBzcGFjaW5nXG4ubWVkaWEtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLy8gTWVkaWEgbGlzdCB2YXJpYXRpb25cbi8vXG4vLyBVbmRvIGRlZmF1bHQgdWwvb2wgc3R5bGVzXG4ubWVkaWEtbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiIsIi8vXG4vLyBMaXN0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4vL1xuLy8gRWFzaWx5IHVzYWJsZSBvbiA8dWw+LCA8b2w+LCBvciA8ZGl2Pi5cblxuLmxpc3QtZ3JvdXAge1xuICAvLyBObyBuZWVkIHRvIHNldCBsaXN0LXN0eWxlOiBub25lOyBzaW5jZSAubGlzdC1ncm91cC1pdGVtIGlzIGJsb2NrIGxldmVsXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gcmVzZXQgcGFkZGluZyBiZWNhdXNlIHVsIGFuZCBvbFxufVxuXG5cbi8vIEluZGl2aWR1YWwgbGlzdCBpdGVtc1xuLy9cbi8vIFVzZSBvbiBgbGlgcyBvciBgZGl2YHMgd2l0aGluIHRoZSBgLmxpc3QtZ3JvdXBgIHBhcmVudC5cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLy8gUGxhY2UgdGhlIGJvcmRlciBvbiB0aGUgbGlzdCBpdGVtcyBhbmQgbmVnYXRpdmUgbWFyZ2luIHVwIGZvciBiZXR0ZXIgc3R5bGluZ1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGxpc3QtZ3JvdXAtYm9yZGVyO1xuXG4gIC8vIFJvdW5kIHRoZSBmaXJzdCBhbmQgbGFzdCBpdGVtc1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuXG4vLyBJbnRlcmFjdGl2ZSBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIGFuY2hvciBvciBidXR0b24gZWxlbWVudHMgaW5zdGVhZCBvZiBgbGlgcyBvciBgZGl2YHMgdG8gY3JlYXRlIGludGVyYWN0aXZlIGl0ZW1zLlxuLy8gSW5jbHVkZXMgYW4gZXh0cmEgYC5hY3RpdmVgIG1vZGlmaWVyIGNsYXNzIGZvciBzaG93aW5nIHNlbGVjdGVkIGl0ZW1zLlxuXG5hLmxpc3QtZ3JvdXAtaXRlbSxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1jb2xvcjtcblxuICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I7XG4gIH1cblxuICAvLyBIb3ZlciBzdGF0ZVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtaG92ZXItYmc7XG4gIH1cbn1cblxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgJi5kaXNhYmxlZCxcbiAgJi5kaXNhYmxlZDpob3ZlcixcbiAgJi5kaXNhYmxlZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yO1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcblxuICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZlIGNsYXNzIG9uIGl0ZW0gaXRzZWxmLCBub3QgcGFyZW50XG4gICYuYWN0aXZlLFxuICAmLmFjdGl2ZTpob3ZlcixcbiAgJi5hY3RpdmU6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7IC8vIFBsYWNlIGFjdGl2ZSBpdGVtcyBhYm92ZSB0aGVpciBzaWJsaW5ncyBmb3IgcHJvcGVyIGJvcmRlciBzdHlsaW5nXG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYmc7XG4gICAgYm9yZGVyLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyO1xuXG4gICAgLy8gRm9yY2UgY29sb3IgdG8gaW5oZXJpdCBmb3IgY3VzdG9tIGNvbnRlbnRcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbnRleHR1YWwgdmFyaWFudHNcbi8vXG4vLyBBZGQgbW9kaWZpZXIgY2xhc3NlcyB0byBjaGFuZ2UgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBvbiBpbmRpdmlkdWFsIGl0ZW1zLlxuLy8gT3JnYW5pemF0aW9uYWxseSwgdGhpcyBtdXN0IGNvbWUgYWZ0ZXIgdGhlIGA6aG92ZXJgIHN0YXRlcy5cblxuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoc3VjY2VzcywgJHN0YXRlLXN1Y2Nlc3MtYmcsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoaW5mbywgJHN0YXRlLWluZm8tYmcsICRzdGF0ZS1pbmZvLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQod2FybmluZywgJHN0YXRlLXdhcm5pbmctYmcsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoZGFuZ2VyLCAkc3RhdGUtZGFuZ2VyLWJnLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG5cbi8vIEN1c3RvbSBjb250ZW50IG9wdGlvbnNcbi8vXG4vLyBFeHRyYSBjbGFzc2VzIGZvciBjcmVhdGluZyB3ZWxsLWZvcm1hdHRlZCBjb250ZW50IHdpdGhpbiBgLmxpc3QtZ3JvdXAtaXRlbWBzLlxuXG4ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuIiwiLy9cbi8vIFBhbmVsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4ucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwYW5lbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICRwYW5lbC1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSkpO1xufVxuXG4vLyBQYW5lbCBjb250ZW50c1xuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAkcGFuZWwtYm9keS1wYWRkaW5nO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cblxuLy8gT3B0aW9uYWwgaGVhZGluZ1xuLnBhbmVsLWhlYWRpbmcge1xuICBwYWRkaW5nOiAkcGFuZWwtaGVhZGluZy1wYWRkaW5nO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcblxuICA+IC5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBXaXRoaW4gaGVhZGluZywgc3RyaXAgYW55IGBoKmAgdGFnIG9mIGl0cyBkZWZhdWx0IG1hcmdpbnMgZm9yIHNwYWNpbmcuXG4ucGFuZWwtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gID4gYSxcbiAgPiBzbWFsbCxcbiAgPiAuc21hbGwsXG4gID4gc21hbGwgPiBhLFxuICA+IC5zbWFsbCA+IGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIE9wdGlvbmFsIGZvb3RlciAoc3RheXMgZ3JheSBpbiBldmVyeSBtb2RpZmllciBjbGFzcylcbi5wYW5lbC1mb290ZXIge1xuICBwYWRkaW5nOiAkcGFuZWwtZm9vdGVyLXBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwYW5lbC1mb290ZXItYmc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkcGFuZWwtaW5uZXItYm9yZGVyO1xuICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG59XG5cblxuLy8gTGlzdCBncm91cHMgaW4gcGFuZWxzXG4vL1xuLy8gQnkgZGVmYXVsdCwgc3BhY2Ugb3V0IGxpc3QgZ3JvdXAgY29udGVudCBmcm9tIHBhbmVsIGhlYWRpbmdzIHRvIGFjY291bnQgZm9yXG4vLyBhbnkga2luZCBvZiBjdXN0b20gY29udGVudCBiZXR3ZWVuIHRoZSB0d28uXG5cbi5wYW5lbCB7XG4gID4gLmxpc3QtZ3JvdXAsXG4gID4gLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC8vIEFkZCBib3JkZXIgdG9wIHJhZGl1cyBmb3IgZmlyc3Qgb25lXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBib3JkZXIgYm90dG9tIHJhZGl1cyBmb3IgbGFzdCBvbmVcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gICAgfVxuICB9XG59XG4vLyBDb2xsYXBzZSBzcGFjZSBiZXR3ZWVuIHdoZW4gdGhlcmUncyBubyBhZGRpdGlvbmFsIGNvbnRlbnQuXG4ucGFuZWwtaGVhZGluZyArIC5saXN0LWdyb3VwIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgfVxufVxuLmxpc3QtZ3JvdXAgKyAucGFuZWwtZm9vdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cblxuLy8gVGFibGVzIGluIHBhbmVsc1xuLy9cbi8vIFBsYWNlIGEgbm9uLWJvcmRlcmVkIGAudGFibGVgIHdpdGhpbiBhIHBhbmVsIChub3Qgd2l0aGluIGEgYC5wYW5lbC1ib2R5YCkgYW5kXG4vLyB3YXRjaCBpdCBnbyBmdWxsIHdpZHRoLlxuXG4ucGFuZWwge1xuICA+IC50YWJsZSxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSxcbiAgPiAucGFuZWwtY29sbGFwc2UgPiAudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBjYXB0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogJHBhbmVsLWJvZHktcGFkZGluZztcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYW5lbC1ib2R5LXBhZGRpbmc7XG4gICAgfVxuICB9XG4gIC8vIEFkZCBib3JkZXIgdG9wIHJhZGl1cyBmb3IgZmlyc3Qgb25lXG4gID4gLnRhYmxlOmZpcnN0LWNoaWxkLFxuICA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG5cbiAgICA+IHRoZWFkOmZpcnN0LWNoaWxkLFxuICAgID4gdGJvZHk6Zmlyc3QtY2hpbGQge1xuICAgICAgPiB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG5cbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgICAgIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0ZDpsYXN0LWNoaWxkLFxuICAgICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQWRkIGJvcmRlciBib3R0b20gcmFkaXVzIGZvciBsYXN0IG9uZVxuICA+IC50YWJsZTpsYXN0LWNoaWxkLFxuICA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuXG4gICAgPiB0Ym9keTpsYXN0LWNoaWxkLFxuICAgID4gdGZvb3Q6bGFzdC1jaGlsZCB7XG4gICAgICA+IHRyOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGQ6bGFzdC1jaGlsZCxcbiAgICAgICAgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gID4gLnBhbmVsLWJvZHkgKyAudGFibGUsXG4gID4gLnBhbmVsLWJvZHkgKyAudGFibGUtcmVzcG9uc2l2ZSxcbiAgPiAudGFibGUgKyAucGFuZWwtYm9keSxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSArIC5wYW5lbC1ib2R5IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgfVxuICA+IC50YWJsZSA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGgsXG4gID4gLnRhYmxlID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuICA+IC50YWJsZS1ib3JkZXJlZCxcbiAgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgID4gdGhlYWQsXG4gICAgPiB0Ym9keSxcbiAgICA+IHRmb290IHtcbiAgICAgID4gdHIge1xuICAgICAgICA+IHRoOmZpcnN0LWNoaWxkLFxuICAgICAgICA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICA+IHRoOmxhc3QtY2hpbGQsXG4gICAgICAgID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgID4gdGhlYWQsXG4gICAgPiB0Ym9keSB7XG4gICAgICA+IHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICA+IHRib2R5LFxuICAgID4gdGZvb3Qge1xuICAgICAgPiB0cjpsYXN0LWNoaWxkIHtcbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICA+IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG5cbi8vIENvbGxhcHNpYmxlIHBhbmVscyAoYWthLCBhY2NvcmRpb24pXG4vL1xuLy8gV3JhcCBhIHNlcmllcyBvZiBwYW5lbHMgaW4gYC5wYW5lbC1ncm91cGAgdG8gdHVybiB0aGVtIGludG8gYW4gYWNjb3JkaW9uIHdpdGhcbi8vIHRoZSBoZWxwIG9mIG91ciBjb2xsYXBzZSBKYXZhU2NyaXB0IHBsdWdpbi5cblxuLnBhbmVsLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuXG4gIC8vIFRpZ2h0ZW4gdXAgbWFyZ2luIHNvIGl0J3Mgb25seSBiZXR3ZWVuIHBhbmVsc1xuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogJHBhbmVsLWJvcmRlci1yYWRpdXM7XG5cbiAgICArIC5wYW5lbCB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG5cbiAgICArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5LFxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRwYW5lbC1pbm5lci1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICArIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHBhbmVsLWlubmVyLWJvcmRlcjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBDb250ZXh0dWFsIHZhcmlhdGlvbnNcbi5wYW5lbC1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtZGVmYXVsdC1ib3JkZXIsICRwYW5lbC1kZWZhdWx0LXRleHQsICRwYW5lbC1kZWZhdWx0LWhlYWRpbmctYmcsICRwYW5lbC1kZWZhdWx0LWJvcmRlcik7XG59XG4ucGFuZWwtcHJpbWFyeSB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLXByaW1hcnktYm9yZGVyLCAkcGFuZWwtcHJpbWFyeS10ZXh0LCAkcGFuZWwtcHJpbWFyeS1oZWFkaW5nLWJnLCAkcGFuZWwtcHJpbWFyeS1ib3JkZXIpO1xufVxuLnBhbmVsLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1zdWNjZXNzLWJvcmRlciwgJHBhbmVsLXN1Y2Nlc3MtdGV4dCwgJHBhbmVsLXN1Y2Nlc3MtaGVhZGluZy1iZywgJHBhbmVsLXN1Y2Nlc3MtYm9yZGVyKTtcbn1cbi5wYW5lbC1pbmZvIHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtaW5mby1ib3JkZXIsICRwYW5lbC1pbmZvLXRleHQsICRwYW5lbC1pbmZvLWhlYWRpbmctYmcsICRwYW5lbC1pbmZvLWJvcmRlcik7XG59XG4ucGFuZWwtd2FybmluZyB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLXdhcm5pbmctYm9yZGVyLCAkcGFuZWwtd2FybmluZy10ZXh0LCAkcGFuZWwtd2FybmluZy1oZWFkaW5nLWJnLCAkcGFuZWwtd2FybmluZy1ib3JkZXIpO1xufVxuLnBhbmVsLWRhbmdlciB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLWRhbmdlci1ib3JkZXIsICRwYW5lbC1kYW5nZXItdGV4dCwgJHBhbmVsLWRhbmdlci1oZWFkaW5nLWJnLCAkcGFuZWwtZGFuZ2VyLWJvcmRlcik7XG59XG4iLCIvL1xuLy8gV2VsbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLndlbGwge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2VsbC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJHdlbGwtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSkpO1xuICBibG9ja3F1b3RlIHtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLC4xNSk7XG4gIH1cbn1cblxuLy8gU2l6ZXNcbi53ZWxsLWxnIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG59XG4ud2VsbC1zbSB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc21hbGw7XG59XG4iLCIvLyBFbWJlZHMgcmVzcG9uc2l2ZVxuLy9cbi8vIENyZWRpdDogTmljb2xhcyBHYWxsYWdoZXIgYW5kIFNVSVQgQ1NTLlxuXG4uZW1iZWQtcmVzcG9uc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtLFxuICBpZnJhbWUsXG4gIGVtYmVkLFxuICBvYmplY3QsXG4gIHZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLy8gTW9kaWZpZXIgY2xhc3MgZm9yIDE2OjkgYXNwZWN0IHJhdGlvXG4uZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG59XG5cbi8vIE1vZGlmaWVyIGNsYXNzIGZvciA0OjMgYXNwZWN0IHJhdGlvXG4uZW1iZWQtcmVzcG9uc2l2ZS00YnkzIHtcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcbn1cbiIsIi8vXG4vLyBDbG9zZSBpY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4uY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIGZvbnQtd2VpZ2h0OiAkY2xvc2UtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGNsb3NlLWNvbG9yO1xuICB0ZXh0LXNoYWRvdzogJGNsb3NlLXRleHQtc2hhZG93O1xuICBAaW5jbHVkZSBvcGFjaXR5KC4yKTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGNsb3NlLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguNSk7XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYnV0dG9uJiB0byBidXR0b24uY2xvc2Vcbn1cblxuLy8gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuLy8gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4vLyBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuYnV0dG9uLmNsb3NlIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4iLCIvL1xuLy8gTW9kYWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAubW9kYWwtb3BlbiAgICAgIC0gYm9keSBjbGFzcyBmb3Iga2lsbGluZyB0aGUgc2Nyb2xsXG4vLyAubW9kYWwgICAgICAgICAgIC0gY29udGFpbmVyIHRvIHNjcm9sbCB3aXRoaW5cbi8vIC5tb2RhbC1kaWFsb2cgICAgLSBwb3NpdGlvbmluZyBzaGVsbCBmb3IgdGhlIGFjdHVhbCBtb2RhbFxuLy8gLm1vZGFsLWNvbnRlbnQgICAtIGFjdHVhbCBtb2RhbCB3LyBiZyBhbmQgY29ybmVycyBhbmQgc2hpdFxuXG4vLyBLaWxsIHRoZSBzY3JvbGwgb24gdGhlIGJvZHlcbi5tb2RhbC1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gQ29udGFpbmVyIHRoYXQgdGhlIG1vZGFsIHNjcm9sbHMgd2l0aGluXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1tb2RhbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gIC8vIFByZXZlbnQgQ2hyb21lIG9uIFdpbmRvd3MgZnJvbSBhZGRpbmcgYSBmb2N1cyBvdXRsaW5lLiBGb3IgZGV0YWlscywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzEwOTUxLlxuICBvdXRsaW5lOiAwO1xuXG4gIC8vIFdoZW4gZmFkaW5nIGluIHRoZSBtb2RhbCwgYW5pbWF0ZSBpdCB0byBzbGlkZSBkb3duXG4gICYuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi10cmFuc2Zvcm0oMC4zcyBlYXNlLW91dCk7XG4gIH1cbiAgJi5pbiAubW9kYWwtZGlhbG9nIHsgQGluY2x1ZGUgdHJhbnNsYXRlKDAsIDApIH1cbn1cbi5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLy8gU2hlbGwgZGl2IHRvIHBvc2l0aW9uIHRoZSBtb2RhbCB3aXRoIGJvdHRvbSBwYWRkaW5nXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4vLyBBY3R1YWwgbW9kYWxcbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtY29udGVudC1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJG1vZGFsLWNvbnRlbnQtZmFsbGJhY2stYm9yZGVyLWNvbG9yOyAvL29sZCBicm93c2VycyBmYWxsYmFjayAoaWU4IGV0YylcbiAgYm9yZGVyOiAxcHggc29saWQgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDNweCA5cHggcmdiYSgwLDAsMCwuNSkpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvLyBSZW1vdmUgZm9jdXMgb3V0bGluZSBmcm9tIG9wZW5lZCBtb2RhbFxuICBvdXRsaW5lOiAwO1xufVxuXG4vLyBNb2RhbCBiYWNrZ3JvdW5kXG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1tb2RhbC1iYWNrZ3JvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2Ryb3AtYmc7XG4gIC8vIEZhZGUgZm9yIGJhY2tkcm9wXG4gICYuZmFkZSB7IEBpbmNsdWRlIG9wYWNpdHkoMCk7IH1cbiAgJi5pbiB7IEBpbmNsdWRlIG9wYWNpdHkoJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHkpOyB9XG59XG5cbi8vIE1vZGFsIGhlYWRlclxuLy8gVG9wIHNlY3Rpb24gb2YgdGhlIG1vZGFsIHcvIHRpdGxlIGFuZCBkaXNtaXNzXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogJG1vZGFsLXRpdGxlLXBhZGRpbmc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG4vLyBDbG9zZSBpY29uXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi8vIFRpdGxlIHRleHQgd2l0aGluIGhlYWRlclxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0O1xufVxuXG4vLyBNb2RhbCBib2R5XG4vLyBXaGVyZSBhbGwgbW9kYWwgY29udGVudCByZXNpZGVzIChzaWJsaW5nIG9mIC5tb2RhbC1oZWFkZXIgYW5kIC5tb2RhbC1mb290ZXIpXG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogJG1vZGFsLWlubmVyLXBhZGRpbmc7XG59XG5cbi8vIEZvb3RlciAoZm9yIGFjdGlvbnMpXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogJG1vZGFsLWlubmVyLXBhZGRpbmc7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyAvLyByaWdodCBhbGlnbiBidXR0b25zXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7IC8vIGNsZWFyIGl0IGluIGNhc2UgZm9sa3MgdXNlIC5wdWxsLSogY2xhc3NlcyBvbiBidXR0b25zXG5cbiAgLy8gUHJvcGVybHkgc3BhY2Ugb3V0IGJ1dHRvbnNcbiAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgLy8gYWNjb3VudCBmb3IgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB3aGljaCBnZXRzIHRoZSBib3R0b20gbWFyZ2luIGxpa2UgYWxsIG90aGVyIGlucHV0c1xuICB9XG4gIC8vIGJ1dCBvdmVycmlkZSB0aGF0IGZvciBidXR0b24gZ3JvdXBzXG4gIC5idG4tZ3JvdXAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG4gIC8vIGFuZCBvdmVycmlkZSBpdCBmb3IgYmxvY2sgYnV0dG9ucyBhcyB3ZWxsXG4gIC5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vLyBTY2FsZSB1cCB0aGUgbW9kYWxcbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAvLyBBdXRvbWF0aWNhbGx5IHNldCBtb2RhbCdzIHdpZHRoIGZvciBsYXJnZXIgdmlld3BvcnRzXG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiAkbW9kYWwtbWQ7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KSk7XG4gIH1cblxuICAvLyBNb2RhbCBzaXplc1xuICAubW9kYWwtc20geyB3aWR0aDogJG1vZGFsLXNtOyB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAubW9kYWwtbGcgeyB3aWR0aDogJG1vZGFsLWxnOyB9XG59XG4iLCIvL1xuLy8gVG9vbHRpcHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFzZSBjbGFzc1xuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6ICR6aW5kZXgtdG9vbHRpcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIE91ciBwYXJlbnQgZWxlbWVudCBjYW4gYmUgYXJiaXRyYXJ5IHNpbmNlIHRvb2x0aXBzIGFyZSBieSBkZWZhdWx0IGluc2VydGVkIGFzIGEgc2libGluZyBvZiB0aGVpciB0YXJnZXQgZWxlbWVudC5cbiAgLy8gU28gcmVzZXQgb3VyIGZvbnQgYW5kIHRleHQgcHJvcGVydGllcyB0byBhdm9pZCBpbmhlcml0aW5nIHdlaXJkIHZhbHVlcy5cbiAgQGluY2x1ZGUgcmVzZXQtdGV4dDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuXG4gIEBpbmNsdWRlIG9wYWNpdHkoMCk7XG5cbiAgJi5pbiAgICAgeyBAaW5jbHVkZSBvcGFjaXR5KCR0b29sdGlwLW9wYWNpdHkpOyB9XG4gICYudG9wICAgIHsgbWFyZ2luLXRvcDogIC0zcHg7IHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7IH1cbiAgJi5yaWdodCAgeyBtYXJnaW4tbGVmdDogIDNweDsgcGFkZGluZzogMCAkdG9vbHRpcC1hcnJvdy13aWR0aDsgfVxuICAmLmJvdHRvbSB7IG1hcmdpbi10b3A6ICAgM3B4OyBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwOyB9XG4gICYubGVmdCAgIHsgbWFyZ2luLWxlZnQ6IC0zcHg7IHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7IH1cbn1cblxuLy8gV3JhcHBlciBmb3IgdGhlIHRvb2x0aXAgY29udGVudFxuLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6ICR0b29sdGlwLW1heC13aWR0aDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgY29sb3I6ICR0b29sdGlwLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0b29sdGlwLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xufVxuXG4vLyBBcnJvd3Ncbi50b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLy8gTm90ZTogRGVwcmVjYXRlZCAudG9wLWxlZnQsIC50b3AtcmlnaHQsIC5ib3R0b20tbGVmdCwgYW5kIC5ib3R0b20tcmlnaHQgYXMgb2YgdjMuMy4xXG4udG9vbHRpcCB7XG4gICYudG9wIC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYudG9wLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnRvcC1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi1ib3R0b206IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbSAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbS1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi5ib3R0b20tcmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG59XG4iLCIvL1xuLy8gUG9wb3ZlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLnBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1wb3BvdmVyO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXgtd2lkdGg6ICRwb3BvdmVyLW1heC13aWR0aDtcbiAgcGFkZGluZzogMXB4O1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSBwb3BvdmVycyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3BvdmVyLWJnO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAkcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwb3BvdmVyLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGFyZ2U7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKSk7XG5cbiAgLy8gT2Zmc2V0IHRoZSBwb3BvdmVyIHRvIGFjY291bnQgZm9yIHRoZSBwb3BvdmVyIGFycm93XG4gICYudG9wICAgICB7IG1hcmdpbi10b3A6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxuICAmLnJpZ2h0ICAgeyBtYXJnaW4tbGVmdDogJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbiAgJi5ib3R0b20gIHsgbWFyZ2luLXRvcDogJHBvcG92ZXItYXJyb3ctd2lkdGg7IH1cbiAgJi5sZWZ0ICAgIHsgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxufVxuXG4ucG9wb3Zlci10aXRsZSB7XG4gIG1hcmdpbjogMDsgLy8gcmVzZXQgaGVhZGluZyBtYXJnaW5cbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wb3Zlci10aXRsZS1iZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkcG9wb3Zlci10aXRsZS1iZywgNSUpO1xuICBib3JkZXItcmFkaXVzOiAoJGJvcmRlci1yYWRpdXMtbGFyZ2UgLSAxKSAoJGJvcmRlci1yYWRpdXMtbGFyZ2UgLSAxKSAwIDA7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA5cHggMTRweDtcbn1cblxuLy8gQXJyb3dzXG4vL1xuLy8gLmFycm93IGlzIG91dGVyLCAuYXJyb3c6YWZ0ZXIgaXMgaW5uZXJcblxuLnBvcG92ZXIgPiAuYXJyb3cge1xuICAmLFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgfVxufVxuLnBvcG92ZXIgPiAuYXJyb3cge1xuICBib3JkZXItd2lkdGg6ICRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xufVxuLnBvcG92ZXIgPiAuYXJyb3c6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6ICRwb3BvdmVyLWFycm93LXdpZHRoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ucG9wb3ZlciB7XG4gICYudG9wID4gLmFycm93IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOyAvLyBJRTggZmFsbGJhY2tcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICBib3R0b206IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgYm90dG9tOiAxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLnJpZ2h0ID4gLmFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGxlZnQ6IDFweDtcbiAgICAgIGJvdHRvbTogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxuICAmLmJvdHRvbSA+IC5hcnJvdyB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjsgLy8gSUU4IGZhbGxiYWNrXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgdG9wOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAmLmxlZnQgPiAuYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgcmlnaHQ6IDFweDtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICAgIGJvdHRvbTogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENhcm91c2VsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIFdyYXBwZXIgZm9yIHRoZSBzbGlkZSBjb250YWluZXIgYW5kIGluZGljYXRvcnNcbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcblxuICA+IC5pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKC42cyBlYXNlLWluLW91dCBsZWZ0KTtcblxuICAgIC8vIEFjY291bnQgZm9yIGphbmtpdHVkZSBvbiBpbWFnZXNcbiAgICA+IGltZyxcbiAgICA+IGEgPiBpbWcge1xuICAgICAgQGluY2x1ZGUgaW1nLXJlc3BvbnNpdmU7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAvLyBXZWJLaXQgQ1NTMyB0cmFuc2Zvcm1zIGZvciBzdXBwb3J0ZWQgZGV2aWNlc1xuICAgIEBtZWRpYSBhbGwgYW5kICh0cmFuc2Zvcm0tM2QpLCAoLXdlYmtpdC10cmFuc2Zvcm0tM2QpIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tdHJhbnNmb3JtKDAuNnMgZWFzZS1pbi1vdXQpO1xuICAgICAgQGluY2x1ZGUgYmFja2ZhY2UtdmlzaWJpbGl0eShoaWRkZW4pO1xuICAgICAgQGluY2x1ZGUgcGVyc3BlY3RpdmUoMTAwMHB4KTtcblxuICAgICAgJi5uZXh0LFxuICAgICAgJi5hY3RpdmUucmlnaHQge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgICYucHJldixcbiAgICAgICYuYWN0aXZlLmxlZnQge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAmLm5leHQubGVmdCxcbiAgICAgICYucHJldi5yaWdodCxcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiAuYWN0aXZlLFxuICA+IC5uZXh0LFxuICA+IC5wcmV2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gID4gLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gID4gLm5leHQsXG4gID4gLnByZXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICA+IC5uZXh0IHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG4gID4gLnByZXYge1xuICAgIGxlZnQ6IC0xMDAlO1xuICB9XG4gID4gLm5leHQubGVmdCxcbiAgPiAucHJldi5yaWdodCB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gID4gLmFjdGl2ZS5sZWZ0IHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA+IC5hY3RpdmUucmlnaHQge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cblxufVxuXG4vLyBMZWZ0L3JpZ2h0IGNvbnRyb2xzIGZvciBuYXZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uY2Fyb3VzZWwtY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDtcbiAgQGluY2x1ZGUgb3BhY2l0eSgkY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5KTtcbiAgZm9udC1zaXplOiAkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemU7XG4gIGNvbG9yOiAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogJGNhcm91c2VsLXRleHQtc2hhZG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyAvLyBGaXggSUU5IGNsaWNrLXRocnUgYnVnXG4gIC8vIFdlIGNhbid0IGhhdmUgdGhpcyB0cmFuc2l0aW9uIGhlcmUgYmVjYXVzZSBXZWJLaXQgY2FuY2VscyB0aGUgY2Fyb3VzZWxcbiAgLy8gYW5pbWF0aW9uIGlmIHlvdSB0cmlwIHRoaXMgd2hpbGUgaW4gdGhlIG1pZGRsZSBvZiBhbm90aGVyIGFuaW1hdGlvbi5cblxuICAvLyBTZXQgZ3JhZGllbnRzIGZvciBiYWNrZ3JvdW5kc1xuICAmLmxlZnQge1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWhvcml6b250YWwoJHN0YXJ0LWNvbG9yOiByZ2JhKDAsMCwwLC41KSwgJGVuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDAwMSkpO1xuICB9XG4gICYucmlnaHQge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6IHJnYmEoMCwwLDAsLjAwMDEpLCAkZW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KSk7XG4gIH1cblxuICAvLyBIb3Zlci9mb2N1cyBzdGF0ZVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgQGluY2x1ZGUgb3BhY2l0eSguOSk7XG4gIH1cblxuICAvLyBUb2dnbGVzXG4gIC5pY29uLXByZXYsXG4gIC5pY29uLW5leHQsXG4gIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuaWNvbi1wcmV2LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCB7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgfVxuICAuaWNvbi1uZXh0LFxuICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgfVxuICAuaWNvbi1wcmV2LFxuICAuaWNvbi1uZXh0IHtcbiAgICB3aWR0aDogIDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgfVxuXG5cbiAgLmljb24tcHJldiB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAzOSc7Ly8gU0lOR0xFIExFRlQtUE9JTlRJTkcgQU5HTEUgUVVPVEFUSU9OIE1BUksgKFUrMjAzOSlcbiAgICB9XG4gIH1cbiAgLmljb24tbmV4dCB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAzYSc7Ly8gU0lOR0xFIFJJR0hULVBPSU5USU5HIEFOR0xFIFFVT1RBVElPTiBNQVJLIChVKzIwM0EpXG4gICAgfVxuICB9XG59XG5cbi8vIE9wdGlvbmFsIGluZGljYXRvciBwaXBzXG4vL1xuLy8gQWRkIGFuIHVub3JkZXJlZCBsaXN0IHdpdGggdGhlIGZvbGxvd2luZyBjbGFzcyBhbmQgYWRkIGEgbGlzdCBpdGVtIGZvciBlYWNoXG4vLyBzbGlkZSB5b3VyIGNhcm91c2VsIGhvbGRzLlxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDE1O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogLTMwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogIDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMXB4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNhcm91c2VsLWluZGljYXRvci1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAvLyBJRTgtOSBoYWNrIGZvciBldmVudCBoYW5kbGluZ1xuICAgIC8vXG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgOC05IGRvZXMgbm90IHN1cHBvcnQgY2xpY2tzIG9uIGVsZW1lbnRzIHdpdGhvdXQgYSBzZXRcbiAgICAvLyBgYmFja2dyb3VuZC1jb2xvcmAuIFdlIGNhbm5vdCB1c2UgYGZpbHRlcmAgc2luY2UgdGhhdCdzIG5vdCB2aWV3ZWQgYXMgYVxuICAgIC8vIGJhY2tncm91bmQgY29sb3IgYnkgdGhlIGJyb3dzZXIuIFRodXMsIGEgaGFjayBpcyBuZWVkZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNJbnRlcm5ldF9FeHBsb3JlclxuICAgIC8vXG4gICAgLy8gRm9yIElFOCwgd2Ugc2V0IHNvbGlkIGJsYWNrIGFzIGl0IGRvZXNuJ3Qgc3VwcG9ydCBgcmdiYSgpYC4gRm9yIElFOSwgd2VcbiAgICAvLyBzZXQgYWxwaGEgdHJhbnNwYXJlbmN5IGZvciB0aGUgYmVzdCByZXN1bHRzIHBvc3NpYmxlLlxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgXFw5OyAvLyBJRThcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApOyAvLyBJRTlcbiAgfVxuICAuYWN0aXZlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6ICAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZztcbiAgfVxufVxuXG4vLyBPcHRpb25hbCBjYXB0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhpZGRlbiBieSBkZWZhdWx0IGZvciBzbWFsbGVyIHZpZXdwb3J0c1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1JTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAyMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogJGNhcm91c2VsLWNhcHRpb24tY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6ICRjYXJvdXNlbC10ZXh0LXNoYWRvdztcbiAgJiAuYnRuIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTsgLy8gTm8gc2hhZG93IGZvciBidXR0b24gZWxlbWVudHMgaW4gY2Fyb3VzZWwtY2FwdGlvblxuICB9XG59XG5cblxuLy8gU2NhbGUgdXAgY29udHJvbHMgZm9yIHRhYmxldHMgYW5kIHVwXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuXG4gIC8vIFNjYWxlIHVwIHRoZSBjb250cm9scyBhIHNtaWRnZVxuICAuY2Fyb3VzZWwtY29udHJvbCB7XG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxuICAgIC5pY29uLXByZXYsXG4gICAgLmljb24tbmV4dCB7XG4gICAgICB3aWR0aDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAqIDEuNSk7XG4gICAgICBoZWlnaHQ6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgKiAxLjUpO1xuICAgICAgbWFyZ2luLXRvcDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAvIC0yKTtcbiAgICAgIGZvbnQtc2l6ZTogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAqIDEuNSk7XG4gICAgfVxuICAgIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAgIC5pY29uLXByZXYge1xuICAgICAgbWFyZ2luLWxlZnQ6ICgkY2Fyb3VzZWwtY29udHJvbC1mb250LXNpemUgLyAtMik7XG4gICAgfVxuICAgIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCxcbiAgICAuaWNvbi1uZXh0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAvIC0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBTaG93IGFuZCBsZWZ0IGFsaWduIHRoZSBjYXB0aW9uc1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgbGVmdDogMjAlO1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cblxuICAvLyBNb3ZlIHVwIHRoZSBpbmRpY2F0b3JzXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbn1cbiIsIi8vXG4vLyBVdGlsaXR5IGNsYXNzZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gRmxvYXRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5jbGVhcmZpeCB7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuLmNlbnRlci1ibG9jayB7XG4gIEBpbmNsdWRlIGNlbnRlci1ibG9jaztcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG4vLyBUb2dnbGluZyBjb250ZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLmhpZGUgaW4gZmF2b3Igb2YgLmhpZGRlbiBvciAuc3Itb25seSAoYXMgYXBwcm9wcmlhdGUpIGluIHYzLjAuMVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRleHQtaGlkZSB7XG4gIEBpbmNsdWRlIHRleHQtaGlkZTtcbn1cblxuXG4vLyBIaWRlIGZyb20gc2NyZWVucmVhZGVycyBhbmQgYnJvd3NlcnNcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gRm9yIEFmZml4IHBsdWdpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYWZmaXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iLCIvL1xuLy8gUmVzcG9uc2l2ZTogVXRpbGl0eSBjbGFzc2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIElFMTAgaW4gV2luZG93cyAoUGhvbmUpIDhcbi8vXG4vLyBTdXBwb3J0IGZvciByZXNwb25zaXZlIHZpZXdzIHZpYSBtZWRpYSBxdWVyaWVzIGlzIGtpbmQgb2YgYm9ya2VkIGluIElFMTAsIGZvclxuLy8gU3VyZmFjZS9kZXNrdG9wIGluIHNwbGl0IHZpZXcgYW5kIGZvciBXaW5kb3dzIFBob25lIDguIFRoaXMgcGFydGljdWxhciBmaXhcbi8vIG11c3QgYmUgYWNjb21wYW5pZWQgYnkgYSBzbmlwcGV0IG9mIEphdmFTY3JpcHQgdG8gc25pZmYgdGhlIHVzZXIgYWdlbnQgYW5kXG4vLyBhcHBseSBzb21lIGNvbmRpdGlvbmFsIENTUyB0byAqb25seSogdGhlIFN1cmZhY2UvZGVza3RvcCBXaW5kb3dzIDguIExvb2sgYXRcbi8vIG91ciBHZXR0aW5nIFN0YXJ0ZWQgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIGJ1Zy5cbi8vXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBmb2xsb3dpbmc6XG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTA0OTdcbi8vIERvY3M6IGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2dldHRpbmctc3RhcnRlZC8jc3VwcG9ydC1pZTEwLXdpZHRoXG4vLyBTb3VyY2U6IGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTMvMDEvd2luZG93cy1waG9uZS04LWFuZC1kZXZpY2Utd2lkdGgvXG4vLyBTb3VyY2U6IGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTIvMTAvaWUxMC1zbmFwLW1vZGUtYW5kLXJlc3BvbnNpdmUtZGVzaWduL1xuXG5AYXQtcm9vdCB7XG4gIEAtbXMtdmlld3BvcnQge1xuICAgIHdpZHRoOiBkZXZpY2Utd2lkdGg7XG4gIH1cbn1cblxuXG4vLyBWaXNpYmlsaXR5IHV0aWxpdGllc1xuLy8gTm90ZTogRGVwcmVjYXRlZCAudmlzaWJsZS14cywgLnZpc2libGUtc20sIC52aXNpYmxlLW1kLCBhbmQgLnZpc2libGUtbGcgYXMgb2YgdjMuMi4wXG5cbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS14cycpO1xuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLXNtJyk7XG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUtbWQnKTtcbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1sZycpO1xuXG4udmlzaWJsZS14cy1ibG9jayxcbi52aXNpYmxlLXhzLWlubGluZSxcbi52aXNpYmxlLXhzLWlubGluZS1ibG9jayxcbi52aXNpYmxlLXNtLWJsb2NrLFxuLnZpc2libGUtc20taW5saW5lLFxuLnZpc2libGUtc20taW5saW5lLWJsb2NrLFxuLnZpc2libGUtbWQtYmxvY2ssXG4udmlzaWJsZS1tZC1pbmxpbmUsXG4udmlzaWJsZS1tZC1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1sZy1ibG9jayxcbi52aXNpYmxlLWxnLWlubGluZSxcbi52aXNpYmxlLWxnLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUteHMnKTtcbn1cbi52aXNpYmxlLXhzLWJsb2NrIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUteHMtaW5saW5lIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXhzLWlubGluZS1ibG9jayB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtc20nKTtcbn1cbi52aXNpYmxlLXNtLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1zbS1pbmxpbmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1zbS1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtbWQnKTtcbn1cbi52aXNpYmxlLW1kLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1tZC1pbmxpbmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1tZC1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLWxnJyk7XG59XG4udmlzaWJsZS1sZy1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLWxnLWlubGluZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4teHMnKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tc20nKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tbWQnKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLWxnJyk7XG59XG5cblxuLy8gUHJpbnQgdXRpbGl0aWVzXG4vL1xuLy8gTWVkaWEgcXVlcmllcyBhcmUgcGxhY2VkIG9uIHRoZSBpbnNpZGUgdG8gYmUgbWl4aW4tZnJpZW5kbHkuXG5cbi8vIE5vdGU6IERlcHJlY2F0ZWQgLnZpc2libGUtcHJpbnQgYXMgb2YgdjMuMi4wXG5cbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1wcmludCcpO1xuXG5AbWVkaWEgcHJpbnQge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXZpc2liaWxpdHkoJy52aXNpYmxlLXByaW50Jyk7XG59XG4udmlzaWJsZS1wcmludC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXByaW50LWlubGluZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi1wcmludCcpO1xufVxuIiwiLy8gSW1wb3J0IHlvdXIgY3VzdG9tIHN0eWxlcyBoZXJlLiBZb3UgaGF2ZSBhY2Nlc3MgdG8gYWxsIHRoZSBib290c3RyYXAgdmFyaWFibGVzLiBJZiB5b3UgcmVxdWlyZVxuLy8geW91ciBzYXNzIGZpbGVzIHNlcGFyYXRlbHksIHlvdSB3aWxsIG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYm9vdHN0cmFwIHZhcmlhYmxlcywgbWl4aW5zLCBjbGFzZXMsIGV0Yy5cbi8vIFVzdWFsbHkgdGhpcyBlbmRwb2ludC1maWxlIGNvbnRhaW5zIGxpc3Qgb2YgQGltcG9ydHMgb2YgeW91ciBhcHBsaWNhdGlvbiBzdHlsZXMuXG4iXSwibWFwcGluZ3MiOiI7QW1DQUEsNEVBQTRFO0FBUTVFLEFBQUEsSUFBSSxDQUFDO0VBQ0gsV0FBVyxFQUFFLFVBQVc7RUFDeEIsb0JBQW9CLEVBQUUsSUFBSztFQUMzQix3QkFBd0IsRUFBRSxJQUFLLEdBQ2hDOztBQU1ELEFBQUEsSUFBSSxDQUFDO0VBQ0gsTUFBTSxFQUFFLENBQUUsR0FDWDs7QUFZRCxBQUFBLE9BQU87QUFDUCxBQUFBLEtBQUs7QUFDTCxBQUFBLE9BQU87QUFDUCxBQUFBLFVBQVU7QUFDVixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLE1BQU07QUFDTixBQUFBLElBQUk7QUFDSixBQUFBLElBQUk7QUFDSixBQUFBLEdBQUc7QUFDSCxBQUFBLE9BQU87QUFDUCxBQUFBLE9BQU8sQ0FBQztFQUNOLE9BQU8sRUFBRSxLQUFNLEdBQ2hCOztBQU9ELEFBQUEsS0FBSztBQUNMLEFBQUEsTUFBTTtBQUNOLEFBQUEsUUFBUTtBQUNSLEFBQUEsS0FBSyxDQUFDO0VBQ0osT0FBTyxFQUFFLFlBQWE7RUFDdEIsY0FBYyxFQUFFLFFBQVMsR0FDMUI7O0FBT0QsQUFBb0IsS0FBZixBQUFBLElBQUssRUFBQSxBQUFBLEFBQVMsUUFBUixBQUFBLEdBQVc7RUFDcEIsT0FBTyxFQUFFLElBQUs7RUFDZCxNQUFNLEVBQUUsQ0FBRSxHQUNYOztDQU9ELEFBQUEsQUFBTyxNQUFOLEFBQUE7QUFDRCxBQUFBLFFBQVEsQ0FBQztFQUNQLE9BQU8sRUFBRSxJQUFLLEdBQ2Y7O0FBU0QsQUFBQSxDQUFDLENBQUM7RUFDQSxnQkFBZ0Is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QUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxTQUFTLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLEVBQUUsQUFBQSxVQUFVLENBQTFoQjtFQUNFLFFBQVEsRUFBRSxRQUFTO0VBRW5CLFVBQVUsRUFBRSxHQUFJO0VBRWhCLFlBQVksRUFBRyxJQUFJO0VBQ25CLGFBQWEsRUFBRSxJQUFLLEdBQ3JCOztBQVNELEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxDQUFySTtFQUNFLEtBQUssRUFBRSxJQUFLLEdBQ2I7O0FBTUMsQUFBQSxTQUFTLENBQVQ7RUFDRSxLQUFLLEVBQUUsUUFBVSxHQUNsQjs7QUFGRCxBQUFBLFNBQVMsQ0FBVDtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsU0FBUyxDQUFUO0VBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7O0FBRkQsQUFBQSxTQUFTLENBQVQ7RUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjs7QUFGRCxBQUFBLFNBQVMsQ0FBVDtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsU0FBUyxDQUFUO0VBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7O0FBRkQsQUFBQSxTQUFTLENBQVQ7RUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjs7QUFGRCxBQUFBLFNBQVMsQ0FBVDtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsU0FBUyxDQUFUO0VBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7O0FBRkQsQUFBQSxVQUFVLENBQVY7RUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjs7QUFGRCxBQUFBLFVBQVUsQ0FBVjtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsVUFBVSxDQUFWO0VBQ0UsS0FBSyxFQUFFLElBQVUsR0FDbEI7O0FBa0JELEFBQUEsY0FBYyxDQUFkO0VBQ0UsS0FBSyxFQUFFLElBQUssR0FDYjs7QUFQRCxBQUFBLGNBQWMsQ0FBZDtFQUNFLEtBQUssRUFBRSxRQUFVLEdBQ2xCOztBQUZELEFBQUEsY0FBYyxDQUFkO0VBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7O0FBRkQsQUFBQSxjQUFjLENBQWQ7RUFDRSxLQUFLLEVBQUUsR0FBVSxHQUNsQjs7QUFGRCxBQUFBLGNBQWMsQ0FBZDtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsY0FBYyxDQUFkO0VBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7O0FBRkQsQUFBQSxjQUFjLENBQWQ7RUFDRSxLQUFLLEVBQUUsR0FBVSxHQUNsQjs7QUFGRCxBQUFBLGNBQWMsQ0FBZDtFQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCOztBQUZELEFBQUEsY0FBYyxDQUFkO0VBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7O0FBRkQsQUFBQSxjQUFjLENBQWQ7RUFDRSxLQUFLLEVBQUUs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QUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsU0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsU0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLFVBQVUsQ0FBVjtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxVQUFVLENBQVY7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsVUFBVSxDQUFWO0lBQ0UsS0FBSyxFQUFFLElBQVUsR0FDbEI7RUFrQkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsSUFBSyxHQUNiO0VBUEQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsUUFBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxlQUFlLENBQWY7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsZUFBZSxDQUFmO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGVBQWUsQ0FBZjtJQUNFLEtBQUssRUFBRSxJQUFVLEdBQ2xCO0VBUEQsQUFBQSxjQUFjLENBQWQ7SUFDRSxJQUFJLEVBQUUsSUFBSyxHQUNaO0VBUEQsQUFBQSxjQUFjLENBQWQ7SUFDRSxJQUFJLEVBQUUsUUFBVSxHQUNqQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsSUFBSSxFQUFFLFNBQVUsR0FDakI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLElBQUksRUFBRSxHQUFVLEdBQ2pCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxJQUFJLEVBQUUsU0FBVSxHQUNqQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsSUFBSSxFQUFFLFNBQVUsR0FDakI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLElBQUksRUFBRSxHQUFVLEdBQ2pCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxJQUFJLEVBQUUsU0FBVSxHQUNqQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsSUFBSSxFQUFFLFNBQVUsR0FDakI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLElBQUksRUFBRSxHQUFVLEdBQ2pCO0VBRkQsQUFBQSxlQUFlLENBQWY7SUFDRSxJQUFJLEVBQUUsU0FBVSxHQUNqQjtFQUZELEFBQUEsZUFBZSxDQUFmO0lBQ0UsSUFBSSxFQUFFLFNBQVUsR0FDakI7RUFGRCxBQUFBLGVBQWUsQ0FBZjtJQUNFLElBQUksRUFBRSxJQUFVLEdBQ2pCO0VBa0JELEFBQUEsZ0JBQWdCLENBQWhCO0lBQ0UsV0FBVyxFQUFFLEVBQVUsR0FDeEI7RUFGRCxBQUFBLGdCQUFnQixDQUFoQjtJQUNFLFdBQVcsRUFBRSxRQUFVLEdBQ3hCO0VBRkQsQUFBQSxnQkFBZ0IsQ0FBaEI7SUFDRSxXQUFXLEVBQUUsU0FBVSxHQUN4QjtFQUZELEFBQUEsZ0JBQWdCLENBQWhCO0lBQ0UsV0FBVyxFQUFFLEdBQVUsR0FDeEI7RUFGRCxBQUFBLGdCQUFnQixDQUFoQjtJQUNFLFdBQVcsRUFBRSxTQUFVLEdBQ3hCO0VBRkQsQUFBQSxnQkFBZ0IsQ0FBaEI7SUFDRSxXQUFXLEVBQUUsU0FBVSxHQUN4QjtFQUZELEFBQUEsZ0JBQWdCLENBQWhCO0lBQ0UsV0FBVyxFQUFFLEdBQVUsR0FDeEI7RUFGRCxBQUFBLGdCQUFnQixDQUFoQjtJQUNFLFdBQVcsRUFBRSxTQUFVLEdBQ3hCO0VBRkQsQUFBQSxnQkFBZ0IsQ0FBaEI7SUFDRSxXQUFXLEVBQUUsU0FBVSxHQUN4QjtFQUZELEFBQUEsZ0JBQWdCLENBQWhCO0lBQ0UsV0FBVyxFQUFFLEdBQVUsR0FDeEI7RUFGRCxBQUFBLGlCQUFpQixDQUFqQjtJQUNFLFdBQVcsRUFBRSxTQUFVLEdBQ3hCO0VBRkQsQUFBQSxpQkFBaUIsQ0FBakI7SUFDRSxXQUFXLEVBQUUsU0FBVSxHQUN4QjtFQUZELEFBQUEsaUJBQWlCLENBQWpCO0lBQ0UsV0FBVyxFQUFFLElBQVUsR0FDeEI7O0FXV0wsTUFBTSxFQUFMLFNBQVMsRUFBRSxLQUFLO0VYOUNmLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsU0FBUyxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxFQUFFLEFBQUEsVUFBVSxDQUFySTtJQUNFLEtBQUssRUFBRSxJQUFLLEdBQ2I7RUFNQyxBQUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxRQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsU0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsU0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsU0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLFVBQVUsQ0FBVjtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxVQUFVLENBQVY7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsVUFBVSxDQUFWO0lBQ0UsS0FBSyxFQUFFLElBQVUsR0FDbEI7RUFrQkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsSUFBSyxHQUNiO0VBUEQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsUUFBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxHQUFVLEdBQ2xCO0VBRkQsQUFBQSxlQUFlLENBQWY7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsZUFBZSxDQUFmO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLGVB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U0FBUyxDQUFUO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLFNBQVMsQ0FBVDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxTQUFTLENBQVQ7SUFDRSxLQUFLLEVBQUUsR0FBVSxHQUNsQjtFQUZELEFBQUEsVUFBVSxDQUFWO0lBQ0UsS0FBSyxFQUFFLFNBQVUsR0FDbEI7RUFGRCxBQUFBLFVBQVUsQ0FBVjtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxVQUFVLENBQVY7SUFDRSxLQUFLLEVBQUUsSUFBVSxHQUNsQjtFQWtCRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxJQUFLLEdBQ2I7RUFQRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxRQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxjQUFjLENBQWQ7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsY0FBYyxDQUFkO0lBQ0UsS0FBSyxFQUFFLEdBQVUsR0FDbEI7RUFGRCxBQUFBLGVBQWUsQ0FBZjtJQUNFLEtBQUssRUFBRSxTQUFVLEdBQ2xCO0VBRkQsQUFBQSxlQUFlLENBQWY7SUFDRSxLQUFLLEVBQUUsU0FBVSxHQUNsQjtFQUZELEFBQUEsZUFBZSxDQUFmO0lBQ0UsS0FBSyxFQUFFLElBQVUsR0FDbEI7RUFQRCxBQUFBLGNBQWMsQ0FBZDtJQUNFLElBQUksRUFBRSxJ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 */", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/transition\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/alert\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/button\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/carousel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/collapse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/dropdown\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/tooltip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/popover\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/scrollspy\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/tab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__ (!(function webpackMissingModule() { var e = new Error("Cannot find module \"../bootstrap-sass/assets/javascripts/bootstrap/affix\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _module = __webpack_require__(12);

	//import { $, jQuery } from 'jquery'

	(0, _module.query)(); //import 'babel-polyfill'

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.query = undefined;

	var _jquery = __webpack_require__(13);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var query = exports.query = function query() {
	  (0, _jquery2.default)('#target-well').text('This text injected from JavaScript');
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ }
/******/ ]);