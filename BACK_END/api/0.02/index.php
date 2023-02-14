<?php
include_once("php/pdo.php");
include_once("php/get.php");

function debug(){
    $uri = $_SERVER['REQUEST_URI'];
    var_dump($uri);
    echo "<br>GET :<br><pre>";
    var_dump($_GET);
    echo "</pre> POST :<br><pre>";
    var_dump($_POST);
    echo "</pre> SERVER :<br><pre>";
    var_dump($_SERVER);
    echo "</pre>";

    exit;
}

// la variable bdd est l'objet avec lequel intéragir pour intérroger la base de donnée
$bdd = connexionBDD();

$verbe = $_SERVER['REQUEST_METHOD'];

$phraseRequete = "";

if($verbe=="GET"){
    $phraseRequete = requetesGet();
}

// lancement d'une requête
$reponse = requeteBDD($bdd , $phraseRequete);


if ($reponse)
{
    // headers pour la mise à jour de la page et pour le JSON
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Cache-control: no-store, no-cache, must-revalidate');
    header('Pragma: no-cache');
    if ($requestMethod == 'POST')
    header('HTTP/1.1 201 Created');
    else
    header('HTTP/1.1 200 OK');
    // envoi des données
    echo json_encode($reponse);
    exit;
}
// Mauvaise requête envoyée.
header('HTTP/1.1 400 Bad Request');
?>

