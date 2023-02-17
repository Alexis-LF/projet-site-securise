<?php
include_once("fonctions_jwt.php");
include_once("pdo.php");

// Aiguillage des requêtes de type POST
function requetesPost(){
    switch ($_SERVER["PATH_INFO"]) {
    case "/connexion":
        return connexion();
        break;
    default:
       return "false";
    }
}

// vérifier l'identification de la personne
function identification(){
    // on fait exprès de ne pas sécuriser pour se faire passer pour quelqu'un d'autre assez facilement
    $bdd = connexionBDD();
    // $phraseRequete = "SELECT mail FROM patients WHERE mail=".$_POST["mail"].";";
    $phraseRequete = "SELECT mail FROM patients WHERE mail=\"".$_GET["mail"]."\";";
    $reponse = requeteBDD($bdd , $phraseRequete);
    if ($reponse){
        return (string) $reponse[0]["mail"];
    }
    return "false";

}


function connexion()
{
    $mail = identification();
    // Connexion réussie
    if ($mail!="false"){
        $jwt = encodeJWT($mail);
        header('Content-Type: text/html; charset=utf-8');
        header('Cache-control: no-store, no-cache, must-revalidate');
        header('Pragma: no-cache');
        header('Access-Control-Allow-Origin: *');
        // code de réponse HTTP
        header('HTTP/1.1 201 Created');
        echo $jwt;
        exit;
    }
    // Échec de la connexion.
    header('HTTP/1.1 401 Unauthorized');
    echo "Connexion failed, please check your id and pwd";
    exit;
}

?>