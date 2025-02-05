<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lab_results', function (Blueprint $table) {
            $table->id();
            $table->string('patientid')->nullable();
            $table->string('patientname')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('testcode');
            $table->string('testname');
            $table->string('result')->nullable();
            $table->string('flag')->nullable();
            $table->string('reference')->nullable();
            $table->string('comment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab_results');
    }
};
