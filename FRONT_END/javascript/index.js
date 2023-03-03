
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
      
      ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/index.php/villes?name='+ texte.value, lister_villes);
      
      
    }
    
  }
    // Enregistrement des données dans des cookies

function cookieEnregistrement() {
  var nom = document.getElementById("imput_nom_docteur").value;
  var profession = document.getElementById("imput_nom_profession").value;
  var ville = document.getElementById("texte_ville").value;
  
  // Stockage des valeurs dans des cookies
  setCookie("docteur", nom);
  setCookie("profession", profession);
  setCookie("ville", ville);


  // Affichage des données récupérées dans la console
  console.log("Nom : " + nom);
  console.log("Profession : " + profession);
  console.log("Ville : " + ville);
  
}
document.getElementById("bouton_recherche").addEventListener("click", cookieEnregistrement);
ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/index.php/professions', lister_professions);
ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/index.php/docteurs', lister_docteurs);
let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);



