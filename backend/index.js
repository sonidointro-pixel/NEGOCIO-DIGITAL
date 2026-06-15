const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({status: 'ok', time: new Date().toISOString()});
});

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hola desde el backend de NEGOCIO DIGITAL'});
});

if (require.main === module) {
  app.listen(port, () => console.log(`Backend listening on port ${port}`));
}

module.exports = app;
