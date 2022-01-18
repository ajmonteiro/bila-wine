<?php

namespace App\Http\Controllers\Newsletter;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Newsletter;
use Mail;

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

    public function sendNewsletter(Request $request) {
        $validator = Validator::make($request->all(), [
            'text' => 'required',
        ]);

        $to_name = 'CLIENTE';
        $message = $request->text;

        if($validator) {
            $emails = Newsletter::all();

            foreach($emails as $email) {
                $to_email = $email->email;
                $subject = 'BILA WINE - ESTAMOS AQUI PARA SI';

                $data= [
                    'body'=> $message,
                    'subject'=>'BILA WINE - ESTAMOS AQUI PARA SI',
                ];

                Mail::send('newsletter.email',$data, function($message) use ($to_name,$to_email,$subject){
                    $message->to($to_email,$to_name)->subject($subject);
                    $message->from(env('MAIL_USERNAME'), env('MAIL_FROM_NAME'));
                });
            }
        }

        return response()->json([
            'sent' => 1
        ], 200);
    }
}
