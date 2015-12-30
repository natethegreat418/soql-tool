@extends('master')

@section('container')

<div class="container" ng-controller="HomeCtrl">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">

            <div class="text-center header-wrapper">
                <i class="fa fa-database fa-5x"></i>
                <h1>SOQuirreL</h1>
                <p class="lead">A SOQL tool that is really swell!</p>
                <p>{{ Session::get('loggedOut') }}</p>
                <form action="{{ route('login') }}">
                <div class="form-group">
                    <button type="submit" class="btn btn-lg btn-success btn-inverse">LOGIN</button>
                </div>
                </form>

{{--                 <div class="text-center generator-share" id="sharebox">
                    <h4>Love it?</h4>
                    @include('layouts.shareicons')
                </div> --}}

            </div>

        </div>
    </div>
</div>

@include('layouts.footer')

@endsection