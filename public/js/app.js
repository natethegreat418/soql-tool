var app = angular.module('soqlTool', []);

var queryCtrl = app.controller('QueryCtrl', ['$scope','apiService',function($scope,apiService){

  $scope.result = {};
  $scope.query = 'select id from account';

  $scope.request = function(query){
    console.log(query);
    result = apiService.get('api/query/'+query);
    columns = getColumns(result);
    $scope.result = {rows: result, cols: Object.keys(result.$$state.status)};
    // $scope.result = {rows: result, cols: Object.$$state.value.records[0].keys(result)};
    // $scope.result = {rows: result, cols: Object.keys(result.$$state.value.records[0])};

    console.log($scope.result);
  };

}]);

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
//# sourceMappingURL=app.js.map
