<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/login', function() {
    return Forrest::authenticate();
});

Route::get('/callback', function()
{
    Forrest::callback();

    $identity = Forrest::identity();

    try {
        $user = App\User::findOrFail($identity['user_id']);
        Auth::login($user);
    } catch(Exception $e) {
        $user = new App\User([
            'id' => $identity['user_id'],
            'name' => $identity['display_name'],
            'email' => $identity['email']
        ]);

        $user->save();

        Auth::login($user);
    }
    
    $url = Config::get('forrest.authRedirect');

    return Redirect::to($url);
});

Route::get('/logout', function() {
    Forrest::revoke();

    Auth::logout();

    return view('home')->with('Logged Out');
});

Route::get('/test', function () {
    dd(App::make('Omniphx\Forrest\Providers\Laravel\ForrestServiceProvider'));

    dd($app['forrest']);
    // return view('test');
});

Route::get('/parser', function () {
    return view('parser');
});

Route::get('/highlighter', function () {
    return view('highlighter');
});

Route::group(['prefix' => 'api'], function()
{
    Route::get('/query/{query}', 'SalesforceController@query');
    Route::get('/schema/{url?}', 'SalesforceController@schema');
    Route::get('/tooling/{url?}', 'SalesforceController@tooling');
    Route::get('/testData', function(){
        return [
            "records" => [
                [
                    "name" => "Matthew",
                    "city" => "Boston"
                ],
                [
                   "name" => "John",
                   "city" => "Concord"
                ]
            ]
        ];
    });
});

Route::get('users', function() {
    return App\User::all();
});

Route::get('clear', function() {
    Session::clear();
});