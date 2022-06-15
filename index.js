//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Models
const Cliente = require('./models/clienteModel');

const app = express();
app.use(cors());

//Routers
const clienteRouter = require('./routes/clienteRouter')(Cliente);


//Database connection
const DB = 'mongodb://localhost/cajas';
mongoose.connect(DB, {
  useNewUrlParser: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Server
app.listen(8080);
console.log('listening on port 8080');
app.use('/api', clienteRouter);