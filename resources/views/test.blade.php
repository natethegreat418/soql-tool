<!DOCTYPE html>
<html ng-app="app-test">
  <head>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-touch.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-animate.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/csv.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"></script>
    <script src="{{ asset('js/ui-grid.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/ui-grid.min.css') }}">
    <style type="text/css">
      .grid {
        width: 500px;
        height: 250px;
      }
    </style>
  </head>
  <body>
    <div ng-controller="MainCtrl">
      Try clicking the Add button to add the company column.
      Try clicking the Remove button to remove the last column.
      Try clicking the Splice button to insert a column in the middle.
      <br>
      <br>
      <button id="button_add" class="btn" ng-click="add()">Add</button>
      <button id="button_remove" class="btn" ng-click="remove()">Remove Last</button>
      <button id="button_splice" class="btn" ng-click="splice()">Splice</button>
      <button id="button_unsplice" class="btn" ng-click="unsplice()">Remove Middle</button>
      <button id="button_toggle_visible" class="btn" ng-click="toggleVisible()">Toggle Visible</button>
      <button id="button_toggle_display_name" class="btn" ng-click="toggleDisplayName()">Toggle Display Name</button>
      <div id="grid1" ui-grid="gridOptions" class="grid"></div>
    </div>
  </body>
</html>