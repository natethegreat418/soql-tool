var app = angular.module('soqlTool', ['ui.grid','lodash']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','apiService','uiGridConstants',function($scope,apiService,uiGridConstants)
{
  $scope.columns = [{ field: 'Id' }, { field: 'Name' }];
  $scope.data = [];
  $scope.query = 'SELECT Id, Name, BillingCity FROM Account limit 10';
  $scope.hideGrid = true;

  $scope.gridOptions = {
    data: 'data',
    // columnDefs: $scope.columns,
    enableSorting: false,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.request = function(query)
  {
    $scope.hideGrid = false;
    var promise = apiService.get('api/query/'+$scope.query);
    promise.then(function(data)
    {
      for(i = 0; i < data.records.length; i++){
        delete data.records[i].attributes;
      }

      if(data.records.length !== 0){
        var newCols = [];
        angular.forEach(data.records[0], function(value, key) {
          // newCols.push({field : key});
          // $scope.gridApi.core.remov({name:key});
        });
        // $scope.columns = newCols;
        console.log($scope.columns);
      }

      $scope.gridOptions.data.concat(data.records);

      $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);

      // console.log(uiGridConstants.dataChange.COLUMN);

      // ui.grid.core.queueGridRefresh();

      console.log(data.records);
    });

  };


}]);