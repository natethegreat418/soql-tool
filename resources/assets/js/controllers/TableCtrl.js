app.controller('TableCtrl', ['$scope','$rootScope','$filter', function($scope,$rootScope,$filter) {
  $scope.sortType = '';
  $scope.sortReverse = false;

  $scope.order = function(sortType) {
    $scope.sortType = sortType;
    $scope.sortReverse = ($scope.sortType === sortType) ? !$scope.sortReverse : false;
    $rootScope.rows = $filter('orderBy')($rootScope.rows, sortType, $scope.sortReverse);
  };

  $scope.renderUpCaret = function(column) {
    return $scope.sortType === column && !$scope.sortReverse;
  };

  $scope.renderDownCaret = function(column) {
    return $scope.sortType === column && $scope.sortReverse;
  };

}]);