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
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->string('display_name');
            $table->string('email');
            $table->string('phone')->nullable(); 
            $table->string('team_name')->nullable(); 
            $table->text('message')->nullable(); 
            $table->boolean('anonymous')->default(false);
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->unsignedInteger('trees_planted'); 
            $table->decimal('amount', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};
