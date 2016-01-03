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

Route::get('/', ['as' => 'home', function () {
    // if (Auth::check()) {
        return view('home');
    // } else {
    //     return view('welcome');
    // }
}]);

Route::get('login', ['as' => 'login', 'uses' => 'AuthorizeController@login']);
Route::get('callback', ['as' => 'callback', 'uses' => 'AuthorizeController@callback']);
Route::get('logout', ['as' => 'logout', 'uses' => 'AuthorizeController@logout']);

Route::get('/parser', function () {
    return view('parser');
});

Route::get('/highlighter', function () {
    return view('highlighter');
});

Route::group(['prefix' => 'api'], function()
{
    Route::get('/query/{query}', 'SalesforceController@query');
    Route::get('/next/{query}', 'SalesforceController@next');
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

Route::get('token', function() {
    dd(Forrest::getTokenData());
});

Route::get('welcome', function() {
    return view('welcome');
});