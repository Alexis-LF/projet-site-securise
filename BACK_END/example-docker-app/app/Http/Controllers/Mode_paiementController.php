<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class Mode_paiementController extends Controller
{
    /**
     * Show a list of all of the application's mode_paiements.
     */
    public static function mode_paiement()
    {
        $mode_paiements = DB::select('select * from mode_paiement');
        return $mode_paiements;
    }
}