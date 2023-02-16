function verifierMotDePasse() {
    // Récupérer la valeur du champ mot de passe
    var motDePasse = document.getElementById("motDePasse").value;
    
    // Définir les critères de sécurité
    var longueurMinimum = 8;
    var contientMajuscule = /[A-Z]/;
    var contientChiffre = /[0-9]/;
    var contientCaractereSpecial = /[$@!%*?&]/;
    
    // Vérifier si le mot de passe satisfait tous les critères
    if (motDePasse.length < longueurMinimum) {
      alert("Le mot de passe doit contenir au moins " + longueurMinimum + " caractères.");
      return false;
    }
    if (!contientMajuscule.test(motDePasse)) {
      alert("Le mot de passe doit contenir au moins une lettre majuscule.");
      return false;
    }
    if (!contientChiffre.test(motDePasse)) {
      alert("Le mot de passe doit contenir au moins un chiffre.");
      return false;
    }
    if (!contientCaractereSpecial.test(motDePasse)) {
      alert("Le mot de passe doit contenir au moins un caractère spécial ($@!%*?&).");
      return false;
    }
    
    // Si toutes les conditions sont remplies, renvoyer true
    return true;
}