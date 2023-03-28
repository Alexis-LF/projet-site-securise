
// On implémente une fonction qui vérifie si la requête HTTP est prête. Si c'est le cas, on affiche la réponse dans la console sur le navigateur 
function stage() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
}

// On implémente une fonction pour effectuer une requête AJAX de connexion
function ajaxConnexion(type, url, id, pwd, callback){
  // On vérifie le type de requête et de l'URL fournie (Si ce n'est pas un POST on s'arrete là)
  if (type!='POST' && url!=""){
    return false;
  }

  // On crée un nouvel objet FormData et on lui ajoute des informations d'identification (mail et mot de passe)
  var data = new FormData();
  data.append("mail", id);
  data.append("password", pwd);

  //On crée une nouvelle requête XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // On désactive les credentials pour éviter la divulgation de données sensibles
  xhr.withCredentials = false;

  // On ouvre la requête avec le type et l'URL fournis
  xhr.open(type, url);

  // On implémente une fonction qui sera appelée lorsque la requête AJAX sera terminée
  xhr.onload = () =>
  {
    // On crée un switch en fonction du code de la réponse obtenu 
    switch(xhr.status)
    {
        // Si le code de statut est 201, la connexion est réussie et on appelle la fonction de callback en lui passant la réponse sous forme de tableau JSON
        case 201:
            callback(JSON.parse(xhr.responseText));
            break;
        // Si le code de statut est 401, les identifiants fournis sont incorrects et on affiche un message d'alerte
        case 401: 
            alert("Mauvais identifiant ou mdp");
            break;
        // Si aucun des cas précédents n'est vérifié, il y a une erreur de connexion et on affiche un message d'alerte et le code de statut de la réponse
        default:
            alert("Erreur, veuillez vous reconnecter")
            httpErrors(xhr.status);
    }
  }

  // On envoi la requête avec les données d'identification de data
  xhr.send(data);
}

// On implémente une fonction "connexion_reussie" appelée en cas de connexion réussie
function connexion_reussie(reponse){
  // Stockage du token JWT et des informations de profil dans des cookies
  setCookie("jwt", reponse[0]["jwt"]);
  setCookie("ville_patient", reponse[0]["ville"]);
  setCookie("prenom_patient", reponse[0]["prenom"]);
  setCookie("nom_patient", reponse[0]["nom"]);
  setCookie("mail_patient", reponse[0]["mail"]);

  // On vérifie que l'utilisateur est bien connecté grâce à la fonction définie "est_connecte"
  est_connecte(reponse);

  // Affichage d'un message d'alerte pour signaler que la connexion est réussie
  alert("La connexion est réussie !");

  // Masquage du formulaire de connexion (une fois connectée, les champs de connexion disparaissent)
  let div = document.getElementById("champs_de_connexion");
  div.setAttribute("style", "display:none");
}

// On implémente une fonction qui vérifie si l'utilisateur est connecté et qui affiche le menu de navigation si c'est le cas 
function est_connecte(reponse) {

  let menuConnecte = document.getElementById("menuConnecte"); // Menu de navigation pour les utilisateurs connectés
  let champsConnexion = document.getElementById("champs_de_connexion"); // Champ de connexion pour les utilisateurs non connectés

  // On vérifie la présence du cookie "jwt"
  if (reponse!==false){
    // Si le token est présent c'est que l'utilisateur est connecté. On cache alors le champ de connexion et on affiche le menu de navigation
    if (champsConnexion != null) {
      champsConnexion.setAttribute("style", "display:none"); // On cache le champ de connexion
      menuConnecte.setAttribute("style", "display:inherit"); // On affiche le menu de navigation pour les utilisateurs qui sont connectés
    }
    
    // On affiche le nom, prénom et adresse e-mail de l'utilisateur connecté dans le menu de navigation
    let divNom = document.createElement("h5");
    divNom.appendChild(document.createTextNode('connecté en tant que '));
    divNom.appendChild(document.createElement("br"));

    let aNom = document.createElement("a");

    aNom.innerHTML = reponse.data.personne.prenom + " " + reponse.data.personne.nom;
    aNom.setAttribute("href","mailto:"+reponse.data.personne.mail);
    divNom.appendChild(aNom);

    divNom.setAttribute("class","w3-bar-item w3-padding-16");
    divNom.setAttribute("title",getCookie("mail_patient"));
    menuConnecte.appendChild(divNom);

  } else {
    // Si l'utilisateur n'est pas connecté, on affiche le champ de connexion et on cache le menu de navigation
    champsConnexion.setAttribute("style", "display:inherit"); // On affiche le champ de connexion pour les utilisateurs non connectés
    menuConnecte.setAttribute("style", "display:none"); // On cache le menu de navigation pour les utilisateurs connectés
  }
}

// On implémente une fonction appelée lorsqu'un utilisateur tente de se connecter
function connexion_appuyee() {
  // On récupère les valeurs saisies par l'utilisateur pour l'adresse e-mail et le mot de passe
  let mdp = document.getElementById("imput_mdp");
  let identifiant = document.getElementById("imput_email")

  // On envoi une requête HTTP POST à l'API pour tenter de connecter l'utilisateur
  ajaxConnexion('POST',  BASE_URL+'/'+API_VERSION+'/connexion', identifiant.value, mdp.value, connexion_reussie);
}

// On implémente une fonction ajaxReponse qui envoie une requête AJAX pour interroger le serveur et récupérer des données
function ajaxReponse(type, url, jwt){

  // Si la méthode HTTP n'est pas POST ou l'URL est vide, on renvoie false pour signaler une erreur
  if (type!='POST' && url!=""){
    return false;
  }

  // idem ajaxConnexion, on crée un nouvel objet FormData et on lui ajoute des informations d'identification (mail et mot de passe)
  var data = new FormData();
  data.append("jwt", jwt);

  //On crée une nouvelle requête XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // On désactive les credentials pour éviter la divulgation de données sensibles
  xhr.withCredentials = false;

  // On ouvre la requête avec le type et l'URL fournis
  xhr.open(type, url);

  // On définit la fonction qui sera appelée lorsque la réponse sera reçue du serveur.
  xhr.onload = () =>
  {
      // On crée un switch en fonction du code de la réponse obtenu
      switch(xhr.status)
      {
          // Si le code de réponse est 201 (Créé), on affiche la réponse en format JSON dans la console et renvoie l'objet parsé JSON.
          case 201:
            console.log(JSON.parse(xhr.responseText));
            return JSON.parse(xhr.responseText);
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

  // On envoi la requête avec les données d'identification de data
  xhr.send(data);
}

ajaxRequest('POST',  BASE_URL+'/'+API_VERSION+'/valider_connexion', est_connecte);