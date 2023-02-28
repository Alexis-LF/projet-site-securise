#------------------------------------------------------------
# DELETE des exemples
#------------------------------------------------------------
DELETE FROM documents;
DELETE FROM est_specialiste_de;
DELETE FROM docteurs;
DELETE FROM personne;
DELETE FROM patients;


#------------------------------------------------------------
# Table : docteurs et est_specialiste_de
#------------------------------------------------------------
INSERT INTO docteurs VALUES ("david.legall@gmail.com","LE GALL", "David", 0652123259, "1959-11-28","CENTRE HOSPITALIER FOUGERES");
INSERT INTO est_specialiste_de VALUES ("Radiologue","david.legall@gmail.com");

INSERT INTO docteurs VALUES ("christelle.gwenn@gmail.com","GWENN", "Christelle", 0745123796, "1984-02-15","CHRU BRETONNEAU TOURS");
INSERT INTO est_specialiste_de VALUES ("Psychiatre","christelle.gwenn@gmail.com");

INSERT INTO docteurs VALUES ("laurent.dubois@gmail.com","DUBOIS", "Laurent", 0685423691, "1968-09-22","SITE DE PERTUIS");
INSERT INTO est_specialiste_de VALUES ("Chirurgien / Chirurgienne","laurent.dubois@gmail.com");

INSERT INTO docteurs VALUES ("john.morston@gmail.com","MORSTON", "John", 0754665213, "1975-01-12","CLINIQUE DE LA MISERICORDE CAEN");
INSERT INTO est_specialiste_de VALUES ("Cardiologue", "john.morston@gmail.com");
INSERT INTO est_specialiste_de VALUES ("Orthoptiste", "john.morston@gmail.com");

INSERT INTO docteurs VALUES ("arthur.morgann@gmail.com","MORGANN", "Arthur", 0644551321, "1972-08-18","POLYCLINIQUE DU TREGOR");
INSERT INTO est_specialiste_de VALUES ("Allergologue","arthur.morgann@gmail.com");

INSERT INTO docteurs VALUES ("leon.kennedy@gmail.com","KENNEDY", "LEON", 0679563214, "1980-06-04","CLINIQUE DES GRAINETIERES");
INSERT INTO est_specialiste_de VALUES ("Orthoptiste","leon.kennedy@gmail.com");

INSERT INTO docteurs VALUES ("leona.kenneda@gmail.com","KENNEDA", "LEONA", 0679563214, "1980-06-04","POLYCLINIQUE DU TREGOR");
INSERT INTO est_specialiste_de VALUES ("Orthoptiste","leona.kenneda@gmail.com");

#------------------------------------------------------------
# Table : patients et personne
#------------------------------------------------------------

INSERT INTO patients VALUES ("mail@test.com","password",NULL,NULL);
INSERT INTO personne VALUES ("mail@test.com","Nastique","Jim",0605040302, "2001-02-27",16658);

#------------------------------------------------------------
# Table : documents
#------------------------------------------------------------
INSERT INTO documents (nom_doc,chemin,mail,mail_docteurs,`type`) VALUES ("Radio du crâne","documents/mail@test.com/radio.pdf","mail@test.com","david.legall@gmail.com","Radio");
INSERT INTO documents (nom_doc,chemin,mail,mail_docteurs,`type`) VALUES ("Comprimés anti-allergie","documents/mail@test.com/ordonnance-alergie.pdf","mail@test.com","arthur.morgann@gmail.com","Ordonnance");
INSERT INTO documents (nom_doc,chemin,mail,mail_docteurs,`type`) VALUES ("lunettes de vue","documents/mail@test.com/ordonnance-lunettes.pdf","mail@test.com","leon.kennedy@gmail.com","Ordonnance");
INSERT INTO documents (nom_doc,chemin,mail,mail_docteurs,`type`) VALUES ("Questionnaire avant traitement","documents/mail@test.com/formulaire-cardio.pdf","mail@test.com","john.morston@gmail.com","Formulaire à compléter");
