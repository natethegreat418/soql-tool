@extends('master')

@section('container')

<div class="container" ng-controller="HomeCtrl">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="text-center header-wrapper">
                <i class="fa fa-database fa-5x"></i>
                <h1>SOQooL</h1>
<!--                 <hr/> -->
                <p class="lead">i'm taking it back to the old school<br/>cause i'm an old fool<br/>who's SOQooL</p>
                <hr/>
                <form action="{{ route('login') }}" method="POST">
                    <div class="form-group">      
                        <div class="form-inline">
                            <div class="form-group">
                                <div class="radio-inline" style="padding: 10px">
                                  <label><input type="radio" ng-value="production" ng-model="orgType">Production</label>
                                </div>
                                <div class="radio-inline">
                                  <label><input type="radio" ng-value="sandbox" ng-model="orgType">Sandbox</label>
                                </div>
                                <div class="radio-inline">
                                  <label><input type="radio" ng-value="custom" ng-model="orgType">Custom URL</label>
                                </div>
                                <input type="url" class="form-control" placeholder="http://" ng-model="orgType.url" ng-show="orgType.name === 'custom'">
                            </div>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="hidden" name="type" value="@{{ orgType.name }}">
                        <input type="hidden" name="url" value="@{{ orgType.url }}">
                        <button type="submit" class="btn btn-lg btn-success btn-inverse">LOGIN</button>
                    </div>
                </form>

                <p>{{ Session::get('loggedOut') }}</p>

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