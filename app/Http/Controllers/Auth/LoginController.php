<?php

namespace App\Http\Controllers\Auth;

use Hash;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    /**
     * Login user
     * @param  App\Http\Requests\Auth\LoginRequest
     * @return
     */
    public function index(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();
 
        if (!$user->is_signed_up)
            return error_response('You must finish your sign up. See your email for the process.');

        if ($user->is_disable)
            return error_response('You are disable for logging in.');
        
        if (!Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'These credentials do not match our records.',
                'errors' => [
                    'email' => ['These credentials do not match our records.'],
                    'password' => [''],
                ]
            ], 422);
        }

        $token = $user->createToken(env('APP_NAME'))->plainTextToken;

        $response = [
            'data' => [
                'user' => new UserResource($user),
                'token' => $token
            ]
        ];

        return response($response, 201);
    }
}
