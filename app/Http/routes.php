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

Route::get('/test', function () {
    return view('test');
});

Route::group(['prefix' => 'api'], function()
{
    Route::get('/query/{query}', 'SalesforceController@query');
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