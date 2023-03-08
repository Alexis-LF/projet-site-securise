const BASE_URL="http://127.0.0.1:5678";
const API_VERSION="0.08";

const URL_DOCUMENT="index.php/documents?mail=MAIL";

const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT;

let id=null;
const URL_FACTURE="index.php/factures?mail=MAIL"// &id=IDENTIFIANT"
const URL_FACTURE_FINAL=BASE_URL+"/"+API_VERSION+"/"+URL_FACTURE;