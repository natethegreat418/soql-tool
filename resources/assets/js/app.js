var app = angular.module('soqlTool', ['ngTouch', 'ui.grid', 'lodash']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','$http','uiGridConstants', function($scope, $http, uiGridConstants)
{
  $scope.query = 'SELECT Id, Name, BillingCity FROM Account limit 10';
  $scope.hideGrid = true;

  $scope.gridOptions = {
    enableSorting: true,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.gridOptions = {
    enableGridMenu: true,
    enableSelectAll: true,
    exporterCsvFilename: 'query.csv',
    exporterPdfDefaultStyle: {fontSize: 9},
    exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
    exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
    exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
    exporterPdfFooter: function ( currentPage, pageCount ) {
      return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    },
    exporterPdfCustomFormatter: function ( docDefinition ) {
      docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
      docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
      return docDefinition;
    },
    exporterPdfOrientation: 'portrait',
    exporterPdfPageSize: 'LETTER',
    exporterPdfMaxGridWidth: 500,
    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi){
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

}]);