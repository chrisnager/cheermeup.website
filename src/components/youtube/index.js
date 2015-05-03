module.exports = function() {
  return {
    restrict: 'E',
    replace: true,
    scope: { 
        url:'@' 
    },
    template: '<div style="width:1px;height:1px"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>'
  };
}
