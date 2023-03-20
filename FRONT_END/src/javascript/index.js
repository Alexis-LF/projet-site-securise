
function lister_villes(liste_des_villes){
        let html_mere=document.getElementById("liste_ville"); 
        

    for (let i = 0; i < liste_des_villes.length; i++) {
          
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
  if(texte.value.length>2){
      
      ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/villes?name='+ texte.value, lister_villes);
      
      
    }
    
  }
  
  
// Enregistrement des données dans les paraètres de l'URL visitée
function rechercher() {
  // string retouné : s'il est que de longueur 1 
  // alors pas de "&" à mettre au bout
  let uri ="?";
  let criteres = {
    // on récupère les infos du formulaire
    "docteur": document.getElementById("imput_nom_docteur").value,
    "profession": document.getElementById("imput_nom_profession").value,
    "ville": document.getElementById("texte_ville").value
    }
    Object.entries(criteres).forEach(([cle, valeur]) => {
      // si la valeur n'est pas qu'un espace
      if(valeur.trim() != ""){
        // on forme l'uri : &clé=valeur
        uri += (uri.length > 1 ? "&" : "") + cle +"="+ valeur;
      }
    });

    // Une fois le traitement fini, on se rend sur la page de résultats
    window.location.href = "html/resultats.html"+uri;


}
document.getElementById("cookieDeConnexion").addEventListener("click", connexion_appuyee);

document.getElementById("bouton_recherche").addEventListener("click", rechercher);
ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/professions', lister_professions);
ajaxRequest('GET',  BASE_URL+'/'+API_VERSION+'/docteurs', lister_docteurs);
let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);



