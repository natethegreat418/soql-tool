<!DOCTYPE html>
<html lang="en" ng-app="parser-testing">
  <head>
    <meta charset="UTF-8">
    <title>Parser</title>
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
        .ng-hide:not(.ng-hide-animate) {
          display: block!important;
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
      </style>
  </head>
  <body>
    <div class="container" ng-controller="MainCtrl">
      <h1>Parse</h1>
      <div>
        <form>
          <div class="form-group">
            <textarea class="form-control" rows="3" ng-model="query"></textarea>
          </div>
        </form>
      </div>
    </div>

  </body>
</html>
