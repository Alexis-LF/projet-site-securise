<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class VillesController extends Controller
{
    /**
     * Show a list of all of the mode_paiements.
     */
    public static function villes()
    {
        $villes = DB::table('villes')->get();
        return $villes;
    }
}