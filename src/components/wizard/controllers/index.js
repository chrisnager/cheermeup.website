module.exports = function($scope, Contents, $state ) {
    $scope.message = 'THIS IS THE WIZARD';
    $scope.wizardSection = 0;
    
    $scope.selections = {
        background: null,
        song: null,
        emoji: null,
        quote: null
    };
    
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
        
        var item = {
            id: index,
            content: selection
        }

        $scope.selections[section] = item

        
    }
}
