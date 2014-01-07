'use strict';

angular.module('angularMusicToolApp')
  .controller('RootCtrl', function ($scope) {
    
    $scope.root = 'C';

    $scope.noteMap = {
      'C': 1,
      'D': 2,
      'E': 3,
      'F': 4,
      'G': 5,
      'A': 6,
      'B': 7
    };
  });
