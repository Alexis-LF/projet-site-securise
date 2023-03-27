
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

// On implémente une fonction afficheDocteurs qui affiche les informations d'un docteur sur la page
function afficheDocteurs(){
  // Récupération de l'élément HTML "test"
  let html_mere=document.getElementById("test"); 

  // Création d'un élément div pour afficher les informations du docteur
  let div = document.createElement("div");

  // Création d'un élément paragraphe pour afficher le nom du docteur
  let nom = document.createElement("p"); 

  // Ajout du nom du docteur à l'élément paragraphe nom
  nom.appendChild(document.createTextNode('Nom et prénom :'+getCookie("docteur")));

  // Ajout de l'élément paragraphe nom à l'élément div deux fois pour qu'il soit affiché deux fois
  div.appendChild(nom);
 
  // Création d'un élément paragraphe pour afficher la profession du docteur
  let profession = document.createElement("p"); 

  // Ajout de la profession du docteur à l'élément paragraphe profession
  profession.appendChild(document.createTextNode('Profession :'+getCookie("profession")));

  // Ajout de l'élément paragraphe profession à l'élément div deux fois pour qu'il soit affiché deux fois
  div.appendChild(profession);

  // Création d'un élément paragraphe pour afficher la ville du docteur
  let ville = document.createElement("p"); 

  // Ajout de la ville du docteur à l'élément paragraphe ville
  ville.appendChild(document.createTextNode('Ville : '+getCookie("ville")));

  // Ajout de l'élément paragraphe ville à l'élément div deux fois pour qu'il soit affiché deux fois
  div.appendChild(ville);

  // Ajout de la classe "encadrement" à l'élément div pour lui donner un style particulier
  div.setAttribute("class", "encadrement");

  // Ajout de la classe "w3-button w3-block w3-green w3-left-align" à l'élément div pour lui donner un style particulier
  div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");

  // Création d'un bouton "Prendre rendez-vous"
  let rdv_button = document.createElement("button"); 

  // Ajout du texte "Prendre rendez-vous" au bouton
  rdv_button.appendChild(document.createTextNode('Prendre rendez-vous'));

  // Ajout de la classe "w3-button w3-block w3-green w3-left-align" à l'élément div pour lui donner un style particulier
  div.setAttribute("class", "w3-button w3-block w3-green w3-left-align");

  // Ajout du bouton "Prendre rendez-vous" à l'élément div deux fois pour qu'il soit affiché deux fois
  div.appendChild(rdv_button);

  // Ajout d'un écouteur d'événement sur le bouton "Prendre rendez-vous" qui redirige vers la page de confirmation lorsqu'il est cliqué
  rdv_button.addEventListener('click', function() {window.location.href = 'pageDeConfirmation.html'; });

  html_mere.appendChild(div);
}
