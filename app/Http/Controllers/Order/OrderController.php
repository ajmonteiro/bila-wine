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
use Mail;

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
        $count = count($final_array);
        $product_info = '';
        $k = 0;
        foreach($final_array as $product) {
            $dada = $k + 1;
            $virg = $count == $k + 1 ? false : ",";
            $d = '"';
            $name = $product['name'];
            $description = $product['description'];
            $price = $product['price'];
            $quantity = $product['quantity'];
            $product_info .= "${d}$dada${d}: { ${d}name${d}: ${d}${name}${d}, ${d}description${d}: ${d}${description}${d}, ${d}price${d}: ${d}${price}${d}, ${d}quantity${d}: ${d}${quantity}${d}}$virg";
            $k++;
        }

        $order = new Order;
        $order->id_user = Auth()->user()->id;
        $order->id_invoice = rand(0, 10000000);
        $order->id_secret = Str::random(40);
        $order->info = $info;
        $order->products = '{'.$product_info.'}';
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

        return response()->json([
            'order' => $order
        ], 200);
    }

    public function updateState(Request $request) {
        $invoice = Order::where('id_secret', $request->id)->get()[0];
        $order = Order::where('id_secret', $request->id)->update([
            'state' => '1'
        ]);

        $products = json_decode($invoice->products, true);
        $info = json_decode($invoice->info, true);

        $inv = $invoice->id_invoice;
        $subject = "BILAWINE - COMPRA #$inv";
        $to_name = Auth()->user()->name;
        $to_email = "americo.mnt@gmail.com";

        $data = [
            'body' => "Obrigado pela sua compra!",
            'subject' => "BILAWINE - COMPRA #$inv",
            'order' => $invoice,
            'products' => $products,
            'info' => $info
        ];

        Mail::send('order.email',$data, function($message) use ($to_name,$to_email,$subject){
            $message->to($to_email,$to_name)->subject($subject);
            $message->from(env('MAIL_USERNAME'), env('MAIL_FROM_NAME'));
        });

        return response()->json([
            'order' => $order
        ], 200);
    }

    public function getLastOrderByUser() {
        $orders = DB::table('orders')->where('id_user', Auth()->user()->id)->get();
        $order = json_decode(json_encode($orders), true);

        return response()->json([
            'order' => array_pop($order)
        ], 200);
    }

    public function getAllOrdersFromUser() {
        $orders = Order::where('id_user', Auth()->user()->id)->get();

        return response()->json([
            'orders' => $orders
        ], 200);
    }
}
