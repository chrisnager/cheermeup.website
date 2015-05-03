module.exports = function($scope,$location) {
    var location = $location.search();
    var absUrl = $location.absUrl();

    $scope.page = {
        emoji: location.emoji || '🌝',
        quote: location.quote || 'Quote',
        bg: location.bg || 'https://s-media-cache-ak0.pinimg.com/736x/cc/d1/5d/ccd15de92b4755e52dd18736739a8e24.jpg',
<<<<<<< HEAD
        song: location.song || 'http://www.youtube.com/v/vRY9Ybi5zqI'
=======
        url: absUrl
>>>>>>> 063588b2a3e9e68844c8bc417c45b1038945ef49
    }
}
