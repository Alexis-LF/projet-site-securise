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




    function afficheFactures(liste_factures){

      let html_mere=document.getElementById("liste_facts"); 
      for (i = 0; i < liste_factures.length; i++) {
    
        let factures=liste_factures[i];
    
        let impression=document.createElement("button");
    
        let div = document.createElement("div");
        let identifiant = document.createElement("p");
        identifiant.appendChild(document.createTextNode('Identifiant : '+ factures["identifiant"]));
    
        impression.appendChild(document.createTextNode('Imprimer cette facture'));
        impression.setAttribute("class", "w3-button w3-block w3-cyan w3-left-align");
    
        div.appendChild(impression);
        div.appendChild(identifiant);
    
        let prix_ttc = document.createElement("p");
        prix_ttc.appendChild(document.createTextNode('Prix TTC : '+ factures["prix_ttc"]));
        div.appendChild(prix_ttc);
    
        let tva = document.createElement("p");
        tva.appendChild(document.createTextNode('TVA : '+ factures["tva"]));
        div.appendChild(tva);
    
        let date_facturation = document.createElement("p");
        date_facturation.appendChild(document.createTextNode('Date de facturation : '+ factures["date_facturation"]));
        div.setAttribute("class", "encadrement");
        div.appendChild(date_facturation);
    
        let date_paiement = document.createElement("p");
        date_paiement.appendChild(document.createTextNode('Date de paiement : '+ factures["date_paiement"]));
        div.appendChild(date_paiement);
    
        let mode_de_paiement = document.createElement("p");
        mode_de_paiement.appendChild(document.createTextNode('Mode de paiement : '+ factures["mode_de_paiement"]));
        div.appendChild(mode_de_paiement);
    
        let mail_docteurs = document.createElement("p");
        mail_docteurs.appendChild(document.createTextNode('Mail du praticien : '+ factures["mail_docteurs"]));
        div.appendChild(mail_docteurs);
    
        let prenom_nom = document.createElement("p"); 
        prenom_nom.appendChild(document.createTextNode('Nom et prénom du patient : '+ factures["prenom_nom"]));
        div.appendChild(prenom_nom);
        

        let telephone = document.createElement("p"); 
        telephone.appendChild(document.createTextNode('Telephone : 0'+ factures["telephone"]));
        div.appendChild(telephone);
        

        let nom_site = document.createElement("p"); 
        nom_site.appendChild(document.createTextNode('Nom du site : '+ factures["nom_site"]));
        div.appendChild(nom_site);

        let adresse = document.createElement("p"); 
        adresse.appendChild(document.createTextNode('Adresse : '+ factures["adresse"]));
        div.appendChild(adresse);

        let zip_code = document.createElement("p"); 
        zip_code.appendChild(document.createTextNode('Zip code : '+ factures["zip_code"]));
        div.appendChild(zip_code);

        let ville = document.createElement("p"); 
        ville.appendChild(document.createTextNode('Ville : '+ factures["ville"]));
        div.appendChild(ville);
    
        
    

        

        // Ajouter la fonction d'impression au bouton d'impression
        impression.onclick = function imprimer_page(){
          div.removeChild(impression);
          let contenu_facture = div.innerHTML;
          let page_a_imprimer = '<html><head><title>Facture</title></head><body>' + contenu_facture + '</body></html>';
          let fenetre_impression = window.open('', '', 'height=500,width=500');
          
          location.reload();
          
          fenetre_impression.document.write(page_a_imprimer);
          fenetre_impression.document.close();
          fenetre_impression.focus();
          fenetre_impression.print();
          fenetre_impression.close();
          
        }
        html_mere.appendChild(div);
      }
    }

  function verificationConnexionReussie(mail, identifiant){
    setCookie("mail", mail);
    setCookie("identifiant", identifiant);
    ajaxRequest('GET', URL_FACTURE_FINAL.replace("MAIL", mail["mail"]), afficheFactures);
    
  }
  
  if(getCookie("jwt")!=""){
      ajaxReponse('POST',  BASE_URL+'/'+API_VERSION+'/index.php/valider_connexion', getCookie("jwt"), verificationConnexionReussie);
      
  }
  else{
    alert("Veuillez vous connecter !");
    window.location.href = "../index.html";
  }
  