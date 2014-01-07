'use strict';

angular.module('angularMusicToolApp')
  .directive('rootSelector', function ($log) {
    return {
      template: '<input type="range" name="points" min="1" max="7" ng-model="noteValue" value="{{noteVals[rootNote]}}" />',
      restrict: 'E,A,M',
      scope : {
        rootNote: '='
      },
      link: function postLink($scope, element, attrs) {
        $log.log('yay', $scope, element, attrs);

        $scope.noteVals = {
          'C': 1,
          'D': 2,
          'E': 3,
          'F': 4,
          'G': 5,
          'A': 6,
          'B': 7
        };

        //element[0].value = $scope.noteVals[$scope.rootNote];
        $scope.noteValue = $scope.noteVals[$scope.rootNote];

        $scope.$watch('noteValue', function(oldval, newval){
          $log.log("WOH", oldval, newval);
        });

        $scope.doSomething = function () {
          $log.info('do something!');
        };

        //element.text('this is the rootSelector directive');
      }
    };
  });
