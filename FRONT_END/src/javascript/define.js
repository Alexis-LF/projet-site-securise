const BASE_URL="http://127.0.0.1:80/api";
const API_VERSION="2.00";

const URL_DOCUMENT="documents?mail=MAIL";

const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT;

let id=null;
const URL_FACTURE="factures?mail=MAIL"// &id=IDENTIFIANT"
const URL_FACTURE_FINAL=BASE_URL+"/"+API_VERSION+"/"+URL_FACTURE;