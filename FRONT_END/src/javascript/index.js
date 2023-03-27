//On implémente une fonction qui crée une liste de suggestions de villes en fonction de ce que l'utilisateur tape dans le champ de recherche
function lister_villes(liste_des_villes){
  // On récupère le noeud HTML pour la liste des villes
  let html_mere=document.getElementById("liste_ville");
  // On parcourt la liste des villes renvoyées par l'API
  for (let i = 0; i < liste_des_villes.length; i++) {
  let ville=liste_des_villes[i];
  let nomVille= ville["name"];
  //On ajoute des options à la liste si la ville n'a pas déjà été ajoutée
  if (!villesAjoutees.includes(nomVille)){
  let option = document.createElement("option");
  option.setAttribute("value", nomVille);
  // On ajoute l'option au noeud HTML de la liste de villes
  html_mere.appendChild(option);
  villesAjoutees.push(nomVille);
  }
  }
  }
  
  // On implémente la fonction villeTapee qui est appelée à chaque fois que l'utilisateur tape dans le champ de recherche de villes
  function villeTapee(){
  let texte = document.getElementById("texte_ville");
  // Si l'utilisateur a tapé plus de 2 caractères on execute la requête ajaxRequest
  if(texte.value.length>2){
  // On fait la requête AJAX pour récupérer les villes correspondantes
  ajaxRequest('GET', BASE_URL+'/'+API_VERSION+'/villes?name='+ texte.value, lister_villes);
  }
  }
  
  // On implémente une fonction enregistre les critères de recherche dans l'URL visitée
  function rechercher() {
  let uri ="?"; // string retourné : s'il est que de longueur 1, alors pas de "&" à mettre au bout
  let criteres = {
  // On récupère les informations du formulaire en fonction des entrées de l'utilisateur 
  "docteur": document.getElementById("imput_nom_docteur").value,
  "profession": document.getElementById("imput_nom_profession").value,
  "ville": document.getElementById("texte_ville").value
  }
  Object.entries(criteres).forEach(([cle, valeur]) => {
  // Si la valeur n'est pas qu'un espace
  if(valeur.trim() != ""){
  // On forme l'uri : &clé=valeur
  uri += (uri.length > 1 ? "&" : "") + cle +"="+ valeur;
  }
  });
  // Une fois le traitement fini, on se rend sur la page de résultats
  window.location.href = "html/resultats.html"+uri;
  }
  
  // On définit les URLs de connexion et d'inscription dans la page
  document.getElementById("cookieDeConnexion").setAttribute("href",AUTH_LOGIN_URL);
  document.getElementById("boutonInscription").setAttribute("href",AUTH_REGISTER_URL);
  
  // On ajoute un événement "click" au bouton de recherche
  document.getElementById("bouton_recherche").addEventListener("click", rechercher);
  
  // On fait des requêtes AJAX pour récupérer les professions, les docteurs et les villes
  ajaxRequest('GET', BASE_URL+'/'+API_VERSION+'/professions', lister_professions);
  ajaxRequest('GET', BASE_URL+'/'+API_VERSION+'/docteurs', lister_docteurs);
  let texte = document.getElementById("texte_ville");
  var villesAjoutees=[];
  // On ajoute un événement de saisie au champ de recherche de villes
  texte.addEventListener("input", villeTapee);