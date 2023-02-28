function lister_villes(liste_des_villes){
    let html_mere=document.getElementById("liste_ville"); //parent
    

for (let i = 0; i < liste_des_villes.length; i++) {
      
        console.log(villesAjoutees);
      let ville=liste_des_villes[i];
      let nomVille= ville["name"];
      // console.log(ville);
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
if(texte.value.length>2){
    
    ajaxRequest('GET', 'http://api.projetm1.fr/0.03/index.php/villes?name='+ texte.value, lister_villes);
    
    
  }
  
}

// Enregistrement des données dans des cookies
function ajaxInscription(){


}
function enregistrement() {
var nom = document.getElementById("imput_nom").value;
var prenom = document.getElementById("imput_prenom").value;
var ville = document.getElementById("texte_ville").value;
var date_naissance = document.getElementById("date_naissance").value;
var mail = document.getElementById("mail").value;
var mdp = document.getElementById("mdp").value; 
var telephone = document.getElementById("telephone").value;
// ajaxRequest('POST', 'http://api.projetm1.fr/0.06/index.php/inscription', )
}

document.getElementById("bouton_inscription").addEventListener("click", enregistrement);
let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);

