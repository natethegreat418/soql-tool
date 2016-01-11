@extends('master')

@section('container')

<div class="container" ng-controller="QueryCtrl">
  <div class="pull-left">
    <h1>SOQuirreL</h1>
  </div>
  <div class="pull-right" style="margin-top: 20px;">
    <ul class="list-inline">
      {{-- <li><p class="lead inline-block">Hello, {{ Auth::user()->name }}</p></li> --}}
      <li>
        <form action="{{ route('logout') }}">
          <button type="submit" class="btn btn-inverse btn-primary">Logout</button>
        </form>
      </li>
    </ul>
  </div>
  <div>
    <form>

      <textarea class="form-control" rows="3" ng-model="queryString"></textarea>

      <div class="pull-left button-group form-inline">
        <button type="submit" class="btn btn-inverse btn-primary form-control" ng-click="query()">
          Query
        </button>
      </div>

      <div class="pull-right button-group form-inline" ng-controller="ExportCtrl">
        <button type="button" class="btn btn-inverse btn-primary form-control" ng-csv="getRows()" csv-header="getHeader()" fileName="@{{ fileName }}">
          Export
        </button>
        <input type="text" class="form-control" ng-model="fileName" style="color: black;"  placeholder="File name"/>
      </div>

      <br>
      <br>
      <br>
        
      <div class="pull-left button-group form-inline">
        <div class="form-group">
          <label for="search">Filter</label>
          <input type="text" ng-model="q" class="form-control" id="search" placeholder="Search">
          <p>@{{ filtered.length }} out of @{{ rows.length }}</p>
        </div>
        
      </div>

      <div class="pull-right">
        <div class="form-group form-inline">
          <label for="pageSize">Page size</label>
          <select class="form-control" ng-options="option for option in pageSizeOptions" ng-model="pageSize" id="pageSize">
          </select>
        </div>

      </div>

    </form>
  </div>

  <table class="table table-bordered table-hover" ng-controller="FilterCtrl">
    <tr class="table-header">
      <th ng-repeat="column in columns">
        <a href="#" ng-click="order(column)">
        <span ng-show="renderDownCaret(column)" class="fa fa-caret-down"></span>
        <span ng-show="renderUpCaret(column)" class="fa fa-caret-up"></span>
        @{{ column }}</a>
      </th>
    </tr>
    {{-- <tr dir-paginate="row in rows | filter:q | itemsPerPage: pageSize" current-page="currentPage"> --}}
    <tr dir-paginate="row in filtered = (rows | filter:q) | itemsPerPage: pageSize" current-page="currentPage">
      <td ng-repeat="column in columns">@{{ row[column] }}</td>
    </tr>
  </table>

  <div class="text-center">
    <dir-pagination-controls></dir-pagination-controls>
  </div>
  
</div>

@endsection