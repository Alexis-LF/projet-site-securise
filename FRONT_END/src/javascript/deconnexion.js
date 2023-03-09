function removeAllCookies() {
    const cookies = document.cookie.split(";"); // Récupère la liste de tous les cookies
    for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim().split("=")[0]; // Récupère le nom du cookie
    removeCookie(cookie); // Supprime le cookie
    }
}
function removeCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
  }

removeCookie("jwt");
removeCookie("mail");
removeCookie("nom_patient");
removeCookie("prénom_patient");
removeCookie("ville_patient");