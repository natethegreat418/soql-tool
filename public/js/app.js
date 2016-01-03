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
var app = angular.module('soqlTool', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngCsv', 'angularUtils.directives.dirPagination']);

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
        console.log(data);
        for(i = 0; i < data.records.length; i++){
          delete data.records[i].attributes;
        }

        $scope.rows = $scope.rows.concat(data.records);
        
        // $scope.rows = angular.extend($scope.rows, data.records);

        console.log($scope.rows.length);
        
        // $scope.$apply(function(){
        //   $scope.rows.concat(data.records);
        // });
        queryNextHandler(data);
    });
  };

  var queryNextHandler = function(data) {
    if(data.done === false) {
      var nextRecordsUrlEncoded = encodeURI(data.nextRecordsUrl)
        .replace(/\//g, '_');
      console.log(nextRecordsUrlEncoded);
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

var app = angular.module('parser-testing', []);
 
app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.queryObject = {
    type: "SELECT",
    fields: [
        "Id",
        "Name"],
    sobject: "Account",
    availableFields: [],
    filters: [
      {field:"BillingCity",operator:"=",value:"Boston"},
      {field:"Name",operator:"=",value:"Matt"}]
  };

  $scope.query = '';

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

  renderQueryObj();

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
var app = angular.module('parser-testing', []);
 
app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.query = '';

  $scope.highlight = function(haystack, needle) {
      if(!needle) {
          return $sce.trustAsHtml(haystack);
      }
      return $sce.trustAsHtml(haystack.replace(new RegExp(needle, "gi"), function(match) {
          return '<span class="highlightedText">' + match + '</span>';
      }));
  };

}]);
//# sourceMappingURL=app.js.map
