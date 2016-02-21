describe('QueryHandler', function() {
  'use strict';

  var $httpBackend, $rootScope, QueryHandler, RecordHandler;

  beforeEach(module('soqool'));

  beforeEach(angular.mock.module({
    'RecordHandler': { 
      process: function(queryString) { 
        $rootScope.rows = 'success';
        $rootScope.columns = 'success';
      }
    }
  }));

  beforeEach(inject(function(_$rootScope_, _$httpBackend_, _RecordHandler_, _QueryHandler_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    RecordHandler = _RecordHandler_;
    QueryHandler = _QueryHandler_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('query', function() {
    it('should query for salesforce records', function() {
      var response = {'records' : [{'FirstName':'Matthew','LastName':'Mitchener'},{'FirstName':'John','LastName':'Lenon'}], 'done':true};
      $httpBackend.whenGET('api/query/test').respond(response);
      QueryHandler.query('test');
      expect($rootScope.pending).toBeTruthy();
      $httpBackend.expectGET('api/query/test').respond(response);
      $httpBackend.flush();
      expect($rootScope.pending).toBeFalsy();
      expect($rootScope.rows).toEqual('success');
      expect($rootScope.columns).toEqual('success');
    });

    it('should should query for more records', function() {
      var initalResponse = {'records' : [{'FirstName':'Morty','LastName':'Smith'}], 'done':false, 'nextRecordsUrl' : 'giveMeMore'};
      var queryMoreResponse = {'records' : [{'FirstName':'Rick','LastName':'Sanchez'}], 'done':true};

      $httpBackend.whenGET('api/query/test').respond(initalResponse);
      $httpBackend.whenGET('api/next/giveMeMore').respond(queryMoreResponse);
      QueryHandler.query('test');

      expect($rootScope.pending).toBeTruthy();
      $httpBackend.expectGET('api/query/test').respond(initalResponse);
      $httpBackend.expectGET('api/next/giveMeMore').respond(queryMoreResponse);
      $httpBackend.flush();
      expect($rootScope.pending).toBeFalsy();
      expect($rootScope.rows).toEqual('success');
      expect($rootScope.columns).toEqual('success');
    });
  });

});