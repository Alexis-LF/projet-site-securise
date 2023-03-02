GRANT SELECT on Projet_M1.* TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.est_specialiste_de TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.patients TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.personne TO 'backend'@'%';
FLUSH PRIVILEGES;