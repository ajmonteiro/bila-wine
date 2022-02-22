<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function pay(Request $request)
    {
        $id_order_secret = $request->id_secret;

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
          'success_url' => env("APP_URL").'order/success/' . $request->id_secret .'/',
          'cancel_url' => env("APP_URL").'/order/error/'. $request->id_order,

        ]);
        return json_encode(['id' => $checkout_session->id]);
    }


    /**
     * 
     * @param id id_secret
     * @return array
     * 
     */
    public function getReceipt() {
      $stripe = new \Stripe\StripeClient(
        'sk_test_51JzpIVGcdbf6fNPGujk0C5DDQEkaoVwPVEkqaCTIjcAo7CFcel1OqYxjq9uvCkkGxk6BUlz0k1nESqTXFCmhXyKQ00WTXrJMxY'
      );

      return response()->json([
        'stripe' =>  $stripe->invoices->retrieve(
          'cus_Ki1AG8Yg8lXwu9',
          []
        )
      ], 200);
      
    }

   
}
