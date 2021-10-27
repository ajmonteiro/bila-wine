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
        $credentials = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string'
        ]);

        if (! $token = auth('web')->attempt($credentials)) {
            return response()->json(['error' => 'Wrong Credentials'], 401);
            ;
        }

        $request->session()->regenerate();

        return response()->json([], 204);
    }
}
