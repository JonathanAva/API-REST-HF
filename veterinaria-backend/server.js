const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', clienteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
