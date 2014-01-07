'use strict';

angular.module('angularMusicToolApp')
  .directive('noteSelect', function ($log) {
    return {
      template: '<input class="notePicker" type="range" name="points" min="1" max="7" ng-model="noteValue" value="{{noteValue}}" />',
      restrict: 'E,A,M',
      link: function postLink($scope, element, attrs) {
        // init the note value
        $scope.noteValue = $scope.noteMap[$scope.root];

        // find the note name from the map and set root if changed
        $scope.$watch('noteValue', function (newval, oldval) {
          newval = Number(newval);
          oldval = Number(oldval);
          if (newval === oldval) { return false; }
          for (var n in $scope.noteMap) {
            if ($scope.noteMap[n] === newval) {
              $scope.root = n;
              break;
            }
          }
        });
      }
    };
  });
