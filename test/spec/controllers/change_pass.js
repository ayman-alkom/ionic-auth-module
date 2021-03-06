'use strict';

describe('Controller: ChangePassCtrl', function () {

  // load the controller's module
  beforeEach(module('authApp'));

  var ChangePassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangePassCtrl = $controller('ChangePassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
