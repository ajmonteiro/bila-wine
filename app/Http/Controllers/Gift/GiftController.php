<?php

namespace App\Http\Controllers\Gift;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Gift;
use Illuminate\Support\Facades\Validator;


class GiftController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
            'description' => 'required|max:3000',
        ]);

        if($validator) {
            $gift = new Gift();
            $gift->name = $request->name;
            $gift->description = $request->description;
            $gift->voucher = Str::random(12);
            $gift->save();

            return response()->json([
                'gift' => $gift->id
            ], 200);
        }
    }

    protected function all_paginate() {
        return response()->json([
            'gifts' => Gift::paginate(5)
        ], 200);
    }
}
