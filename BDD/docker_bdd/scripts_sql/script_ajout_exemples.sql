#------------------------------------------------------------
# DELETE des exemples
#------------------------------------------------------------
DELETE FROM facture;
DELETE FROM documents;
DELETE FROM est_specialiste_de;
DELETE FROM docteurs;
DELETE FROM personne;
DELETE FROM patients;


#------------------------------------------------------------
# Table : docteurs et est_specialiste_de
#------------------------------------------------------------
INSERT INTO docteurs(mail,nom,prenom,telephone,date_naissance,nom_site) VALUES
("david.legall@gmail.com","LE GALL", "David", 0652123259, "1959-11-28","CENTRE HOSPITALIER FOUGERES"),
("christelle.gwenn@gmail.com","GWENN", "Christelle", 0745123796, "1984-02-15","CHRU BRETONNEAU TOURS"),
("laurent.dubois@gmail.com","DUBOIS", "Laurent", 0685423691, "1968-09-22","SITE DE PERTUIS"),
("john.morston@gmail.com","MORSTON", "John", 0754665213, "1975-01-12","CLINIQUE DE LA MISERICORDE CAEN"),
("arthur.morgann@gmail.com","MORGANN", "Arthur", 0644551321, "1972-08-18","POLYCLINIQUE DU TREGOR"),
("leon.kennedy@gmail.com","KENNEDY", "LEON", 0679563214, "1980-06-04","CLINIQUE DES GRAINETIERES"),
("leona.kenneda@gmail.com","KENNEDA", "LEONA", 0679563214, "1980-06-04","POLYCLINIQUE DU TREGOR");

INSERT INTO est_specialiste_de(nom,mail) VALUES 
("Radiologue","david.legall@gmail.com"),
("Psychiatre","christelle.gwenn@gmail.com"),
("Chirurgien / Chirurgienne","laurent.dubois@gmail.com"),
("Cardiologue", "john.morston@gmail.com"),
("Orthoptiste", "john.morston@gmail.com"),
("Allergologue","arthur.morgann@gmail.com"),
("Orthoptiste","leon.kennedy@gmail.com"),
("Orthoptiste","leona.kenneda@gmail.com");

#------------------------------------------------------------
# Table : patients et personne
#------------------------------------------------------------

INSERT INTO patients VALUES ("mail@test.com","password",NULL,NULL);
INSERT INTO personne VALUES ("mail@test.com","Nastique","Jim",0605040302, "2001-02-27",16658);

#------------------------------------------------------------
# Table : documents
#------------------------------------------------------------
INSERT INTO documents (nom_doc,chemin,mail,mail_docteurs,`type`) VALUES ("Radio du crâne","documents/mail@test.com/radio.pdf","mail@test.com","david.legall@gmail.com","Radio"),
("Comprimés anti-allergie","documents/mail@test.com/ordonnance-alergie.pdf","mail@test.com","arthur.morgann@gmail.com","Ordonnance"),
("lunettes de vue","documents/mail@test.com/ordonnance-lunettes.pdf","mail@test.com","leon.kennedy@gmail.com","Ordonnance"),
("Questionnaire avant traitement","documents/mail@test.com/formulaire-cardio.pdf","mail@test.com","john.morston@gmail.com","Formulaire à compléter");
#------------------------------------------------------------
# Table : facture
#------------------------------------------------------------

INSERT INTO facture (prix_ttc,tva,date_facturation,date_paiement,mail,mail_docteurs,mode_de_paiement,nom) VALUES 
(64.99,10.22,"2022-09-20 10:38:00","2023-10-05 17:05:00","mail@test.com","david.legall@gmail.com","Chèque","CENTRE HOSPITALIER FOUGERES"),
(42.00,5.21,"2023-02-28 8:28:00","2023-02-28 8:29:00","mail@test.com","arthur.morgann@gmail.com","Carte bancaire","POLYCLINIQUE DU TREGOR"),
(37.47,27.09,"2020-04-02 13:34:00","2020-04-02 13:34:00","mail@test.com","leon.kennedy@gmail.com","Espèces","CLINIQUE DES GRAINETIERES"),
(132.47,49.09,"2021-04-09 15:54:00","2021-04-09 17:01:00","mail@test.com","john.morston@gmail.com","Carte bancaire","CLINIQUE DE LA MISERICORDE CAEN");