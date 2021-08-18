<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id')->nullable();
            $table->integer('position')->nullable();
            $table->string('name')->nullable();
            $table->integer('revision')->nullable();
            $table->string('date')->nullable();

            $table->foreign('project_id','fk_a1b588c5166d1f9c')->references('id')->on('projects');
            
            $table->index('project_id','idx_a1b588c5166d1f9c');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quotes');
    }
}
