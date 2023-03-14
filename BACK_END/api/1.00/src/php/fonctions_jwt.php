<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require __DIR__ . '/../vendor/autoload.php';
error_reporting(E_ALL);


function getPrivateKey()
{
    $privateKeyFile = __DIR__.'/../.ssh/id_rsa';

    // Create a private key of type "resource"
    return openssl_pkey_get_private(
        file_get_contents($privateKeyFile),
        ""
    );
    
}

function encodeJWT($mail)
{
    $privateKey = getPrivateKey();
    $payload = [
        'mail' => $mail,
        'iat' => date_timestamp_get(date_create())
    
    ];
    $jwt = JWT::encode($payload, $privateKey, 'RS256');
    return $jwt;
}

function decodeJWT($jwt){
    $privateKey = getPrivateKey();

    $publicKey = openssl_pkey_get_details($privateKey)['key'];
    // Get public key from the private key
    try {
        $decoded = JWT::decode($jwt, new Key($publicKey, 'RS256'));
    }
    catch (Exception $e) {
        return "false";
    }
    return $decoded;

}
