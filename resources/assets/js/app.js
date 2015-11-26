var app = angular.module('soqlTool', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid', 'lodash']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','$http','uiGridConstants', function($scope, $http, uiGridConstants)
{
  $scope.query = 'SELECT Id, Name, BillingCity FROM Account limit 10';
  $scope.hideGrid = true;
  $scope.fileName = 'query';

  $scope.gridOptions = {
    enableSorting: true,
    enableGridMenu: true,
    exporterMenuCsv: false,
    exporterMenuPdf: false,
    exporterCsvFilename: $scope.fileName+'.csv',
    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.request = function(query)
  {
    $http.get('api/query/'+$scope.query)
    // $http.get('api/testData')
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
          $scope.gridOptions.columnDefs = $scope.columns;
        }
        $scope.hideGrid = false;
    });
  };

  $scope.export = function(){
    $scope.gridApi.exporter.csvExport('all', 'all');
  };

  var renderQueryObj = function(){
    console.log($scope.queryObject);
    $scope.query = $scope.queryObject.type;
    $scope.query += " ";
    for(i = 0; i < $scope.queryObject.fields.length; i++){
      if(i === $scope.queryObject.fields.length - 1){
        $scope.query += $scope.queryObject.fields[i];
      } else {
        $scope.query += $scope.queryObject.fields[i];
        $scope.query += ", ";
      }
    }
    $scope.query += "\nFROM ";
    $scope.query += $scope.queryObject.sobject;
    if($scope.queryObject.filters.length > 0){
      for(i = 0; i < $scope.queryObject.filters.length; i++){
        if(i === 0){
          $scope.query += "\nWHERE ";
        } else {
          $scope.query += "\n\tAND ";
        }
        $scope.query += $scope.queryObject.filters[i].field;
        $scope.query += " ";
        $scope.query += $scope.queryObject.filters[i].operator;
        $scope.query += " \'";
        $scope.query += $scope.queryObject.filters[i].value;
        $scope.query += "\'";
      }
    }
  };

}]);