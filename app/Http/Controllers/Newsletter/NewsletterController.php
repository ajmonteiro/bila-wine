<?php

namespace App\Http\Controllers\Newsletter;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Newsletter;

class NewsletterController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:128',
        ]);

        if($validator) {
            $newsletter = new Newsletter();
            $newsletter->email = $request->email;
            $newsletter->save();

            return response()->json([
                'newsletter' => $newsletter->id
            ], 200);
        }
    }
}
