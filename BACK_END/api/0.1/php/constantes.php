<?php
    // Récupérer le fichier .env dans le dossier courant
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
    // les variables sont désormais dans  $_ENV[]
?>