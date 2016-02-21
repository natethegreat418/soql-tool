app.controller('QueryCtrl', ['$scope','$rootScope','QueryHandler', function($scope,$rootScope,QueryHandler) {
  $scope.queryString = 'SELECT Id, Name, (SELECT Id, FirstName, LastName FROM Contacts) FROM Account order by Id limit 5';
  $scope.query = function(query) {
    QueryHandler.query(query);
  }
}]);