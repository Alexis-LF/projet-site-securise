<?php

include_once("constantes.php");

//=============================================================================
// fonction connexionBDD
//
// Se connecter à la base de données pour pouvoir intéragir avec elle
// via la variable $bdd
//=============================================================================

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


//===========================================================================
// fonction requeteBDD
//
// Passer la requête SQL, 
// récupérer les données voulues dans la base de données,
// et les renvoyer en JSON
//===========================================================================
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

?>
