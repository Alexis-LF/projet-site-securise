#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

#------------------------------------------------------------
# Nettoyage des tables
#------------------------------------------------------------
DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS est_specialiste_de;
DROP TABLE IF EXISTS docteurs;
DROP TABLE IF EXISTS type_de_document;
DROP TABLE IF EXISTS personne;
DROP TABLE IF EXISTS facture;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS mode_paiement;
DROP TABLE IF EXISTS profession;
DROP TABLE IF EXISTS site;
DROP TABLE IF EXISTS ville;

#------------------------------------------------------------
# Table: patients
#------------------------------------------------------------

CREATE TABLE patients(
        mail                       Varchar (255) NOT NULL ,
        mot_de_passe               Varchar (255) ,
        credential_connexion_tiers Varchar (600) ,
        g_csrf_token               Varchar (255)
	,CONSTRAINT patients_PK PRIMARY KEY (mail)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: profession
#------------------------------------------------------------

CREATE TABLE profession(
        nom Varchar (100) NOT NULL
	,CONSTRAINT profession_PK PRIMARY KEY (nom)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: type_de_document
#------------------------------------------------------------

CREATE TABLE type_de_document(
        type Varchar (255) NOT NULL
	,CONSTRAINT type_de_document_PK PRIMARY KEY (type)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: mode_paiement
#------------------------------------------------------------

CREATE TABLE mode_paiement(
        mode_de_paiement Varchar (50) NOT NULL
	,CONSTRAINT mode_paiement_PK PRIMARY KEY (mode_de_paiement)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ville
#------------------------------------------------------------

CREATE TABLE ville(
        code_insee   Varchar (5) NOT NULL ,
        code_postal  Varchar (5) NOT NULL ,
        nom          Varchar (50) NOT NULL
	,CONSTRAINT ville_PK PRIMARY KEY (code_insee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: personne
#------------------------------------------------------------

CREATE TABLE personne(
        mail           Varchar (255) NOT NULL ,
        nom            Varchar (255) NOT NULL ,
        prenom         Varchar (255) ,
        telephone      Int ,
        date_naissance Date ,
        code_insee     Varchar (5) NOT NULL
	,CONSTRAINT personne_PK PRIMARY KEY (mail)

	,CONSTRAINT personne_patients_FK FOREIGN KEY (mail) REFERENCES patients(mail)
	,CONSTRAINT personne_ville0_FK FOREIGN KEY (code_insee) REFERENCES ville(code_insee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: site
#------------------------------------------------------------

CREATE TABLE site(
        nom        Varchar (35) NOT NULL ,
        adresse    Varchar (255) NOT NULL ,
        code_insee Varchar (5) NOT NULL
	,CONSTRAINT site_PK PRIMARY KEY (nom)

	,CONSTRAINT site_ville_FK FOREIGN KEY (code_insee) REFERENCES ville(code_insee)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: facture
#------------------------------------------------------------

CREATE TABLE facture(
        identifiant      Int  Auto_increment  NOT NULL ,
        prix_ttc         Float NOT NULL ,
        tva              Float ,
        prix_sans_taxe   Float ,
        date_facturation Datetime ,
        date_paiement    Datetime ,
        mail             Varchar (255) NOT NULL ,
        mode_de_paiement Varchar (50) NOT NULL ,
        nom              Varchar (35)
	,CONSTRAINT facture_PK PRIMARY KEY (identifiant)

	,CONSTRAINT facture_patients_FK FOREIGN KEY (mail) REFERENCES patients(mail)
	,CONSTRAINT facture_mode_paiement0_FK FOREIGN KEY (mode_de_paiement) REFERENCES mode_paiement(mode_de_paiement)
	,CONSTRAINT facture_site1_FK FOREIGN KEY (nom) REFERENCES site(nom)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: docteurs 
#------------------------------------------------------------

CREATE TABLE docteurs(
        mail           Varchar (255) NOT NULL ,
        nom            Varchar (255) NOT NULL ,
        prenom         Varchar (255) NOT NULL ,
        telephone      Int ,
        date_naissance Date NOT NULL ,
        nom_site       Varchar (35) NOT NULL ,
        identifiant    Int NOT NULL
	,CONSTRAINT docteurs_PK PRIMARY KEY (mail)

	,CONSTRAINT docteurs_site_FK FOREIGN KEY (nom_site) REFERENCES site(nom)
	,CONSTRAINT docteurs_facture0_FK FOREIGN KEY (identifiant) REFERENCES facture(identifiant)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: documents 
#------------------------------------------------------------

CREATE TABLE documents(
        id                Int  Auto_increment  NOT NULL ,
        nom_doc           Varchar (80) NOT NULL ,
        chemin            Varchar (255) NOT NULL ,
        depot_patient     Datetime ,
        signature_docteur Datetime ,
        mail              Varchar (255) NOT NULL ,
        mail_docteurs     Varchar (255) ,
        type              Varchar (255) NOT NULL
	,CONSTRAINT documents_PK PRIMARY KEY (id)

	,CONSTRAINT documents_patients_FK FOREIGN KEY (mail) REFERENCES patients(mail)
	,CONSTRAINT documents_docteurs0_FK FOREIGN KEY (mail_docteurs) REFERENCES docteurs(mail)
	,CONSTRAINT documents_type_de_document1_FK FOREIGN KEY (type) REFERENCES type_de_document(type)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: est_specialiste_de
#------------------------------------------------------------

CREATE TABLE est_specialiste_de(
        nom  Varchar (50) NOT NULL ,
        mail Varchar (255) NOT NULL
	,CONSTRAINT est_specialiste_de_PK PRIMARY KEY (nom,mail)

	,CONSTRAINT est_specialiste_de_profession_FK FOREIGN KEY (nom) REFERENCES profession(nom)
	,CONSTRAINT est_specialiste_de_docteurs0_FK FOREIGN KEY (mail) REFERENCES docteurs(mail)
)ENGINE=InnoDB;

