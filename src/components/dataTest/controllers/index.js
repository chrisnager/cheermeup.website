module.exports = function($scope, Contents) {
    $scope.data = Contents.get();
    console.log($scope.data);
}
