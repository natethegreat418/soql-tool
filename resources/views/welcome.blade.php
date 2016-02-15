@extends('master')

@section('container')

<div class="container" ng-controller="HomeCtrl">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="text-center header-wrapper">
                <i class="fa fa-database fa-5x"></i>
                <h1>SOQooL</h1>
                <p class="lead">taking it back to the old school<br/>cause i'm an old fool<br/>who's SOQooL</p>
                <form action="{{ route('login') }}">
                <div class="form-group">
                    <button type="submit" class="btn btn-lg btn-success btn-inverse">LOGIN</button>
                    <p>{{ Session::get('loggedOut') }}</p>
                </div>
                </form>

               <!--  <div class="text-center generator-share" id="sharebox">
                    <h4>Love it?</h4>
                    @include('layouts.shareicons')
                </div> -->

            </div>

        </div>
    </div>
</div>

@include('layouts.footer')

@endsection