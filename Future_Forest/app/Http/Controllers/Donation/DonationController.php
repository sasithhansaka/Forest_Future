<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\All\Donations\DonationInterface; 
use Inertia\Inertia;


class DonationController extends Controller
{
   public function __construct(Protected DonationInterface $donationRepository) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
      $donations = $this->donationRepository->all(['display_name', 'trees_planted', 'created_at']);
      dd($donations);

     return Inertia::render('Home/Index');    
      
    }

    public function indexDesc(){
        $donations = $this->$donationRepository->allOrderBy('trees_planted','desc',['display_name', 'trees_planted', 'created_at']);
        dd($donations);
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
