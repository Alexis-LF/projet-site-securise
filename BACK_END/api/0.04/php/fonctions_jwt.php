<?php
require __DIR__ . '/../../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

include_once("keys.php");

function encodeJWT($mail)
{
    // Create a private key of type "resource"
    $privateKey = Keys::getPrivateKey();
    $payload = [
        'mail' => $mail,
        'iat' => date_timestamp_get(date_create())
    
    ];
    $jwt = JWT::encode($payload, $privateKey, 'RS256');
    return $jwt;
}

function decodeJWT($jwt){
    $publicKey = Keys::getPublicKey();
    // Get public key from the private key
    $decoded = JWT::decode($jwt, new Key($publicKey, 'RS256'));
    return $decoded;
}


?>