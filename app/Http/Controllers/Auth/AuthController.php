<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        $user = User::where('email', $request->email)->first();
        if (Auth::attempt($request->only('email', 'password'))) {

            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['user' => Auth::user(), 'token' => $token], 200);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.']
        ]);
    }

    public function checkLogin() {
        $role = DB::table('user_role')->where('id_user', Auth::user()->id)
            ->join('roles', 'roles.id', '=', 'user_role.id_role')
            ->pluck('roles.name');
        return response()->json([
            'role' => $role,
            'user' => Auth::user()
        ], 200);
    }

    public function logout(Request $request) {
        $user = DB::table('personal_access_tokens')->where('tokenable_id', Auth::user()->id)->delete();

        return response()->json([
            'user' => $user
        ], 200);
    }
}
