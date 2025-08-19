<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Donation\DonationController;
use App\Http\Controllers\Donation\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/Home', [DonationController::class, 'index'])->name('profile.index');
    Route::get('/Home/Form', [CategoryController::class, 'index'])->name('Category.index');
    Route::get('/Home/donations', [DonationController::class, 'userdonations'])->name('profile.userdonations');
    Route::post('/store', [DonationController::class, 'store'])->name('profile.store');

    
});

require __DIR__.'/auth.php';
