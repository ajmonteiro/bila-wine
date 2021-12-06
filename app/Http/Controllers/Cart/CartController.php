<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Cart;

class CartController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request) {
        $validator = Validator::make($request->all(), [
            'id_product' => 'required',
        ]);

        if($validator) {
            $cart = new Cart();
            $cart->id_product = (int)$request->id_product;
            $cart->id_user = Auth()->user()->id;

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
        $cart = Cart::where('id_user', Auth()->user()->id)
        ->join('products', 'products.id', '=', 'cart.id_product')
        ->join('categories', 'categories.id', '=', 'products.id_category')
        ->select([
            'cart.id as id',
            'cart.id_product as id_product',
            'id_category as id_category',
            'products.description as description',
            'products.name as name',
            'products.image as image',
            'products.price as price',
            'categories.name as category_name'
        ])
        ->get();

        $total = 0;

        foreach($cart as $c) {
            $total += $c->price;
        }

        return response()->json([
            'cart' => $cart,
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
