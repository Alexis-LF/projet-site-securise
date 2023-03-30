// Définition de l'URL de base pour les requêtes API
const BASE_URL = "http://127.0.0.1:8000/api";
// Définition de la version de l'API
const API_VERSION = "2.00";

// Définition de l'URL pour récupérer les documents
const URL_DOCUMENT = "documents?mail=MAIL";
// Concaténation de l'URL de récupération des documents avec l'URL de base et la version de l'API
const URL_DOCUMENT_FINAL = BASE_URL + "/" + API_VERSION + "/" + URL_DOCUMENT;

// Initialisation de la variable id à null
let id = null;
// Définition de l'URL pour récupérer les factures
const URL_FACTURE = "factures?mail=MAIL" // &id=IDENTIFIANT"
// Concaténation de l'URL de récupération des factures avec l'URL de base et la version de l'API
const URL_FACTURE_FINAL = BASE_URL + "/" + API_VERSION + "/" + URL_FACTURE;