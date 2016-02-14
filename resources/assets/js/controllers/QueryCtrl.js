app.controller('QueryCtrl', ['$scope','$rootScope','QueryHandler', function($scope,$rootScope,QueryHandler) {
  $scope.queryString = 'SELECT Id, Name, BillingCity FROM Account';
  $scope.query = function() {
    QueryHandler.query($scope.queryString);
  }
}]);