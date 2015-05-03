module.exports = function($urlRouterProvider, $stateProvider, $sceDelegateProvider) {
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://player.vimeo.com/**',
        'http://www.youtube.com/embed/**'
    ]);
    
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
        })
        .state('data', {
            url: '/data',
            templateUrl: 'components/dataTest/html/index.html',
            controller: 'dataTestCtrl'
        });

}
