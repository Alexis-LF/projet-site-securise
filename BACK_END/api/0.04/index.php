<?php
include_once("php/pdo.php");
include_once("php/get.php");
include_once("php/post.php");
include_once("php/fonctions.php");

// On vérifie si c'est un GET, POST, PUT, et on redirige le traitement aux fonctions appropriées
switch ($_SERVER['REQUEST_METHOD']) {
    // case "GET":
    //     reponseJSONrequeteSQL(requetesGet());
    //     break;
    // case "POST":
    case "GET":
        requetesPost();
        break;
    default:
        header('HTTP/1.1 400 Bad Request');
        echo "Bad Request";
        exit;
}


?>

