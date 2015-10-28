<!DOCTYPE html>
<html lang="en" ng-app="soqlTool">
  <head>
    <meta charset="UTF-8">
    <title>Test</title>
      <title>Laravel</title>
      <link rel="stylesheet" href="{{ asset('css/app.css') }}">
      <link rel="stylesheet" href="{{ asset('css/ui-grid.min.css') }}">
      <script src="{{ asset('js/angular.js') }}"></script>
      <script src="{{ asset('js/angular-touch.js') }}"></script>
      <script src="{{ asset('js/ui-grid.js') }}"></script>
      <script src="{{ asset('js/lodash.js') }}"></script>
      <script src="{{ asset('js/app.js') }}"></script>
  </head>
  <body>
    <div class="container" ng-controller="QueryCtrl">
      <h1>SOQL tool</h1>
      <div>
        <form>
          <div class="form-group">
            <textarea class="form-control" rows="3" ng-model="query"></textarea>
            <br>
            <button type="submit" class="btn btn-primary" ng-click="request(query)" >Query</button>
            <button type="submit" class="btn btn-primary" ng-click="refreshCols()" >Refresh</button>
            <button type="submit" class="btn btn-danger" ng-click="removeCol()" >Remove</button>
          </div>
        </form>
      </div>
      {{-- <div ng-hide="hideGrid"> --}}
        <div ui-grid="gridOptions" ui-grid-core class="myGrid"></div>
      {{-- </div> --}}
      <div>@{{gridAPI}}</div>
    </div>

  </body>
</html>
