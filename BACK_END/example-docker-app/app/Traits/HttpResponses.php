<?php
// Source : https://github.com/codewithdary/laravel-sanctum-tutorial/blob/main/app/Traits/HttpResponses.php


namespace App\Traits;

trait HttpResponses {
    
    protected function success($data, string $message = null, int $code = 200)
    {
        return response()->json([
            'status' => 'Request was successful.',
            'message' => $message,
            'data' => $data
        ], $code);
    }
    
    protected function error($data, string $message = null, int $code)
    {
        return response()->json([
            'status' => 'An error has occurred...',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}