module.exports = function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('index', {
          url: "/home",
          templateUrl: "components/view.index.html",
          controller: 'TestController'
    });
}
