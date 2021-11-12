<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
        ]);

        if($validator) {
            $category = new Category();

            $category->name = $request->name;
            $category->save();

            return response()->json([
                'category' => $category->id
            ], 200);
        }
    }

    public function all() {
        return response()->json([
            'categories' => Category::all()
        ], 200);
    }

    public function all_paginate() {
        return response()->json([
            'categories' => Category::paginate(5)
        ], 200);
    }
}
