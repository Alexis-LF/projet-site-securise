<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class Est_specialiste_deController extends Controller
{
    /**
     * recherche avec filtrage par critères
     */
    public static function recherche()
    {

        // Tous les données retournées
        $recherche = DB::table('est_specialiste_de')
            ->select('docteurs.nom', 'docteurs.prenom',
                DB::raw('CONCAT(docteurs.prenom," ",docteurs.nom) AS prenom_nom'),
                'profession.nom AS profession', 'docteurs.telephone', 
                'docteurs.mail', 'site.nom AS site', 'site.adresse', 
                'cities.zip_code', 'cities.name AS ville' 
                )
        // Tous les jointures
            ->leftJoin('docteurs', 'docteurs.mail', '=', 'est_specialiste_de.mail')
            ->leftJoin('profession', 'profession.nom', '=', 'est_specialiste_de.nom')
            ->leftJoin('site', 'site.nom', '=', 'docteurs.nom_site')
            ->leftJoin('cities', 'cities.id', '=', 'site.id');

        // s'il n'y a aucun paramètre de recherche on exécute la requête sans conditions de recherche
        if (count($_GET)==0){
            return $recherche->get();
        }
        
        // $paramRecherche = array();
        

        return $recherche->get();
    }
}