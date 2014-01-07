'use strict';

angular.module('angularMusicToolApp')
  .controller('RootCtrl', function ($scope) {
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
