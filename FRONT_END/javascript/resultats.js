
function recherche(){
    let url="http://api.projetm1.fr/0.03/index.php";
    let recherche = "/recherche?";
    if(getCookie("docteur") !=""){
      if(recherche != "/recherche?"){
        recherche +="&";
      }
      recherche+="d.prenom_nom="+getCookie("docteur");
    }
  
    if(getCookie("profession") !=""){
      if(recherche != "/recherche?"){
        recherche +="&";
      }
      recherche +="p.nom="+getCookie("profession");
    }
  
    if(getCookie("ville") !=""){
      if(recherche != "/recherche?"){
        recherche+="&";
      }
      recherche+="c.name="+getCookie("ville");
    }
    console.log(recherche);
    url=url+recherche;
    console.log(url);
    return url;
  }

  function afficheDocteurs(liste_docteurs){
    let html_mere=document.getElementById("liste_medecins"); //parent
    for (let i = 0; i < liste_docteurs.length; i++) {
   
    let docteur=liste_docteurs[i];
    
    let div = document.createElement("div");
    let nom = document.createElement("p"); // enfant
    nom.appendChild(document.createTextNode('Nom : '+ docteur["nom"]));
    div.appendChild(nom);
    div.appendChild(nom);

    let prenom = document.createElement("p"); // enfant
    prenom.appendChild(document.createTextNode('Prénom : '+ docteur["prenom"]));
    div.appendChild(prenom);
    div.appendChild(prenom);

    let mail = document.createElement("p"); // enfant
    mail.appendChild(document.createTextNode('Email : '+ docteur["mail"]));
    div.appendChild(mail);
    div.appendChild(mail);

    let num = document.createElement("p"); // enfant
    num.appendChild(document.createTextNode('Téléphone : 0'+ docteur["telephone"]));
    div.setAttribute("class", "encadrement");
    div.appendChild(num);
    div.appendChild(num);

    let site = document.createElement("p"); // enfant
    site.appendChild(document.createTextNode('Site : '+ docteur["site"]));
    div.appendChild(site);
    div.appendChild(site);

    let adresse = document.createElement("p"); // enfant
    adresse.appendChild(document.createTextNode('Adresse : '+ docteur["adresse"]));
    div.appendChild(adresse);
    div.appendChild(adresse);

    let zip_code = document.createElement("p"); // enfant
    zip_code.appendChild(document.createTextNode('Code postal : '+ docteur["zip_code"]));
    div.appendChild(zip_code);
    div.appendChild(zip_code);

    let ville = document.createElement("p"); // enfant
    ville.appendChild(document.createTextNode('Ville : '+ docteur["ville"]));
    div.appendChild(ville);
    div.appendChild(ville);


    let rdv = document.createElement("p"); // enfant
    div.appendChild(rdv);
    div.appendChild(rdv);

    let rdv_button = document.createElement("button"); // enfant
    rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
    div.setAttribute("class", "w3-button w3-block encadrement w3-left-align");
    div.appendChild(rdv_button);
    div.appendChild(rdv_button);
    rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });

    console.log(docteur)


    html_mere.appendChild(div);

    
  };
  }

  
    let url = recherche();
 ajaxRequest('GET', url, afficheDocteurs);