app.service('QueryHandler', ['$http','$rootScope','RecordHandler', function($http,$rootScope,RecordHandler) {

  var records = [];

  this.query = function(queryString) {
    $rootScope.status = 'pending';
    $rootScope.pending = true;
    $http.get('api/query/'+queryString)
      .success(function(data) {
        $rootScope.displayAlert = false;
        if(Array.isArray(data)) {
          $rootScope.displayAlert = true;
          $rootScope.alertMessage = data[0].message.trim();
          $rootScope.pending = false;
          return;
        }
        if(data.records === undefined){
          $rootScope.pending = false;
          return;
        }
        records = data.records;
        queryNextHandler(data);
        RecordHandler.process(records);
        $rootScope.pending = false;
      })
      .error(function(data) {
        console.log('Error:');
        console.log(data);
        $rootScope.pending = false;
      });
  };

  var queryMore = function(nextRecordsUrl) {
    $http.get('api/next/'+nextRecordsUrl)
      .success(function(data) {
        records = records.concat(data.records);
        queryNextHandler(data);
    });
  };

  var queryNextHandler = function(data) {
    if(data.done === true) return;
    var nextRecordsUrlEncoded = encodeURI(data.nextRecordsUrl).replace(/\//g, '_');
    queryMore(nextRecordsUrlEncoded);
  };

}]);