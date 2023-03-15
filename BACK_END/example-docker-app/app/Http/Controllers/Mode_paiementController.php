<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class Mode_paiementController extends Controller
{
    /**
     * Show a list of all of the mode_paiements.
     */
    public static function mode_de_paiement()
    {
        $mode_paiements = DB::table('mode_paiement')->get();
        return $mode_paiements;
    }
}