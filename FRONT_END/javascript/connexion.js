
function stage() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  }

function ajaxConnexion(type, url, id, pwd, callback){


if (type!='POST' && url!=""){
  return false;
}

var data = new FormData();
data.append("mail", id);
data.append("password", pwd);

var xhr = new XMLHttpRequest();

xhr.withCredentials = false;

xhr.open(type, url);

xhr.onload = () =>
{
    switch(xhr.status)
    {
        case 201:
          
            callback(JSON.parse(xhr.responseText));
            break;
        case 401: 
            alert("Mauvais identifiant ou mdp");
            break;
        default:
            alert("Erreur, veuillez vous reconnecter")
            httpErrors(xhr.status);
    }
}

xhr.send(data);
}




function connexion_reussie(reponse){
  setCookie("jwt", reponse[0]["jwt"]);
  setCookie("ville_patient", reponse[0]["ville"]);
  setCookie("prenom_patient", reponse[0]["prenom"]);
  setCookie("nom_patient", reponse[0]["nom"]);
  setCookie("mail_patient", reponse[0]["mail"]);
  est_connecte();
  alert("La connexion est réussie !")
  let div = document.getElementById("champs_de_connexion");
  div.setAttribute("style", "display:none");
  }

  
  function est_connecte(){
  // Est connecté
  if (getCookie("jwt")!=""){
    // afficher & masquer les menus
    let displayoff = document.getElementById("champs_de_connexion");
    displayoff.setAttribute("style", "display:none");
    let div = document.getElementById("formulaire");
    div.setAttribute("style", "display:inherit"); 
    
    // affichage du nom prénom & mail
    let divNom = document.createElement("h5"); 
    divNom.appendChild(document.createTextNode('connecté en tant que '));
    divNom.appendChild(document.createElement("br"));

    let aNom = document.createElement("a"); 

    aNom.appendChild(document.createTextNode(
      getCookie("prenom_patient") + " " + getCookie("nom_patient")
    ));
    aNom.setAttribute("href","mailto:"+getCookie("mail_patient"));
    divNom.appendChild(aNom);

    divNom.setAttribute("class","w3-bar-item w3-padding-16");
    divNom.setAttribute("title",getCookie("mail_patient"));
    console.log(divNom);
    div.appendChild(divNom);

  }
  // Pas connecté
  else{
    let display = document.getElementById("champs_de_connexion");
    display.setAttribute("style", "display:inherit");
    let displayon = document.getElementById("formulaire");
    displayon.setAttribute("style", "display:none");
  }
    
  
    
}

function connexion_appuyee(){
  let mdp = document.getElementById("imput_mdp");
  let identifiant = document.getElementById("imput_email")

  ajaxConnexion('POST',  BASE_URL+'/'+API_VERSION+'/index.php/connexion', identifiant.value, mdp.value, connexion_reussie);
    
}

function ajaxReponse(type, url, jwt){

  if (type!='POST' && url!=""){
    return false;
  }
  var data = new FormData();
  data.append("jwt", jwt);
  
  var xhr = new XMLHttpRequest();
  
  xhr.withCredentials = false;
  
  xhr.open(type, url);
  
  
  
  
  xhr.onload = () =>
  {
      switch(xhr.status)
      {
          case 201:
          
            console.log(JSON.parse(xhr.responseText));
            return JSON.parse(xhr.responseText);
            break;
          case 401: 
              alert("Veuillez vous reconnecter");
              return false
              break;
          default:
              httpErrors(xhr.status);
              return false;
      }
  }
  
  xhr.send(data);
  }

  function ajaxReponse(type, url, jwt){

    if (type!='POST' && url!=""){
      return false;
    }
    var data = new FormData();
    data.append("jwt", jwt);
    
    var xhr = new XMLHttpRequest();
    
    xhr.withCredentials = false;
    
    xhr.open(type, url);
    
    
    
    xhr.onload = () =>
    {
        switch(xhr.status)
        {
            case 201:
              
                callback(JSON.parse(xhr.responseText));
                return mail;
                break;
            case 401: 
                alert("Veuillez vous reconnecter");
                return false
                break;
            default:
                httpErrors(xhr.status);
                return false;
        }
    }
    
    xhr.send(data);
    }

est_connecte();


