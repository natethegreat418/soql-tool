app.service('QueryHandler', ['$q','$http','$rootScope','RecordHandler', function($q,$http,$rootScope,RecordHandler) {

  var records = [];

  this.query = function(queryString) {
    $rootScope.pending = true;
    $rootScope.displayAlert = false;

    requestQuery(queryString)
      .then(success,fail)
      .finally(final);
  };

  var success = function(data) {
    if(Array.isArray(data)) {
      queryAlertHandler(data);
    } else {
      RecordHandler.process(records);
    }
  }

  var queryAlertHandler = function(data) {
    $rootScope.displayAlert = true;
    $rootScope.alertMessage = data[0].message.trim();
  }

  var fail = function(data, status) {
    console.log('Error ' + data.status + ':');
    console.log(data.data);
    console.log('Promise status: ' + status);
  }

  var final = function() {
    $rootScope.pending = false;
  }

  var requestQuery = function(queryString) {
    var defer = $q.defer();

    var data = $http.get('api/query/'+queryString)
      .success(function(data) {
        records = data.records;
        if(!data.hasOwnProperty('done')) defer.resolve(data);
        data = $q.when(data.done ? data : queryNextHandler(data));
        defer.resolve(data);
      })
      .error(function(data, status) {
        defer.reject({data:data,status:status});
      });

    return defer.promise;
  }

  var queryNextHandler = function(data) {
    var defer = $q.defer();

    var nextRecordsUrlEncoded = encodeURI(data.nextRecordsUrl).replace(/\//g, '_');
    $http.get('api/next/'+nextRecordsUrlEncoded)
      .success(function(data) {
        records = records.concat(data.records);
          defer.resolve(data);
      })
      .error(function(data, status) {
        defer.reject({data:data,status:status});
      });

    return defer.promise;
  };

}]);