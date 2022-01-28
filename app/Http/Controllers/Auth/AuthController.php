<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use DB;
use Carbon\Carbon;
use Hash;

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

    public function changePassword(Request $request) {
        $validator = Validator::make($request->all(), [
            'actualPassword' => 'required',
            'newPassword' => 'required',
            'repeatPassword' => 'required'
        ]);

        if($validator) {
            $pwd = User::where('id', Auth()->user()->id)->pluck('password')[0];
            $checkPwd = Hash::check($request->actualPassword, $pwd, []);

            if($checkPwd == 1) {
                if($request->newPassword == $request->repeatPassword) {
                    $user = User::where('id', Auth()->user()->id)->update([
                        'password' => bcrypt($request->newPassword)
                    ]);

                    return response()->json([
                        'message' => 'Palavra-passe alterada com sucesso'
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'A palavra-passe atual está incorreta'
                ], 406);
            }
        } else {
            return response()->json([
                'message' => 'Verifique os campos'
            ], 406);
        }
    }

    protected function passwordCorrect($suppliedPassword)
    {
        return Hash::check($suppliedPassword, $pwd, []);
    }
}
