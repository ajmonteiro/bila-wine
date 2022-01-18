<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use DB;
use Carbon\Carbon;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws ValidationException
     */
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

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkLogin() {
        $role = DB::table('user_role')->where('id_user', Auth::user()->id)
            ->join('roles', 'roles.id', '=', 'user_role.id_role')
            ->pluck('roles.name');
        return response()->json([
            'role' => $role,
            'user' => Auth::user()
        ], 200);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request) {
        $user = DB::table('personal_access_tokens')->where('tokenable_id', Auth::user()->id)->delete();

        return response()->json([
            'user' => $user
        ], 200);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    protected function role() {
        $role = DB::table('user_role')->where('id_user', Auth::user()->id)
            ->join('roles', 'roles.id', '=', 'user_role.id_role')
            ->pluck('roles.name')[0];

        return response()->json([
            'role' => $role
        ], 200);
    }

    public function getUsername() {
        return response()->json([
            'username' => Auth::user()->name
        ], 200);
    }

    public function userIsAdmin() {
        $isAdmin = DB::table('user_role')->where('id_user', Auth::user()->id)->pluck('id_role');
        if($isAdmin->isEmpty()) {
            return response()->json([
                'admin' => 0
            ], 200);
        }

        $admin = 0;

        if($role == '2') {
            $admin = 1;
        }

        return response()->json([
            'admin' => $admin
        ], 200);
    }

    public function userInfoChange(Request $request) {
        $user = User::where('id', Auth::user()->id)->update([
            'name' => $request->username,
            'email' => $request->email
        ]);

        return response()->json([
            'success' => 1
        ], 200);
    }

    public function userCheckEmail($id) {
        $user = User::where('id', $id)->update([
            'email_verified_at' => Carbon::now()
        ]);

        return response()->json([
            'success' => 1
        ], 200);
    }
}
