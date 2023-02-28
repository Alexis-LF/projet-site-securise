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
    case "/documents":
        return documents();
        break;
    case "/factures":
        return factures();
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

// Renvoi de l'ID de la ville
function villeID($ville)
{
    return "SELECT id FROM cities WHERE name LIKE \"".$ville."\" ;";
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

function infos_patient($mail){
    $requete = "SELECT pa.mail AS mail, pe.prenom, pe.nom, c.name AS \"ville\" ";
    $requete .="FROM patients pa ";
    $requete .="JOIN personne pe ON pa.mail = pe.mail ";
    $requete .="JOIN cities c ON pe.id = c.id ";
    $requete .="WHERE pa.mail = \"".$mail."\";";
    return $requete;
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

// envoi des documents selon un utilisateur
function documents()
{
    if (isset($_GET["mail"])){
        $phraseRequete  = "SELECT d.nom_doc, d.type, d.chemin, d.depot_patient AS \"date_depot\", ";
        $phraseRequete .= "d.signature_docteur, CONCAT(m.prenom,' ',m.nom) AS 'prenom_nom', ";
        $phraseRequete .= "d.mail_docteurs, m.telephone, m.nom_site, ";
        $phraseRequete .= "s.adresse, c.zip_code, c.name AS 'ville' ";
        $phraseRequete .= "FROM documents d ";
        $phraseRequete .= "JOIN docteurs m ON d.mail_docteurs = m.mail ";
        $phraseRequete .= "JOIN site s ON m.nom_site = s.nom ";
        $phraseRequete .= "JOIN cities c ON s.id = c.id ";
        $phraseRequete .= "WHERE d.mail = \"".$_GET["mail"]."\";";
        return $phraseRequete;
    }
    return "false";
}

// envoi des (ou d'1) facture(s) selon un utilisateur
function factures()
{
    if (isset($_GET["mail"])){

        $phraseRequete  = "SELECT f.identifiant, f.prix_ttc, f.tva, f.date_facturation, ";
        $phraseRequete .= "f.date_paiement, f.mode_de_paiement, f.mail_docteurs, ";
        $phraseRequete .= "CONCAT(d.prenom,' ',d.nom) AS 'prenom_nom', d.telephone, ";
        $phraseRequete .= "f.nom AS 'nom_site', s.adresse, c.zip_code, c.name AS 'ville' ";
        $phraseRequete .= "FROM facture f ";
        $phraseRequete .= "JOIN docteurs d ON f.mail_docteurs = d.mail ";
        $phraseRequete .= "JOIN site s ON f.nom = s.nom ";
        $phraseRequete .= "JOIN cities c ON s.id = c.id ";
        $phraseRequete .= "WHERE f.mail = '".$_GET["mail"]."' ";
        // Sélecyion 
        if(isset($_GET["id"])){
            $phraseRequete .= "AND f.identifiant = '".$_GET["id"]."' ";
        }
        $phraseRequete .= ";";

        return $phraseRequete;
    }
    return "false";
}
