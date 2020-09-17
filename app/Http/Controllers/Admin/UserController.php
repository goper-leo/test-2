<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\Admin\UserResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\User\StoreRequest;
use Illuminate\Support\Str;
use App\Notifications\UserSignUpProcess;

class UserController extends Controller
{
    /**
     * Display list of resource
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request)
    {
        return UserResource::collection(User::exceptMe()->get());
    }

    /**
     * Store
     *
     * @param StoreRequest $request
     * @return void
     */
    public function store(StoreRequest $request)
    {
        $code = Str::random(20);
        $user = new User();
        $user->email = $request->email;
        $user->code = $code;
        $user->password = bcrypt($code);
        $user->save();

        $user->notify(new UserSignUpProcess($user));
        
        return new UserResource($user);
    }
}
