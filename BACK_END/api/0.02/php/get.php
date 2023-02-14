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
    echo "fonction recherche()<br>";
    exit;
}




?>