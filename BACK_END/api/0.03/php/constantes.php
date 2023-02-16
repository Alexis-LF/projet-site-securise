<?php
// pour le fonctionnement des librairies externes
require __DIR__ . '/../vendor/autoload.php';

// Récupérer le fichier .env dans le dossier courant
$dotenv = Dotenv\Dotenv::createImmutable(".");
$dotenv->load();
// les variables sont désormais dans  $_ENV[]

define("LIMITE_RESULTATS", 4500);
define("RECHERCHE_VILLE_MINI", 3);
?>
