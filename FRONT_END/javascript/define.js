
const BASE_URL="http://api.projetm1.fr";
const API_VERSION="0.05";

const URL_DOCUMENT="index.php/documents?mail=MAIL";
// let mail=getCookie('mail');
// alert(getCookie('mail'));

const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT;
let id=null;
const URL_FACTURE="index.php/factures?mail=MAIL"// &id=IDENTIFIANT"
const URL_FACTURE_FINAL=BASE_URL+"/"+API_VERSION+"/"+URL_FACTURE// .replace("IDENTIFIANT", id) 
