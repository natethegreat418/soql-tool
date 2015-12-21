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