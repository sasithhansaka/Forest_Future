<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
     protected $fillable = [
        'name',
        'tree_count',
        'price',
    ];

     public function donations()
    {
        return $this->hasMany(Donation::class);
    }
}
