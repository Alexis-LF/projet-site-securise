<?php

// require_once("php/pdo.php");


// connexion à la BDD
//=============================================================================
$bdd = connexionBDD();
// Récupération des paramètres passés dans l'URI
//=============================================================================
$uri = "";
$demande = "";
$parametres = [];
$uri = recupURI();
$requete = "";

$demande = recupParametres($uri , $parametres);

// echo "URI : ".$uri."<br><br>";
// echo "demande : ".$demande."<br>";
// echo "<pre>Paramètres : ";
// print_r($parametres);
// echo "</pre>";

// Requêtes SQL en fonction des paramètres
//=============================================================================
$verbe = $_SERVER['REQUEST_METHOD'];

if($demande == "auth"){
//    selectAuth($bdd,$parametres);
    echo "auth";
    exit;
}
else{
//    $requete = selectDemande($bdd,$demande,$parametres);
    echo "requête";
    exit;
}


// echo "<pre>Requête : ";
// print_r($requete);
// echo "</pre>";

// Éxécution des requêtes et récupération des données en retour
//=============================================================================
$donnees = [] ;

//S'il y a plusieurs requêtes SQL à passer
//-----------------------------------------------------------------------------
$nbResults = 0;
if ( is_array($requete) ){  

   for ($i = 0 ; $i < count($requete) ; $i++) {

      $nouvDonnees[$i] = requeteBDD($bdd ,$requete[$i]);

      foreach ($nouvDonnees[$i] as $ligne) {
              foreach ($ligne as $key => $value) {
                  $donnees[$nbResults][$key] = $value;
              }
              //Pour savoir de quelle requête provient cette donnée:
              $donnees[$nbResults]["num_requete"] = $i;
              $nbResults++;
      }
   }
}
//S'il y a qu'une requête SQL à passer
//-----------------------------------------------------------------------------
else{
   $donnees = requeteBDD($bdd , $requete);
}
//Fermeture de la connnexion
$bdd = null;

// Affichage des données (Pour les GET surtout)
//=============================================================================
echo json_encode($donnees);



?>


