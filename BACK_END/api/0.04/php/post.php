<?php
include_once("fonctions_jwt.php");
include_once("fonctions.php");
include_once("pdo.php");

// Aiguillage des requêtes de type POST
function requetesPost(){
    switch ($_SERVER["PATH_INFO"]) {
    case "/connexion":
        return connexion();
        break;
    case "/valider_connexion":
        return valider_connexion();
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
    $phraseRequete = "SELECT mail FROM patients ";
    $phraseRequete .="WHERE mail=\"".$_POST["mail"]."\" ";
    $phraseRequete .="AND mot_de_passe=\"".$_POST["password"]."\";";

    // echo $phraseRequete;
    // exit;
    $reponse = requeteBDD($bdd , $phraseRequete);
    if ($reponse){
        return (string) $reponse[0]["mail"];
    }
    return "false";

}

// Connexion d'un utilisateur en lui envoyant son jeton de connexion JWT
// Ce jeton permet de vérifier l'identité de l'utilisateur
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

// Vérifier que l'utilisateur est bien connecté grâce au jeton obtenu lors
// de la connexion
function valider_connexion(){
    $decoded = decodeJWT($_POST["jwt"]);
    if ($decoded!="false"){
        header('Content-Type: text/html; charset=utf-8');
        header('Cache-control: no-store, no-cache, must-revalidate');
        header('Pragma: no-cache');
        header('Access-Control-Allow-Origin: *');
        // code de réponse HTTP
        header('HTTP/1.1 201 Created');
        echo "You are connected as ".$decoded->mail.".";
        exit;
    }
    // Échec du test de connexion avec le token.
    header('HTTP/1.1 401 Unauthorized');
    echo "Bad token, please sign in again";
    exit;
}


?>