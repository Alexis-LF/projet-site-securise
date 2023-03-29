

  function ajaxReponse(type, url, api_token){

  // Si la méthode HTTP n'est pas POST ou l'URL est vide, on renvoie false pour signaler une erreur
  if (type!='POST' && url!=""){
    return false;
  }

  //On crée une nouvelle requête XMLHttpRequest
  var xhr = new XMLHttpRequest();

  
  
  // On désactive les credentials pour éviter la divulgation de données sensibles
  xhr.withCredentials = false;
  
  // On ouvre la requête avec le type et l'URL fournis
  xhr.open(type, url);
  
  // On ajoute un en-tête de type de contenu pour la requête HTTP
  xhr.setRequestHeader("Accept", "application/vnd.api+json");
  
  // on envoie le token api
  if(api_token !== null){
    xhr.setRequestHeader('Authorization','Bearer '+api_token);
  }
  // On définit la fonction qui sera appelée lorsque la réponse sera reçue du serveur.
  xhr.onload = () =>
  {
      // On crée un switch en fonction du code de la réponse obtenu
      switch(xhr.status)
      {
          // Si le code de réponse est 201 (Créé), on affiche la réponse en format JSON dans la console et renvoie l'objet parsé JSON.
          case 201:
            console.log(JSON.parse(xhr.responseText));
            break;

          // Si le code de réponse est 401 (Non autorisé), affiche une alerte demandant à l'utilisateur de se reconnecter et renvoie false pour signaler une erreur.
          case 401:
              alert("Veuillez vous reconnecter");
              return false
              break;

          // Si le code de réponse n'est ni 201 ni 401, appelle la fonction httpErrors avec le code de réponse HTTP en tant que paramètre et renvoie false pour signaler une erreur.
          default:
              httpErrors(xhr.status);
              return false;
      }
  }

// On envoi la requête avec les données d'identification
  xhr.send();
}


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

    // On implémente une fonction pour vérifier la connexion réussie et afficher les documents
    function verificationConnexionReussie(reponse){
    setCookie("mail", reponse.data.personne.mail); // On enregistre l'adresse mail dans un cookie
    ajaxRequest('GET', URL_DOCUMENT_FINAL.replace("MAIL", reponse.data.personne.mail), afficheDocuments); // On effectue une requête Ajax pour récupérer les documents liés à cette adresse mail
    }
  
    // On véréifie la présence d'un jeton d'authentification
    if(getCookie("api_token")!=""){
    ajaxReponse('POST', BASE_URL+'/'+API_VERSION+'/valider_connexion', getCookie("api_token"), verificationConnexionReussie); // Requête Ajax pour valider la connexion avec le jeton d'authentification
    }
    else{
    alert("Veuillez vous connecter !"); // Affichage d'un message d'alerte
    window.location.href = "../index.html"; // Redirection vers la page de connexion
    }
