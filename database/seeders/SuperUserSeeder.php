<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'id' => 1,
            'name' => 'ajmonteiro',
            'email' => 'ajmonteiro@aautad.pt',
            'password' => Hash::make('password'),
            'image' => 'image.jpg'
        ]);             
    }
}
