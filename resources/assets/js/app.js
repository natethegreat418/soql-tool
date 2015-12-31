var app = angular.module('soqlTool', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngCsv']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','$http', '$filter', function($scope, $http, $filter) {
  $scope.query = 'SELECT Id, Name, BillingCity FROM Account limit 10';
  $scope.fileName = '';

  $scope.columns = [];
  $scope.rows = [];

  $scope.sortType = '';
  $scope.sortReverse = false;

  $scope.request = function(query) {
    $http.get('api/query/'+$scope.query)
    // $http.get('api/testData')
      .success(function(data) {
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }
        $scope.rows = data.records;

        if(data.records.length !== 0){
          $scope.columns = [];
          angular.forEach(data.records[0], function(value, key) {
            $scope.columns.push(key);
          });
        }
    });
  };

  $scope.getExportData = function() {
    var rows = [];
    // rows[0] = $scope.columns;

    for (var i = 0, len = $scope.rows.length; i < len; i++) {
      if(i ==0)
      angular.forEach(rows, function(value, key) {
        rows
      });
    }


    return rows;
  };

  $scope.getHeader = function() {
    return $scope.columns;
  }

  $scope.order = function(sortType) {
    $scope.sortType = sortType;
    $scope.sortReverse = ($scope.sortType === sortType) ? !$scope.sortReverse : false;
    $scope.rows = $filter('orderBy')($scope.rows, sortType, $scope.sortReverse);
  };

  $scope.renderUpCaret = function(column) {
    return $scope.sortType === column && !$scope.sortReverse;
  };

  $scope.renderDownCaret = function(column) {
    return $scope.sortType === column && $scope.sortReverse;
  };

  var renderQueryObj = function() {
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

var homeCtrl = app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.url = 'https://soql.192.168.33.10.xip.io';
  $scope.title = 'SOQuirreL';
  $scope.description = 'A SOQL tool that is really swell!';
  $scope.hashtag = '#SOQuirreL';
  $scope.summary = 'A SOQL tool that is really swell!';
}]);