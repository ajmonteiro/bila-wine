<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
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
        $role_admin = Role::where('name', 'Admin')->first();

        $user = new User();
        $user->name = "ajmonteiro";
        $user->email = "ajmonteiro@gmail.com";
        $user->password = Hash::make('password');
        $user->image = 'image.jpg';
        $user->save();
        $user->roles()->attach($role_admin);
    }
}
