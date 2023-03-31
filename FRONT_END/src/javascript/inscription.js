function lister_villes(liste_des_villes){
    let html_mere=document.getElementById("liste_ville"); // On récupère l'élément HTML où afficher les villes
    for (let i = 0; i < liste_des_villes.length; i++) { // On parcourt la liste des villes renvoyée par l'API
        console.log(villesAjoutees); // On affiche dans la console la liste des villes déjà ajoutées

        let ville=liste_des_villes[i]; // On récupère de la ville courante
        let nomVille= ville["name"]; // On récupère du nom de la ville courante

        // On ajoute des options à la liste déroulante
        if (!villesAjoutees.includes(nomVille)){ // On vérifie si la ville courante n'a pas déjà été ajoutée
            let option = document.createElement("option"); // On crée un élément option
            option.setAttribute("value", nomVille); // On ajoute de l'attribut value avec le nom de la ville courante
            html_mere.appendChild(option); // On ajoute l'option à la liste déroulante
            villesAjoutees.push(nomVille); // On ajoute le nom de la ville courante à la liste des villes déjà ajoutées
        }
    }
}


function villeTapee(){
let texte = document.getElementById("texte_ville");
console.log(texte);
// On vérifie si la longueur de la chaine de caracteres entrée est strictement supérieure à 2
if(texte.value.length>2){
    // On effectue une requête de type 'GET' pour lister les villes qui contiennent la chaine de caracteres rentrée précédement
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
        {"backend": "date_naissance","frontend":"date_naissance"},
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

