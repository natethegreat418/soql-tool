app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.production = {
    name : 'production'
  };

  $scope.sandbox = {
    name : 'sandbox'
  };

  $scope.custom = {
    name : 'custom',
    url : 'http://'
  };

  $scope.orgType = $scope.production;

  $scope.customURL = '';
  $scope.url = 'https://soql.192.168.33.10.xip.io';
  $scope.title = 'SOQuirreL';
  $scope.description = 'A SOQL tool that is really swell!';
  $scope.hashtag = '#SOQuirreL';
  $scope.summary = 'A SOQL tool that is really swell!';
}]);