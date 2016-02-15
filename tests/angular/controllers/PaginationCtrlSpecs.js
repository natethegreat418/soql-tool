describe('PaginationCtrl', function() {
  'use strict';

  var $scope, $rootScope, $controller, PaginationCtrl;

  beforeEach(module('soqool'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $rootScope.columns = ['first','last'];
    $rootScope.rows = [{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}];
    $rootScope.filtered = [{'first':'Morty','last':'Smith'}];
  }));

  describe('pagination', function() {

    beforeEach(inject(function($injector) {
      $scope = {};
      PaginationCtrl = $controller('PaginationCtrl', {'$scope' : $scope});
    }));

    it('should have a PaginationCtrl controller', function() {
      expect(PaginationCtrl).toBeDefined();
    });

    it('should have correct options for pagination', function() {
      expect($scope.pageSizeOptions[0]).toBe(25);
      expect($scope.pageSizeOptions.length).toBe(4);
    })
    
  });

});