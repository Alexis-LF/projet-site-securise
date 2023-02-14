

function AJAX(){
    
    //On crée un objet XMLHttpRequest
let xhr = new XMLHttpRequest();


//On initialise notre requête avec open()
xhr.open("GET", "http://api.projetm1.fr/0.01/");

//On veut une réponse au format JSON
xhr.responseType = "json";
//On envoie la requête
xhr.send();

//Dès que la réponse est reçue...
xhr.onload = function(){
    //Si le statut HTTP n'est pas 200...
    if (xhr.status != 200){ 
        //...On affiche le statut et le message correspondant
        console.log("Erreur " + xhr.status + " : " + xhr.statusText);
    //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    }else{ 
        console.log(xhr.response.length + " octets  téléchargés\n" + JSON.stringify(xhr.response));
        // let variable=JSON.parse(JSON.stringify(xhr.response));
        // reponse=Object.entries(xhr.response);
        let reponse=[... xhr.response];
        console.log(reponse);
        return "test";
        console.log("test");
       // console.log(variable);
    }
};

//Si la requête n'a pas pu aboutir...
xhr.onerror = function(){
    console.log("La requête a échoué");
};

//Pendant le téléchargement...
xhr.onprogress = function(event){
    //lengthComputable = booléen; true si la requête a une length calculable
    if (event.lengthComputable){
        //loaded = contient le nombre d'octets téléchargés
        //total = contient le nombre total d'octets à télécharger
        console.log(event.loaded + " octets reçus sur un total de " + event.total);
    }
};

    return false;
}

function ajaxRequest(type, url, callback, data = null)
{
  let xhr;

  // Create XML HTTP request.
  xhr = new XMLHttpRequest();
  if (type == 'GET' && data != null)
    url += '?' + data;
  xhr.open(type, url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Add the onload function.
  xhr.onload = () =>
  {
    switch (xhr.status)
    {
      case 200:
      case 201:
        console.log(xhr.responseText);
        callback(JSON.parse(xhr.responseText));
        break;
      default:
        httpErrors(xhr.status);
    }
  };

  // Send XML HTTP request.
  xhr.send(data);
}
