function ajaxReponse(type, url, jwt, callback){
    if (type!='POST' && url!=""){
      return false;
    }
    var data = new FormData();
    data.append("jwt", jwt);
    
    var xhr = new XMLHttpRequest();
    
    xhr.withCredentials = false;
    
    xhr.open(type, url);
    
    // xhr.addEventListener("readystatechange", stage);
    
    
    xhr.onload = () =>
    {
        switch(xhr.status)
        {
            case 201:
              // console.log(xhr.responseText);
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

function afficheFactures(liste_factures){
    let html_mere=document.getElementById("liste_facts"); //parent
    for (i = 0; i < liste_factures.length; i++) {
    
    let factures=liste_factures[i];

    let download=document.createElement("button");
    let impression=document.createElement("button");
    
    let div = document.createElement("div");
    let identifiant = document.createElement("p"); // enfant
    identifiant.appendChild(document.createTextNode('Identifiant : '+ factures["identifiant"]));
    download.appendChild(document.createTextNode('Télécharger ce document'));
    download.setAttribute("class", "w3-button w3-block w3-green w3-left-align");
    impression.appendChild(document.createTextNode('Imprimer ce document'));
    impression.setAttribute("class", "w3-button w3-block w3-cyan w3-left-align");
    div.appendChild(download);
    div.appendChild(impression);
    div.appendChild(identifiant);
    
    
  // Ajouter le div au DOM
  document.body.appendChild(div);
    
    
    

    let prix_ttc = document.createElement("p"); // enfant
    prix_ttc.appendChild(document.createTextNode('Prix TTC : '+ factures["prix_ttc"]));
    div.appendChild(prix_ttc);
    div.appendChild(prix_ttc);

    document.body.appendChild(div);

    let tva = document.createElement("p"); // enfant
    tva.appendChild(document.createTextNode('TVA : '+ factures["tva"]));
    div.appendChild(tva);
    div.appendChild(tva);
    

    let date_facturation = document.createElement("p"); // enfant
    date_facturation.appendChild(document.createTextNode('Date de facturation : '+ factures["date_facturation"]));
    div.setAttribute("class", "encadrement");
    div.appendChild(date_facturation);
    div.appendChild(date_facturation);

    let date_paiement = document.createElement("p"); // enfant
    date_paiement.appendChild(document.createTextNode('Date de paiement : '+ factures["date_paiement"]));
    div.appendChild(date_paiement);
    div.appendChild(date_paiement);
    

    let mode_de_paiement = document.createElement("p"); // enfant
    mode_de_paiement.appendChild(document.createTextNode('Mode de paiement : '+ factures["mode_de_paiement"]));
    div.appendChild(mode_de_paiement);
    div.appendChild(mode_de_paiement);
    
    let mail_docteurs = document.createElement("p"); // enfant
    mail_docteurs.appendChild(document.createTextNode('Mail du praticien : '+ factures["mail_docteurs"]));
    div.appendChild(mail_docteurs);
    div.appendChild(mail_docteurs);

    let prenom_nom = document.createElement("p"); // enfant
    prenom_nom.appendChild(document.createTextNode('Nom et prénom du patient : '+ factures["prenom_nom"]));
    div.appendChild(prenom_nom);
    div.appendChild(prenom_nom);

    let telephone = document.createElement("p"); // enfant
    telephone.appendChild(document.createTextNode('Telephone : 0'+ factures["telephone"]));
    div.appendChild(telephone);
    div.appendChild(telephone);

    let nom_site = document.createElement("p"); // enfant
    nom_site.appendChild(document.createTextNode('Nom du site : '+ factures["nom_site"]));
    div.appendChild(nom_site);
    div.appendChild(nom_site);

    let adresse = document.createElement("p"); // enfant
    adresse.appendChild(document.createTextNode('Adresse : '+ factures["adresse"]));
    div.appendChild(adresse);
    div.appendChild(adresse);

    let zip_code = document.createElement("p"); // enfant
    zip_code.appendChild(document.createTextNode('Zip code : '+ factures["zip_code"]));
    div.appendChild(zip_code);
    div.appendChild(zip_code);

    let ville = document.createElement("p"); // enfant
    ville.appendChild(document.createTextNode('Ville : '+ factures["ville"]));
    div.appendChild(ville);
    div.appendChild(ville);
    
    download.onclick = function cheminAccess() {
      window.location.href = documents["chemin"];
   }

    impression.onclick = function imprimer_page(){
      window.print();
    }
  

    div.setAttribute("class", "w3-block encadrement w3-left-align");
    
    console.log(factures);


    html_mere.appendChild(div);

    
  };
  }

  function verificationConnexionReussie(mail, identifiant){
    setCookie("mail", mail);
    setCookie("identifiant", identifiant);
    ajaxRequest('GET', URL_FACTURE_FINAL.replace("MAIL", mail["mail"]), afficheFactures);
    
  }
  
  if(getCookie("jwt")!=""){
      console.log(getCookie("jwt"));
      ajaxReponse('POST', 'http://api.projetm1.fr/0.04/index.php/valider_connexion', getCookie("jwt"), verificationConnexionReussie);
      
  }
  else{
    alert("Veuillez vous connecter !");
    window.location.href = "../index.html";
  }