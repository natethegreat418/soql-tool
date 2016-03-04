@extends('master')

@section('container')
    <div class="grid-container">
        <div class="headerwrap">
            <div class="grid-100">
                <header>
                    <h1>SoQool</h1></header>
                <img class= "headerimg" src="css/Images/database_256.png" alt="db">
                <p>i'm taking it back to the old school<br/>cause i'm an old fool<br/>who's SOQooL</p>
                <div class="separator">

                </div>
                <form action="http://soqool.io/login" method="POST">
                    <fieldset class="login">
                        <div class="loginoptions">
                            <label><input type="radio" ng-value="production" ng-model="orgType">Production</label>
                            <label><input type="radio" ng-value="sandbox" ng-model="orgType">Sandbox</label>
                            <label><input type="radio" ng-value="custom" ng-model="orgType">Custom URL</label>
                                <input type="url" placeholder="http://" ng-model="orgType.url" ng-show="orgType.name === 'custom'">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="hidden" name="type" value="@{{ orgType.name }}">
                        <input type="hidden" name="url" value="@{{ orgType.url }}">
                        </div>
                        <button type="submit" class="login-button">LOGIN</button>
                        <p>{{ Session::get('loggedOut') }}</p>
                    </fieldset>
                </form>
            </div>
        </div>
        <footer class="footerwrap">
            <div class="grid-100">
                <h2>Contact Me</h2>
                <ul class="soc">
                    <li>
                        <a class="soc-twitter" href="https://twitter.com/OmniPhx"></a>
                    </li>
                    <li>
                        <a class="soc-email2" href="mailto:mattjmitchener@gmail.com"></a>
                    </li>
                    <li>
                        <a class="soc-google" href="https://plus.google.com/u/0/+MatthewMitchener"></a>
                    </li>
                    <li>
                        <a class="soc-linkedin soc-icon-last" href="https://www.linkedin.com/pub/matthew-mitchener/40/499/959"></a>
                    </li>
                </ul>
                <span class="copyright">
                <br>Copyright © Matthew Mitchener 2015
                </span>
            </div>
        </footer>
    </div>
@endsection