app.service('RecordHandler', ['$rootScope', function($rootScope) {
  this.process = function(records) {
    if(records.length === 0) return;
    $rootScope.result.records = stripAttributes(records);
    $rootScope.result.columns = setColumns(records[0]);
    console.log($rootScope.result);
  }

  var stripAttributes = function(records) {
    for(var i = 0, len = records.length; i < len; i++){
      if(records[i] === null) continue; 
      delete records[i].attributes;
      angular.forEach(records[i], function(value, key) {
        if(value === null) return;
        if(value.records === undefined) return;
        handleOuterJoin(records[i], key, value);
      });
    }
    return records;
  }

  var setColumns = function(record) {
    var columns = [];
    angular.forEach(record, function(value, key) {
      columns.push(key);
    });

    return columns;
  }

  var handleOuterJoin = function(record, leftJoinName, leftJoinObject) {
    record.$$leftJoin = {
      "name":leftJoinName,
      "render":false
    }
    leftJoinObject.records = stripAttributes(leftJoinObject.records);
    leftJoinObject.columns = setColumns(leftJoinObject.records[0]);
  }

}]);