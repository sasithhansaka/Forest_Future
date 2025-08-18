<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\All\Categories\CategoryInterface; 
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __construct(Protected CategoryInterface $categoryInterface) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
      $allCategories=  $this->categoryInterface->all();

      return Inertia::render('Home/DonationForm', [
        'allCategories' => $allCategories
    ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
