<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|min:5'
        ]);

        if($validator) {
            $user = new User;

            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);

            $user->save();
        }

        return response()->json([
            'user' => $user->id
        ], 200);

    }
}
