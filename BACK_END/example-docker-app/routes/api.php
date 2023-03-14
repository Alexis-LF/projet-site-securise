<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Mode_paiementController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\VillesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Fonction de débuggage À DÉSACTIVER quand inutilisé
// affiche le contenu des GET et des POST
Route::get('/debug', function () {
    return  array("GET"=>$_GET, "POST"=>$_POST);
});

// un "ping" de l'api
Route::get('/test', function () {
    return "api !";
});

// Fonction de mode de paiement 
// n'est pas utile, pourrait être supprimée
Route::get('/mode_paiement', function () {
    return Mode_paiementController::mode_de_paiement();
});

// Fonction de professions 
Route::get('/professions', function () {
    return ProfessionController::noms();
});
// Fonction qui retourne les villes 
Route::get('/villes', function () {
    return VillesController::villes();
});

// Recherche de docteurs, par rapport au lieu, le nom & la profession
Route::get('/recherche', function () {
    // return ProfessionController::noms();
});

