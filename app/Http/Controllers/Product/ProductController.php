<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
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
            'categories.name as category_name'
        ])->paginate(5);

        return response()->json([
            'products' => $product
        ], 200);
    }

    public function all() {
        return response()->json([
            'products' => Product::all()
        ], 200);
    }
}
