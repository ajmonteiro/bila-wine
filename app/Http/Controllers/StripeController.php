<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function pay(Request $request)
    {
        $id_order_secret = Order::where('id', $request->id_order)->pluck('id_secret')[0];

        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $app_url = env("APP_URL");
        $checkout_session = \Stripe\Checkout\Session::create([
          'payment_method_types' => ['card'],
          'line_items' => [[
            'price_data' => [
              'currency' => 'eur',
              'unit_amount' => $request->price *100,
              'product_data' => [
                'name' => $request->name,
              ],
            ],
            'quantity' => 1,
          ]],
          'mode' => 'payment',
          'success_url' =>env("APP_URL").'/order/success/' . $id_order_secret.'/',
          'cancel_url' =>env("APP_URL").'/order_cancel.php?orderId='. $request->id_order,

        ]);
        

        return json_encode(['id' => $checkout_session->id]);
    }

   
}
