<?php

namespace Database\Seeders;

use App\Models\LabResult;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('bakugan24'),
            'email_verified_at' => time(),
            'role' => 'admin',
        ]);

        // LabResult::factory()
        // ->count(500)
        // ->create();
    }
}
