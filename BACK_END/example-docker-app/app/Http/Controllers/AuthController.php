<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\LoginUserRequest;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    use HttpResponses;

    public function connexion(LoginUserRequest $request)
    {
        $request->validated($request->all());
        // si mauvaise connexion
        if(!Auth::attempt($request->only(['email', 'password']))) {
            return $this->error('', 'Mauvais identifiants de connexion', 401);
        }

        $user = User::where('email', $request->email)->first();

        $personne = DB::table('personne')
            ->select('nom','prenom','mail')
            ->where('mail', '=', Auth::user()->email)
            ->get();
        
        return $this->success([
            'user' => $user,
            'personne'=>$personne[0],
            'token' => $user->createToken('API Token')->plainTextToken
        ]);

    }
    public function inscription(StoreUserRequest $request)
    {
        $request->validated($request->all());

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

        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('API Token of '. $user->email)->plainTextToken
        ]);

    }
    public function deconnexion()
    {
        return response()->json("fonction de deconnexion") ;
    }
}
