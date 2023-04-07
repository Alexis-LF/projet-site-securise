<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;


class AuthController extends Controller
{
    use HttpResponses;

    public function connexion(Request $request)
    {
        // on valide les données d'entrées
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', 'min:6'],
        ]);
 
        if ($validator->stopOnFirstFailure()->fails()) {
            return $this->error([],"Erreur lors de l'inscripton, vérifiez qu'aucun mauvais caractère ait été rentré",401);
        }

        $user = User::where('email', $request->email)->first();

        $personne = DB::table('personne')
            ->select('nom','prenom','mail')
            ->where('mail', '=', $request->email)
            ->get()
            ->first();
        
        return $this->success([
            'personne'=>$personne,
            'token' => $user->createToken('API Token of '. $user->email)->plainTextToken
        ],
        "connexion réussie");
    }
    public function inscription(Request $request)
    {
        // on valide les données pour voir s'il y a des mauvais caractères
        // et si le mot de passe est assez fort
        $rules = [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed',
                Rules\Password::min(6)
                    ->letters()
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised()
            ],
            'nom' => ['required', 'string', 'alpha_num', 'max:255'],
            'prenom' => ['required', 'string', 'alpha_num', 'max:255'],
            'telephone' => ['required', 'alpha_num', 'max:11'],
            'date_naissance' => ['required', 'max:11'],
        ];

        $messagesErreurs = [
            'email' => "l'email entré est incorrect ou déjà utilisé",
            'password' => "Le mot de passe doit faire au minimum 6 caractères, avec des lettres mininscules et majuscules, des caractères spéciaux, des nombres et ne doit pas avoir fuité",
            'nom' => "le nom est mal écrit",
            'prenom' => "le prénom est mal écrit",
            'telephone' => "le téléphone doit être composé uniquement de chiffres",
            'date_naissance' => "la date de naissance est invalide",
        ];


        // prépare la validation
        $validator = Validator::make($request->all(),$rules,$messagesErreurs);
 
        // envoi & récupération erreurs
        if ($validator->stopOnFirstFailure()->fails()) {
            return $this->error([$validator->errors()->all()],"Erreur lors de l'inscripton",401);
        }




        // remplir la table personne
        DB::table('personne')->insert([
            'mail' => $request->email,
            'nom' => $request->nom,
            'telephone' => $request->telephone,
            'date_naissance' => $request->date_naissance,
            'prenom' => $request->prenom,
            'id' => 16658
        ]);

        // remplir la table user
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $personne = DB::table('personne')
        ->select('nom','prenom','mail')
        ->where('mail', '=', $request->email)
        ->get()
        ->first();

        return $this->success([
            'personne'=>$personne,
            'token' => $user->createToken('API Token of '. $user->email)->plainTextToken
        ],
        "insription réussie");

    }
    public function deconnexion()
    {
        return $this->success(["fonction de deconnexion"]);
    }

    public function valider_connexion()
    {
        $personne = DB::table('personne')
        ->select('nom','prenom','mail')
        ->where('mail', '=', Auth::user()->email)
        ->get()
        ->first();
    
        return $this->success([
            'personne'=>$personne
        ],
        "jeton d'API valide");
    }
    public function pasConnecte()
    {
        return $this->error([],"L'api_token n'est pas ou plus valide, veuillez vous reconnecter.",401);
    }
}
