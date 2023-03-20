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
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS migrations;
DROP TABLE IF EXISTS password_reset_tokens;
DROP TABLE IF EXISTS failed_jobs;
DROP TABLE IF EXISTS personal_access_tokens;

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
# Table: cities
#------------------------------------------------------------

SOURCE /docker-entrypoint-initdb.d/scripts_sql/cities.sql


#------------------------------------------------------------
# Table: site
#------------------------------------------------------------

CREATE TABLE site(
        nom     Varchar (255) NOT NULL ,
        adresse Varchar (255) NOT NULL ,
        id      Int NOT NULL
	,CONSTRAINT site_PK PRIMARY KEY (nom)
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
        nom_site       Varchar (255) NOT NULL
	,CONSTRAINT docteurs_PK PRIMARY KEY (mail)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: migrations
#------------------------------------------------------------

CREATE TABLE migrations(
        id        Int NOT NULL ,
        migration Varchar (255) NOT NULL ,
        batch     Int NOT NULL
	,CONSTRAINT migrations_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: password_reset_tokens
#------------------------------------------------------------

CREATE TABLE password_reset_tokens(
        email      Varchar (255) NOT NULL ,
        token      Varchar (255) NOT NULL ,
        created_at TimeStamp
	,CONSTRAINT password_reset_tokens_PK PRIMARY KEY (email)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: failed_jobs
#------------------------------------------------------------

CREATE TABLE failed_jobs(
        id         Int NOT NULL ,
        uuid       Varchar (255) NOT NULL ,
        connection Text NOT NULL ,
        queue      Text NOT NULL ,
        payload    Longtext NOT NULL ,
        exception  Longtext NOT NULL ,
        failed_at  TimeStamp NOT NULL
	,CONSTRAINT failed_jobs_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: personal_access_tokens
#------------------------------------------------------------

CREATE TABLE personal_access_tokens(
        id             Int NOT NULL ,
        name           Varchar (255) NOT NULL ,
        token          Varchar (64) NOT NULL ,
        abilities      Text ,
        last_used_at   TimeStamp ,
        expires_at     TimeStamp ,
        created_at     TimeStamp ,
        updated_at     TimeStamp ,
        tokenable_type Varchar (255) NOT NULL ,
        tokenable_id   Int NOT NULL
	,CONSTRAINT personal_access_tokens_AK UNIQUE (tokenable_type,tokenable_id)
	,CONSTRAINT personal_access_tokens_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: est_specialiste_de
#------------------------------------------------------------

CREATE TABLE est_specialiste_de(
        nom  Varchar (100) NOT NULL ,
        mail Varchar (255) NOT NULL
	,CONSTRAINT est_specialiste_de_PK PRIMARY KEY (nom,mail)
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
        id      Int NOT NULL
	,CONSTRAINT personne_PK PRIMARY KEY (mail)
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
        mail_docteurs    Varchar (255) ,
        mode_de_paiement Varchar (50) NOT NULL ,
        nom              Varchar (255)
	,CONSTRAINT facture_PK PRIMARY KEY (identifiant)
)ENGINE=InnoDB;



#------------------------------------------------------------
# Table: users
#------------------------------------------------------------

CREATE TABLE users(
        id                Int NOT NULL ,
        email             Varchar (255) NOT NULL ,
        email_verified_at TimeStamp ,
        password          Varchar (255) NOT NULL ,
        remember_token    Varchar (100) ,
        created_at        TimeStamp ,
        updated_at        TimeStamp
	,CONSTRAINT users_PK PRIMARY KEY (id)
)ENGINE=InnoDB;




ALTER TABLE site
	ADD CONSTRAINT site_cities0_FK
	FOREIGN KEY (id)
	REFERENCES cities(id);

ALTER TABLE docteurs
	ADD CONSTRAINT docteurs_site0_FK
	FOREIGN KEY (nom_site)
	REFERENCES site(nom);

ALTER TABLE est_specialiste_de
	ADD CONSTRAINT est_specialiste_de_profession0_FK
	FOREIGN KEY (nom)
	REFERENCES profession(nom);

ALTER TABLE est_specialiste_de
	ADD CONSTRAINT est_specialiste_de_docteurs1_FK
	FOREIGN KEY (mail)
	REFERENCES docteurs(mail);

ALTER TABLE personne
	ADD CONSTRAINT personne_cities1_FK
	FOREIGN KEY (id)
	REFERENCES cities(id);

ALTER TABLE documents
	ADD CONSTRAINT documents_personne0_FK
	FOREIGN KEY (mail)
	REFERENCES personne(mail);

ALTER TABLE documents
	ADD CONSTRAINT documents_docteurs1_FK
	FOREIGN KEY (mail_docteurs)
	REFERENCES docteurs(mail);

ALTER TABLE documents
	ADD CONSTRAINT documents_type_de_document2_FK
	FOREIGN KEY (type)
	REFERENCES type_de_document(type);

ALTER TABLE facture
	ADD CONSTRAINT facture_personne0_FK
	FOREIGN KEY (mail)
	REFERENCES personne(mail);

ALTER TABLE facture
	ADD CONSTRAINT facture_docteurs1_FK
	FOREIGN KEY (mail_docteurs)
	REFERENCES docteurs(mail);

ALTER TABLE facture
	ADD CONSTRAINT facture_mode_paiement2_FK
	FOREIGN KEY (mode_de_paiement)
	REFERENCES mode_paiement(mode_de_paiement);

ALTER TABLE facture
	ADD CONSTRAINT facture_site3_FK
	FOREIGN KEY (nom)
	REFERENCES site(nom);
