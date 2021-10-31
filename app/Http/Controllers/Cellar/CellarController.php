<?php

namespace App\Http\Controllers\Cellar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Cellar;

class CellarController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:128',
            'description' => 'max:3000',
            'location_id' => 'required',
            'price' => 'required',
            'image' => 'required'
        ]);

        if($validator) {
            $uploadFolder = `images/cellars`;
            $image = $request->file('image');
            $image_path = $image->store($uploadFolder, 'public');
            $cellar = new Cellar();

            $cellar->title = $request->title;
            $cellar->description = $request->description;
            $cellar->location_id = $request->location_id;
            $cellar->price = $request->price;
            $cellar->image = "/storage/${image_path}";

            $cellar->save();

            return response()->json([
                'cellar' => $cellar->id
            ], 200);
        }
    }

    public function all_paginate() {
        return response()->json([
            'cellars' => Cellar::paginate(5)
        ], 200);
    }
}
