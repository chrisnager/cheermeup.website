module.exports = function($scope, Contents, $state ) {
    $scope.message = 'THIS IS THE WIZARD';
    $scope.wizardSection = 0;
    $scope.progress = 0;
    
    $scope.selections = {
        background: null,
        song: null,
        emoji: null,
        quote: null
    };

    $scope.updateProgress = function(direction) {
        var stepLen = (Object.keys($scope.selections).length / 4) * .25;
        if(direction === 'next') {
            $scope.progress = $scope.progress + stepLen
        } else {
            $scope.progress = $scope.pregress - stepLen
        }
    }

    $scope.data = Contents.get();

    Contents.get().backgrounds.then(function(res){
        $scope.data.backgrounds = res.data
    })
    $scope.sectionChange = function(direction) {
        if(direction==='next') {
            $scope.wizardSection++;
            $scope.updateProgress(direction);
        } else
        if (direction==='previous') {
            $scope.wizardSection--;
            $scope.updateProgress(direction);
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
