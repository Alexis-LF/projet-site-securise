
// Récupérer l'élément de la barre de recherche
let texte = document.getElementById("texte_ville");


// Ajouter un événement de saisie au champ de recherche
texte.addEventListener("input", function() {
    const query = texte.value.substring(0,999999);
    if(query.length>2)
    // console.log("Les premières lettres sont :" + query);
});



function lister_villes(liste_des_villes){
    let html_mere=document.getElementById("liste_ville"); //parent
    
    for (let i = 0; i < liste_des_villes.length; i++) {
      
  
      let ville=liste_des_villes[i];
      // console.log(ville);
      // Ajouter des options à la liste
      let option = document.createElement("option");
      option.setAttribute("value", ville["name"]);
      // Ajouter le champ de saisie et la liste de suggestions au document
      html_mere.appendChild(option);


  }
}

