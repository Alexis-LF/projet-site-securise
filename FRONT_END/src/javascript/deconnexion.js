// On implémente une fonction qui supprime tous les cookies
function removeAllCookies() {
  const cookies = document.cookie.split(";"); // Récupère la liste de tous les cookies
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split("=")[0]; // Récupère le nom du cookie
      removeCookie(cookie); // Supprime le cookie
  }
}

// On implémente une fonction removeCookie qui supprime un cookie en spécifiant son nom
function removeCookie(name) {
  // On définit la date d'expiration du cookie à une date passée pour le supprimer
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
}

// On appelle la fonction removeAllCookies pour nettoyer la connexion terminée
removeAllCookies();