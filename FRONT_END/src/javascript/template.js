
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
  
  // La fonction showDivs prend en paramètre n, qui représente l'indice de la diapositive à afficher
function showDivs(n) {
  var i;
  // Récupère tous les éléments ayant la classe "mySlides" et les stocke dans la variable x
  var x = document.getElementsByClassName("mySlides");
  // Récupère tous les éléments ayant la classe "demo" et les stocke dans la variable dots
  var dots = document.getElementsByClassName("demo");
  // Si n est supérieur au nombre d'éléments dans x, réinitialise slideIndex à 1
  if (n > x.length) {slideIndex = 1}
  // Si n est inférieur à 1, réinitialise slideIndex à la longueur de x
  if (n < 1) {slideIndex = x.length}
  // Cache toutes les diapositives en bouclant sur tous les éléments de x
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Réinitialise toutes les classes des éléments de dots en enlevant "w3-opacity-off"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  // Affiche la diapositive avec l'indice slideIndex en mettant son style à "block"
  x[slideIndex-1].style.display = "block";
  // Ajoute la classe "w3-opacity-off" à l'élément de dots correspondant à la diapositive affichée
  dots[slideIndex-1].className += " w3-opacity-off";
}
    
    
    

 
  
  function lister_professions(liste_des_professions){
    let html_mere=document.getElementById("liste_profession"); 
    for (let i = 0; i < liste_des_professions.length; i++) {
      
  
      let profession=liste_des_professions[i];
      
      // Ajouter des options à la liste
      let option = document.createElement("option");
      option.setAttribute("value", profession["nom"]);
      // Ajouter le champ de saisie et la liste de suggestions au document
      html_mere.appendChild(option);


  }
}

function lister_docteurs(liste_des_docteurs){
  let html_mere=document.getElementById("liste_docteur"); 
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
  let html_mere=document.getElementById("test"); 
  

  let div = document.createElement("div");
  let nom = document.createElement("p"); 
  nom.appendChild(document.createTextNode('Nom et prénom :'+getCookie("docteur")));
  div.appendChild(nom);
  div.appendChild(nom);

  let profession = document.createElement("p"); 
  profession.appendChild(document.createTextNode('Profession :'+getCookie("profession")));
  div.appendChild(profession);
  div.appendChild(profession);

  let ville = document.createElement("p"); 
  ville.appendChild(document.createTextNode('Ville : '+getCookie("ville")));
  div.appendChild(ville);
  div.appendChild(ville);
  div.setAttribute("class", "encadrement");
  div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");

  let rdv_button = document.createElement("button"); 
      rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));
      div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");
      div.appendChild(rdv_button);
      div.appendChild(rdv_button);
      rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });


  html_mere.appendChild(div);

  
};
