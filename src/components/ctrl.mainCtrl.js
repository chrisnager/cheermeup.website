module.exports = function($scope, TestFactory) {
    TestFactory.update("YOLO"); 
    $scope.message = TestFactory.get(); 
}
