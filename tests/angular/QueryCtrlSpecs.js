describe('QueryCtrl', function() {
  'use strict';

  var $http, $httpBackend, $scope, $controller, QueryCtrl;

  beforeEach(module('soquirrel'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('query', function() {
    //inject my services and create my controller
    beforeEach(inject(function($injector) {
      // Set up the mock http service responses
      $httpBackend = $injector.get('$httpBackend');
      $scope = {};
      QueryCtrl = $controller('QueryCtrl', {'$scope' : $scope});

    }));

    it('should have a QueryCtrl controller', function() {
      expect(QueryCtrl).toBeDefined();
    });
    
    it('should query for salesforce records', function() {
      var response = {'records' : [{'name':'Matthew','city':'Boston'},{'name':'John','city':'Concord'}]};
      $httpBackend.whenGET('api/query/'+$scope.queryString).respond(response);
      $scope.querySting = 'SELECT Id FROM Account';
      $scope.query();
      expect($scope.status).toEqual('pending');
      $httpBackend.expectGET('api/query/'+$scope.queryString).respond(response);
      $httpBackend.flush();
      expect($scope.status).toEqual('complete');
      expect($scope.rows).toEqual([{'name':'Matthew','city':'Boston'},{'name':'John','city':'Concord'}]);
      expect($scope.columns).toEqual(['name','city']);
    });

    it('should should query for more records', function() {
      var initalResponse = {'records' : [{'first':'Morty','last':'Smith'}], 'done':false, 'nextRecordsUrl' : 'giveMeMore'};
      var queryMoreResponse = {'records' : [{'first':'Rick','last':'Sanchez'}]};
      $httpBackend.whenGET('api/query/'+$scope.queryString).respond(initalResponse);
      $httpBackend.whenGET('api/next/giveMeMore').respond(queryMoreResponse);
      $scope.querySting = 'SELECT Id FROM Account';
      $scope.query();
      expect($scope.status).toEqual('pending');
      $httpBackend.expectGET('api/query/'+$scope.queryString).respond(initalResponse);
      $httpBackend.expectGET('api/next/giveMeMore').respond(queryMoreResponse);
      $httpBackend.flush();
      expect($scope.status).toEqual('complete');
      expect($scope.rows).toEqual([{'first':'Morty','last':'Smith'},{'first':'Rick','last':'Sanchez'}]);
      expect($scope.columns).toEqual(['first','last']);

      // var prettier = angular.mock.dump($scope);
      // console.log(prettier);
    });
  });

});