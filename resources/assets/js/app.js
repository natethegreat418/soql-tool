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
          $scope.gridOptions.columns = $scope.columns;
        }

    });

    // var promise = apiService.get('api/query/'+$scope.query);
    // promise.then(function(data){});
  };

  $scope.refreshCols = function()
  {
    $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
  }

  $scope.removeCol = function()
  {
    $scope.columns.splice(0, 1);
    console.log($scope.columns);
  }


}]);