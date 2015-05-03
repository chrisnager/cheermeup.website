module.exports = function($scope) {
    $scope.message = 'THIS IS THE WIZARD';
    $scope.wizardSection = 0;
    $scope.selections = [{selectionNumber:null},{selectionNumber:null},{selectionNumber:null}];
    
    $scope.backgrounds = [
    {
        backgroundNumber:0,
        backgroundUrl:'http://ak-hdl.buzzfed.com/static/2014-12/24/13/enhanced/webdr06/anigif_enhanced-buzz-22472-1419446000-10.gif'
        },
    {
        backgroundNumber:1,
        backgroundUrl:'http://stylesaveus.com/wp-content/uploads/2013/10/Style-Save-Us-National-Cat-Day-Uber-ASPCA.jpg'
        },
    {
        backgroundNumber:2,
        backgroundUrl:'http://nmah.com/files/2015/01/kittens.jpg'
        }
    ];
    
    $scope.sectionChange = function(direction) {
        if(direction==='next') {
            $scope.wizardSection++;
        } else
        if (direction==='previous') {
            $scope.wizardSection--;
        }
    }
    
    $scope.choose = function(section, number) {
        $scope.selections[section].selectionNumber = number;
    }
}
