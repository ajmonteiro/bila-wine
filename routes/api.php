<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\RegisterController;
use App\Http\Controllers\Location\LocationController;
use App\Http\Controllers\Cellar\CellarController;
use App\Http\Controllers\Event\EventController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Newsletter\NewsletterController;
use App\Http\Controllers\Gift\GiftController;
use App\Http\Controllers\Email\EmailController;
use App\Http\Controllers\Banners\HomePageBannerController;
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

Route::group([
    'middleware'=>['roles:admin'],
],function(){

});

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
    Route::get('/role', [AuthController::class, 'role']);

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'getDashboardInfo']);
    Route::get('/recentusers', [DashboardController::class, 'getRecentUsers']);

    // Locations
    Route::post('/location', [LocationController::class, 'create']);
    Route::get('/locations/paginate', [LocationController::class, 'all_paginate']);
    Route::get('/locations', [LocationController::class, 'all']);
    Route::delete('/location/{id}', [LocationController::class, 'delete']);
    Route::get('/location/{id}', [LocationController::class, 'getById']);
    Route::put('/location/{id}', [LocationController::class, 'update']);

    // Cellars
    Route::post('/cellar', [CellarController::class, 'create']);
    Route::get('/cellars', [CellarController::class, 'all_paginate']);
    Route::delete('/cellar/{id}', [CellarController::class, 'delete']);
    Route::get('/cellar/{id}', [CellarController::class, 'getById']);
    Route::put('/cellar/{id}', [CellarController::class, 'update']);

    // Events
    Route::post('/event', [EventController::class, 'create']);
    Route::get('/events', [EventController::class, 'all']);
    Route::delete('/event/{id}', [EventController::class, 'delete']);
    Route::get('/events/paginate', [EventController::class, 'all_paginate']);
    Route::get('/event/{id}', [EventController::class, 'getById']);
    Route::put('/event/{id}', [EventController::class, 'update']);

    // Products
    Route::post('/product', [ProductController::class, 'create']);
    Route::get('/products/paginate', [ProductController::class, 'all_paginate']);
    Route::get('/products', [ProductController::class, 'all']);
    Route::get('/product/{id}', [ProductController::class, 'getById']);

    // Banners Homepage
    Route::post('/banner', [HomePageBannerController::class, 'create']);
    Route::get('/banners', [HomePageBannerController::class, 'getBanners']);
    // Categories
    Route::post('/category', [CategoryController::class, 'create']);
    Route::get('/categories', [CategoryController::class, 'all']);
    Route::get('/categories/paginate', [CategoryController::class, 'all_paginate']);

    // Cart
    Route::post('/cart', [CartController::class, 'add']);
    Route::get('/cart', [CartController::class, 'getCartFromUser']);
    Route::delete('/cart/{id}', [CartController::class, 'delete']);
    Route::delete('/cart', [CartController::class, 'deleteUserCart']);

    // Newsletter
    Route::post('/newsletter', [NewsletterController::class, 'create']);

    // Gift
    Route::post('/gift', [GiftController::class, 'create']);
    Route::get('/gifts/paginate', [GiftController::class, 'all_paginate']);

    // Order
    Route::post('/order', [OrderController::class, 'create']);
    Route::get('/order/{id}', [OrderController::class, 'getOrderById']);
    Route::post('/pay', [OrderController::class, 'payInvoice']);
    Route::get('/order/state/{id}', [OrderController::class, 'updateState']);

    // Email interaction
    Route::post('contact_us', [EmailController::class, 'contactUs']);

    // Stripe
    Route::post('/stripe', [StripeController::class, 'pay']);
    Route::get('/getstripe', [StripeController::class, 'getReceipt']);

});
