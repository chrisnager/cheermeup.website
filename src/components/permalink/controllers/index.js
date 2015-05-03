module.exports = function($scope,$location) {
    console.log($location.search());    

    var location = $location.search();

    $scope.page = {
        emoji: location.emoji || 'emoji, &#x1F1E8;&#x1F1F3;',
        quote: location.quote || 'Quote',
        bg: location.bg || 'https://s-media-cache-ak0.pinimg.com/736x/cc/d1/5d/ccd15de92b4755e52dd18736739a8e24.jpg'
    }
}
