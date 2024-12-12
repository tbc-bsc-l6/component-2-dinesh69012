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
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');

            $table->string('slug')->unique();
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->string('title')->nullable()->default('New blog post');
            $table->string('subtitle')->nullable()->default('');
            $table->text('meta_desc')->nullable();
            $table->mediumText('post_body')->nullable();
            $table->string('use_view_file')
                ->nullable()
                ->comment('If not null, this should refer to a blade file in /views/');
            $table->dateTime('posted_at')->index()->nullable()
                ->comment('Public posted at time, if this is in future then it wont appear yet');
            $table->boolean('is_published')->default(true);
            $table->string('image_large')->nullable();
            $table->string('image_medium')->nullable();
            $table->string('image_thumbnail')->nullable();

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
        Schema::dropIfExists('posts');
    }
};
