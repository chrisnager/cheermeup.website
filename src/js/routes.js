module.exports = function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'components/index/html/index.html',
            controller: 'indexCtrl'
        })
        .state('wizard', {
            url: '/wizard',
            templateUrl: 'components/wizard/html/index.html',
            controller: 'wizardCtrl'
        })
        .state('permalink', {
            url: '/permalink',
            templateUrl: 'components/permalink/html/index.html',
            controller: 'permalinkCtrl'
        });
}
