<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helpers\AppHelper;

class AppHelperServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('app.helper', function ($app) {
            return new AppHelper();
        });
        $this->app->alias('app.helper', AppHelper::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
