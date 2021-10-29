<?php

namespace App\Http\Controllers\Location;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Location;

class LocationController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
        ]);

        if($validator) {
            $location = new Location();

            $location->name = $request->name;

            $location->save();

            return response()->json([
                'location' => $location->id
            ], 200);
        }

    }
}
