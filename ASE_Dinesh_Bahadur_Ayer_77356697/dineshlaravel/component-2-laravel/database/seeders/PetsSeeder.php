<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Pet;



class PetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) { // Generate 10 fake pets (change as needed)
            $image = $faker->image('public/storage/images', 640, 480, null, false);

            Pet::create([
                'name' => $faker->word,
                'category_id' => $faker->numberBetween(1, 5), // Adjust as per your category setup
                'description' => $faker->sentence,
                'price' => $faker->randomFloat(2, 10, 1000),
                'seller_id' => $faker->numberBetween(2, 4), // Assuming you have seller IDs from 1 to 10
                'image' => $image,
            ]);
        }
    }
}
