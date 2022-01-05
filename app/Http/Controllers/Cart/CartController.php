<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Cart;
use DB;
class CartController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request) {
        $validator = Validator::make($request->all(), [
            'id_product' => 'required',
            'type' => 'required'
        ]);

        if($validator) {
            $cart = new Cart();
            $cart->id_product = (int)$request->id_product;
            $cart->id_user = Auth()->user()->id;
            $cart->type = $request->type;

            $cart->save();

            return response()->json([
                'cart_id' => $cart->id
            ], 200);
        }

        return response()->json([
            'errors' => $validator->errors
        ], 424);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCartFromUser() {
        $cartItems = Cart::where('id_user', Auth()->user()->id)->get();

        $products = [];
        $events = [];
        $i = 0;
        $j = 0;
        $total = 0;

        foreach($cartItems as $item) {
            if($item->type == 'product') {
                $products[$i] = DB::table('products')->where('id', $item->id_product)->get()[0];
                $total += $products[$i]->price;
                $i++;
            } else {
                $events[$j] = DB::table('events')->where('id', $item->id_product)->get()[0];
                $total += $events[$j]->price;
                $j++;
            }
        }

        return response()->json([
            'products' => $products,
            'events' => $events,
            'cart' => $cartItems,
            'total' => $total
        ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id) {
        $cart = Cart::findOrFail($id);

        $cart->delete();

        return response()->json([
            'cart' => $cart
        ], 200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteUserCart() {
        $cart = Cart::where('id_user', Auth()->user()->id)->delete();

        return response()->json([
            'cart' => $cart
        ], 200);
    }
}
