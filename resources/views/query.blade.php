@extends('master')

@section('container')

<div class="container">

  <div class="clearfix">
    <div class="pull-left">
      <h1>SOQool</h1>
    </div>
    <div class="pull-right" style="margin-top: 20px;">
      <ul class="list-inline">
        <li>
          <form action="{{ route('logout') }}">
            <button type="submit" class="btn btn-inverse btn-primary">Logout</button>
          </form>
        </li>
      </ul>
    </div>
  </div>

  <div ng-controller="QueryCtrl" id="QueryCtrl">
    <form>
      <textarea class="form-control" rows="5" ng-model="queryString"></textarea>
      <div class="alert alert-danger" class="close" role="alert" ng-show="displayAlert">@{{alertMessage}}</div>

      <div class="clearfix">

        <div class="pull-left button-group form-inline">
          <button type="submit" class="btn btn-inverse btn-primary form-control" ng-click="query(queryString)">
            Query <i ng-show="$root.pending" class="fa fa-refresh fa-spin"></i>
          </button>
        </div>

        <div class="pull-right button-group form-inline" ng-controller="ExportCtrl" id="ExportCtrl">
          <button type="button" class="btn btn-inverse btn-primary form-control" ng-csv="getRows()" csv-header="getHeaders()" fileName="@{{ fileName }}">
            Export
          </button>
          <input type="text" class="form-control" ng-model="fileName" style="color: black;"  placeholder="File name"/>
        </div>
      </div>
      
      <div class="clearfix">
        <div class="pull-left button-group form-inline" ng-controller="FilterCtrl" id="FilterCtrl">
          <div class="form-group">
            <label for="search">Filter</label>
            <input type="text" ng-model="$root.search" class="form-control" id="search" placeholder="Search">
          </div>
        </div>

        <div class="pull-right" ng-controller="PaginationCtrl">
          <div class="form-group form-inline">
            <label for="pageSize">Page size</label>
            <select class="form-control" ng-options="option for option in pageSizeOptions" ng-model="$root.pageSize" id="pageSize">
            </select>
          </div>
        </div>
      </div>

      <div class="clearfix">
        <div class="pull-left" ng-controller="FilterCtrl" id="FilterCtrl">
          <p>@{{ $root.filtered.length }} out of @{{ $root.result.records.length }}</p>
        </div>
      </div>

    </form>
  </div>

  <table class="table table-bordered table-hover" ng-controller="TableCtrl" id="TableCtrl">
    <tr class="table-header">
      <th ng-repeat="column in $root.result.columns" ng-if="column !== '$$leftJoin'">
        <a href="#" ng-click="order(column)">
        <span ng-show="renderDownCaret(column)" class="fa fa-caret-down"></span>
        <span ng-show="renderUpCaret(column)" class="fa fa-caret-up"></span>
        @{{ column }}</a>
      </th>
    </tr>
    <tbody dir-paginate="record in $root.filtered = ($root.result.records | filter:$root.search) | itemsPerPage: $root.pageSize" current-page="$root.currentPage">
      <tr>
        <td ng-repeat="field in $root.result.columns" ng-if="field !== '$$leftJoin'">
          <field record="record" field="field"></field>
        </td>
      </tr>
      <tr class="expanded" ng-show="record.$$leftJoin.render">
        <td colspan="@{{$root.result.columns.length}}">
          <table class="table table-bordered table-hover">
            <tr class="table-header">
              <th ng-repeat="childColumn in record.Contacts.columns">
                <a href="#" ng-click="order(childColumn)">
                <span ng-show="renderDownCaret(childColumn)" class="fa fa-caret-down"></span>
                <span ng-show="renderUpCaret(childColumn)" class="fa fa-caret-up"></span>
                @{{ childColumn }}</a>
              </th>
            </tr>
            <tr ng-repeat="childRow in record.Contacts.records">
              <td ng-repeat="childColumn in record.Contacts.columns">@{{ childRow[childColumn] }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="text-center">
    <dir-pagination-controls></dir-pagination-controls>
  </div>

  <p>@{{JSON.stringify($root.result, null, 2)}}</p>
  
</div>

@endsection