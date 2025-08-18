<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\All\Donations\DonationInterface; 
use Inertia\Inertia;


class DonationController extends Controller
{
   public function __construct(Protected DonationInterface $donationInterface) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    $allDonations = $this->donationInterface->all(['display_name', 'trees_planted', 'created_at','message']);
    $topDonations = $this->donationInterface->allOrderBy('trees_planted', 'desc', ['display_name', 'trees_planted', 'created_at']);
    $totalTrees = $this->donationInterface->sumTreesPlanted();


    return Inertia::render('Home/Index', [
        'allDonations' => $allDonations,
        'topDonations' => $topDonations,
        'totalTrees' => $totalTrees,
    ]); 
      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


    }

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
