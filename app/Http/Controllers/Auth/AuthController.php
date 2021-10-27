<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'error' => 'Wrong credentials'
            ], 401);
        } 

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function logout(Request $request) {
        auth()->user()->tokens()->delete();
        
        return response()->json([
            'message' => 'Logged out'
        ], 201);
    }

    public function checkLogin() {
        if(!auth()->user()) {
            return 0;
        } else {
            return 1;
        }
    }
}
