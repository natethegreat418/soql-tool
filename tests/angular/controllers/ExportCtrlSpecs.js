describe('ExportCtrl', function() {
  'use strict';

  var $scope, $controller, ExportCtrl;

  beforeEach(module('soquirrel'));

  beforeEach(angular.mock.module({
    'SalesforceData': function() {
      return {
        Columns: ['first','last'],
        Rows: [{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}],
        Filtered: [{'first':'Morty','last':'Smith'}]
      };
    }
  }));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
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
      expect($scope.getRows()).toEqual(['first','last']);
      var prettier = angular.mock.dump($scope);
      console.log(prettier);
    });

    it('should should get columns', function() {
      expect($scope.getHeaders()).toEqual([{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}]);
    });
  });

});