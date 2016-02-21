var app = angular.module('soqool', ['ngSanitize', 'ngCsv', 'angularUtils.directives.dirPagination']);

app.run(['$rootScope', function($rootScope) {
  $rootScope.result = {
    "records" : [],
    "columns" : []
  };
  $rootScope.filtered = [];
  $rootScope.search = '';
  $rootScope.currentPage = 1;
  $rootScope.pageSize = 25;
  $rootScope.displayAlert = false;
  $rootScope.alertMessage = '';
}]);