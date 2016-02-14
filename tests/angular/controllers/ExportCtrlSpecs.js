describe('ExportCtrl', function() {
  'use strict';

  var $scope, $controller, $rootScope, ExportCtrl;

  beforeEach(module('soquirrel'));

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $rootScope.columns = ['first','last'];
    $rootScope.rows = [{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}];
    $rootScope.filtered = [{'first':'Morty','last':'Smith'}];
  }));

  describe('exporter', function() {
    beforeEach(inject(function($injector) {
      $scope = {};
      ExportCtrl = $controller('ExportCtrl', {'$scope' : $scope});
    }));

    it('should have a ExportCtrl controller', function() {
      expect(ExportCtrl).toBeDefined();
    });
    
    it('should get rows', function() {
      expect($scope.getRows()).toEqual([{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}]);
    });

    it('should should get columns', function() {
      expect($scope.getHeaders()).toEqual(['first','last']);
    });
  });

});