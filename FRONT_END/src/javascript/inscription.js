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

