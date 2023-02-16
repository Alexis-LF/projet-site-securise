<?php
include_once("php/pdo.php");
include_once("php/get.php");
include_once("php/fonctions.php");

// la variable bdd est l'objet avec lequel intéragir pour intérroger la base de donnée
$bdd = connexionBDD();

// contiendra la phrase à taper sur mysql
$phraseRequete = "";

// On vérifie si c'est un GET, POST, PUT, et on redirige le traitement aux fonctions appropriées
switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        $phraseRequete = requetesGet();
        break;
    default:
        $phraseRequete = "false";
}

// Message d'erreur si mauvaise requête écrite
if($phraseRequete == "false"){
    header('HTTP/1.1 400 Bad Request');
    echo "Bad Request";
    exit;
}

// Décommenter les lignes ci-dessous pour afficher les requêtes SQL prêtes à être envoyées
// echo $phraseRequete;
// exit;

// On rajoute une limite à la requête SQL pour ne pas faire planter le traitement des données du front-end
$phraseRequete = str_replace(";"," LIMIT ".LIMITE_RESULTATS.";",$phraseRequete);
// lancement d'une requête
$reponse = requeteBDD($bdd , $phraseRequete);

if ($reponse)
{
    // headers pour la mise à jour de la page et pour le JSON
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-control: no-store, no-cache, must-revalidate');
    header('Pragma: no-cache');
    // Pour que le CORS du navigateur ne bloque pas le chargement
    header('Access-Control-Allow-Origin: *');
    // code de réponse HTTP
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        header('HTTP/1.1 201 Created');
    }
    else{
        header('HTTP/1.1 200 OK');
    }
    // envoi des données
    echo json_encode($reponse);
    exit;
}
// Mauvaise requête envoyée.
header('HTTP/1.1 400 Bad Request');
echo "Bad Request";
exit;
?>

