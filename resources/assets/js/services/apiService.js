app.service('apiService', function ($http, $q) {

  this.get = function(route){

    var defer = $q.defer();

    $http.get(route).
      success(function(data, status, headers, config) {
        defer.resolve(data);
      }).
      error(function(data, status, headers, config) {
        defer.reject(status + data);
      });

    return defer.promise;

  };

});