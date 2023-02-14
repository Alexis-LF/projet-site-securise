<?php
	// Récupérer le fichier .env dans le dossier courant
	require __DIR__ . '/../vendor/autoload.php';

	echo "Entrée dans constantes.php\n";

	$dotenv = Dotenv\Dotenv::createImmutable(".");
	$dotenv->load();
	// les variables sont désormais dans  $_ENV[]
	echo "<pre>";
	var_dump($_ENV);
	echo "</pre>";
?>
