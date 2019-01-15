<?php

use Illuminate\Http\Request;
use App\Http\Controllers\QuestionController;

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

Route::apiResource('/question', 'QuestionController');

Route::apiResource('/category', 'CategoryController');

Route::apiResource('/question/{question}/reply', 'ReplyController');

Route::post('/like/{reply}', 'LikeController@LikeIt');
Route::delete('/like/{reply}', 'LikeController@unLikeIt');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('signup', 'AuthController@signup');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});