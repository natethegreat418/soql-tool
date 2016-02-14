app.service('QueryHandler', ['$http','$rootScope', function($http,$rootScope) {

  this.query = function(queryString) {
    $rootScope.status = 'pending';
    $http.get('api/query/'+queryString)
    // $http.get('api/testData')
      .success(function(data) {
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }

        if(data.records.length !== 0){
          $rootScope.columns = [];
          angular.forEach(data.records[0], function(value, key) {
            $rootScope.columns.push(key);
          });
        }
        
        $rootScope.rows = data.records;
        queryNextHandler(data);
        $rootScope.status = 'complete';
    });
  };

  var queryMore = function(nextRecordsUrl) {
    $http.get('api/next/'+nextRecordsUrl)
      .success(function(data) {
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }

        $rootScope.rows = $rootScope.rows.concat(data.records);
        queryNextHandler(data);
    });
  };

  var queryNextHandler = function(data) {
    if(data.done === false) {
      var nextRecordsUrlEncoded = encodeURI(data.nextRecordsUrl)
        .replace(/\//g, '_');
      queryMore(nextRecordsUrlEncoded);
    }
  };

}]);