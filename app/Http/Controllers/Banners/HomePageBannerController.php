<?php

namespace App\Http\Controllers\Banners;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use DB;

class HomePageBannerController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:128',
            'subtitle' => 'required|max:128',
            'image' => 'required',
        ]);

        if($validator) {
            $uploadFolder = `images/banners`;
            $image = $request->file('image');
            $image_path = $image->store($uploadFolder, 'public');

            $banner = DB::table('homepage_banners')->insert([
                'title' => $request->title,
                'subtitle' => $request->subtitle,
                'image' => "/storage/${image_path}"
            ]);

            return response()->json([
                'banners' => true
            ], 200);
        }
    }

    protected function getBanners() {
        $banners = DB::table('homepage_banners')->get();

        return response()->json([
            'banners' => $banners
        ], 200);
    }
}
