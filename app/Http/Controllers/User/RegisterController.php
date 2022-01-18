<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Mail;

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

            $userid = $user->id;
            $to_email = $request->email;
            $to_name = $request->name;
            $subject = "BILAWINE - UTILIZADOR $userid";
            $data = [
                'body' => "Obrigado por se registar!",
                'subject' => "BILAWINE - UTILIZADOR $userid",
                'verify' => env('APP_URL').'ativar/email/'.$userid
            ];

            Mail::send('register.email',$data, function($message) use ($to_name,$to_email,$subject){
                $message->to($to_email,$to_name)->subject($subject);
                $message->from(env('MAIL_USERNAME'), env('MAIL_FROM_NAME'));
            });
        }

        return response()->json([
            'user' => $user->id
        ], 200);
    }
}
