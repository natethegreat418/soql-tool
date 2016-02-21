app.directive('field', function($compile) {
  var leftJoinTemplate = '<a ng-click="record.$$leftJoin.render = record.$$leftJoin.render ? false : true">{{field}}: {{record[field].records.length}}</a>';
  var fieldTemplate = '{{record[field]}}';
  var emptyTemplate = '';

  var getTemplate = function(field) {
    if(field === undefined || field == null) return emptyTemplate;
    if(typeof field === 'string') return fieldTemplate;
    if(field.records === undefined) return emptyTemplate;
    return leftJoinTemplate;
  }

  var linker = function(scope, element, attrs) {
    element.html(getTemplate(scope.record[scope.field]));
    $compile(element.contents())(scope);
  };

  return {
    restrict : 'E',
    link: linker,
    scope: {
      record:'=',
      field:'='
    }
  };
});