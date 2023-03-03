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
        case "/inscription":
            return inscription();
            break;
    default:
       return "false";
    }
}

// vérifier l'identification de la personne
function identification(){
    // on fait exprès de ne pas sécuriser pour se faire passer pour quelqu'un d'autre assez facilement
    $bdd = connexionBDD();
    $phraseRequete = "SELECT mail FROM patients ";
    $phraseRequete .="WHERE mail=\"".$_POST["mail"]."\" ";
    $phraseRequete .="AND mot_de_passe=\"".$_POST["password"]."\";";

    // echo $phraseRequete;
    // exit;
    $reponse = requeteBDD($bdd , $phraseRequete);
    if (($reponse) AND ($reponse!==true)){
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
        $bdd = connexionBDD();
        $reponse = requeteBDD($bdd , infos_patient($mail));
        if ($reponse){
            $reponse[0]["jwt"] = $jwt;
            header('Content-Type: application/json; charset=utf-8');
            header('Cache-control: no-store, no-cache, must-revalidate');
            header('Pragma: no-cache');
            header('Access-Control-Allow-Origin: *');
            // code de réponse HTTP
            header('HTTP/1.1 201 Created');        
            echo json_encode($reponse);
            exit;
        }
    }
    // Échec de la connexion.
    header('HTTP/1.1 401 Unauthorized');
    header('Access-Control-Allow-Origin: *');
    echo "Connexion failed, please check your id and pwd";
    exit;
}

// Vérifier que l'utilisateur est bien connecté grâce au jeton obtenu lors
// de la connexion
function valider_connexion(){
    $decoded = decodeJWT($_POST["jwt"]);
    if ($decoded!="false"){
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-control: no-store, no-cache, must-revalidate');
        header('Pragma: no-cache');
        header('Access-Control-Allow-Origin: *');
        // code de réponse HTTP
        header('HTTP/1.1 201 Created');
        $reponse = array('mail' => $decoded->mail);
        echo json_encode($reponse);
        exit;
    }
    // Échec du test de connexion avec le token.
    header('HTTP/1.1 401 Unauthorized');
    header('Access-Control-Allow-Origin: *');
    echo "Bad token, please sign in again";
    exit;
}

/*

Note : pour supprimer un utilisateur il faut faire
DELETE FROM personne WHERE mail="samagace@gmail.com";
DELETE FROM patients WHERE mail="samagace@gmail.com";

*/

// Inscription d'un nouveau patient
function inscription()
{
    // 1. on vérife que tous les paramètres sont présents
    $valRequises = array("nom","prenom","dateNaissance","email","motDePasse","numeroPortable");
    $paramAbsents = 0;
    foreach ($valRequises as $val) {
        if (!isset($_POST[$val])){
            $paramAbsents++;
        }
    }
    if ($paramAbsents){
        // mauvais paramètres passés
        return "false";
    }
    
    $bdd = connexionBDD();

    // 2. On vérifie que le patient ne possède pas un compte
    $requetePresence = "SELECT mail FROM patients WHERE mail='".$_POST["email"]."';";
    $reponse = requeteBDD($bdd , $requetePresence);

    if (($reponse) AND ($reponse!==true)){
        // Échec de la connexion.
        header('HTTP/1.1 401 Unauthorized');
        header('Access-Control-Allow-Origin: *');
        echo "This account already exists";
        exit;
    }
    

    // 3. On enregistre l'identifiant & mdp du patient
    $requeteAuth  = "INSERT INTO patients(mail,mot_de_passe) VALUES ";
    $requeteAuth .= "('".$_POST["email"]."','".$_POST["motDePasse"]."');";

    $reponse = requeteBDD($bdd , $requeteAuth);
    if (($reponse) AND ($reponse!==true)){
        // Échec de l'inscription
        return "false";
    }
    
    
    // 4. On enregistre les coordonnées et infos personnelles du patient
    $requeteCoordonnees  = "INSERT INTO personne(mail,nom,prenom,telephone, ";
    $requeteCoordonnees  .= "date_naissance,id) VALUES ('";
    $requeteCoordonnees .= $_POST["email"]."','".$_POST["nom"]."','";
    $requeteCoordonnees .= $_POST["prenom"]."',".$_POST["numeroPortable"].", '";
    $requeteCoordonnees .= $_POST["dateNaissance"]."', ";
    // On met une ville par défaut si elle n'est pas renseignée
    if (!isset($_POST["ville"])){
        $_POST["ville"] = "Brest";
    }
    $idVille = requeteBDD($bdd , villeID($_POST["ville"]));
    try{
        $idVille = (int) $idVille[0]["id"];
    }
    catch (Exception $e) {
        return "false";
    }
    $requeteCoordonnees .= $idVille."); ";

    $reponse = requeteBDD($bdd , $requeteCoordonnees);
    if (($reponse) AND ($reponse!==true)){
        // Échec de l'ajout des coordonées dans la bdd, on annule l'inscription
        $requeteAnnulation = "DELETE FROM patients WHERE mail='".$_POST["email"]."';";
        $reponse = requeteBDD($bdd ,$requeteAnnulation);
        return "false";
    }
    else{
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-control: no-store, no-cache, must-revalidate');
        header('Pragma: no-cache');
        header('Access-Control-Allow-Origin: *');
        // code de réponse HTTP
        header('HTTP/1.1 201 Created');
        json_encode("New account created.");
        exit;
    }
    return "false";
}
