#------------------------------------------------------------
# Table : profession
#------------------------------------------------------------
DELETE FROM profession;
INSERT INTO profession VALUES ("Acupuncteur / Acupunctrice");
INSERT INTO profession VALUES ("Agent thermal / Agente thermale");
INSERT INTO profession VALUES ("Aide-soignante / Aide-soignant");
INSERT INTO profession VALUES ("Allergologue");
INSERT INTO profession VALUES ("Ambulancier / Ambulancière");
INSERT INTO profession VALUES ("Anesthésiste-réanimateur / Anesthésiste réanimatrice");
INSERT INTO profession VALUES ("Animalier / Animalière de laboratoire");
INSERT INTO profession VALUES ("Assistant / Assistante de régulation médicale - ARM");
INSERT INTO profession VALUES ("Assistant médical / Assistante médicale");
INSERT INTO profession VALUES ("Assistante dentaire / Assistant dentaire");
INSERT INTO profession VALUES ("Attaché / Attachée d’administration hospitalière — Audioprothésiste");
INSERT INTO profession VALUES ("Auxiliaire de puériculture - AP");
INSERT INTO profession VALUES ("Cadre de santé");
INSERT INTO profession VALUES ("Cardiologue");
INSERT INTO profession VALUES ("Chiropracteur / Chiropractice");
INSERT INTO profession VALUES ("Chirurgien / Chirurgienne");
INSERT INTO profession VALUES ("Chirurgien-dentiste / Chirurgienne-dentiste");
INSERT INTO profession VALUES ("Délégué / Déléguée de l’assurance maladie");
INSERT INTO profession VALUES ("Délégué / Déléguée pharmaceutique");
INSERT INTO profession VALUES ("Dermatologue");
INSERT INTO profession VALUES ("Diététicien / Diététicienne");
INSERT INTO profession VALUES ("Directeur / Directrice des soins — DS");
INSERT INTO profession VALUES ("Directeur / Directrice d'établissement sanitaire, social et médico-social — DESSMS");
INSERT INTO profession VALUES ("Directeur / Directrice d’hôpital — DH");
INSERT INTO profession VALUES ("Equithérapeute");
INSERT INTO profession VALUES ("Ergothérapeute");
INSERT INTO profession VALUES ("Pagination");
INSERT INTO profession VALUES ("Gériatre");
INSERT INTO profession VALUES ("Gynécologue - obstétricien / Gynécologue - obstétricienne");
INSERT INTO profession VALUES ("Infirmier / Infirmière anesthésiste");
INSERT INTO profession VALUES ("Infirmier / Infirmière de bloc opératoire");
INSERT INTO profession VALUES ("Infirmier / Infirmière en pratique avancée");
INSERT INTO profession VALUES ("Infirmier / Infirmière hygiéniste");
INSERT INTO profession VALUES ("Infirmier / Infirmière militaire");
INSERT INTO profession VALUES ("Infirmière / Infirmier");
INSERT INTO profession VALUES ("Ingénieur / Ingénieure de recherche produit");
INSERT INTO profession VALUES ("Ingénieur / Ingénieure en recherche clinique");
INSERT INTO profession VALUES ("Ingénieur / Ingénieure sécurité sanitaire");
INSERT INTO profession VALUES ("Ingénieur hospitalier / Ingénieure hospitalière");
INSERT INTO profession VALUES ("Inspecteur / Inspectrice de l’action sanitaire et sociale — IASS");
INSERT INTO profession VALUES ("Kinésithérapeute");
INSERT INTO profession VALUES ("Manipulatrice / Manipulateur d'électroradiologie médicale");
INSERT INTO profession VALUES ("Médecin");
INSERT INTO profession VALUES ("Médecin légiste");
INSERT INTO profession VALUES ("Médecin militaire");
INSERT INTO profession VALUES ("Ophtalmologiste");
INSERT INTO profession VALUES ("Opticien - lunetier / Opticienne - lunetière");
INSERT INTO profession VALUES ("Optométriste");
INSERT INTO profession VALUES ("Orthopédiste-orthésiste");
INSERT INTO profession VALUES ("Orthophoniste");
INSERT INTO profession VALUES ("Orthoprothésiste");
INSERT INTO profession VALUES ("Orthoptiste");
INSERT INTO profession VALUES ("Ostéopathe");
INSERT INTO profession VALUES ("Pédiatre");
INSERT INTO profession VALUES ("Pédicure - podologue");
INSERT INTO profession VALUES ("Pédopsychiatre");
INSERT INTO profession VALUES ("Pharmacien / Pharmacienne");
INSERT INTO profession VALUES ("Physicien médical / Physicienne médicale");
INSERT INTO profession VALUES ("Phytothérapeute / Conseiller en phytothérapie");
INSERT INTO profession VALUES ("Podo-orthésiste");
INSERT INTO profession VALUES ("Préparateur / Préparatrice en pharmacie");
INSERT INTO profession VALUES ("Prothésiste dentaire");
INSERT INTO profession VALUES ("Psychiatre");
INSERT INTO profession VALUES ("Psychomotricien / Psychomotricienne");
INSERT INTO profession VALUES ("Puéricultrice/ Puériculteur");
INSERT INTO profession VALUES ("Radiologue");
INSERT INTO profession VALUES ("Sage-femme");
INSERT INTO profession VALUES ("Secrétaire médical / Secrétaire médicale");
INSERT INTO profession VALUES ("Technicien / Technicienne biologiste");
INSERT INTO profession VALUES ("Technicien / Technicienne de laboratoire médical");
INSERT INTO profession VALUES ("Visiteur médical / Visiteuse médicale");

#------------------------------------------------------------
# Table : mode_paiement
#------------------------------------------------------------
DELETE FROM mode_paiement;
INSERT INTO mode_paiement VALUES ("Carte bancaire");
INSERT INTO mode_paiement VALUES ("Espèces");
INSERT INTO mode_paiement VALUES ("Chèque");


#------------------------------------------------------------
# Table : type_de_document
#------------------------------------------------------------
DELETE FROM type_de_document;
INSERT INTO type_de_document VALUES ("Ordonnance");
INSERT INTO type_de_document VALUES ("Formulaire à compléter");
INSERT INTO type_de_document VALUES ("Attestation");
INSERT INTO type_de_document VALUES ("Autre document");

#------------------------------------------------------------
# Table : site
#------------------------------------------------------------
source hopitaux.sql