
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
console.log(id);
var xhr = new XMLHttpRequest();

xhr.withCredentials = false;

xhr.open(type, url);

// xhr.addEventListener("readystatechange", stage);



xhr.onload = () =>
{
    switch(xhr.status)
    {
        case 201:
          console.log(xhr.responseText);
            callback((xhr.responseText));
            break;
        case 401: 
            alert("Mauvais identifiant mdp");
            break;
        default:
            httpErrors(xhr.status);
    }
}

xhr.send(data);
}



function connexion_reussie(jwt){
  setCookie("jwt", jwt);
  est_connecte();
  alert("La connexion est réussie !")
  }
function est_connecte(){
  if (getCookie("jwt")){
    let div = document.getElementById("champs_de_connexion");
    div.setAttribute("style", "display:none");
    
  }
}

function connexion_appuyee(){
  let mdp = document.getElementById("imput_mdp");
  let identifiant = document.getElementById("imput_email")
  ajaxConnexion('POST', 'http://api.projetm1.fr/0.04/index.php/connexion', identifiant.value, mdp.value, connexion_reussie);
    
  }
document.getElementById("cookieDeConnexion").addEventListener("click", connexion_appuyee());
