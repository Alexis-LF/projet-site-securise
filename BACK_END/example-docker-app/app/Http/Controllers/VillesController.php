<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
define("RECHERCHE_VILLE_MINI", 3);
class VillesController extends Controller
{
    /**
     * Enumére la liste des villes qui répondent aux conditions  
     */
    public static function villes(Request $request)
    {
        if ($request->has('name') && (strlen($request->input('name')) >= RECHERCHE_VILLE_MINI)) {
            $resultat=DB::table('cities')->select('id', 'zip_code', 'name')->where('name', 'like', $request->input('name').'%')->get();
            return response()->json($resultat);
        }
        return response()->json(['error' => 'Conditions non respectée !']);
    }
}
