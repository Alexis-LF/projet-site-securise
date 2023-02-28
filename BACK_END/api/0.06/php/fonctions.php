<?php
// Fonction de débuggage pour aider au développement
function debug(){
    $uri = $_SERVER['REQUEST_URI'];
    var_dump($uri);
    echo "<br>GET :<br><pre>";
    var_dump($_GET);
    echo "</pre> POST :<br><pre>";
    var_dump($_POST);
    echo "</pre> SERVER :<br><pre>";
    var_dump($_SERVER);
    echo "</pre>";
    exit;
}
