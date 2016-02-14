describe('QueryCtrl', function() {
  'use strict';

  var $httpBackend, $scope, $rootScope, $controller, QueryCtrl, QueryHandler;

  beforeEach(module('soquirrel'));

  beforeEach(angular.mock.module({
    'QueryHandler': { 
      query: function(queryString) { 
        //got a little frustrated
        $rootScope.columns = 'deez columns nutz';
        $rootScope.rows = 'deez rows nutz';
      }
    }
  }));

  beforeEach(inject(function(_$controller_, _$rootScope_, _QueryHandler_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    QueryHandler = _QueryHandler_;
  }));

  describe('query', function() {

    beforeEach(inject(function($injector) {
      $scope = {};
      $scope.querySting = 'SELECT FirstName, LastName FROM Contact WHERE IsAwesome = true';
      QueryCtrl = $controller('QueryCtrl', {'$scope' : $scope, '$rootScope' : $rootScope, 'QueryHandler': QueryHandler});
    }));

    it('should have a QueryCtrl controller', function() {
      expect(QueryCtrl).toBeDefined();
    });
    
    it('should query for salesforce records', function() {
      $scope.query();
      expect($rootScope.rows).toEqual('deez rows nutz');
      expect($rootScope.columns).toEqual('deez columns nutz');
    });
  });

});