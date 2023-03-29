
// On implémente la fonction afficheDocuments qui permet d'afficher les détails des documents d'une personne
function afficheDocuments(liste_documents){
  // On récupère l'élément div qui contiendra les informations sur les documents
  let html_mere=document.getElementById("liste_docs");
  
  // On parcourt chaque document de la liste des documents récupérés
  for (i = 0; i < liste_documents.length; i++) {
      
      let documents=liste_documents[i];

      // On crée un bouton pour télécharger le document
      let download=document.createElement("button");
      let div = document.createElement("div");
      let nom_doc = document.createElement("p"); 
      
      // Ajoute le nom du document à l'élément 'p' correspondant
      nom_doc.appendChild(document.createTextNode('Nom du document : '+ documents["nom_doc"]));
      // Ajoute le texte sur le bouton de téléchargement
      download.appendChild(document.createTextNode('Télécharger ce document'));
      // Ajoute une classe au bouton
      download.setAttribute("class", "w3-button w3-block w3-green w3-left-align");
      
      // Ajoute l'élément 'p' du nom du document à la div
      div.appendChild(nom_doc);
      // Ajoute le bouton de téléchargement à la div
      div.appendChild(download);
      
      // Ajoute la div à la page web
      document.body.appendChild(div);
      
      // Ajoute l'élément 'p' correspondant au type de document
      let type = document.createElement("p"); 
      type.appendChild(document.createTextNode('Type : '+ documents["type"]));
      div.appendChild(type);

      // Ajoute l'élément 'p' correspondant au chemin d'accès au document
      let chemin = document.createElement("p"); 
      chemin.appendChild(document.createTextNode('Chemin : '+ documents["chemin"]));
      div.appendChild(chemin);
  
      // Ajoute l'élément 'p' correspondant au nom et prénom du patient
      let prenom_nom = document.createElement("p");
      prenom_nom.appendChild(document.createTextNode('Nom et prénom du patient : '+ documents["prenom_nom"]));
      // Ajoute une classe à la div contenant l'ensemble des informations
      div.setAttribute("class", "encadrement");
      div.appendChild(prenom_nom);
  
      // Ajoute l'élément 'p' correspondant au mail du praticien
      let mail_docteurs = document.createElement("p"); 
      mail_docteurs.appendChild(document.createTextNode('Mail du praticien : '+ documents["mail_docteurs"]));
      div.appendChild(mail_docteurs);
  
      // Ajoute l'élément 'p' correspondant au numéro de téléphone
      let telephone = document.createElement("p"); 
      telephone.appendChild(document.createTextNode('Telephone : 0'+ documents["telephone"]));
      div.appendChild(telephone);

      // Ajoute l'élément 'p' correspondant au nom du site
      let nom_site = document.createElement("p"); 
      nom_site.appendChild(document.createTextNode('Nom du site : '+ documents["nom_site"]));
      div.appendChild(nom_site);

      // Ajoute l'élément 'p' correspondant à l'adresse du site
      let adresse = document.createElement("p"); 
      adresse.appendChild(document.createTextNode('Adresse : '+ documents["adresse"]));
      div.appendChild(adresse);

       // Ajoute l'élément 'p' correspondant au code postal
      let zip_code = document.createElement("p");
      zip_code.appendChild(document.createTextNode('Zip code : '+ documents["zip_code"])); // Ajout d'un texte dans l'élément <p>
      div.appendChild(zip_code); // Ajout de l'élément <p> au div parent

       // Ajoute l'élément 'p' correspondant à la ville
      let ville = document.createElement("p");
      ville.appendChild(document.createTextNode('Ville : '+ documents["ville"])); // Ajout d'un texte dans l'élément <p>
      div.appendChild(ville); // Ajout de l'élément <p> au div parent

      // Gestion du clic sur le bouton de téléchargement
      download.onclick = function cheminAccess() {
      window.location.href = documents["chemin"]; // Redirection vers l'URL du document
          }
      
      // Ajout de la classe "w3-block encadrement w3-left-align" au div parent
      div.setAttribute("class", "w3-block encadrement w3-left-align");

      // Affichage des informations sur la console
      console.log(documents);

      // Ajout du div parent au parent HTML
      html_mere.appendChild(div);
        
    };
}


// On véréifie la présence d'un jeton d'authentification
if(getCookie("api_token")!=""){

  // afficher les documents
  ajaxRequest('GET', BASE_URL+'/'+API_VERSION+'/documents', afficheDocuments,null,getCookie("api_token")); 
  // On effectue une requête Ajax pour récupérer les documents liés à au compte du jeton d'api

}
else{
  alert("Veuillez vous connecter !"); // Affichage d'un message d'alerte
  window.location.href = "../index.html"; // Redirection vers la page de connexion
}
