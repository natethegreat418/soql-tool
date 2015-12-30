<!DOCTYPE html>
<html lang="en" ng-app="soqlTool">
  <head>
    <meta charset="UTF-8">
    <title>Test</title>
      <title>Laravel</title>
      <link rel="stylesheet" href="{{ elixir("css/app.css") }}">
      <link rel="stylesheet" href="{{ elixir("css/font-awesome.css") }}">

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

      </style>
  </head>
  <body>
    @yield('container')
  </body>
</html>
