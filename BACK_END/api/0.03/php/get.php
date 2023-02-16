<?php
include_once("constantes.php");

// Aiguillage des requêtes de type GET
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
    case "/docteurs":
        return docteurs();
        break;
    default:
       return "false";
    }
}

// Envoi des villes correspondantes aux premières lettres tapées
function villes()
{
    if (isset($_GET["name"]) && (strlen($_GET["name"]) >= RECHERCHE_VILLE_MINI) ){
        return "SELECT id, zip_code, name FROM cities WHERE name LIKE \"".$_GET["name"]."%\" ;";
    }
    return "false";
}

// envoi de la liste des professions médicales
function professions()
{
    return "SELECT nom FROM profession;";
}

// envoi de la liste des docteurs
function docteurs()
{
    return "SELECT mail, CONCAT(prenom,' ',nom) AS 'prenom_nom' FROM docteurs;";
}

// recherche avec filtrage par critères
function recherche()
{
    $requete = "SELECT d.nom, d.prenom, CONCAT(d.prenom,' ',d.nom) AS 'prenom_nom', p.nom AS 'profession', d.telephone, d.mail, s.nom AS 'site', s.adresse, c.zip_code, c.name AS 'ville' ";
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

    // ajout des conditions de recherche
    $recherche = "WHERE ";

    // on traite chaque paramètre GET comme un critère de recherche
    foreach ($_GET as $clef => $valeur) {
        // on ajoute "AND" si ce n'est pas la 1re condition citée
        if($recherche != "WHERE "){
            $recherche .= "AND ";
        }
        // dans les champs clefs du GET (dans l'URI), les . sont remplacés par des _ : on corrige ça
        $clef = preg_replace('/' . "_" . '/', ".", $clef, 1);

        // cas particulier : recherche par docteur
        if($clef=="d.prenom_nom"){
        $recherche .= "CONCAT(d.prenom,' ',d.nom) LIKE \"%".$valeur."%\" ";
        }
        // les autres clés correspondent au colonnes de la base de données
        else{
            $recherche .= $clef." LIKE \"%".$valeur."%\" ";
        }
    }
    $requete .= $recherche.";";
    return $requete;
}
?>