angular.module('directivePractice')
.service('lessonService', function($http){
    this.test = "works"
    this.getSchedule = function(){
        return $http.get('schedule.json')
    }
})