<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\RegisterController;
use App\Http\Controllers\Location\LocationController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/login/check', [AuthController::class, 'checkLogin']);

Route::group([
    'middleware'=>['auth:sanctum'],
],function(){
    Route::post('/logout', [AuthController::class, 'logout']);

    // Locations
    Route::post('/location', [LocationController::class, 'create']);
    Route::get('/locations', [LocationController::class, 'all']);
});