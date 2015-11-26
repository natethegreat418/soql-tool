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
      <script src="{{ asset('js/angular-animate.js') }}"></script>
      <script src="{{ asset('js/ui-grid.js') }}"></script>
      <script src="{{ asset('js/csv.js') }}"></script>
      <script src="{{ asset('js/vfs_fonts.js') }}"></script>
      <script src="{{ asset('js/pdfmake.js') }}"></script>
      <script src="{{ asset('js/lodash.js') }}"></script>
      <script src="{{ asset('js/app.js') }}"></script>
      <style type="text/css">
        .grid {
          /*width: 1140px;*/
          /*height: 600px;*/
        }
        .ng-hide:not(.ng-hide-animate) {
          display: block!important;
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
      </style>
  </head>
  <body>
    <div class="container" ng-controller="QueryCtrl">
      <h1>FuckYouSOQL</h1>
      <div>
        <form>
          <div class="form-group">
            <textarea class="form-control" rows="3" ng-model="query"></textarea>
            <br>
            <button type="submit" class="btn btn-primary form-inline" ng-click="request(query)">
              Query
            </button>
            <button type="button" class="btn btn-success form-inline" ng-click="hideGrid = !hideGrid">
              @{{ hideGrid && 'Show' || 'Hide' }} Grid
            </button>
            <button type="button" class="btn btn-primary form-inline" ng-click="export()">
              Export
            </button>
            <label></label>
            <input type="text" class="form-inline" ng-model="fileName" />
          </div>
        </form>
      </div>
      <div class="grid-well" ng-hide="hideGrid">
        <div ui-grid="gridOptions" ui-grid-exporter class="grid"></div>
      </div>
    </div>

  </body>
</html>
