(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appComponent = {
	template: _app2.default,
	controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl() {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "\n<navbar></navbar>\n<sidebar></sidebar>";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _navbar = require('./components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = require('./components/sidebar/sidebar.component');

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _app2.default).component('navbar', _navbar2.default).component('sidebar', _sidebar2.default);

},{"./app.component":1,"./components/navbar/navbar.component":5,"./components/sidebar/sidebar.component":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _navbar = require('./navbar.html');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar3 = require('./navbar.controller');

var _navbar4 = _interopRequireDefault(_navbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbarComponent = {
	bindings: {},
	template: _navbar2.default,
	controller: _navbar4.default,
	controllerAs: '$ctrl'
};

exports.default = navbarComponent;

},{"./navbar.controller":6,"./navbar.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navbarController = function () {
	// constructor is used for setting default variables
	function navbarController() {
		_classCallCheck(this, navbarController);

		var ctrl = this;
		ctrl.title = "You've Got Stew Mail";
	}

	_createClass(navbarController, [{
		key: "hello",
		value: function hello() {
			console.log();
		}
	}]);

	return navbarController;
}();

exports.default = navbarController;

},{}],7:[function(require,module,exports){
module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"/app/images/logo.png\"></a>\n    <div class=\"col-sm-7 col-md-7\">\n        <form class=\"navbar-form\" role=\"search\" >\n        <div class=\"input-group\" id=\"custom-search-input\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\n            <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\n            </div>\n        </div>\n        </form>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings<b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu\">\n          <li class=\"divider\"></li>\n          <li><a href=\"#\">Edit Profile</a></li>\n          <li><a href=\"#\">Add Notifications</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sidebar = require('./sidebar.html');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _sidebar3 = require('./sidebar.controller');

var _sidebar4 = _interopRequireDefault(_sidebar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sidebarComponent = {
	bindings: {},
	template: _sidebar2.default,
	controller: _sidebar4.default,
	controllerAs: '$ctrl'
};

exports.default = sidebarComponent;

},{"./sidebar.controller":9,"./sidebar.html":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidebarController = function () {
	// constructor is used for setting default variables
	function sidebarController() {
		_classCallCheck(this, sidebarController);

		var ctrl = this;
		ctrl.title = "You've Got Stew Mail";
	}

	_createClass(sidebarController, [{
		key: "hello",
		value: function hello() {
			console.log();
		}
	}]);

	return sidebarController;
}();

exports.default = sidebarController;

},{}],10:[function(require,module,exports){
module.exports = "    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-3 sidebar\">\n    <div class=\"mini-submenu\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n    </div>\n    <div class=\"list-group\">\n\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-comment-o\"></i> Inbox\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-search\"></i> Outbox\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-user\"></i> Drafts\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-folder-open-o\"></i> Trash <span class=\"badge\">99</span>\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-bar-chart-o\"></i> Junk <span class=\"badge\">99</span>\n        </a>\n        <a href=\"#\" class=\"list-group-item\">\n            <i class=\"fa fa-envelope\"></i> Starred\n        </a>\n    </div>        \n</div>\n    </div>\n</div>";

},{}]},{},[4]);
