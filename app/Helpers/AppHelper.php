<?php

namespace App\Helpers;

use App\Models\User;

class AppHelper
{
    /**
     * Return a json success response
     * @param  array $data [description]
     * @return [type]       [description]
     */
    public function successResponse($data)
    {
        return response()->json(['data' =>  $data]);
    }

    /**
     * Return 404 error response
     * @param  string $message
     * @return json
     */
    public function errorResponse($message)
    {
        return response()->json(compact('message'), 406);
    }

}
