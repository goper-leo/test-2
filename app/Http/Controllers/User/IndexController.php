<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class IndexController extends Controller
{

    public function index(Request $request)
    {
        return new UserResource(auth()->user());
    }
}
