<!DOCTYPE html>
<html lang="en" ng-app="soqlTool">
  <head>
    <meta charset="UTF-8">
    <title>Test</title>
      <title>Laravel</title>
      <link rel="stylesheet" href="{{ asset('css/app.css') }}">
      <script src="{{ asset('js/angular.js') }}"></script>
      <script src="{{ asset('js/app.js') }}"></script>
  </head>
  <body>
    <div class="container" ng-controller="QueryCtrl">
      <h1>SOQL tool</h1>
      <div>
        <form>
          <textarea class="form-control" rows="3" ng-model="query"></textarea>
          <button type="submit" class="btn btn-default" ng-click="request(query)">query</button>
        </form>
      </div>
      <div>
        <table class="table table-striped">
          <th>
            <td>@{{result.$$state.value.records.keys()}}</td>
          </th>
          <tr ng-repeat="row in result.$$state.value.records">
            <td>@{{row.Id}}</td>
          </tr>
        </table>
      </div>
      <div ng-bind="result.$$state.value.records"></div>
    </div>
  </body>
</html>
