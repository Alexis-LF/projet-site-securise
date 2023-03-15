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
    $docteurs=DB::table('docteurs')
    ->select('mail', DB::raw('CONCAT(prenom,"  ",nom) AS prenom_nom'))->get();
    return $docteurs;
}
}