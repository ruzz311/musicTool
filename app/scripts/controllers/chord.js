'use strict';

angular.module('angularMusicToolApp')
  .controller('ChordCtrl', function ($scope, $window, $log) {
    
    $scope.root = 'C3';
    $scope.rootNote = $window.teoria.note('C3');

  });
