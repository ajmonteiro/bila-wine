<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Facades\Hash;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::insert([
            'id' => 1,
            'name' => 'Categoria 1'
        ]);
        
        Category::insert([
            'id' => 2,
            'name' => 'Categoria 2'
        ]);
    }
}
