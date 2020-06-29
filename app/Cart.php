<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
   protected $fillable = ['user_id','article_id','quantity'];

   public function user(){
       return $this->belongsTo('App\User');
   }
}
