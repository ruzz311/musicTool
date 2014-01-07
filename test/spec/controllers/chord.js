'use strict';

describe('Controller: ChordCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMusicToolApp'));

  var ChordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChordCtrl = $controller('ChordCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
