<!DOCTYPE html>
<html lang="en" ng-app="soqool">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="
      width=device-width,
      initial-scale=1,
      minimum-scale=1,
      maximum-scale=1
    " />
    <title>SoQool Tool</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/css/responsivelayout.css" type="text/css">
    <link rel="stylesheet" href="/css/hpstyle.css" type="text/css">
      <script src="{{ asset('js/angular.js') }}"></script>
      <script src="{{ asset('js/lodash.js') }}"></script>
      <script src="{{ asset('js/angular-sanitize.js') }}"></script>
      <script src="{{ asset('js/ng-csv.js') }}"></script>
      <script src="{{ asset('js/dirPagination.js') }}"></script>
      <script src="{{ elixir("js/app.js") }}"></script>
  </head>
  <body>
    @yield('container')
  </body>
</html>
