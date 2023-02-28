
const BASE_URL="http://api.projetm1.fr";
const API_VERSION="0.05";

const URL_DOCUMENT="index.php/documents?mail=MAIL";
let mail="mail@test.com";
const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT.replace("MAIL", mail);