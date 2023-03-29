// Récupérer les paramètres passés par l'url 
// et former l'URI (les paramètres requête) pour le backend en string
function getParamsURL() {
  // string retouné : s'il est que de longueur 1 
  // alors pas de "&" à mettre au bout
  let uri ="?";

  // On récupère les paramètres ?clé=valeurs contenu dans l'URI de la page (passées par index.js)
  const urlParams = new URL(window.location.toLocaleString()).searchParams;
  for (let [cle,valeur] of urlParams) {
    // La cle correspond à l'un des paramètres avant le =, soit l'un des crièteres de recherche
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




// Retourner l'URL de recherche du backend, à faire ensuite dans l'ajaxRequest
function recherche(){
  let url=BASE_URL+'/'+API_VERSION+'/index.php'; 
  let recherche = "/recherche";
  // Récupérer l'URI contenant les bons paramètres
  recherche += getParamsURL();
  console.log(recherche);
  url=url+recherche;
  console.log(url);
  return url;
}



function afficheDocteurs(liste_docteurs){
    let html_mere=document.getElementById("liste_medecins");
    for (let i = 0; i < liste_docteurs.length; i++) {
   
    let docteur=liste_docteurs[i];
    
    let div = document.createElement("div");
    let nom = document.createElement("p"); 
    nom.appendChild(document.createTextNode('Nom : '+ docteur["nom"]));
    div.appendChild(nom);
    div.appendChild(nom);

    let prenom = document.createElement("p"); 
    prenom.appendChild(document.createTextNode('Prénom : '+ docteur["prenom"]));
    div.appendChild(prenom);
    div.appendChild(prenom);

    let mail = document.createElement("p"); 
    mail.appendChild(document.createTextNode('Email : '+ docteur["mail"]));
    div.appendChild(mail);
    div.appendChild(mail);

    let num = document.createElement("p"); 
    num.appendChild(document.createTextNode('Téléphone : 0'+ docteur["telephone"]));
    div.setAttribute("class", "encadrement");
    div.appendChild(num);
    div.appendChild(num);

    let site = document.createElement("p"); 
    site.appendChild(document.createTextNode('Site : '+ docteur["site"]));
    div.appendChild(site);
    div.appendChild(site);

    let adresse = document.createElement("p"); 
    adresse.appendChild(document.createTextNode('Adresse : '+ docteur["adresse"]));
    div.appendChild(adresse);
    div.appendChild(adresse);

    let zip_code = document.createElement("p"); 
    zip_code.appendChild(document.createTextNode('Code postal : '+ docteur["zip_code"]));
    div.appendChild(zip_code);
    div.appendChild(zip_code);

    let ville = document.createElement("p"); 
    ville.appendChild(document.createTextNode('Ville : '+ docteur["ville"]));
    div.appendChild(ville);
    div.appendChild(ville);


    let rdv = document.createElement("p"); 
    div.appendChild(rdv);
    div.appendChild(rdv);

    let rdv_button = document.createElement("button"); 
    rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
    div.setAttribute("class", "w3-block encadrement w3-left-align");
    div.appendChild(rdv_button);
    div.appendChild(rdv_button);
    rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });

    console.log(docteur)


    html_mere.appendChild(div);

    
  };
  }


// Remplacer les 3 critères de recherches de l'utilisateur
function criteresRecherche() {
  ecrireCritereRecherche("docteurCherche", "docteur");
  ecrireCritereRecherche("professionCherche", "profession");
  ecrireCritereRecherche("lieuCherche", "ville");

  
}
// Écrire sur la page web 1 critère de recherche de l'utilisateur 
// provenant des cookies, selon son identifiant HTML
function ecrireCritereRecherche(idHtml,nom){
  // On récupère les paramètres ?clé=valeurs contenu dans l'URI de la page (passées par index.js)
  // Le get(nom) correspond à récupérer le paramètre docteur, profession ou ville
  const critere = new URL(window.location.toLocaleString()).searchParams.get(nom);
  // Si le criitère de recherche est défini on l'affiche
  if (critere != null){
    document.getElementById(idHtml).innerHTML = critere;
  }
}

// Afficher sur la page web les critères de la recherche
criteresRecherche();
// Récupérer l'URL de l'API corerespondant à la recherche souhaitée
let url = recherche();
// Lancer la recherche et afficher les docteurs
ajaxRequest('GET', url, afficheDocteurs);