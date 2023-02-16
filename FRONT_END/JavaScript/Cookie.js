

function setCookie(name, value, expirationDays) { // Permet de créer un nouveau cookie de connexion
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Définit la date du jour et la durée de validité de connexion
    const expires = "expires=" + date.toUTCString(); // Permet de formater la date 
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Définit le cookie le nom, la valeur du cookie, la date d'expiration et le chemin de validité (ici la racine de la page web)
  }
  
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie); // permet de parcourir la chaîne de caractères des cookies pour trouver le cookie correspondant au nom spécifié
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) { // Parcourt ensuite la chaîne de caracteres et renvoie le cookie demandé
      const cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) { // Vérifie si le nom du cookie correspond à celui spécifié
        return cookie.substring(name.length + 1, cookie.length); // Extrait et retourne le cookie correspondant
      }
    }
    return ""; // Retourne du vide 

  }
  
  function checkCookie() { // Regarde si le cookie de connexion est présent
    const user = getCookie("username"); // Récupère le cookie de connexion correspondant à l'utilisateur "username"
    if (user !== "") { // Si le cookie est présent,
      // L'utilisateur est connecté
    } else { // Sinon il ne l'est pas et il y a 
      // Redirection vers la page de connexion
    }
  }
  