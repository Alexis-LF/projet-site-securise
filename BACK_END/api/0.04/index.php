<?php
include_once("php/pdo.php");
include_once("php/get.php");
include_once("php/fonctions.php");

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

reponseJSONrequeteSQL($phraseRequete);

?>

