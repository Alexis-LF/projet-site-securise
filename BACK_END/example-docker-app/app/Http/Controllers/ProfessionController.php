<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class ProfessionController extends Controller
{
    /**
     * Enumére la liste des professions 
     */
    public static function noms()
    {
        $noms = DB::table('profession')->get();
        return $noms;
    }
}