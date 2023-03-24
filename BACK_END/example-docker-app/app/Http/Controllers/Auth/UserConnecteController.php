<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;


class UserConnecteController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public static function validerConnexion()
    {
        $personne = DB::table('personne')
            ->select('nom','prenom','mail')
            ->where('mail', '=', Auth::user()->email)
            ->get();
        return response()->json($personne);
    }

    public static function pasConnecte()
    {
        return response()->json("pas connecté");
    }
}
