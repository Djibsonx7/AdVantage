const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur AdVantage API');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

