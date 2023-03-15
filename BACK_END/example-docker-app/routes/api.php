<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Mode_paiementController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\VillesController;
use App\Http\Controllers\Est_specialiste_deController;
use App\Http\Controllers\DocteursController;
use App\Http\Controllers\FacturesController;

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
Route::get('/debug', function (Request $request) {
    return  array("GET"=>$_GET, "POST"=>$_POST,'request'=>$request->collect());
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
/// Route::get('/villes', [VillesController::class, 'villes']);
Route::get('/villes', function (Request $request) {
    return VillesController::villes($request);
});

// Recherche de docteurs, par rapport au lieu, le nom & la profession
Route::get('/recherche', function (Request $request) {
    return Est_specialiste_deController::recherche($request);
});

// Recherche de docteurs
Route::get('/docteurs', function () {
    return DocteursController::docteurs();
});

// Recherche de factures 

Route::get('/factures', function (Request $request) {
    return FacturesController::factures($request);
});
