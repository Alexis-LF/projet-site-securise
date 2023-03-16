<?php

namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class DocumentsController extends Controller
{
public static function documents(Request $request)
{
    if ($request->has('mail')) {
        $resultat = DB::table('documents')
            ->select('documents.nom_doc', 'documents.type', 'documents.chemin', 'documents.depot_patient AS date_depot',
                     'documents.signature_docteur', DB::raw('CONCAT(docteurs.prenom," ",docteurs.nom) AS prenom_nom'),
                     'documents.mail_docteurs', 'docteurs.telephone', 'docteurs.nom_site', 'site.adresse',
                     'cities.zip_code', 'cities.name AS ville')
            ->join('docteurs', 'documents.mail_docteurs', '=', 'docteurs.mail')
            ->join('site', 'docteurs.nom_site', '=', 'site.nom')
            ->join('cities', 'site.id', '=', 'cities.id')
            ->where('documents.mail', '=', $request->input('mail'))
            ->get();
        return response()->json($resultat);
    }
    return response()->json(['error' => 'Conditions non respectées !']);
}
}