<?php

namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class DocteursController extends Controller
{
 /**
 * Enumére la liste des docteurs  
 */
public static function docteurs()
{
    return DB::select("SELECT mail, CONCAT(prenom,' ',nom) AS prenom_nom FROM docteurs");
}
}