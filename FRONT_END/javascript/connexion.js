
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
  setCookie("prénom_patient", reponse[0]["prenom"]);
  setCookie("nom_patient", reponse[0]["nom"]);
  est_connecte();
  alert("La connexion est réussie !")
  let div = document.getElementById("champs_de_connexion");
  div.setAttribute("style", "display:none");
  }

  
function est_connecte(){
    
  
  if (getCookie("jwt")!=""){
      
    let displayoff = document.getElementById("champs_de_connexion");
    displayoff.setAttribute("style", "display:none");
    let div = document.getElementById("formulaire");
    div.setAttribute("style", "display:inherit"); 
  }
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
  let prenom = document.createElement("p"); 
  prenom.appendChild(document.createTextNode('Vous êtes connecté en tant que : '+ identifiant));

  ajaxConnexion('POST', 'http://api.projetm1.fr/0.06/index.php/connexion', identifiant.value, mdp.value, connexion_reussie);
  
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

document.getElementById("cookieDeConnexion").addEventListener("click", connexion_appuyee);
est_connecte();


