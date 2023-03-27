// On implémente une fonction qui crée un nouveau cookie de connexion
function setCookie(name, value) { 
  
  let expirationDays=1;
    const date = new Date();
     // On définit la date du jour et la durée de validité de connexion
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
     // On formate la date
    const expires = "expires=" + date.toUTCString();
    // On définit le cookie le nom, la valeur du cookie, la date d'expiration et le chemin de validité (ici la racine de la page web)
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }


  // On implémente une fonction getCookie qui parcourt une chaine de caractères des cookies pour trouver le cookie correspondant à l'entrée de la fonction
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    // On parcourt ensuite la chaîne de caracteres à l'aide d'une boucle et on renvoie le cookie demandé
    for (let i = 0; i < cookies.length; i++) { 
      const cookie = cookies[i].trim();
      // On vérifie si le nom du cookie correspond à celui spécifié
      if (cookie.indexOf(name + "=") === 0) { 
        // On extrait et on retourne le cookie correspondant
        return cookie.substring(name.length + 1, cookie.length); 
      }
    }
    // On retourne du vide 
    return ""; 

  }
  
  // On implémente une fonction checkCookie qui regarde si le cookie de connexion est présent
  function checkCookie() { 
    // On récupère le cookie de connexion correspondant à l'utilisateur "username"
    let user = getCookie("username"); 
    // Si le cookie est présent, l'utilisateur est connecté
    if (user !== "") { 
    } 
    // Sinon il ne l'est pas et il y a une redirection vers la page de connexion
    else { 
    }
  }