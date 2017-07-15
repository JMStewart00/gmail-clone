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

_app4.default.$inject = ['$rootScope', '$interval', '$http', '$q'];

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
module.exports = "<div>\n\t<navbar></navbar>\n\t<emailcontrol></emailcontrol>\n\n\t<div class=\"col-sm-2 col-md-2 hidden-xs\">\n\t\t<sidebar></sidebar>\n\t</div>\n\t<div class=\"col-sm-10 col-md-10 col-xs-12\">\n\t\t<emails></emails>\n\t</div>\n</div>\n";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _navbar = require('./components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = require('./components/sidebar/sidebar.component');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _emailcontrol = require('./components/emailcontrol/emailcontrol.component');

var _emailcontrol2 = _interopRequireDefault(_emailcontrol);

var _emails = require('./components/emails/emails.component');

var _emails2 = _interopRequireDefault(_emails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _app2.default).component('navbar', _navbar2.default).component('sidebar', _sidebar2.default).component('emailcontrol', _emailcontrol2.default).component('emails', _emails2.default);

},{"./app.component":1,"./components/emailcontrol/emailcontrol.component":5,"./components/emails/emails.component":8,"./components/navbar/navbar.component":11,"./components/sidebar/sidebar.component":14}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emailcontrol = require('./emailcontrol.html');

var _emailcontrol2 = _interopRequireDefault(_emailcontrol);

var _emailcontrol3 = require('./emailcontrol.controller');

var _emailcontrol4 = _interopRequireDefault(_emailcontrol3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailcontrolComponent = {
	bindings: {},
	template: _emailcontrol2.default,
	controller: ['$rootScope', '$interval', '$http', _emailcontrol4.default],
	controllerAs: '$ctrl'
};

exports.default = emailcontrolComponent;

},{"./emailcontrol.controller":6,"./emailcontrol.html":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var emailcontrolController = function () {
	// constructor is used for setting default variables
	function emailcontrolController($rootScope, $interval, $http) {
		_classCallCheck(this, emailcontrolController);

		var ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.$rootScope.moreEmails = false;
	}

	_createClass(emailcontrolController, [{
		key: 'refresh',
		//constructor

		value: function refresh() {
			var ctrl = this;
			var moreEmails = ctrl.$rootScope.moreEmails;
			ctrl.moreEmails = !ctrl.moreEmails;
			ctrl.$rootScope.moreEmails = ctrl.moreEmails;
		}
	}, {
		key: 'delete',
		value: function _delete() {
			console.log('delete');
		}
	}, {
		key: 'nextRight',
		value: function nextRight() {
			console.log('next email RIGHT');
		}
	}, {
		key: 'nextLeft',
		value: function nextLeft() {
			console.log('next email LEFT');
		}
	}]);

	return emailcontrolController;
}(); // emailcontrolController


exports.default = emailcontrolController;

},{}],7:[function(require,module,exports){
module.exports = "\n\t<nav id='emailcontrolbar' class=\"navbar\" role=\"navigation\">\n\t\t<button type=\"button\" class=\"btn glyphicon glyphicon-refresh\" ng-click=\"$ctrl.refresh()\" ng-model=\"moreEmails\"></button>\n\t\t<button type=\"button\" class=\"btn glyphicon glyphicon-trash\" ng-click=\"$ctrl.delete()\"></button>\n\t\n\t\n<!-- \t\t\t<a href=\"#\" class=\"dropdown-toggle glyphicon glyphicon-check\" data-toggle=\"dropdown\"><b class=\"caret\"></b></a>\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.selectAll()\">Select All</a></li>\n\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.selectUnread()\">Select Unread</a></li>\n\t\t\t\t<li><a href=\"#\" ng-click=\"$ctrl.selectRead()\">Select Read</a></li>\n\t\t\t</ul>\n\t -->\n\t\n\t\n\t\t<div class=\"nav navbar-nav navbar-right hidden-xs\">\n\t\t\t<button type=\"button\" class=\"btn glyphicon glyphicon-chevron-left\" ng-click=\"$ctrl.nextLeft()\"></button>\n\t\t\t<button type=\"button\" class=\"btn glyphicon glyphicon-chevron-right\" ng-click=\"$ctrl.nextRight()\"></button>\n\t\t</div>\n\t</ul>\n\t</nav>\n";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _emails = require('./emails.html');

var _emails2 = _interopRequireDefault(_emails);

var _emails3 = require('./emails.controller');

var _emails4 = _interopRequireDefault(_emails3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emailsComponent = {
	bindings: {},
	template: _emails2.default,
	controller: ['$rootScope', '$interval', '$http', '$q', _emails4.default],
	controllerAs: '$ctrl'
};

exports.default = emailsComponent;

},{"./emails.controller":9,"./emails.html":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var emailsController = function () {
    // constructor is used for setting default variables
    function emailsController($rootScope, $interval, $http, $q) {
        _classCallCheck(this, emailsController);

        var ctrl = this;
        ctrl.$rootScope = $rootScope;
        ctrl.$http = $http;
        ctrl.$q = $q;

        ctrl.tabs = [{
            name: 'Primary',
            class: 'glyphicon-inbox'
        }, {
            name: 'Social',
            class: 'glyphicon-user'
        }, {
            name: 'Promotions',
            class: 'glyphicon-tags'
        }, {
            name: 'Updates',
            class: 'glyphicon-info-sign'
        }, {
            name: 'Forums',
            class: 'glyphicon-comment'
        }], ctrl.emails = [{
            name: 'Archer Jones',
            email: 'archie.baconman@gmail.com',
            subject: 'Bacon Sale',
            description: 'stuff and things',
            date: '5/30/2017',
            tag: ['Primary', 'Promotions'],
            read: false,
            important: false,
            starred: false
        }],
        // ctrl.randomEmail(ctrl.tabs);

        $interval(function () {
            ctrl.randomEmail(ctrl.tabs);
        }, 500, [10]);

        // Create new email...
        ctrl.$rootScope.$watch('compose', function () {
            ctrl.compose = ctrl.$rootScope.compose;
        });

        ctrl.$rootScope.$watch('searchText', function () {
            // watches for when the text box gets updated
            ctrl.searchText = ctrl.$rootScope.searchText;
        });

        ctrl.activeTab = 'Primary';

        ctrl.$rootScope.$watch('inboxClicked', function () {
            ctrl.$rootScope.inboxClicked = false;
            ctrl.emailContent = false;
            ctrl.$rootScope.filter = false;
        });

        ctrl.$rootScope.$watch('moreEmails', function () {
            ctrl.moreEmails = ctrl.$rootScope.moreEmails;
            ctrl.randomEmail(ctrl.tabs);
        });
    } //constructor


    _createClass(emailsController, [{
        key: 'randomEmail',
        value: function randomEmail(tabs) {
            var ctrl = this;
            var category = tabs[Math.floor(Math.random() * tabs.length)].name;

            var date = new Date();
            date = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

            ctrl.$q.all([ctrl.$http.get('https://randomuser.me/api/?nat=us'), ctrl.$http.get('https://baconipsum.com/api/?type=all-meat&paras=2')]).then(function (data) {
                var shortSubject = data[1].data[0].substring(0, 15) + "...";
                var res = data[0].data.results[0];
                var email = {
                    name: res.name.first + ' ' + res.name.last,
                    email: res.email,
                    subject: shortSubject,
                    date: date,
                    read: false,
                    tag: ['Primary', category],
                    important: false,
                    starred: false
                };
                ctrl.emails.push(email);
                ctrl.newEmails();
            });
            console.log('new emails!');
        } //randomEmail()

    }, {
        key: 'newEmails',
        value: function newEmails() {
            var ctrl = this;
            var count = 0;
            ctrl.emails.map(function (email) {
                if (!email.read) {
                    count++;
                }
            });

            ctrl.$rootScope.inbox = count;
        } // newEmails()

    }, {
        key: 'cancelCompose',
        value: function cancelCompose() {
            var ctrl = this;
            ctrl.$rootScope.compose = !ctrl.$rootScope.compose;
            ctrl.compose = ctrl.$rootScope.compose;
        } //cancelCompose()

    }, {
        key: 'updateTab',
        value: function updateTab(tabName) {
            var ctrl = this;
            ctrl.activeTab = tabName;
        }
    }, {
        key: 'emailViewed',


        // Sets email to viewed
        value: function emailViewed(email) {
            var ctrl = this;
            var count = ctrl.$rootScope.inbox;
            if (email.read === false) {
                email.read = true;
                count--;
                ctrl.$rootScope.inbox = count;
            }
        }
    }, {
        key: 'checkAll',


        // check boxes to select all/unselect all emails
        value: function checkAll(email) {
            var ctrl = this;
            if (ctrl.selectedAll === true) {
                ctrl.selectedAll = false;
            } else {
                ctrl.selectedAll = true;
            }
            angular.forEach(ctrl.emails, function (email) {
                email.selected = ctrl.selectedAll;
            });
        }
    }]);

    return emailsController;
}(); //controller


exports.default = emailsController;

},{}],10:[function(require,module,exports){
module.exports = "<ul ng-hide=\"$ctrl.emailContent\" class=\"nav nav-tabs hidden-xs\">\n        <li class=\"tab-content active\" ng-repeat=\"tab in $ctrl.tabs\" ng-class=\"{tabActive: $ctrl.activeTab === tab.name}\">\n        <a class=\"glyphicon {{tab.class}}\" href=\"#\" ng-click=\"$ctrl.updateTab(tab.name)\"> {{tab.name}}</a>\n    </li>\n</ul>\n<table class=\"table\" ng-show=\"!$ctrl.compose\">\n    <tbody>\n        <thead>\n            <th><input type=\"checkbox\" ng-model=\"selectedAll\" ng-click=\"$ctrl.checkAll()\"></th>\n            <th></th>\n            <th></th>\n            <th>Name</th>\n            <th>Email Address</th>\n            <th>Email Subject</th>\n            <th>Date</th>\n        </thead>\n        <tr ng-repeat=\"email in $ctrl.emails | filter: {tag: $ctrl.activeTab} | filter: $ctrl.searchText | orderBy: '-date'\" ng-click=\"$ctrl.emailViewed(email)\" ng-class=\"{viewed: email.read, unread: !email.read}\">\n            <td>\n                <input type=\"checkbox\" ng-model=\"email.selected\">\n            </td>\n            <td>\n                <span class=\"glyphicon\" ng-class=\"{'glyphicon-star': email.starred, 'glyphicon-star-empty': !email.starred}\" ng-click=\"$ctrl.starred(email); $event.stopPropagation();\"></span>\n            </td>\n            <td>\n                <span type=\"checkbox\" class=\"glyphicon\" ng-class=\"{'glyphicon-heart': email.important, 'glyphicon-heart-empty': !email.important}\" ng-click=\"$ctrl.important(email); $event.stopPropagation();\"></span>\n            </td>\n            <td class=\"capitalize\">{{email.name}}</td>\n            <td>{{email.email}}</td>\n            <td class=\"capitalize\">{{email.subject}}</td>\n            <td>{{email.date}}</td>\n            \n        </tr>\n    </tbody>\n</table>\n<div id=\"composeEmail\" ng-show=\"$ctrl.compose\">\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">To:</span>\n        <input type=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">CC:</span>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">BCC:</span>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Subject</span>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" rows=\"15\" id=\"comment\"></textarea>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div class=\"col-xs-6\">\n                <button id=\"sendMsg\" type=\"button\" class=\"btn center-block text-center\">Send</button>\n            </div>\n            <div class=\"col-xs-6\">\n                <button id=\"cancelCompose\" type=\"button\" class=\"btn center-block text-center\" ng-click=\"$ctrl.cancelCompose()\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>\n</div>";

},{}],11:[function(require,module,exports){
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
	controller: ['$rootScope', '$interval', '$http', _navbar4.default],
	controllerAs: '$ctrl'
};

exports.default = navbarComponent;

},{"./navbar.controller":12,"./navbar.html":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navbarController = function () {
	// constructor is used for setting default variables
	function navbarController($rootScope, $interval, $http) {
		_classCallCheck(this, navbarController);

		var ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "You've Got Stew Mail";
	}

	_createClass(navbarController, [{
		key: 'home',
		value: function home() {
			location.reload();
		}
	}, {
		key: 'search',
		value: function search(searchText) {
			var ctrl = this;
			ctrl.$rootScope.searchText = searchText;
		}
	}, {
		key: 'editProfile',
		value: function editProfile() {
			console.log('Edit Profile');
		}
	}, {
		key: 'changeNots',
		value: function changeNots() {
			console.log('Notifications');
		}
	}]);

	return navbarController;
}();

exports.default = navbarController;

},{}],13:[function(require,module,exports){
module.exports = "<nav class=\"navbar\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <a class=\"navbar-brand\" href=\"#\" ng-click=\"$ctrl.home()\"><img src=\"/app/images/logo.png\"></a>\n  <div class=\"col-sm-7 col-md-7\">\n    <form class=\"navbar-form\" role=\"search\" ng-submit=\"$ctrl.search($ctrl.searchText)\">\n      <div class=\"input-group\" id=\"custom-search-input\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" ng-model=\"$ctrl.searchText\" ng-change=\"$ctrl.search($ctrl.searchText)\">\n        <div class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"submit\" ng-click=\"$ctrl.search($ctrl.searchText)\"><i class=\"glyphicon glyphicon-search\"></i></button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <ul class=\"nav navbar-nav navbar-right hidden-xs\">\n    <li class=\"dropdown\">\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings<b class=\"caret\"></b></a>\n      <ul class=\"dropdown-menu\">\n        <li class=\"divider\"></li>\n        <li><a href=\"#\" ng-click=\"$ctrl.editProfile()\">Edit Profile</a></li>\n        <li><a href=\"#\" ng-click=\"$ctrl.changeNots()\">Add Notifications</a></li>\n      </ul>\n    </li>\n  </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>";

},{}],14:[function(require,module,exports){
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
	controller: ['$rootScope', '$interval', '$http', _sidebar4.default],
	controllerAs: '$ctrl'
};

exports.default = sidebarComponent;

},{"./sidebar.controller":15,"./sidebar.html":16}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sidebarController = function () {
	// constructor is used for setting default variables
	function sidebarController($rootScope, $interval, $http) {
		_classCallCheck(this, sidebarController);

		var ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "You've Got Stew Mail";

		// Updateds number of unread emails
		ctrl.$rootScope.$watch('inbox', function () {
			ctrl.unread = "" + ctrl.$rootScope.inbox;
		});

		// ctrl.$rootScope.compose = false;

	} // constructor

	_createClass(sidebarController, [{
		key: "composeEmail",
		value: function composeEmail() {
			var ctrl = this;
			ctrl.compose = !ctrl.compose;
			ctrl.$rootScope.compose = true;
			// console.log(ctrl.$rootScope.compose);
		}
	}]);

	return sidebarController;
}();

;

exports.default = sidebarController;

},{}],16:[function(require,module,exports){
module.exports = "<div id=\"wrapper\">\n\n<div id=\"sidebar-wrapper\">\n    <nav class=\"sidebar sidebar-content\">\n        <div class=\"row\">\n       <div id=\"composeEmail\">\n            <button type=\"button\" class=\"btn center-block\" ng-click=\"$ctrl.composeEmail()\" ng-model='$ctrl.compose'>Compose</button>\n       </div>\n        <div class=\"list-group\">\n    \n            <a class=\"list-group-item\" ng-click=\"$ctrl.$rootScope.inboxClicked = true\">\n                <i class=\"glyphicon glyphicon-comment\"></i> Inbox <span class=\"badge\" ng-hide=\"$ctrl.unread=='undefined'\">{{$ctrl.unread}}</span>\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-send\"></i>  Outbox\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-send\"></i>  Sent\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-pencil\"></i>  Drafts\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-trash\"></i>  Trash\n            </a>\n            <a href=\"#\" class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-flag\"></i>  Junk <span class=\"badge\">99</span>\n            </a>\n            <a ng-click=\"$ctrl.$rootScope.filter = 'starred'\"class=\"list-group-item\">\n                <i class=\"glyphicon glyphicon-star\"></i>  Starred\n            </a>\n        </div>        \n    \n    </div>\n    </div>\n    </nav>\n</div>\n</div>\n";

},{}]},{},[4]);
