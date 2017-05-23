angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonService){
    $scope.test=lessonService.test
    $scope.lessons= ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']
   
})