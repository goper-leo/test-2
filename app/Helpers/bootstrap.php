<?php

if (!function_exists('success_response')) {
    function success_response($data = [])
    {
        return  app('app.helper')->successResponse($data);
    }
}

if (!function_exists('error_response')) {
    function error_response($data = [])
    {
        return  app('app.helper')->errorResponse($data);
    }
}
