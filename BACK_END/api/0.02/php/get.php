<?php

function requetesGet(){
    switch ($_SERVER["PATH_INFO"]) {
    case "/villes":
        villes();
        break;
    case "/professions":
        professions();
        break;
    case "/recherche":
        recherche();
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
    echo "fonction professions()<br>";
    exit;
}

function recherche()
{
    echo "fonction recherche()<br>";
    exit;
}




?>