describe('FilterCtrl', function() {
  'use strict';

  var $rootScope, $controller, FilterCtrl;

  beforeEach(module('soquirrel'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $rootScope.columns = ['first','last'];
    $rootScope.rows = [{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}];
    $rootScope.filtered = [{'first':'Morty','last':'Smith'}];
  }));

  describe('filter', function() {

    beforeEach(inject(function($injector) {
      FilterCtrl = $controller('FilterCtrl');
    }));

    it('should have a FilterCtrl controller', function() {
      expect(FilterCtrl).toBeDefined();
    });

  });

});