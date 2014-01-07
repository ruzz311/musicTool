'use strict';

angular.module('angularMusicToolApp')
  .controller('SidebarCtrl', function ($scope, $location, $log) {
    $scope.isActive = function (viewLocation) {
      $log.log('SidebarCtrl::$scope.isActive', viewLocation, viewLocation === $location.path());
      return viewLocation === $location.path();
    };
  });