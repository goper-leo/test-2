<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $avatarUrl = asset('img/user_profile.jpg');
        if ($this->avatar_url)
            $avatarUrl = asset('img/big_' . $this->avatar_url);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar_url' => $avatarUrl,
            'is_admin' => $this->is_admin,
            'is_signed_up' => $this->is_signed_up,
            'is_disable' => $this->is_disable,
        ];
    }
}
