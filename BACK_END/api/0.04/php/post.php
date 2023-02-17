<?php
include_once("fonctions_jwt.php");

// Aiguillage des requêtes de type POST
function requetesGet(){
    switch ($_SERVER["PATH_INFO"]) {
    case "/connexion":
        return connexion();
        break;
    default:
       return "false";
    }
}

function connexion()
{
    $jwt = encodeJWT($_POST["mail"]);
}

?>