<?php
namespace App\Repositories\All\Categories;

use App\Models\Category;  // Import the Category Model
use App\Repositories\Base\BaseRepository;

class CategoryRepository extends BaseRepository implements CategoryInterface
{
    protected $model;

    // Inject the Category model in the constructor
    public function __construct(Category $category)
    {
        $this->model = $category;  // Assign Category model to the protected $model property
    }

    // Now you can use $this->model for Eloquent queries
}
