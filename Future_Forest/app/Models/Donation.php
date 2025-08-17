<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    //

     protected $fillable = [
        'display_name',
        'email',
        'phone',
        'team_name',
        'message',
        'periodic_updates',
        'anonymous',
        'is_gift',
        'tree_category_id',
        'trees_planted',
        'amount',
    ];

    public function category()
    {
        return $this->belongsTo(TreeCategory::class, 'tree_category_id');
    }
}
