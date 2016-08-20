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
    return view('welcome');
});

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['namespace' => 'App\Api\Controllers'], function ($api) {
	// Login route
	$api->post('login', 'AuthController@authenticate');
	$api->post('register', 'AuthController@register');
	// Shows! All routes in here are protected and thus need a valid token
	//$api->group( [ 'protected' => true, 'middleware' => 'jwt.refresh' ], function ($api) {
	$api->group( [ 'middleware' => 'jwt.auth' ], function ($api) {
		$api->get('users/me', 'AuthController@me');
		$api->get('validate_token', 'AuthController@validateToken');
		
		$api->resource('shows', 'ShowsController');
	});
});
