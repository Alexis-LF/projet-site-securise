<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Mode_paiementController;
use App\Http\Controllers\ProfessionController;
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

Route::get('/test', function () {
    return "api !";
});

Route::get('/mode_paiement', function () {
    return Mode_paiementController::mode_de_paiement();
});

Route::get('/professions', function () {
    return ProfessionController::noms();
});

Route::get('/villes', function () {
    return VillesController::villes();
});

Route::get('/recherche', function () {
    // return ProfessionController::noms();
});

