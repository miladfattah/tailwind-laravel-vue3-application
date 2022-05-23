<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suervey_answer_questions', function (Blueprint $table) {
            $table->id();
            $table->foreginIdFor(\App\Models\SurveyQuestoin::class , 'servey_question_id');
            $table->foreginIdFor(\App\Models\SurveyAnswer::class , 'servey_answer _id');
            $table->text('answer');
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
        Schema::dropIfExists('suervey_answer_questions');
    }
};
