@extends('master')

@section('container')

<div class="container text-center" ng-controller="QueryCtrl">
  <h1>SOQL Tool</h1>
  <p class="lead">The SOQL tool you've been looking for</p>
  <p>{{ Session::get('loggedOut') }}</p>
  <form action="{{ route('login') }}">
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</div>

@endsection
