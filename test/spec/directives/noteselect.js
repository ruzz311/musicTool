'use strict';

describe('Directive: noteSelect', function () {

  // load the directive's module
  beforeEach(module('angularMusicToolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<note-selector></note-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the noteSelect directive');
  }));
});
