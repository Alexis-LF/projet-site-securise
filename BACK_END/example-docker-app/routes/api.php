<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Mode_paiementController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\VillesController;
use App\Http\Controllers\Est_specialiste_deController;
use App\Http\Controllers\DocteursController;
use App\Http\Controllers\FacturesController;
use App\Http\Controllers\DocumentsController;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\UserConnecteController;
use App\Http\Controllers\AuthController;


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
// préfixage par la version de l'api
Route::prefix('2.00')->group(function () {
    
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


    // routes où il faut être connecté
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::post('/deconnexion', [AuthController::class, 'deconnexion']);
        Route::post('/valider_connexion', [AuthController::class, 'valider_connexion']);
        
        Route::get('/test', function () {
            return "coucou";
        });
    });
    

    // Recherche de factures 
    
    Route::get('/factures', function (Request $request) {
        return FacturesController::factures($request);
    });
    
    // Recherche de documents    
    
    Route::get('/documents', function (Request $request) {
        return DocumentsController::documents($request);
    });

    // routes Sanctum
    Route::post('/connexion',[AuthController::class,'connexion']);
    Route::post('/inscription',[AuthController::class,'inscription']);

    
});