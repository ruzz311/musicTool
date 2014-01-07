'use strict';

describe('Directive: rootSelector', function () {

  // load the directive's module
  beforeEach(module('angularMusicToolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<root-selector></root-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rootSelector directive');
  }));
});
