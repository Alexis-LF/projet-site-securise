function validerFormulaire() {
    const nom = document.getElementsByName("nom")[0].value;
    const prenom = document.getElementsByName("prenom")[0].value;
    const dateNaissance = document.getElementsByName("dateNaissance")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const motDePasse = document.getElementsByName("motDePasse")[0].value;
    const confirmationMotDePasse = document.getElementsByName("confirmationMotDePasse")[0].value;
    const numeroPortable = document.getElementsByName("numeroPortable")[0].value;

    
    // Vérifier que tous les champs sont remplis
    if (!nom || !prenom || !dateNaissance || !email || !motDePasse || !confirmationMotDePasse || !numeroPortable) {
      alert("Veuillez remplir tous les champs du formulaire.");
      console.log("Veuillez remplir tous les champs du formulaire.")
      return;
    }

    // Vérifier que le mot de passe répond aux exigences spécifiées
    const regexMotDePasse = /(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])/;
    if (!regexMotDePasse.test(motDePasse)) {
      alert("Le mot de passe doit contenir au moins un caractère spécial et une majuscule.");
      console.log("Le mot de passe doit contenir au moins un caractère spécial et une majuscule.")
      return;
    }


    
  }

  function redirectionIndex(){
    alert('Votre message a bien été envoyé !');
    window.location.href = "/index.html";
  }
  