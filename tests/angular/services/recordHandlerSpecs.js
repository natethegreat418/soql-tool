describe('RecordHandler', function() {
  'use strict';

  var $rootScope, RecordHandler;

  beforeEach(module('soqool'));

  beforeEach(inject(function(_$rootScope_, _$httpBackend_, _RecordHandler_) {
    $rootScope = _$rootScope_;
    RecordHandler = _RecordHandler_;
  }));

  var records = [
    {
      "FirstName": "Matthew",
      "LastName": "Mitchener",
      "Pets": {
        "records" : [
          {
            "Name" : "Fred",
            "Species": "Gerbil",
            "attributes": {}
          },
          {
            "Name" : "Burt",
            "Species": "Goldfish",
            "attributes": {}
          },
        ]
      },
      "attributes": {}
    },
    {
      "FirstName": "John",
      "LastName": "Lenon",
      "Pets": {
        "records" : [
          {
            "Name": "Yoko",
            "Species": "Parasite",
            "attributes": {}
          }
        ]
      },
      "attributes": {}
    }
  ];

  describe('process', function() {
    it('should remove attributes from records', function() {
      RecordHandler.process(records);
      angular.forEach($rootScope.result.records, function(key, value) {
        expect(value.attributes).toBeUndefined();
        if(value.records === undefined) return;
        angular.forEach(value.records, function(key, value) {
          expect(value.attributes).toBeUndefined();
        });
      });
    });
  });

});