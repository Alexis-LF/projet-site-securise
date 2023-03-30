

// On crée la fonction "ajaxRequest" qui prend en paramètre un type de requête, une URL, une fonction de rappel et des données facultatives
function ajaxRequest(type, url, callback, data = null, api_token = null) {
  let xhr; // On initialise la variable pour la requête xml HTTP  
  var blocChargement = undefined;

  // On crée une nouvelle requête xml HTTP
  xhr = new XMLHttpRequest();



  // On crée une confition if qui dit que si le type est 'GET' et qu'il y a des données, on ajoute les données à l'URL
  if (type == 'GET' && data != null)
    url += '?' + data;

  // On ajoute un événement pour afficher un message de "chargement..." pendant que la requête est en cours
  xhr.addEventListener('loadstart', function() {
    blocChargement = document.getElementsByClassName("chargement")[0];
    if (blocChargement != undefined) {
      blocChargement.innerHTML="Chargement...";
    }
  });

  // On ouvre une nouvelle requête HTTP avec le type et l'URL spécifiés
  xhr.open(type, url);

  // On ajoute un en-tête de type de contenu pour la requête HTTP
  xhr.setRequestHeader("Accept", "application/vnd.api+json");
  xhr.setRequestHeader("Content-Type", "application/vnd.api+json");

  // Si connecté : on envoie le token api
  if(api_token !== null){
    xhr.setRequestHeader('Authorization','Bearer '+api_token);
  }

  // On ajoute une fonction à exécuter lorsque la requête est terminée
  xhr.onload = () => {
    if (blocChargement != undefined) {
      blocChargement.innerHTML="";
    }

    // On crée un switch qui effectue une action en fonction du statut de la réponse
    switch (xhr.status) {
      case 200:
      case 201:
        callback(JSON.parse(xhr.responseText));
        break;
      default:
        // httpErrors(xhr.status);
    }
  };

  // Enfin on envoie la requête HTTP avec les données spécifiées
  xhr.send(data);
}
