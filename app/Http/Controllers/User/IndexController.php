<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\User\UpdateAvatarRequest;
use Image;

class IndexController extends Controller
{

    /**
     * Display user data 
     * 
     * @return App\Http\Resources\UserResource
     */
    public function index(Request $request)
    {
        return new UserResource(auth()->user());
    }

    /**
     * Update user avatar
     *
     * @param UpdateAvatarRequest $request
     * @return void
     */
    public function uploadAvatar(UpdateAvatarRequest $request)
    {
        $avatar_url_name = '';

        $image = $request->file('avatar');
        $avatar_url_name = time() . '.' . $request->avatar->getClientOriginalExtension();

        $destinationPath = public_path('img');
        $img = Image::make($image->path());

        $img->resize(64, 64, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath . '/small_' . $avatar_url_name);
        $img->resize(256, 256, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath . '/big_' . $avatar_url_name);

        // $destinationPath = public_path('img');
        // $image->move($destinationPath, $avatar_url_name);

        $user = auth()->user();
        $user->avatar_url = $avatar_url_name;
        $user->save();

        return new UserResource($user);
    }
}
