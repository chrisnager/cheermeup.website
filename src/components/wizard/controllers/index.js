module.exports = function($scope, Contents) {
    $scope.message = 'THIS IS THE WIZARD';
    $scope.wizardSection = 0;
    $scope.selections = [];
    
    $scope.data = Contents.get();
    
    $scope.sectionChange = function(direction) {
        if(direction==='next') {
            $scope.wizardSection++;
        } else
        if (direction==='previous') {
            $scope.wizardSection--;
        }
    }
    
    $scope.choose = function(index, section, selection) {
        $scope.selections[section] = { 
            id: index,
            content: selection,
        };
    }
    
}
