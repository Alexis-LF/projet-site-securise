
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

xhr.addEventListener("readystatechange", stage);

xhr.send(data);

xhr.onload = () =>
{
    switch(xhr.status)
    {
        case 201:
            callback((xhr.responseText));
            break;
        case 401: 
            alert("Mauvais identifiant mdp");
            break;
        default:
            httpErrors(xhr.status);
    }
}


}



function connexion_reussie(jwt){
  setCookie("jwt", jwt);
  est_connecte();

  }
function est_connecte(){
  if (getCookie("jwt")){
    document.getElementById("champs_de_connexion");
    div.setAttribute("class", "w3-button w3-block encadrement w3-left-align");
  }
}

document.getElementById("cookieDeConnexion").addEventListener("click", ajaxConnexion);