<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use App\Repositories\All\Donations\DonationInterface;
use App\Repositories\All\Donations\DonationRepository;

use App\Repositories\All\Categories\CategoryInterface;
use App\Repositories\All\Categories\CategoryRepository;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(DonationInterface::class, DonationRepository::class);
        $this->app->bind(CategoryInterface::class, CategoryRepository::class);


    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
