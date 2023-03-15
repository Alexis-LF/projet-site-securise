<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class Est_specialiste_deController extends Controller
{
    /**
     * recherche avec filtrage par critères
     */
    public static function recherche(Request $request)
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
        $getInput = $request->collect();
        if (count($getInput)==0){
            return $recherche->get();
        }
        
        // Liste des paramètres définis dans https://github.com/Alexis-LF/projet-site-securise/blob/non_secure/BACK_END/README.md#r%C3%A9cup%C3%A9rer-la-liste-des-mails-pr%C3%A9noms-et-noms-des-docteurs
        $paramRecherche = array(
            "d.prenom_nom" => DB::raw('CONCAT(docteurs.prenom," ",docteurs.nom)'),
            "p.nom" => "profession.nom",
            "c.name" => "cities.name"
        );

        foreach ($getInput as $key => $value) {
            // dans les champs clefs du GET (dans l'URI), les . sont remplacés par des _ : on corrige ça
            $key = preg_replace('/' . "_" . '/', ".", $key, 1);
            // On traite uniquement les paramètres de recherches définis
            if (isset($paramRecherche[$key])){
                $recherche->where(
                    // on fait la correspondance aux colonnes de la base de données
                    $paramRecherche[$key],
                    'LIKE','%'.$value.'%'
                );
            }
        }
        return $recherche->get();
    }
}