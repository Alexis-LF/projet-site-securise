

  function ajaxReponse(type, url, jwt, callback){
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


    function afficheDocuments(liste_documents){
        let html_mere=document.getElementById("liste_docs"); 
        for (i = 0; i < liste_documents.length; i++) {
        
        let documents=liste_documents[i];

        let download=document.createElement("button");
        
        
        let div = document.createElement("div");
        let nom_doc = document.createElement("p"); 
        nom_doc.appendChild(document.createTextNode('Nom du document : '+ documents["nom_doc"]));
        download.appendChild(document.createTextNode('Télécharger ce document'));
        download.setAttribute("class", "w3-button w3-block w3-green w3-left-align");
        
        div.appendChild(download);
        div.appendChild(nom_doc);
        
        document.body.appendChild(div);
      
        let type = document.createElement("p"); 
        type.appendChild(document.createTextNode('Type : '+ documents["type"]));
        div.appendChild(type);

        document.body.appendChild(div);
    
        let chemin = document.createElement("p"); 
        chemin.appendChild(document.createTextNode('Chemin : '+ documents["chemin"]));
        div.appendChild(chemin);
    
        let prenom_nom = document.createElement("p");
        prenom_nom.appendChild(document.createTextNode('Nom et prénom du patient : '+ documents["prenom_nom"]));
        div.setAttribute("class", "encadrement");
        div.appendChild(prenom_nom);
    
        let mail_docteurs = document.createElement("p"); 
        mail_docteurs.appendChild(document.createTextNode('Mail du praticien : '+ documents["mail_docteurs"]));
        div.appendChild(mail_docteurs);
    
        let telephone = document.createElement("p"); 
        telephone.appendChild(document.createTextNode('Telephone : 0'+ documents["telephone"]));
        div.appendChild(telephone);

        let nom_site = document.createElement("p"); 
        nom_site.appendChild(document.createTextNode('Nom du site : '+ documents["nom_site"]));
        div.appendChild(nom_site);

        let adresse = document.createElement("p"); 
        adresse.appendChild(document.createTextNode('Adresse : '+ documents["adresse"]));
        div.appendChild(adresse);

        let zip_code = document.createElement("p"); 
        zip_code.appendChild(document.createTextNode('Zip code : '+ documents["zip_code"]));
        div.appendChild(zip_code);
    
        let ville = document.createElement("p"); 
        ville.appendChild(document.createTextNode('Ville : '+ documents["ville"]));
        div.appendChild(ville);

        download.onclick = function cheminAccess() {
          window.location.href = documents["chemin"];
        }

       
      

        div.setAttribute("class", "w3-block encadrement w3-left-align");
        
        console.log(documents);
    
    
        html_mere.appendChild(div);
    
        
      };
      }

function verificationConnexionReussie(mail){
  setCookie("mail", mail);
  ajaxRequest('GET', URL_DOCUMENT_FINAL.replace("MAIL", mail["mail"]), afficheDocuments);
}

if(getCookie("jwt")!=""){
    console.log(getCookie("jwt"));
    ajaxReponse('POST', 'http://api.projetm1.fr/0.04/index.php/valider_connexion', getCookie("jwt"), verificationConnexionReussie);
    
    
}
else{
    alert("Veuillez vous connecter !");
    window.location.href = "../index.html";
}
