
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


ajaxRequest('GET', 'http://api.projetm1.fr/0.03/index.php/professions', lister_professions);
// ajaxRequest('GET', 'http://api.projetm1.fr/0.03/index.php/docteurs', lister_villes);
let texte = document.getElementById("texte_ville");
var villesAjoutees=[];
// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", villeTapee);