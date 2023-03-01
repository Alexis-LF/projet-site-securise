




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


    
    
    

 
  
  function lister_professions(liste_des_professions){
    let html_mere=document.getElementById("liste_profession"); //parent
    for (let i = 0; i < liste_des_professions.length; i++) {
      
  
      let profession=liste_des_professions[i];
      // console.log(profession);
      // Ajouter des options à la liste
      let option = document.createElement("option");
      option.setAttribute("value", profession["nom"]);
      // Ajouter le champ de saisie et la liste de suggestions au document
      html_mere.appendChild(option);


  }
}

function lister_docteurs(liste_des_docteurs){
  let html_mere=document.getElementById("liste_docteur"); //parent
  for (let i = 0; i < liste_des_docteurs.length; i++) {
    
    let docteur=liste_des_docteurs[i];
    // console.log(profession);
    // Ajouter des options à la liste
    let option = document.createElement("option");
    option.setAttribute("value", docteur["prenom_nom"]);
    // Ajouter le champ de saisie et la liste de suggestions au document
    html_mere.appendChild(option);


}
}

function afficheDocteurs(){
  let html_mere=document.getElementById("test"); //parent
  

  let div = document.createElement("div");
  let nom = document.createElement("p"); // enfant
  nom.appendChild(document.createTextNode('Nom et prénom :'+getCookie("docteur")));
  div.appendChild(nom);
  div.appendChild(nom);

  let profession = document.createElement("p"); // enfant
  profession.appendChild(document.createTextNode('Profession :'+getCookie("profession")));
  div.appendChild(profession);
  div.appendChild(profession);

  let ville = document.createElement("p"); // enfant
  ville.appendChild(document.createTextNode('Ville : '+getCookie("ville")));
  div.appendChild(ville);
  div.appendChild(ville);
  div.setAttribute("class", "encadrement");
  div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");

  let rdv_button = document.createElement("button"); // enfant
      rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
      div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");
      div.appendChild(rdv_button);
      div.appendChild(rdv_button);
      rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });


  html_mere.appendChild(div);

  
};
