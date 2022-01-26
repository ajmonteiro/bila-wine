<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Favorite;
use Illuminate\Support\Facades\Validator;
use DB;

class ProductController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
            'description' => 'required|max:128',
            'bigdescription' => 'required|max:3000',
            'price' => 'required',
            'image' => 'required',
            'id_category' => 'required'
        ]);

        if($validator) {
            $uploadFolder = `images/products`;
            $image = $request->file('image');
            $image_path = $image->store($uploadFolder, 'public');
            $product = new Product();

            $product->name = $request->name;
            $product->description = $request->description;
            $product->big_description = $request->bigdescription;
            $product->price = $request->price;
            $product->image = "/storage/${image_path}";
            $product->id_category = $request->id_category;

            $product->save();

            return response()->json([
                'product' => $product->id
            ], 200);
        }
    }

    public function all_paginate() {
        $product = DB::table('products')->join('categories', 'categories.id', '=', 'products.id_category')
        ->select([
            'products.name as name',
            'products.id as id',
            'products.description as description',
            'products.big_description as big_description',
            'products.price as price',
            'products.image as image',
            'categories.name as category_name'
        ])->paginate(4);

        return response()->json([
            'products' => $product
        ], 200);
    }

    public function all() {
        return response()->json([
            'products' => Product::all()
        ], 200);
    }



    /**
     *
     * @param id id_product
     * @return array product
     */
    public function getById($id) {
        $product = Product::where('id', $id)->get()[0];

        return response()->json([
            'product' => $product
        ], 200);
    }

    public function addProductToFavorites(Request $request) {
        $favorite = new Favorite();

        $favorite->id_user = Auth()->user()->id;
        $favorite->id_product = $request->id;

        $favorite->save();

        return response()->json([
            'favorite' => $favorite->id
        ], 200);
    }

    /**
     *
     * @param nr1 - lower number
     * @param nr2 - higher number
     *
     * @return array products
     */
    public function getProductsInPriceRange($nr1, $nr2) {
        $products = Product::whereBetween("price", [(int)$nr1, (int)$nr2])->get();

        return response()->json([
            'products' => $products
        ], 200);
    }

    /**
     *
     * @param id id_category
     * @return array products
     *
     */
    public function getProductsFromCategory($id) {
        $products = Product::where('id_category', $id)->get();

        return response()->json([
            'products' => $products
        ], 200);
    }

    public function getFavoritesFromUser() {
        $favorites = Favorite::where('id_user', Auth()->user()->id)
        ->join('products', 'products.id', '=', 'favorites.id_product')
        ->select([
            'products.name as name',
            'products.id as id'
        ])->get();

        return response()->json([
            'favorites' => $favorites
        ], 200);
    }
}
