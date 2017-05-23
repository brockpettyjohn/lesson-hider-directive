angular.module('directivePractice')
.directive('lessonHider', function(){
    return{
        templateUrl:'lessonHider.html',
        scope: {
            lesson: '='
        },
        link:function(scope, element, attributes){
            
        }

    }
});