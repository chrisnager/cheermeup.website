module.exports = function($scope) {
    $scope.message = 'THIS IS THE WIZARD';
    $scope.wizardSection = 0;
    $scope.selections = [{selectionNumber:null},{selectionNumber:null},{selectionNumber:null},{selectionNumber:null}];
    
    $scope.backgrounds = [
    {
        id:0,
        url:'http://ak-hdl.buzzfed.com/static/2014-12/24/13/enhanced/webdr06/anigif_enhanced-buzz-22472-1419446000-10.gif'
        },
    {
        id:1,
        url:'http://stylesaveus.com/wp-content/uploads/2013/10/Style-Save-Us-National-Cat-Day-Uber-ASPCA.jpg'
        },
    {
        id:2,
        url:'http://nmah.com/files/2015/01/kittens.jpg'
        }
    ];
    
    $scope.emojis = [
    {
        id:0,
        text:'😀'
        },
    {
        id:1,
        text:'😁'
        },
    {
        id:2,
        text:'😂'
        }
    ];
    
    $scope.songs = [
    {
        id:0,
        name: 'Gin and Juice',
        url:'https://www.youtube.com/watch?v=0Cxr1-b6Xkc'
        },
    {
        id:1,
        name: 'Starships',
        url:'https://www.youtube.com/watch?v=SeIJmciN8mo'
        },
    {
        id:2,
        name: 'My Side',
        url:'https://www.youtube.com/watch?v=ndqJCDYHplo'
        }
    ];
    
    $scope.quotes = [
    {
        id:0,
        text:'What up bro?'
        },
    {
        id:1,
        text:'Aw hell yeah pimp'
        },
    {
        id:2,
        text:'You\'re the man now dog'
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
