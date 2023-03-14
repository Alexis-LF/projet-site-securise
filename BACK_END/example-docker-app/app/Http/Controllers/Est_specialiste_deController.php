<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class Est_specialiste_deController extends Controller
{
    /**
     * Show a list of all of the mode_paiements.
     */
    public static function recherche()
    {

        /*
    $requete = "SELECT d.nom, d.prenom, CONCAT(d.prenom,' ',d.nom) AS 'prenom_nom', p.nom AS 'profession', d.telephone, d.mail, s.nom AS 'site', s.adresse, c.zip_code, c.name AS 'ville' ";
    $requete .= "FROM est_specialiste_de e ";
    $requete .= "JOIN docteurs d ON d.mail = e.mail ";
    $requete .= "JOIN profession p ON p.nom = e.nom ";
    $requete .= "JOIN site s ON s.nom = d.nom_site ";
    $requete .= "JOIN cities c ON c.id = s.id ";

        */
        $recherche = DB::table('est_specialiste_de')->get();

        // $mode_paiements = DB::table('mode_paiement')->get();
        return $recherche;
    }
}