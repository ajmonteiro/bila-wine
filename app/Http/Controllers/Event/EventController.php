<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Event;

class EventController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:128',
            'description' => 'max:3000',
            'price' => 'required',
            'image' => 'required',
            'person_number' => 'required',
            'duration' => 'required'
        ]);

        if($validator) {
            $uploadFolder = `images/events`;
            $image = $request->file('image');
            $image_path = $image->store($uploadFolder, 'public');
            $event = new Event();

            $event->title = $request->title;
            $event->description = $request->description;
            $event->duration = $request->duration;
            $event->price = $request->price;
            $event->person_number = $request->person_number;
            $event->image = "/storage/${image_path}";

            $event->save();

            return response()->json([
                'event' => $event->id
            ], 200);
        }
    }

    public function all_paginate() {
        return response()->json([
            'events' => Event::paginate(5)
        ], 200);
    }

    public function all() {
        return response()->json([
            'events' => Event::all()
        ], 200);
    }

    public function delete($id) {
        $event = Event::findOrFail($id);

        if(!$event) {
            return response()->json([
                'event' => 'This event does not exist'
            ], 401);
        }

        $event->delete();

        return response()->json([
            'event' => $event
        ], 200);
    }

    public function getById($id) {
        $event = Event::where('id', $id)->get();
        
        if(!$event) {
            return response()->json([
                'event' => 'This event does not exist'
            ], 401);
        }

        return response()->json([
            'event' => $event
        ], 200);
    }
}
