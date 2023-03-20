GRANT SELECT on Projet_M1.* TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.est_specialiste_de TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.users TO 'backend'@'%';
GRANT INSERT, DELETE on Projet_M1.personne TO 'backend'@'%';
GRANT ALL PRIVILEGES on Projet_M1.migrations TO 'backend'@'%';
GRANT ALL PRIVILEGES on Projet_M1.password_reset_tokens TO 'backend'@'%';
GRANT ALL PRIVILEGES on Projet_M1.failed_jobs TO 'backend'@'%';
GRANT ALL PRIVILEGES on Projet_M1.personal_access_tokens TO 'backend'@'%';
FLUSH PRIVILEGES;