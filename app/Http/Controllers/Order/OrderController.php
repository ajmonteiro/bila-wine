<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Order;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Invoice;
use DB;

class OrderController extends Controller
{
    public function create(Request $request) {
        $info = json_encode([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'address' => $request->address,
            'city' => $request->city,
            'postal_code' => $request->postal_code,
            'notes' => $request->notes,
            'saved' => $request->saved
        ]);

        $products = Cart::where('id_user', Auth()->user()->id)->get();

        
        $product_array = $products;
        $i = 0;
        $product = [];
        $events = [];
        $total = 0;

        foreach($product_array as $p) {
            if($p->type == 'product') {
                $product[$i] = Product::where('id', $p->id_product)->get()[0];
                $total += $product[$i]->price;
                $final_array[$i] = [
                    'name' => $product[$i]->name,
                    'description' => $product[$i]->description,
                    'price' => $product[$i]->price,
                    'quantity' => 1
                ];
            } else {
                $events[$i] = DB::table('events')->where('id', $p->id_product)->get()[0];
                $final_array[$i] = [
                    'name' => $events[$i]->title,
                    'description' => $events[$i]->description,
                    'price' => $events[$i]->price,
                    'quantity' => 1
                ];
                $total += $events[$i]->price;
            }
            $i++;

        }

        $product_info = [];
        $k = 0;

        foreach($final_array as $product) {
            return $product;
            $product_info[$i] = json_encode([
                'name' => $product->name,
                'description' => $product->description,
                'price' => $product->price,
                'quantity' => $product->quantity
            ]);
        }
        return $product_info;

        $order = new Order;
        $order->id_user = Auth()->user()->id;
        $order->id_invoice = rand(0, 10000000);
        $order->id_secret = Str::random(40);
        $order->info = $info;
        $order->products = $product_array;
        $order->state = 0;
        $order->total_price = floatval($total);
        
        $order->save();

        return response()->json([
            'order' => $order->id_secret
        ], 200);
    }

    /**
     * 
     * @param id order_id
     * @return array
     * 
     */
    public function getOrderById($id) {
        $order = Order::where('id_secret', $id)->first();
        $products = json_decode($order->products);
        $all_products = [];
        $i = 0;
        $total = 0;
        foreach($products as $product) {
            $p = Product::where('id', $product)->get()[0];
            $total += $p->price;
            $all_products[$i] = $p;
            
            $i++;
        }

        $order->all_products = $all_products;
        $order->total = $total;
        return response()->json([
            'order' => $order
        ], 200);
    }

    public function updateState($id) {
        $order = Order::where('id_secret', $id)->update([
            'state' => '1'
        ]);

        return response()->json([
            'order' => $order
        ], 200);
    }
}
