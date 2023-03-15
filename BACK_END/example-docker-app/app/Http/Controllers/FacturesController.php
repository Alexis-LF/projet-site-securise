<?php

namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class FacturesController extends Controller
{
    function factures(Request $request){
        if ($request->has('mail')) {
            $resultat=DB::table('factures')
            ->select('f.identifiant', 'f.prix_ttc', 'f.tva', 'f.date_facturation', 'f.date_paiement', 'f.mode_de_paiement', 
            'f.mail_docteurs', DB::raw('CONCAT(d.prenom, " ", d.nom) AS prenom_nom'), 'd.telephone', 'f.nom AS nom_site', 
            's.adresse', 'c.zip_code', 'c.name AS ville')
            ->join('docteurs AS d', 'f.mail_docteurs', '=', 'd.mail')
            ->join('site AS s', 'f.nom', '=', 's.nom')
            ->join('cities AS c', 's.id', '=', 'c.id')
            ->where('f.mail', '=', $request->input('mail'));

            if ($request->has('id')) {
                $resultat->where('f.identifiant', '=', $request->)
            }
    }



}
}