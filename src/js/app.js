'use strict';

require('angular');
require('angular-ui-router');
require('./../components/Emoji');

angular.module('app', [
    'ui.router',
    'sc.twemoji'
])

.config(["$urlRouterProvider", "$stateProvider", require('./routes') ])
.controller('indexCtrl', [ '$scope', require('./../components/index/controllers/') ])
.controller('wizardCtrl', [ '$scope', require('./../components/wizard/controllers/') ])
.controller('permalinkCtrl', [ '$scope', '$location', require('./../components/permalink/controllers/') ])

// Light the fires and kick the tires 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});
