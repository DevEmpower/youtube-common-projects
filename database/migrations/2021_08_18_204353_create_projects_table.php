<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('client_name')->nullable();
            $table->string('client_company_name')->nullable();
            $table->string('client_phone')->nullable();
            $table->string('client_email')->nullable();
            $table->string('client_address')->nullable();
            $table->string('project_name')->nullable();
            $table->string('project_address')->nullable();
            $table->string('quote_data')->nullable();
            $table->integer('quote_revision')->nullable();
            $table->text('project_notes')->nullable();
            $table->text('shipping_notes')->nullable();
            $table->integer('lead_time')->nullable();
            $table->text('settings')->nullable();
            $table->string('frontapp_thread_id')->nullable();
            $table->string('frontapp_gdrive_folder_id')->nullable();
            $table->string('dapulse_pulse_id')->nullable();
            $table->text('extra_id_data')->nullable();  
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
        Schema::dropIfExists('projects');
    }
}
