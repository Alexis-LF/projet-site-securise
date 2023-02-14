

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Slideshow Apartment Images

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }
  // Fonction affiche docteurs 
    function afficheDocteurs(liste_docteurs){
      for (let i = 0; i <= liste_docteurs.length; i++) {
      console.log(liste_docteurs);
  
    
      let html_mere=document.getElementById("liste_medecins"); //parent
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
      site.appendChild(document.createTextNode('Site : '+ docteur["nom_site"]));
      div.appendChild(site);
      div.appendChild(site);

      let rdv = document.createElement("p"); // enfant
      div.setAttribute("class", "");
      div.appendChild(rdv);
      div.appendChild(rdv);

      let rdv_button = document.createElement("button"); // enfant
      rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
      div.setAttribute("class", "w3-button w3-block w3-green w3-left-align", "submit");
      div.appendChild(rdv_button);
      div.appendChild(rdv_button);
      rdv_button.addEventListener('click', function() {window.location.href = 'page_de_confirmation.html'; });


      html_mere.appendChild(div);
  
      
    };
    }
    

  ajaxRequest('GET', 'http://api.projetm1.fr/0.01/', afficheDocteurs);
  
  