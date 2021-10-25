<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if (Auth::guard()->attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();

            return response()->json([], 204);
        }

        return response()->json([
            'error' => 'Invalid credentials'
        ]);
    }

    public function register(Request $request) {

        $validated = $request->validate([
            'name' => 'required|max:128',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|min:5'
        ]);

        if($validated) {
            $user = new User;

            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = $request->password;

            $user->save();
        }

        return response()->json([
            'user' => $user->id
        ], 200);

    }
}
