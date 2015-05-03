module.exports = function($scope, Contents) {
    $scope.emojis = Contents.getEmojis();
    $scope.backgrounds = Contents.getBackgrounds();
    $scope.quotes = Contents.getQuotes();
}
