@extends('master')

@section('container')

<div class="container" ng-controller="QueryCtrl">
  <div class="pull-left">
    <h3>SOQL</h3>
{{--     <p class="lead">
      The SOQL tool you've been waiting for!
    </p> --}}
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
        <br>
        <button type="submit" class="btn btn-inverse btn-primary form-inline" ng-click="request(query)">
          Query
        </button>
        <button type="button" class="btn btn-inverse btn-success form-inline" ng-click="hideGrid = !hideGrid">
          @{{ hideGrid && 'Show' || 'Hide' }} Grid
        </button>
        <button type="button" class="btn btn-inverse btn-primary form-inline" ng-click="export()">
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

@endsection