var app = angular.module('app-test', ['ngAnimate', 'ngTouch', 'ui.grid']);
 
app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.columns = [{ field: 'name' }, { field: 'gender' }];
  $scope.gridOptions = {
    enableSorting: true,
    columnDefs: $scope.columns,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };
  
  $scope.remove = function() {
    $scope.columns.splice($scope.columns.length-1, 1);
  }
  
  $scope.add = function() {
    $scope.columns.push({ field: 'company', enableSorting: false });
  }
 
  $scope.splice = function() {
    $scope.columns.splice(1, 0, { field: 'company', enableSorting: false });
  }
 
  $scope.unsplice = function() {
    $scope.columns.splice(1, 1);
  }
  
  $scope.toggleDisplayName = function() {
    if( $scope.columns[1].displayName === 'GENDER' ){
      $scope.columns[1].displayName = 'Gender';
    } else {
      $scope.columns[1].displayName = 'GENDER';
    }
    $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.COLUMN );
  }
  
  $scope.toggleVisible = function() {
    $scope.columns[0].visible = !($scope.columns[0].visible || $scope.columns[0].visible === undefined);
    $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
  }
 
  $http.get('http://ui-grid.info/data/100.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
}]);
var app = angular.module('soqlTool', ['ngTouch', 'ui.grid', 'lodash']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','$http','uiGridConstants', function($scope, $http, uiGridConstants)
{
  $scope.query = 'SELECT Id, Name, BillingCity FROM Account limit 10';
  $scope.hideGrid = true;

  $scope.gridOptions = {
    enableSorting: true,
    enableSorting: false,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.request = function(query)
  {
    $http.get('api/query/'+$scope.query)
      .success(function(data) {
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }
        $scope.gridOptions.data = data.records;

        if(data.records.length !== 0){
          $scope.columns = [];
          angular.forEach(data.records[0], function(value, key) {
            $scope.columns.push({field : key});
          });
          console.log($scope.columns);
          $scope.gridOptions.columnDefs = $scope.columns;
        }

    });

    // var promise = apiService.get('api/query/'+$scope.query);
    // promise.then(function(data){
    //   var data = data.data.records;
    //   for(i = 0; i < data.length; i++){
    //     delete data[i].attributes;
    //   }
    //   $scope.gridOptions.data = data;

    //   if(data.length !== 0){
    //     $scope.columns = [];
    //     angular.forEach(data[0], function(value, key) {
    //       $scope.columns.push({field : key});
    //     });
    //     $scope.gridOptions.columnDefs = $scope.columns;
    //   }
    // });
  };

}]);

var lodash = angular.module('lodash', []);
lodash.factory('_', function() {
  return window._;
});
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
