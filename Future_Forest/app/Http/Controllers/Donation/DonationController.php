<?php

namespace App\Http\Controllers\Donation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\All\Donations\DonationInterface; 
use App\Repositories\All\Categories\CategoryInterface;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class DonationController extends Controller
{
   public function __construct(Protected DonationInterface $donationInterface,Protected CategoryInterface $categoryInterface) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    $allDonations = $this->donationInterface->all(['display_name', 'trees_planted', 'created_at','message']);
    $topDonations = $this->donationInterface->allOrderBy('trees_planted', 'desc', ['display_name', 'trees_planted', 'created_at']);
    $totalTrees = $this->donationInterface->sumTreesPlanted();
    $allCategories = $this->categoryInterface->all();

    // dd($allCategories);
    return Inertia::render('Home/Index', [
        'allDonations' => $allDonations,
        'topDonations' => $topDonations,
        'totalTrees' => $totalTrees,
        'allCategories' => $allCategories,  
    ]); 
      
    }

    public function userdonations()
    {
        $email = Auth::user()->email; 

        $donations = $this->donationInterface->getByColumn(
            ['email' => $email], 
            ['id','amount','trees_planted','message','created_at'], 
            ['category'] 
        );

        return Inertia::render('MyProfile/Donations', [
            'donations' => $donations,
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
    $validated = $request->validate([
    'display_name'   => 'required|string|max:255',
    'team_name'      => 'nullable|string|max:255',
    'phone'          => 'nullable|string|max:20',
    'message'        => 'nullable|string|max:500',
    'category_id'    => 'required|integer|exists:categories,id',
    'trees_planted'  => 'required|integer|min:1',
    'amount'         => 'required|numeric|min:1',
    ]);

    $validated['email'] = Auth::user()->email;

    // Save donation
    $donation = $this->donationInterface->create($validated);

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
