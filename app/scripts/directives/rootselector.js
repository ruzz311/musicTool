'use strict';

angular.module('angularMusicToolApp')
  .directive('rootSelector', function ($log) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        $log.log('fuck', scope, element, attrs);
        element.text('this is the rootSelector directive');
      }
    };
  });
