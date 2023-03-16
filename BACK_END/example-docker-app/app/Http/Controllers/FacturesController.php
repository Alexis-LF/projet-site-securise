<?php

namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class FacturesController extends Controller
{
    public static function factures(Request $request){
        if ($request->has('mail')) {
            $resultat=DB::table('facture')
            ->select('facture.identifiant', 'facture.prix_ttc', 'facture.tva', 'facture.date_facturation', 'facture.date_paiement', 'facture.mode_de_paiement', 
            'facture.mail_docteurs', DB::raw('CONCAT(d.prenom, " ", d.nom) AS prenom_nom'), 'd.telephone', 'facture.nom AS nom_site', 
            's.adresse', 'c.zip_code', 'c.name AS ville')
            ->join('docteurs AS d', 'facture.mail_docteurs', '=', 'd.mail')
            ->join('site AS s', 'facture.nom', '=', 's.nom')
            ->join('cities AS c', 's.id', '=', 'c.id')
            ->where('facture.mail', '=', $request->input('mail'));

            if ($request->has('id')) {
                $resultat->where('facture.identifiant', '=', $request->input('id'));
            }
            return ($resultat->get());
        }
        return response()->json(['error' => 'Conditions non respectées !']);
    }
}

