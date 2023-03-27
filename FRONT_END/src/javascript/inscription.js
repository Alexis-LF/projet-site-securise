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
var nom = document.getElementById("imput_nom").value;
var prenom = document.getElementById("imput_prenom").value;
var ville = document.getElementById("texte_ville").value;
var date_naissance = document.getElementById("date_naissance").value;
var email = document.getElementById("mail").value;
var mdp = document.getElementById("mdp").value; 
var telephone = document.getElementById("telephone").value;

var data=new FormData();
data.append("nom", nom);
data.append("prenom", prenom);
data.append("ville", ville);
data.append("dateNaissance", date_naissance);
data.append("email", email);
data.append("motDePasse", mdp);
data.append("numeroPortable", telephone);

var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
    });
    let url = BASE_URL+'/'+API_VERSION+"/inscription";
    xhr.open("POST",  url);

    xhr.onload = () =>
{
    switch(xhr.status)
    {
        case 201:
            console.log(xhr.responseText);
            // Rediriger l'utilisateur vers la page index.html
            window.location.href = "../index.html";
            
            break;
        case 401: 
            alert("Mauvais identifiant ou mdp");
            break;
        default:
            alert("Erreur, veuillez vous reconnecter")
            httpErrors(xhr.status);
    }
}

    xhr.send(data);

}


let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);

