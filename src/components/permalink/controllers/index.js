module.exports = function($scope,$location) {
    var location = $location.search();
    var absUrl = $location.absUrl();
    
    $scope.fullUrl = 'http://www.youtube.com/v/vRY9Ybi5zqI'
    
    $scope.page = {
        emoji: location.emoji || '🌝',
        quote: location.quote || 'Quote',
        bg: location.bg || 'https://s-media-cache-ak0.pinimg.com/736x/cc/d1/5d/ccd15de92b4755e52dd18736739a8e24.jpg',
        song: location.url || 'http://www.youtube.com/embed/oHg5SJYRHA0',
        url: absUrl
    }
}
