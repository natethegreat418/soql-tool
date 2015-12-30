@extends('master')

@section('container')

<div class="container" ng-controller="QueryCtrl">
  <div class="pull-left">
    <h1>SOQuirreL</h1>
  </div>
  <div class="pull-right" style="margin-top: 20px;">
    <ul class="list-inline">
      <li><p class="lead inline-block">Hello, {{ Auth::user()->name }}</p></li>
      <li>
        <form action="{{ route('logout') }}">
          <button type="submit" class="btn btn-inverse btn-primary">Logout</button>
        </form>
      </li>
    </ul>
  </div>
  <div>
    <form>
      <div class="form-group">
        <textarea class="form-control" rows="3" ng-model="query"></textarea>

        <div class="pull-left button-group form-inline">
          <button type="submit" class="btn btn-inverse btn-primary form-control" ng-click="request(query)">
            Query
          </button>
        </div>

        <div class="pull-right button-group form-inline">
          <button type="button" class="btn btn-inverse btn-primary form-control" ng-click="export()">
            Export
          </button>
          <input type="text" class="form-control" ng-model="fileName" style="color: black;" />
        </div>
      </div>
    </form>
  </div>

  <table class="table table-bordered table-hover">
    <tr class="table-header">
      <th ng-repeat="column in columns">
        <a href="#" ng-click="order(column)">
        <span ng-show="renderDownCaret(column)" class="fa fa-caret-down"></span>
        <span ng-show="renderUpCaret(column)" class="fa fa-caret-up"></span>
        @{{ column }}</a>
      </th>
    </tr>
    <tr ng-repeat="row in rows">
      <td ng-repeat="column in columns">@{{ row[column] }}</td>
    </tr>
  </table>
</div>

@endsection