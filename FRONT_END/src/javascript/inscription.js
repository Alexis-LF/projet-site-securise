function lister_villes(liste_des_villes){
    let html_mere=document.getElementById("liste_ville"); 
    

for (let i = 0; i < liste_des_villes.length; i++) {
      
        console.log(villesAjoutees);
      let ville=liste_des_villes[i];
      let nomVille= ville["name"];
      // Ajouter des options à la liste
      if (!villesAjoutees.includes(nomVille)){
        let option = document.createElement("option");
        option.setAttribute("value", nomVille);
        // Ajouter le champ de saisie et la liste de suggestions au document
        html_mere.appendChild(option);
        villesAjoutees.push(nomVille);
      
    }



}
}
function villeTapee(){
let texte = document.getElementById("texte_ville");
console.log(texte);
if(texte.value.length>2){
    
    ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/villes?name='+ texte.value, lister_villes);
    
    
  }
  
}


function requestInscription(){

    // on définit les clés des identifiants du frontend et de l'api au backend pour automatiser l'ajout de données
    let liste_champs = [
        {"backend": "email","frontend":"mail"},
        {"backend": "password","frontend":"mdp"},
        {"backend": "password_confirmation","frontend":"mdp_confirmation"},
        {"backend": "nom","frontend":"imput_nom"},
        // {"backend": "non implémentée pour l'instant","frontend":"texte_ville"},
        {"backend": "prenom","frontend":"imput_prenom"},
        {"backend": "telephone","frontend":"telephone"},
    ];

    var data=new FormData();

    // ajout des données entrée par l'utilisateur 
    liste_champs.forEach(champ => {
        data.append(champ.backend, document.getElementById(champ.frontend).value);
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });
    let url = BASE_URL+'/'+API_VERSION+"/inscription";
    xhr.open("POST",  url);

    // On ajoute un en-tête de type de contenu pour la requête HTTP
    xhr.setRequestHeader("Accept", "application/vnd.api+json");


    xhr.onload = () =>
    {
        switch(xhr.status)
        {
            case 200:
            case 201:
                alert("inscription réussie !");
                connexion_reussie(JSON.parse(xhr.responseText));
                // Rediriger l'utilisateur vers la page index.html
                break;
                case 422: 
                alert("Cet e-mail est déjà associé à un compte, veuillez vous connecter");
                window.location.href = "../index.html"; // Redirection vers la page de connexion
            case 401: 
                alert("Mauvais identifiant ou mdp");
                return;
            default:
                alert("Erreur, veuillez vous réinscrire")
                return;
        }
    }
    xhr.send(data);
}


let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);

