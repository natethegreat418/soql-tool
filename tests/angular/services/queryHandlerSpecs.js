describe('QueryHandler', function() {
  'use strict';

  var $httpBackend, $rootScope, QueryHandler;

  beforeEach(module('soquirrel'));

  beforeEach(inject(function(_$rootScope_, _$httpBackend_, _QueryHandler_) {
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    QueryHandler = _QueryHandler_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('query', function() {
    it('should query for salesforce records', function() {
      var response = {'records' : [{'FirstName':'Matthew','LastName':'Mitchener'},{'FirstName':'John','LastName':'Lenon'}]};
      $httpBackend.whenGET('api/query/test').respond(response);
      QueryHandler.query('test');
      expect($rootScope.status).toEqual('pending');
      $httpBackend.expectGET('api/query/test').respond(response);
      $httpBackend.flush();
      expect($rootScope.status).toEqual('complete');
      expect($rootScope.rows).toEqual([{'FirstName':'Matthew','LastName':'Mitchener'},{'FirstName':'John','LastName':'Lenon'}]);
      expect($rootScope.columns).toEqual(['FirstName','LastName']);
    });

    it('should should query for more records', function() {
      var initalResponse = {'records' : [{'FirstName':'Morty','LastName':'Smith'}], 'done':false, 'nextRecordsUrl' : 'giveMeMore'};
      var queryMoreResponse = {'records' : [{'FirstName':'Rick','LastName':'Sanchez'}]};
      $httpBackend.whenGET('api/query/test').respond(initalResponse);
      $httpBackend.whenGET('api/next/giveMeMore').respond(queryMoreResponse);
      QueryHandler.query('test');
      expect($rootScope.status).toEqual('pending');
      $httpBackend.expectGET('api/query/test').respond(initalResponse);
      $httpBackend.expectGET('api/next/giveMeMore').respond(queryMoreResponse);
      $httpBackend.flush();
      expect($rootScope.status).toEqual('complete');
      expect($rootScope.rows).toEqual([{'FirstName':'Morty','LastName':'Smith'},{'FirstName':'Rick','LastName':'Sanchez'}]);
      expect($rootScope.columns).toEqual(['FirstName','LastName']);
    });
  });

});