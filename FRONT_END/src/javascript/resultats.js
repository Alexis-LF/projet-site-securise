// Récupérer les paramètres passés par l'url 
// et former l'URI (les paramètres requête) pour le backend en string
function getParamsURL() {
  // string retouné : s'il est que de longueur 1 
  // alors pas de "&" à mettre au bout
  let uri ="?";
  // on récupère les paramètres de l'URL
  const urlParams = new URL(window.location.toLocaleString()).searchParams;
  for (let [cle,valeur] of urlParams) {
    switch (cle) {
      case "docteur":
        uri += (uri.length > 1 ? "&" : "") + "d.prenom_nom=" + valeur;
        break;
      case "profession":
        uri += (uri.length > 1 ? "&" : "") + "p.nom=" + valeur;
        break;
      case "ville":
        uri += (uri.length > 1 ? "&" : "") + "c.name=" + valeur;
        break;
      default:
        break;
    }

  }
  return uri;
}




function recherche(){
  // On initialise l'URL avec l'adresse de base de l'API et la version de celle-ci 
  let url=BASE_URL+'/'+API_VERSION+''; 
  // Initialise la partie de l'URL pour la recherche
  recherche += getParamsURL();  
  // Ajoute les paramètres de l'URL pour la recherche, récupérés à partir de la fonction getParamsURL() 
  let recherche = "/recherche";  
  // Affiche la chaîne de caractères de la recherche dans la console
  console.log(recherche); 
  // Ajoute la recherche à l'URL complète
  url=url+recherche;  
  // Affiche l'URL complète dans la console
  console.log(url);  
  return url;  // Renvoie l'URL complète
}

  function afficheDocteurs(liste_docteurs){
    // Récupération de l'élément HTML qui contiendra la liste des docteurs
    let html_mere=document.getElementById("liste_medecins");
    // Parcours de la liste des docteurs
    for (let i = 0; i < liste_docteurs.length; i++) {
   
    // Récupération des informations du docteur courant
    let docteur=liste_docteurs[i];
    
    // Création d'un élément de type div pour le docteur courant
    let div = document.createElement("div");
    
    // Création d'un élément de type paragraphe pour le nom du docteur courant
    let nom = document.createElement("p"); 
    nom.appendChild(document.createTextNode('Nom : '+ docteur["nom"]));
    div.appendChild(nom);
    div.appendChild(nom);

    // Création d'un élément de type paragraphe pour le prénom du docteur courant
    let prenom = document.createElement("p"); 
    prenom.appendChild(document.createTextNode('Prénom : '+ docteur["prenom"]));
    div.appendChild(prenom);
    div.appendChild(prenom);

    // Création d'un élément de type paragraphe pour le mail du docteur courant
    let mail = document.createElement("p"); 
    mail.appendChild(document.createTextNode('Email : '+ docteur["mail"]));
    div.appendChild(mail);
    div.appendChild(mail);

    // Création d'un élément de type paragraphe pour le numéro de téléphone du docteur courant
    let num = document.createElement("p"); 
    num.appendChild(document.createTextNode('Téléphone : 0'+ docteur["telephone"]));
    div.setAttribute("class", "encadrement");
    div.appendChild(num);
    div.appendChild(num);

    // Création d'un élément de type paragraphe pour le site web du docteur courant
    let site = document.createElement("p"); 
    site.appendChild(document.createTextNode('Site : '+ docteur["site"]));
    div.appendChild(site);
    div.appendChild(site);

    // Création d'un élément de type paragraphe pour l'adresse du docteur courant
    let adresse = document.createElement("p"); 
    adresse.appendChild(document.createTextNode('Adresse : '+ docteur["adresse"]));
    div.appendChild(adresse);
    div.appendChild(adresse);

    // Création d'un élément de type paragraphe pour le code postal du docteur courant
    let zip_code = document.createElement("p"); 
    zip_code.appendChild(document.createTextNode('Code postal : '+ docteur["zip_code"]));
    div.appendChild(zip_code);
    div.appendChild(zip_code);

    // Création d'un élément de type paragraphe pour la ville du docteur courant
    let ville = document.createElement("p"); 
    ville.appendChild(document.createTextNode('Ville : '+ docteur["ville"]));
    div.appendChild(ville);
    div.appendChild(ville);

    // Création d'un élément de type paragraphe pour les rendez-vous disponibles du docteur courant
    let rdv = document.createElement("p"); 
    div.appendChild(rdv);
    div.appendChild(rdv);

    // Création d'un bouton pour prendre rendez-vous chez le docteur courant
    let rdv_button = document.createElement("button"); 
    rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
    div.setAttribute("class", "w3-block encadrement w3-left-align");
    div.appendChild(rdv_button);
    div.appendChild(rdv_button);
    rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });

    // On affiche la valeur du docteur associé 
    console.log(docteur)


    html_mere.appendChild(div);

    
  };
  }


// On implémente une fonction criteresRecherche qui remplace les 3 critères de recherches de l'utilisateur
function criteresRecherche() {
  ecrireCritereRecherche("docteurCherche", "docteur");
  ecrireCritereRecherche("professionCherche", "profession");
  ecrireCritereRecherche("lieuCherche", "ville");

  
}
// On implémente une fonction ecrireCritereRecherche qui écrit sur la page web 1 critère de recherche de l'utilisateur provenant des cookies, selon son identifiant HTML
function ecrireCritereRecherche(idHtml,nom){
  const critere = new URL(window.location.toLocaleString()).searchParams.get(nom);
  if (critere != null){
    document.getElementById(idHtml).innerHTML = critere;
  }
}

criteresRecherche();
let url = recherche();
 ajaxRequest('GET', url, afficheDocteurs);