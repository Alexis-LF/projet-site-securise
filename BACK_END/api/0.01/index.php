<?php
include_once("php/pdo.php");

// la variable bdd est l'objet avec lequel intéragir pour intérroger la base de donnée
$bdd = connexionBDD();

// lancement d'une requête
$reponse = requeteBDD($bdd , "SELECT * FROM docteurs;");


if ($reponse)
{
    // headers pour la mise à jour de la page et pour le JSON
    header('Content-Type: application/json; charset=utf-8');
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

