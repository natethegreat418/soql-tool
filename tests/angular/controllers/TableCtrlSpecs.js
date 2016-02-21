describe('TableCtrl', function() {
  'use strict';

  var $scope, $rootScope, $controller, $filter, TableCtrl;

  beforeEach(module('soqool'));

  beforeEach(inject(function(_$controller_, _$rootScope_, _$filter_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $filter = _$filter_;
    $rootScope.result = {
      columns: ['first','last'],
      records: [{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}]
    };
    $rootScope.filtered = [{'first':'Morty','last':'Smith'}];
  }));

  describe('table', function() {

    beforeEach(inject(function($injector) {
      $scope = {};
      TableCtrl = $controller('TableCtrl', {'$scope' : $scope});
    }));

    it('should have a TableCtrl controller', function() {
      expect(TableCtrl).toBeDefined();
    });

    it('should sort rows by last name', function() {
      $scope.sortReverse = true;
      $scope.order('last');
      expect($rootScope.result.records[0].last).toBe('Sanchez');
    });

    it('should render caret down', function() {
      $scope.sortType = 'first';
      $scope.renderUpCaret('first');
      expect($scope.sortReverse).toBeFalsy();
    });

    it('should render caret up', function() {
      $scope.order('first');
      $scope.renderDownCaret('first');
      expect($scope.sortReverse).toBeTruthy();
    });
  });

});