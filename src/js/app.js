'use strict';

require('angular');
require('angular-ui-router');

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider", require('./routes') ])
.controller('indexCtrl', [ '$scope', 'Contents', require('./../components/index/controllers/') ])
.controller('wizardCtrl', [ '$scope', require('./../components/wizard/controllers/') ])
.controller('permalinkCtrl', [ '$scope', '$location', require('./../components/permalink/controllers/') ])
.controller('dataTestCtrl', [ '$scope', 'Contents', require('./../components/dataTest/controllers/') ])
.service('Contents', [ require('./../components/Contents') ])

// Light the fires and kick the tires 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});
