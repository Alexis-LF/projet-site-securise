
const BASE_URL="http://api.projetm1.fr";
const API_VERSION="0.05";

const URL_DOCUMENT="index.php/documents?mail=MAIL";
let mail="mail@test.com";
const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT.replace("MAIL", mail);

let mail_docteurs="mail@test.com";
let id=null;
const URL_FACTURE="index.php/factures?mail=MAIL"// &id=IDENTIFIANT"
const URL_FACTURE_FINAL=BASE_URL+"/"+API_VERSION+"/"+URL_FACTURE.replace("MAIL", mail_docteurs)// .replace("IDENTIFIANT", id) 