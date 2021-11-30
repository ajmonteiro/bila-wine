<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;

class DashboardController extends Controller
{
    protected function getDashboardInfo() {
        $users = User::count();
        $products = Product::count();
        $orders = Order::count();
        $income = Order::sum('total_price');

        return response()->json([
            'users' => $users,
            'products' => $products,
            'orders' => $orders,
            'income' => $income,
            'user' => Auth()->user()
        ], 200);
    }
}
