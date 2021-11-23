<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:128',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|min:5',
            'image' => 'required|mimes:png,jpg,jpeg,png,gif'
        ]);

        if($validator) {
            $uploadFolder = `images/users`;
            $image = $request->file('image');
            $image_path = $image->store($uploadFolder, 'public');
            $user = new User;

            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->image = "/storage/${image_path}";

            $user->save();
        }

        return response()->json([
            'user' => $user->id
        ], 200);
    }

}
