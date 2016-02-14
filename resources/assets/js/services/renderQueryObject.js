//Need to convert to a service
var renderQueryObject = function() {
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