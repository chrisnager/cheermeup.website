'use strict';

require('angular');
require('angular-ui-router');

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider", require('./routes') ])

.factory('TestFactory', [ require('./../components/factory.TestFactory.js') ])
.controller('TestController', [ '$scope', 'TestFactory', require('./../components/ctrl.mainCtrl.js') ])

// Fire it up 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});
