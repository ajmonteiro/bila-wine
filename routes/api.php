<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\RegisterController;
use App\Http\Controllers\Location\LocationController;
use App\Http\Controllers\Cellar\CellarController;
use App\Http\Controllers\Event\EventController;
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
    Route::get('/authuser', [AuthController::class, 'checkLogin']);

    // Locations
    Route::post('/location', [LocationController::class, 'create']);
    Route::get('/locations/paginate', [LocationController::class, 'all_paginate']);
    Route::get('/locations', [LocationController::class, 'all']);
    Route::delete('/location/{id}', [LocationController::class, 'delete']);
    Route::get('/event/{id}', [LocationController::class, 'getById']);

    // Cellars
    Route::post('/cellar', [CellarController::class, 'create']);
    Route::get('/cellars', [CellarController::class, 'all_paginate']);
    Route::delete('/cellar/{id}', [CellarController::class, 'delete']);
    Route::get('/cellar/{id}', [CellarController::class, 'getById']);

    // Events
    Route::post('/event', [EventController::class, 'create']);
    Route::get('/events', [EventController::class, 'all']);
    Route::delete('/event/{id}', [EventController::class, 'delete']);
    Route::get('/events/paginate', [EventController::class, 'all_paginate']);
    Route::get('/event/{id}', [EventController::class, 'getById']);
    
});