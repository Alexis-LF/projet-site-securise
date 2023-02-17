<?php

include_once("constantes.php");

// Se connecter à la base de données pour pouvoir intéragir avec elle
// via la variable $bdd
function connexionBDD(){
   try{
     //on passe les identifients de la BDD définis dans constantes.php
     $bdd = new PDO('mysql:host='.$_ENV['SERVEUR_BDD'].';dbname='.$_ENV['NOM_BDD'].';charset=utf8', $_ENV['USER_BDD'], $_ENV['MDP_BDD']);
    $bdd -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
   }
   catch (PDOException $erreur){
     //si la connexion à la BDD échoue on affiche l'erreur
     error_log('Connection error: '.$erreur->getMessage());
     echo 'Connection error: '.$erreur->getMessage();
     return false;
   }
   return $bdd;
}


// Passer la requête SQL, 
// récupérer les données voulues dans la base de données,
// et les renvoyer en JSON
function requeteBDD($bdd , $phraseRequete){
  try{
    $declaRequete = $bdd->prepare($phraseRequete);
    $declaRequete->execute();
    //on récupère un tableau de lignes réponses
    $reponse = true;
    $reponse = $declaRequete->fetchAll(PDO::FETCH_ASSOC);
  }
  //échec de la connexion à la BDD
  catch (PDOException $erreur){
    //erreur sans conséquences pour l'ajout , la modification ou la lecture
    if (strpos($erreur->getMessage(),"General error") !== false){
        return true;
    }
    //retour de l'erreur
    else{
        return "Erreur lors de l'éxecution de la requête :\n".$erreur->getMessage()."\n";
    }
  }
  //retour des données
  return $reponse;   
}

// Fonction qui 
function reponseJSONrequeteSQL($phraseRequete){
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

    // la variable bdd est l'objet avec lequel intéragir pour intérroger la base de donnée
    $bdd = connexionBDD();

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
    header('HTTP/1.1 200 OK');
    // envoi des données
    echo json_encode($reponse);
    exit;
    }
    // Mauvaise requête envoyée.
    header('HTTP/1.1 400 Bad Request');
    echo "Bad Request";
    exit;
}

?>


