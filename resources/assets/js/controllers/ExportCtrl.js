app.controller('ExportCtrl', ['$scope', '$rootScope', function($scope,$rootScope) {
  $scope.fileName = '';

  $scope.getHeaders = function() {
    return $rootScope.columns;
  }
  
  $scope.getRows = function() {
    return $rootScope.rows;
  }
}]);