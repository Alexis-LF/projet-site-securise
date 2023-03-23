const BASE_URL="http://127.0.0.1:8000/api";
const API_VERSION="2.00";

const AUTH_BASE_URL="http://127.0.0.1:8000"
const AUTH_LOGIN_URL=AUTH_BASE_URL+"/login"
const AUTH_REGISTER_URL=AUTH_BASE_URL+"/register"

const URL_DOCUMENT="documents?mail=MAIL";

const URL_DOCUMENT_FINAL= BASE_URL+"/"+API_VERSION+"/"+URL_DOCUMENT;

let id=null;
const URL_FACTURE="factures?mail=MAIL"// &id=IDENTIFIANT"
const URL_FACTURE_FINAL=BASE_URL+"/"+API_VERSION+"/"+URL_FACTURE;