<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\SignUpRequest;
use App\Notifications\UserWelcomMessage;
use App\Models\User;
use App\Http\Resources\UserResource;

class SignUpController extends Controller
{
    /**
     * Store
     *
     * @param SignUpRequest $request
     * @return void
     */
    public function index(SignUpRequest $request)
    {
        $user = User::where('code', $request->code)->first();
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->save();

        $when = now()->addMinutes(env('SIGN_UP_DELAY_IN_MINUTES', 5));
        $user->notify((new UserWelcomMessage($user))->delay($when));

        return new UserResource($user);
    } 
}
