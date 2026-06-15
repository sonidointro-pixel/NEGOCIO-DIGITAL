const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('cors')())
app.use(express.json())

app.get('/status', (req, res) => {
  res.json({status: 'ok', time: new Date().toISOString()});
});

app.get('/api/hello', (req, res) => {
  res.json({message: 'Hola desde el backend de NEGOCIO DIGITAL'});
});

// Routes
app.use('/auth', require('./src/auth'))
app.use('/products', require('./src/products'))

if (require.main === module) {
  app.listen(port, () => console.log(`Backend listening on port ${port}`));
}

module.exports = app;
