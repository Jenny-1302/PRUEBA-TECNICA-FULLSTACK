const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

// Conectamos a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/elementos', require('./routes/element'));

app.listen(4000, () => {
    console.log('Servidor funcionando');
});