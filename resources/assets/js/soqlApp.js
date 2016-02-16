var app = angular.module('soqool', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngCsv', 'angularUtils.directives.dirPagination']);

app.run(['$rootScope', function($rootScope) {
    $rootScope.columns = [];
    $rootScope.rows = [];
    $rootScope.filtered = [];
    $rootScope.search = '';
    $rootScope.currentPage = 1;
    $rootScope.pageSize = 25;
    $rootScope.displayAlert = false;
    $rootScope.alertMessage = '';
}]);