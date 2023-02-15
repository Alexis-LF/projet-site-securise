<?php

function requetesGet(){
    switch ($_SERVER["PATH_INFO"]) {
    case "/villes":
        return villes();
        break;
    case "/professions":
        return professions();
        break;
    case "/recherche":
        return recherche();
        break;
    default:
       return "false";
    }
}

function villes()
{
    return "SELECT id, zip_code, name FROM cities;";
}

function professions()
{
    return "SELECT nom FROM profession;";
}

function recherche()
{

    $requete = "SELECT d.nom, d.prenom, p.nom AS 'profession', d.telephone, d.mail, s.nom AS 'site', s.adresse, c.zip_code, c.name AS 'ville' ";
    $requete .= "FROM est_specialiste_de e ";
    $requete .= "JOIN docteurs d ON d.mail = e.mail ";
    $requete .= "JOIN profession p ON p.nom = e.nom ";
    $requete .= "JOIN site s ON s.nom = d.nom_site ";
    $requete .= "JOIN cities c ON c.id = s.id ";

    // s'il n'y a aucun paramètre de recherche on exécute la requête sans conditions de recherche
    if (count($_GET)==0){
        $requete .= ";";
        return $requete;
    }

    // // ajout des conditions de recherche
    // $recherche = "WHERE ";

    // foreach ($_GET[""] as $clef => $valeur) {
    //     // on ajoute "AND" si ce n'est pas la 1re condition citée
    //     if($recherche != "WHERE "){
    //         $recherche .= "AND ";
    //     }
    //     $recherche .= $clef." LIKE %".$valeur."% ";

    // }

    return $requete;

}




?>