<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LabResult>
 */
class LabResultFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'patientid' => fake()->randomNumber(),
            'patientname' => fake()->name(),
            'date_of_birth' => fake()->date(),
            'testcode' => fake()->countryCode(),
            'testname' => fake()->sentence(),
            'result' => fake()->randomNumber(),
            'flag' => fake()->randomElement(['H','L','']),
            'reference' => fake()->sentence(),
            'comment' => fake()->sentence(),
            'created_at' => fake()->time(),
            'updated_at' => fake()->time(),
        ];
    }
}
