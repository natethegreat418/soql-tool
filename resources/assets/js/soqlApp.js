var soqlApp = angular.module('soqlApp', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngCsv', 'angularUtils.directives.dirPagination']);

var queryCtrl = app.controller('QueryCtrl', ['$scope','$http', '$filter', function($scope, $http, $filter) {
  $scope.queryString = 'SELECT Id, Name, BillingCity FROM Account';
  $scope.fileName = '';

  $scope.columns = [];
  $scope.rows = [];

  $scope.sortType = '';
  $scope.sortReverse = false;

  $scope.currentPage = 1;
  $scope.pageSizeOptions = [25, 50, 100, 200];
  $scope.pageSize = $scope.pageSizeOptions[0];

  $scope.query = function() {
    $http.get('api/query/'+$scope.queryString)
    // $http.get('api/testData')
      .success(function(data) {
        console.log(data);
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }

        if(data.records.length !== 0){
          $scope.columns = [];
          angular.forEach(data.records[0], function(value, key) {
            $scope.columns.push(key);
          });
        }
        
        $scope.rows = data.records;
        queryNextHandler(data);
    });
  };

  var queryMore = function(nextRecordsUrl) {
    $http.get('api/next/'+nextRecordsUrl)
      .success(function(data) {
        // console.log(data);
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }

        $scope.rows = $scope.rows.concat(data.records);

        // console.log($scope.rows.length);
        
        queryNextHandler(data);
    });
  };

  var queryNextHandler = function(data) {
    if(data.done === false) {
      var nextRecordsUrlEncoded = encodeURI(data.nextRecordsUrl)
        .replace(/\//g, '_');
      // console.log(nextRecordsUrlEncoded);
      queryMore(nextRecordsUrlEncoded);
    }
  }

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
    $scope.queryString = $scope.queryObject.type;
    $scope.queryString += " ";
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

  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };

}]);

var homeCtrl = app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.url = 'https://soql.192.168.33.10.xip.io';
  $scope.title = 'SOQuirreL';
  $scope.description = 'A SOQL tool that is really swell!';
  $scope.hashtag = '#SOQuirreL';
  $scope.summary = 'A SOQL tool that is really swell!';
}]);