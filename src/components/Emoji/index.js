'use strict';

require('twemoji');

angular.module('sc.twemoji', [])
  .provider('twemoji', function () {
    var self = this;

    var findToParse = function (toParse) {
      if (angular.isElement(toParse)) {
        return toParse[0];
      }

      return toParse;
    };

    self.setOptions = function (opts) {
      ext: '.svg'
    };

    self.$get = ['$window', function ($window) {

      return function parse(toParse) {
        return $window.twemoji.parse(findToParse(toParse), 
        {
            ext: '.svg'
        }
        );
      };
    }];
  })
  .directive('twemoji', ['twemoji', function (twemoji) {
    return {
      restrict: 'EA',
      replace: true,
      link: function (scope, elem) {
        twemoji(elem);
      }
    };
  }])
  .filter('twemoji', ['twemoji', function (twemoji) {
    return function (toParse) {
      return twemoji(toParse);
    };
  }])

