'use strict';

require('angular');
require('angular-ui-router');

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider","$sceDelegateProvider", require('./routes') ])
.controller('indexCtrl', [ '$scope', 'Contents', require('./../components/index/controllers/') ])
.controller('wizardCtrl', [ '$scope', 'Contents', '$state', require('./../components/wizard/controllers/') ])
.controller('permalinkCtrl', [ '$scope', '$location', require('./../components/permalink/controllers/') ])
.controller('dataTestCtrl', [ '$scope', 'Contents', require('./../components/dataTest/controllers/') ])
.service('Contents', [ require('./../components/Contents') ])

.directive('myYoutube', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: { url:'@' },
    template: '<div style="width:1px;height:1px"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
  };
});

// Light the fires and kick the tires 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});