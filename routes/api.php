<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * Guest routes
 * @var routes
 */
Route::namespace('Auth')->prefix('auth')->group(function () {
    Route::name('auth.login')->post('login', 'LoginController@index');
    Route::name('auth.signup')->post('signup', 'SignUpController@index');
});

/**
 * Authenticated routes
 * @var routes
 */
Route::middleware('auth:sanctum')->group(function () {

    /**
     * Admin routes
     */
    Route::namespace('Admin')->prefix('admin')->group(function () {
        Route::name('admin.users')->get('users', 'UserController@index');
        Route::name('admin.user')->post('user', 'UserController@store');
    });

    /**
     * User routes
     */
    Route::namespace('User')->prefix('me')->group(function () {
        Route::name('me')->get('', 'IndexController@index');
        Route::name('me.update')->post('update/avatar', 'IndexController@uploadAvatar');
    });

});