<?php

namespace App\Http\Controllers\Email;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
    protected function contactUs(Request $request) {
        $name = $request->name;
        $email = $request->email;
        $message = $request->message;
        $image = $request->image;

        $subject = 'NOVO PEDIDO DE CONTACTO';

        $data= array('body'=>"<p>$message</p>", 'subject'=>'NOVO PEDIDO DE CONTACTO', 'email' => $email, 'name' => $name, 'image' => $image);

        Mail::send('emails.contact', $data, function($message) use ($name,$email,$subject){
            $message->to(env('MAIL_USERNAME'),env('MAIL_FROM_NAME'))->subject($subject);
        });
    }
}
