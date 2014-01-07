'use strict';

angular.module('angularMusicToolApp')
  .controller('RootCtrl', function ($scope) {
    
    $scope.root = 'C';

    $scope.notesCollection = [
      'C',
      'D',
      'E',
      'F',
      'G',
      'A',
      'B'
    ];
  });
