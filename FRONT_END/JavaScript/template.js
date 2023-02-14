

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


  // function afficheDocteurs(liste_docteurs){
  //   console.log(liste_docteurs);

  
  //   let html_mere=document.getElementById("liste_medecins"); //parent
  //   let docteur=liste_docteurs[0];
    
  //   let div = document.createElement("div");
  //   let nom = document.createElement("p"); // enfant
  //   nom.appendChild(document.createTextNode('Nom : '+ docteur["nom"]));
  //   div.appendChild(nom);
  //   html_mere.appendChild(nom);


  // }
  // ajaxRequest('GET', 'http://api.projetm1.fr/0.01/', afficheDocteurs);


  
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
  
















   /* const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    label1.appendChild(document.createTextNode('Nom : '));
    
    form.appendChild(label1);
  
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    input2.type = 'text';
    label2.appendChild(document.createTextNode('Prénom : '));
    label2.appendChild(input2);
    form.appendChild(label2);
  
    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    input3.type = 'email';
    label3.appendChild(document.createTextNode('Mail : '));
    label3.appendChild(input3);
    form.appendChild(label3);
  
    const label4 = document.createElement('label');
    const input4 = document.createElement('input');
    input4.type = 'tel';
    label4.appendChild(document.createTextNode('Numéro portable : '));
    label4.appendChild(input4);
    form.appendChild(label4);
  
    const label5 = document.createElement('label');
    const input5 = document.createElement('input');
    input5.type = 'date';
    label5.appendChild(document.createTextNode('Date de naissance : '));
    label5.appendChild(input5);
    form.appendChild(label5);
  
    const label6 = document.createElement('label');
    const input6 = document.createElement('input');
    input6.type = 'text';
    label6.appendChild(document.createTextNode('Nom du site : '));
    label6.appendChild(input6);
    form.appendChild(label6);
  
    document.body.appendChild(form);
  }
  */